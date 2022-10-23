import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

// Platform.select({
//   ios: {
//     fontSize: 20,
//     fontFamily: "Roboto",
//   },
//   android: {
//     fontSize: 18,
//     fontFamily: "Roboto",
//   },
// });

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

export default AppText;
