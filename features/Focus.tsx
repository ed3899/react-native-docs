//% libs
import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";

//% comps
import {TextInput} from "react-native-paper";
import RoundedButton from "../components/RoundedButton";

//% utils
import {sizes} from "../utils";

const styles = StyleSheet.create({
  container: {
   
  },
  inputContainer: {
    padding: sizes.spacing.lg,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    marginRight: sizes.spacing.sm,
  },
  button: {
    justifyContent: "center",
  },
});

type FocusPropsT = {
  /**
   * @abstract Function to add subjects to the state
   */
  addSubject: React.Dispatch<React.SetStateAction<string>>;
};

/**
 * @abstract Focus timer
 */
export const Focus: React.FC<FocusPropsT> = props_ => {
  const {addSubject} = props_;
  const [subject, setSubject] = useState<string>("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={text_ => setSubject(text_)}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};
