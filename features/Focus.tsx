//% libs
import React from "react";
import {View, Text, StyleSheet} from "react-native";

//% utils
import {colors} from "../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.white,
  },
});

export const Focus = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Focus feature</Text>
  </View>
);
