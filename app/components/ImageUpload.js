import React from "react";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const ImageUpload = ({ onPress, arrOfImages, onDel }) => {
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          horizontal
          data={arrOfImages}
          keyExtractor={(img) => img}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.imageContainer}
                onPress={() =>
                  Alert.alert("Delete", `Do you Want to delete?`, [
                    { text: "Yes", onPress: () => onDel(item) },
                    { text: "No" },
                  ])
                }
              >
                <Image
                  source={{ uri: item }}
                  resizeMode="cover"
                  style={styles.image}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <TouchableOpacity style={styles.imageContainer} onPress={onPress}>
        <MaterialCommunityIcons name="camera" color={colors.medium} size={40} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "blue",
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "flex-start",
  },

  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageUpload;
