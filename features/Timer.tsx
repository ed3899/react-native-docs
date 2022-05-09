//% libs
import React, {useState} from "react";

import {View, Text, StyleSheet, Vibration} from "react-native";

import {ProgressBar} from "react-native-paper";

//% comps
import CountDown from "../components/Countdown";
import RoundedButton from "../components/RoundedButton";
import Timing from "./Timing";

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
  timingWrapper: {
    flex: 0.1,
    flexDirection: "row",
    paddingTop: sizes.spacing.xxl,
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: sizes.spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },
  clearSubject: {
    paddingBottom: 25,
    paddingLeft: 25,
  },
  clearSubjectWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

type TimerPropsT = {
  focusSubject: string;
};

type TimerFuncsT = {
  onTimerEnd: () => {};
  clearSubject: () => void;
};

const Timer: React.FC<Partial<TimerPropsT> & TimerFuncsT> = props_ => {
  const {focusSubject = "Default value", clearSubject} = props_;

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  //%
  const onEnd = (reset: () => void) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <CountDown
          minutes={minutes}
          onProgress={progress_ => {
            setProgress(progress_);
          }}
          onEnd={onEnd}
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

      <View style={styles.timingWrapper}>
        <Timing onChangeTime={time_ => setMinutes(time_)} />
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

      {/* Clear */}
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton size={50} title="-" onPress={() => clearSubject()} />
      </View>
    </View>
  );
};

export default Timer;
