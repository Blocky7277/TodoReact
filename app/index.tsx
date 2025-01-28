import { Text, View, FlatList } from "react-native";
import Task from "@/components/Task";
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import masterStyles from "@/styles/defaultStyles";
import { useState } from "react";
import colors from "@/styles/colors";

type Task = {
  name: string;
  date: string;
  location: string;
};

export default function Index() {
  // Use arrays with useState https://react.dev/learn/updating-arrays-in-state
  const [taskList, setTaskList] = useState<Task[]>([]);
  // Use objects with useState https://blog.logrocket.com/using-react-usestate-object/
  const [newTask, setNewTask] = useState<Task>({
    name: "",
    date: "",
    location: "",
  });

  const changeName = (updatedName: string) => {
    setNewTask({ ...newTask, name: updatedName });
  };
  const changeDate = (updatedDate: string) => {
    setNewTask({ ...newTask, date: updatedDate });
  };
  const changeLocation = (updatedLocation: string) => {
    setNewTask({ ...newTask, location: updatedLocation });
  };

  const creatNewTask = () => {
    setTaskList(taskList.concat([newTask]));
    setNewTask({ name: "", date: "", location: "" });
  };

  const completeTask = (index: number) => {
    setTaskList(taskList.slice(0, index).concat(taskList.slice(index + 1)));
  };

  return (
    <View style={masterStyles.root}>
      <View style={[masterStyles.root, { flex: 1 }]}>
        <Text
          style={[
            masterStyles.text,
            { verticalAlign: "middle", fontSize: 30, padding: 10 },
          ]}
        >
          Todo List:
        </Text>
      </View>
      <View
        style={[
          masterStyles.root,
          {
            flex: 6,
            width: "100%",
            padding: 0,
          },
        ]}
      >
        {/* How to use a flatlist https://reactnative.dev/docs/flatlist */}
        <FlatList
          style={{width:"100%", flex:1}}
          contentContainerStyle={[
            { justifyContent: "flex-start", alignItems: "center", width: "100%", flex:1, height: "auto"},
          ]}
          data={taskList}
          renderItem={(data) => (
            <Task
              index={data.index}
              task={data.item.name}
              date={data.item.date}
              location={data.item.location}
              onComplete={completeTask}
            ></Task>
          )}
        ></FlatList>
      </View>
      <View
        style={[masterStyles.root, { flex: 4, width: "100%" }]}
      >
        <TextField
          value={newTask.name}
          setValue={changeName}
          placeholder="Task Name"
        ></TextField>
        <TextField
          value={newTask.date}
          setValue={changeDate}
          placeholder="Task Date"
        ></TextField>
        <TextField
          value={newTask.location}
          setValue={changeLocation}
          placeholder="Task Location"
        ></TextField>
        <Button
          onPress={creatNewTask}
          color={colors.darkAccent}
          underlayColor={colors.accent}
          style={{ margin: 5, width: "60%" }}
          text="Create New Task"
        ></Button>
      </View>
    </View>
  );
}
