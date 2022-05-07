//% libs
import {
  StyleSheet,
  Platform,
  StatusBar as StatusBarNative,
  View,
  Text,
} from "react-native";

//% comps
import {Focus} from "./features/Focus";
import {TextInput} from "react-native-paper";

//% utils
import {colors} from "./utils";

import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import {useState} from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === "android" ? StatusBarNative.currentHeight : 100,
    backgroundColor: colors.darkBlue,
  },
});

const App = () => {
  const [currentSubject, setCurrentSubject] = useState<string>("");

  return (
    <SafeAreaProvider style={styles.container}>
      {currentSubject === "" ? (
        <Focus addSubject={subject_ => setCurrentSubject(subject_)} />
      ) : (
        <View>
          <Text style={{color: colors.white}}>
            I am going to render the timer for {currentSubject}
          </Text>
        </View>
      )}
    </SafeAreaProvider>
  );
};

export default App;
