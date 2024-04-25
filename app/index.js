import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Stack, useNavigation } from 'expo-router';
import { useEffect } from 'react';

export default function Home() {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>GitThreads</Text>
          <Text style={styles.subtitle}>A code-sharing platform.</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
