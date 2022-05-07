//% libs
import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";

//% comps
import {TextInput} from "react-native-paper";
import RoundedButton from "../components/RoundedButton";

//% utils
import {colors} from "../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    padding: 25,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    justifyContent: "center",
  },
});

export const Focus = () => {
  const [subject, setSubject] = useState<string | undefined>("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={text_ => setSubject(text_)}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} />
        </View>
      </View>
    </View>
  );
};
