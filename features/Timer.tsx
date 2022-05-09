//% libs
import React, {useState} from "react";

import {View, Text, StyleSheet, Vibration} from "react-native";

import {ProgressBar} from "react-native-paper";

//% comps
import CountDown from "../components/Countdown";
import RoundedButton from "../components/RoundedButton";

//% utils
import {sizes, colors} from "../utils";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

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
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <CountDown
          minutes={minutes}
          onProgress={progress_ => {
            setProgress(progress_);
          }}
          onEnd={() => {
            Vibration.vibrate(PATTERN);
          }}
          isPaused={!isStarted}
        />
        <View style={{paddingTop: sizes.spacing.xxl}}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>

      <View style={{paddingTop: sizes.spacing.sm}}>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={{height: sizes.spacing.sm}}
        />
      </View>

      {/* Button  */}
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
