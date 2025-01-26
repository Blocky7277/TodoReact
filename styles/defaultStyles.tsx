import colors from "@/styles/colors";
import { StyleSheet } from "react-native";

const masterStyles = StyleSheet.create({
  root: {
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    backgroundColor: colors.container,
    borderRadius: 15,
  },
  text: {
    color: colors.foreground,
    fontSize: 15,
    verticalAlign: "middle",
  },
});

export default masterStyles;
