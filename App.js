import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home";
import {  StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232F3E",
    paddingBottom: 10,
  },
});
