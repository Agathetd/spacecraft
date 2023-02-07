/* eslint-disable react-native/no-unused-styles */
/* eslint-disable @typescript-eslint/no-shadow */
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useIsConnected } from "react-native-offline";
import { ActivityIndicator } from "react-native-paper";

export const Offline = () => {
  // Add `useIsConnected()` hook
  const isconnected = useIsConnected();
  const status = "";

  if (!isconnected) {
    const status = "Error ! Not connected !";
  } else {
    const status = "You're connected !";
  }
  return (
    <View>
      <Text>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 20,
    position: "absolute",
    top: 55,
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#FEE2E2",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  message: {
    color: "#991B1B",
  },
});
