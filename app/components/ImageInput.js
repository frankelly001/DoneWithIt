import React, { useEffect } from "react";
import {
  Image,
  StyleSheet,
  View,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({ imageUri, onChangeImage }) => {
  const requestPermission = async () => {
    try {
      result.granted;
      const { granted } = await ImagePicker.requestCameraPermissionsAsync();

      if (!granted)
        alert("You need to enable permission to access the library");
    } catch (error) {
      console.log("FAILED", error);
    }
    // const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.LOCATION_BACKGROUND)
  };

  useEffect(() => {
    // requestMediaLibraryPermissionsAsync()
    requestPermission();
  }, []);

  const handlePress = () => {
    if (!imageUri) selectedImage();
    else
      Alert.alert("Delete", `Are you sure you want to delete this image?`, [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  const selectedImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading an Image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            color={colors.medium}
            size={40}
          />
        )}
        {imageUri && (
          <Image
            source={{ uri: imageUri }}
            resizeMode="cover"
            style={styles.image}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
