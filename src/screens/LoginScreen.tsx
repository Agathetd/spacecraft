import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Link } from '@react-navigation/native';

// or any pure javascript modules available in npm
import { Card } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { useState } from "react";

import { Header } from "../components/Header";
import { Routes } from "../navigation/Routes";

export default function LoginScreen({navigation}: any) {


  function navigateToTerms() {
    navigation.navigate(Routes.TERMS_SCREEN);
  }

  function navigateToCards() {
    navigation.navigate(Routes.STARSHIP_FEED_SCREEN);
  }
  
  
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
            onPress={navigateToCards}
          >
            Log In
          </Button>
          <TouchableOpacity onPress={navigateToTerms}>
            <Text>Read Terms and conditions</Text>
          </TouchableOpacity>

          
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
