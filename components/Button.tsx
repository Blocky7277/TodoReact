import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  ColorValue,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import masterStyles from "@/styles/defaultStyles";

type ButtonProps = {
  color?: ColorValue;
  underlayColor?: ColorValue;
  text?: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({
  color = "#FA0000",
  underlayColor = color,
  text = "Lorem Ipsum",
  style = {},
  onPress,
}) => {
  return (
    <TouchableHighlight
      style={[styles.button, style, { backgroundColor: color }]}
      underlayColor={underlayColor}
      onPress={onPress}
    >
      <Text style={[masterStyles.text]}>{text}</Text>
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
