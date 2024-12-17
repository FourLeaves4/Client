import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Mascot = ({ mascotImage }) => {
  return (
    <View style={styles.container}>
      <Image source={mascotImage} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 116,
    height: 128,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 116,
    height: 128,
    resizeMode: "cover",
  },
});

export default Mascot;
