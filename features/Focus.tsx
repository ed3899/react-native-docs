//% libs
import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";

//% comps
import {TextInput} from "react-native-paper";

//% utils
import {colors} from "../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 0.5,
    padding: 25,
    justifyContent: "flex-start",
  },
});

export const Focus = () => {
  const [subject, setSubject] = useState<string | undefined>("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={text_ => setSubject(text_)}
          label="What would you like to focus on?"
        />
      </View>
    </View>
  );
};
