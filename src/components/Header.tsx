// ./src/components/Header.tsx
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export const Header = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.headerText}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 4,
    backgroundColor: "#af33ff",
    height: 200,
  },
  headerText: {
    textAlign: "center",
    marginBottom: "auto",
    marginTop: "auto",
  },
});
