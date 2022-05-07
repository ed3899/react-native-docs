//% libs
import {useState} from "react";

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

//% utils
import {colors} from "./utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === "android" ? StatusBarNative.currentHeight : 100,
    backgroundColor: colors.darkBlue,
  },
});

const App = () => {
  const [currentSubject, setCurrentSubject] = useState<string>("Test");

  return (
    <SafeAreaProvider style={styles.container}>
      {currentSubject === "" ? (
        <Focus addSubject={subject_ => setCurrentSubject(subject_)} />
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={() => ({})}
          clearSubject={() => ({})}
        />
        //! Add Timer component 1:11
      )}
    </SafeAreaProvider>
  );
};

export default App;
