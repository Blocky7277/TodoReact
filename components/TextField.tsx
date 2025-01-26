import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import masterStyles from "@/styles/defaultStyles";
import colors from "@/styles/colors";

type TextFieldProps = {
  value: string;
  setValue: (newValue: string) => void;
  placeholder: string;
};

const TextField: React.FC<TextFieldProps> = ({
  value,
  setValue,
  placeholder,
}) => {
  return (
    <TextInput
      style={[masterStyles.container, masterStyles.text, styles.textInput]}
      placeholder={placeholder}
      placeholderTextColor={colors.accentText}
      value={value}
      onChangeText={(newValue: string) => {
        setValue(newValue);
      }}
    ></TextInput>
  );
};

export default TextField;

const styles = StyleSheet.create({
  textInput: {
    borderColor: colors.darkAccent,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    margin: 5,
    width: "60%",
  },
});
