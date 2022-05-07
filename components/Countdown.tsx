//% libs
import React, {useState, useEffect, useRef} from "react";

//% comps
import {Text, View, StyleSheet} from "react-native";

//% utils
import {colors, sizes} from "../utils";

//% styles
const styles = StyleSheet.create({
  text: {
    fontSize: sizes.fontSizes.xxxl,
    fontWeight: "bold",
    color: colors.white,
    padding: sizes.spacing.lg,
    backgroundColor: "rgba(94, 132, 226, 0.3)",
  },
});

/**
 * @abstract Converts minutes to milliseconds
 * @param min_
 * @returns
 */
const minutesToMillis = (min_: number) => min_ * 1000 * 60;
/**
 * @abstract Formats the time
 * @param time_
 * @returns
 */
const formatTime = (time_: number) => (time_ < 10 ? `0${time_}` : time_);

type CountDownFuncsT = {
  onProgress: (arg: number) => {};
  onEnd: () => {};
};

type CountDownPropsT = {
  minutes: number;
  isPaused: boolean;
};

const CountDown: React.FC<
  Partial<CountDownPropsT> & CountDownFuncsT
> = props_ => {
  const {
    minutes: minutes_ = 0.1,
    isPaused: isPaused_,
    onProgress: onProgress_,
    onEnd: onEnd_,
  } = props_;

  const interval = useRef<NodeJS.Timeout>();

  const [millis, setMillis] = useState(-1); //!

  const countDown = () => {
    setMillis(time => {
      if (time === 0) {
        clearInterval(interval.current!);
        onEnd_();
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    setMillis(minutesToMillis(minutes_));
  }, [minutes_]);

  useEffect(() => {
    onProgress_(millis / minutesToMillis(minutes_));
  }, [millis]);

  useEffect(() => {
    if (isPaused_) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current!);
  }, [isPaused_]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

export default CountDown;
