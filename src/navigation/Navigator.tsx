import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import LoginScreen from "../screens/LoginScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TermsScreen } from "../screens/TermsScreen";
import { Routes } from "./Routes";
import { StarshipFeedScreen } from "../screens/StarshipFeedScreen";

  const Stack = createNativeStackNavigator();
  
  export function Navigator () {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Terms" component={TermsScreen} />
          <Stack.Screen name="Starships" component={StarshipFeedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  