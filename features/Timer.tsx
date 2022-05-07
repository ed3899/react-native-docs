//% libs
import React, {useState} from "react";

import {View, Text, StyleSheet} from "react-native";

//% comps
import CountDown from "../components/Countdown";
import RoundedButton from "../components/RoundedButton";

//% utils
import {colors} from "../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: "center",
  },
  task: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  clearSubject: {
    paddingBottom: 25,
    paddingLeft: 25,
  },
});

type TimerPropsT = {
  focusSubject: string;
};

type TimerFuncsT = {
  onTimerEnd: () => {};
  clearSubject: () => {};
};

const Timer: React.FC<Partial<TimerPropsT> & TimerFuncsT> = props_ => {
  const {focusSubject = "Default value"} = props_;

  const [isStarted, setIsStarted] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <CountDown
          onProgress={() => ({})}
          onEnd={() => ({})}
          isPaused={!isStarted}
        />
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}

        {isStarted && (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        )}
      </View>
    </View>
  );
};

export default Timer;
