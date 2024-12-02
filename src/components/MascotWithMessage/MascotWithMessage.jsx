import React from "react";
import { View, StyleSheet } from "react-native";
import Mascot from "./Mascot";
import MessageBox from "./MessageBox";

const MascotWithMessage = ({ mascotImage, message, highlight }) => {
  return (
    <View style={styles.container}>
      {/* Mascot 컴포넌트 */}
      <Mascot mascotImage={mascotImage} />

      {/* MessageBox 컴포넌트 */}
      <MessageBox message={message} highlight={highlight} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Mascot과 MessageBox를 가로로 정렬
    alignItems: "center",
    marginTop: 30,
    marginLeft: 8,
  },
});

export default MascotWithMessage;
