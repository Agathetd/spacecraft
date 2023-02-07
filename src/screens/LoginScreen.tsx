import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

// or any pure javascript modules available in npm
import { Card } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { useState } from "react";

import { Header } from "../components/Header";

export default function LoginScreen() {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Header title="Spacecraft" />

        <View style={styles.container}>
          <TextInput label="Email" placeholder="Enter your adress mail" />
          <TextInput placeholder="Password" />

          <Button
            style={styles.buttonLog}
            mode="contained"
            onPress={() => console.log("Logged in !")}
          >
            Log In
          </Button>
        </View>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonLog: {
    marginTop: 10,
    width: 200,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
