//% libs
import React from "react";

//% comps
import {TouchableOpacity, Text} from "react-native";

//% utils
import {colors} from "../utils";

//% types
import type {GestureResponderEvent} from "react-native";

const styles = (size_: number, colors_: {[idx: string]: string}) => ({
  radius: {
    borderRadius: size_ / 2,
    width: size_,
    height: size_,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors_.white,
    borderWidth: 2,
  },
  text: {color: colors_.white, fontSize: size_ / 3},
});

export type RoundedButtonPropsT = {
  style: {};
  textStyle: {};
  size: Parameters<typeof styles>[0];
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

const RoundedButton: React.FC<Partial<RoundedButtonPropsT>> = props_ => {
  const {style, textStyle, size = 2, title = "Default title", onPress} = props_;

  return (
    <TouchableOpacity
      style={[styles(size, colors).text, textStyle]}
      onPress={onPress}>
      <Text style={[styles(size, colors).text, textStyle]}>{title}</Text>;
    </TouchableOpacity>
  );
};

export default RoundedButton;
