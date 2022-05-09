//% libs
import React, {Fragment} from "react";

import {View, StyleSheet} from "react-native";

//% comps
import RoundedButton from "../components/RoundedButton";

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
  },
});

type TimingPropsFuncsT = {
  onChangeTime: (time_: number) => void;
};
const Timing: React.FC<TimingPropsFuncsT> = props_ => {
  const {onChangeTime} = props_;

  return (
    <Fragment>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />
      </View>
    </Fragment>
  );
};

export default Timing;
