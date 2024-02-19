import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const {
    appContainerStyle,
    inputContainerStyle,
    textInputStyle,
    goalsContainerStyle,
  } = styled();

  return (
    <View style={appContainerStyle}>
      <View style={inputContainerStyle}>
        <TextInput style={textInputStyle} placeholder="Your Course Goal" />
        <Button title="add goal" />
      </View>
      <View style={goalsContainerStyle}>
        <Text>List of Goals...</Text>
      </View>
    </View>
  );
}

const styled = () =>
  StyleSheet.create({
    appContainerStyle: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16,
    },
    inputContainerStyle: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
    textInputStyle: {
      width: "70%",
      padding: 8,
      marginRight: 8,
      borderWidth: 1,
      borderColor: "#cccccc",
    },
    goalsContainerStyle: {
      flex: 5,
    },
  });
