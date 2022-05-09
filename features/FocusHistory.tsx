//% libs
import React, {Fragment} from "react";
import {View, Text, StyleSheet, FlatList, ListRenderItem} from "react-native";

//% utils
import {colors, sizes} from "../utils";

//% styles
const styles = StyleSheet.create({
  container: {
    padding: sizes.spacing.md,
    flex: 1,
  },
  item: {
    fontSize: sizes.fontSizes.md,
    color: colors.white,
    paddingTop: sizes.spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: sizes.fontSizes.md,
    fontWeight: "bold",
  },
});

type FocusHistoryPropsT = {
  /**
   * Prop:
   */
  history: string[];
};

const FocusHistory: React.FC<Partial<FocusHistoryPropsT>> = props_ => {
  const {history} = props_;

  if (!history || !history.length)
    return <Text style={styles.title}>We haven't focused on anything yet</Text>;

  const renderItem: ListRenderItem<FocusHistoryPropsT["history"][0]> = ({
    item,
  }) => <Text style={styles.item}> - {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

export default FocusHistory;
