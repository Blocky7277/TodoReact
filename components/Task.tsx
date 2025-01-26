import { StyleSheet, Text, View } from "react-native";
import React from "react";
import masterStyles from "@/styles/defaultStyles";
import Button from "./Button";
import colors from "@/styles/colors";

type TaskProps = {
  task: string;
  date: string;
  location: string;
  index: number;
  onComplete: (index: number) => void;
};

const Task: React.FC<TaskProps> = ({
  task,
  date,
  location,
  index,
  onComplete,
}) => {
  if (date == "") date = "Today";
  if (location == "") location = "N/A";
  return (
    <View style={[masterStyles.container, styles.task]}>
      <Text style={[masterStyles.text]}>
        {task + "\n" + date} @ {location}
      </Text>
      <Button
        onPress={() => {
          onComplete(index);
        }}
        color={colors.accent}
        underlayColor={colors.darkAccent}
        text="✓"
        style={{ marginLeft: "auto" }}
      ></Button>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  task: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    borderColor: colors.darkAccent,
    borderWidth: 2,
    marginVertical: 7,
  },
  taskText: {},
});
