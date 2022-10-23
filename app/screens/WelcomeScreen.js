import React from "react";
import { Image, ImageBackground, Text, View, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.icon}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.text}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate("Login")}
          color="primary"
        />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate("Register")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  icon: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },

  logo: {
    width: 150,
    height: 150,
  },

  text: {
    color: colors.black,
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },

  buttonsContainer: {
    width: "100%",
    padding: 30,
  },
});

export default WelcomeScreen;
