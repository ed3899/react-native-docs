//% libs
import {StyleSheet, Platform, StatusBar as StatusBarNative} from "react-native";

//% comps
import {View, Text} from "./components/Themed";

import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === "android" ? StatusBarNative.currentHeight : 100,
  },
  text: {
    color: "black",
  },
});

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={styles.container}>
        <Text style={styles.text}>Hello Worlasdfad!</Text>
      </SafeAreaProvider>
    );
  }
};

export default App;
