import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/globalStyle";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.title}>Home Screen</Text>
      </View>
    </View>
  );
};

export default Home;
