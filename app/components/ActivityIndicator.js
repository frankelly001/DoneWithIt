import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <AnimatedLottieView
        autoPlay
        loop
        source={require("../assets/animation/loader.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    position: "absolute",
    zIndex: 1,
    opacity: 0.8,
  },
});

export default ActivityIndicator;
