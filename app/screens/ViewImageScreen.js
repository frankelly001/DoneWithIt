import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.actionBtn, styles.closeBtn]}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={[styles.actionBtn, styles.deleteBtn]}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image
        source={require("../assets/chair.jpg")}
        resizeMode="cover"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.black,
  },

  image: {
    width: "100%",
    height: "60%",
  },

  actionBtn: {
    // width: 50,
    // height: 50,
    position: "absolute",
    top: 50,
  },

  closeBtn: {
    left: 30,
    // backgroundColor: colors.secondary,
  },

  deleteBtn: {
    right: 30,
    // backgroundColor: colors.primary,
  },
});

export default ViewImageScreen;
