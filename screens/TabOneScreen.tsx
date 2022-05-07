//%libs
import {StyleSheet, TextInput} from "react-native";
import React, {useState} from "react";

//% comps
import MyScrollView from "../components/MyScrollView";

import EditScreenInfo from "../components/EditScreenInfo";
import {Text, View} from "../components/Themed";
import {RootTabScreenProps} from "../types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hell Yeah! Awesome possum</Text>
      <View
        style={styles.separator}
        lightColor="#60e705"
        darkColor="#3600fad6"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}
