//%
import React from "react";
import {View, Text} from "react-native";

type FocusHistoryPropsT = {
  history: string[];
};

const FocusHistory: React.FC<Partial<FocusHistoryPropsT>> = props => {
  return (
    <View>
      <Text>Focus history will be built here</Text>
    </View>
  );
};

export default FocusHistory;
