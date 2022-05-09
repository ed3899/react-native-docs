//% libs
import {Fragment, useState} from "react";

import {
  StyleSheet,
  Platform,
  StatusBar as StatusBarNative,
  View,
  Text,
} from "react-native";

import {SafeAreaProvider} from "react-native-safe-area-context";
//% comps
import {Focus} from "./features/Focus";
import Timer from "./features/Timer";
import FocusHistory from "./features/FocusHistory";

//% utils
import {colors} from "./utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === "android" ? StatusBarNative.currentHeight : 100,
    backgroundColor: colors.darkBlue,
  },
});

const App = function () {
  const [currentSubject, setCurrentSubject] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);

  return (
    <SafeAreaProvider style={styles.container}>
      {currentSubject === "" ? (
        <Fragment>
          <Focus addSubject={subject_ => setCurrentSubject(subject_)} />
          <FocusHistory history={history} />
        </Fragment>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={subject => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => setCurrentSubject("")}
        />
        //! Add Timer component 1:11
      )}
    </SafeAreaProvider>
  );
};

export default App;
