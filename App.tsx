//% libs
import {
  StyleSheet,
  Platform,
  StatusBar as StatusBarNative,
  View,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === "android" ? StatusBarNative.currentHeight : 100,
    backgroundColor: colors.darkBlue,
  },
});

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider style={styles.container}>
      <Focus />
    </SafeAreaProvider>
  );
};

export default App;
