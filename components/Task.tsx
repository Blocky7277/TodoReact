import { Platform, StyleSheet, Text, View } from "react-native";
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
  if (task == "") task = "Empty Task";
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
    // https://chatgpt.com/share/6797ba76-e084-8012-ade9-66a871e940a7 Platform specific styles
    width: Platform.OS === "web" ? 240 : '70%',  // Adjust width for web
    borderColor: colors.darkAccent,
    borderWidth: 2,
    marginVertical: 7,
  },
});
