import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const { appContainerStyle, inputContainerStyle, textInputStyle } = styled();

  return (
    <View style={appContainerStyle}>
      <View style={inputContainerStyle}>
        <TextInput style={textInputStyle} placeholder="Your Course Goal" />
        <Button title="add goal" />
      </View>
      <View>
        <Text>List of Goals...</Text>
      </View>
    </View>
  );
}

const styled = () =>
  StyleSheet.create({
    appContainerStyle: {
      padding: 50,
    },
    inputContainerStyle: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    textInputStyle: {
      width: "80%",
      padding: 8,
      marginRight: 8,
      borderWidth: 1,
      borderColor: "#cccccc",
    },
  });
