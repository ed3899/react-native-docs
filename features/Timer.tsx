//% libs
import React from "react";

//% comps
import {View, Text} from "react-native";

type TimerPropsT = {
  focusSubject: string;
};

type TimerFuncsT = {
  onTimerEnd: () => {};
  clearSubject: () => {};
};

const Timer: React.FC<Partial<TimerPropsT> & TimerFuncsT> = props_ => {
  const {focusSubject = "Default value"} = props_;

  return (
    <View>
      <Text>{focusSubject}</Text>
    </View>
  );
};

export default Timer;
