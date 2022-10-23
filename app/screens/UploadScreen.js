import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, View, Modal } from "react-native";
// import * as Progress from "react-native-progress";
import colors from "../config/colors";

const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <AnimatedLottieView
          autoPlay
          loop={false}
          onAnimationFinish={onDone}
          source={require("../assets/animation/done.json")}
          style={styles.animation}
        />
        {/* {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <AnimatedLottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animation/done.json")}
            style={styles.animation}
          />
        )} */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  animation: {
    width: 150,
    backgroundColor: "yellow",
    // height: 150,
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default UploadScreen;
