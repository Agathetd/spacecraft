/* eslint-disable react-native/no-unused-styles */
/* eslint-disable camelcase */
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import { Card } from "react-native-paper";
import { NetworkProvider } from "react-native-offline";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import { default as data2 } from "../../api/data2.json";
import { useStarships } from "../hooks/useStarships";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../navigation/Routes";

interface ItemProps {
  name: string;
  model: string;
  crew: string;
  hyperdrive_rating: string;
  cost_in_credits: string;
}
const navigation = useNavigation();

function navigateToStarshipDetailScreen {
  navigation.navigate(Routes.STARSHIP_FEED_SCREEN);
}


const Item = ({
  name,
  model,
  crew,
  hyperdrive_rating,
  cost_in_credits,
}: ItemProps) => (
  <Card style={styles.item}
  onPress={navigateToStarshipDetailScreen}>
    <Card.Title title={name} subtitle={model} />
    <Card.Content>
      <Text>{crew}</Text>
      <Text>{hyperdrive_rating}</Text>
      <Text>{cost_in_credits}</Text>
      <Image
        source={require("../../assets/starships_images/CR90corvette.jpg")}
      />
    </Card.Content>
  </Card>
);

export const StarshipFeedScreen = () => {
  const { isLoading, isError, data } = useStarships();

  

  if (isLoading) {
    return <Text>Loading ...</Text>;
  }
  if (isError) {
    return <Text>Error !</Text>;
  }

  // var text = ({model}: ItemProps) => {model};
  // text.replace(" ","");

  return (
    <SafeAreaView style={styles.safeContainer}>
      <FlatList
        data={data.results}
        renderItem={({ item }) => (
          <Item
            name={item.name}
            model={item.model}
            crew={item.crew}
            hyperdrive_rating={item.hyperdrive_rating}
            cost_in_credits={item.cost_in_credits}
          />
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 20,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    marginBottom: 20,
  },
  image: {},
});
