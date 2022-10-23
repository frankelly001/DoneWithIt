import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Image,
  Alert,
  Platform,
  Button,
  StatusBar,
  TextInput,
} from "react-native";
import AppButton from "./app/components/AppButton";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import colors from "./app/config/colors";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageUpload from "./app/components/ImageUpload";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  // const [imageUri, setImageUri] = useState();
  const [imageUris, setImageUris] = useState([]);

  // const handleAdd = (uri) => {
  //   setImageUris([...imageUris, uri]);
  // };

  // const handleRemove = (uri) => {
  //   setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  // };
  // console.log(imageUriArr);

  return (
    <NavigationContainer>
      <Screen>
        {/* <ImageUpload
        onPress={selectedImage}
        onDel={deleteImage}
        arrOfImages={imageUriArr}
      /> */}
        {/* <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      /> */}
        <ListingEditScreen />
      </Screen>
    </NavigationContainer>
  );
}

// // const categories = [
// //   { label: "Furniture", value: 1 },
// //   { label: "Clothing", value: 2 },
// //   { label: "Cameras", value: 3 },
// // ];

// export default function App() {
//   // const [text, setText] = useState("");
//   // const [category, setCategory] = useState(categories[0]);

//   // console.log(require('./assets/favicon.png'));
//   // console.log(Dimensions.get("screen"));
//   // const { landscape } = useDeviceOrientation();

//   return (
//     <Screen>
//       {/* <LoginScreen /> */}
//       <ListingEditScreen />
//       {/* <AppPicker
//         selectedItem={category}
//         onSelectItem={(item) => setCategory(item)}
//         items={categories}
//         icon="apps"
//         placeholder="Category"
//       />
//       <AppTextInput icon="email" placeholder="Username" /> */}
//       {/* <Text>{text}</Text>
//       <TextInput
//         clearButtonMode="always"
//         secureTextEntry
//         maxLength={5}
//         keyboardType="numeric"
//         value={text}
//         placeholder="First name"
//         style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
//         onChangeText={(text) => setText(text)}
//       /> */}
//       {/* <Icon
//         name="email"
//         size={50}
//         backgroundColor="red"
//         iconColor={colors.white}
//       /> */}
//       {/* <AccountScreen /> */}
//       {/* <ListingsScreen /> */}

//       {/* <ListItem
//         title="My title"
//         ImageComponent={<Icon name="email" size={50} />}
//       /> */}
//     </Screen>
//     // <SafeAreaView style={[styles.container]}>
//     //   {/* <ListingDetailsScreen /> */}
//     //   {/* <WelcomeScreen /> */}
//     //   {/* <ViewImageScreen /> */}
//     //   <MessagesScreen />
//     //   {/* <AppText>I love React Native!</AppText>
//     //   <AppButton title="Login" press={() => console.log("button tapped")} /> */}
//     // </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
// });

// // return (
// //   <SafeAreaView style={[styles.container, container]}>
// //     <View
// //       style={{
// //         backgroundColor: "#fff",
// //         flex: 1,
// //         flexDirection: "row",
// //         justifyContent: "center",
// //         alignItems: "center"
// //       }}
// //     >
// //       <View
// //         style={{
// //           backgroundColor: "dodgerblue",
// //           width: 100,
// //           height: 100,
// //           // zIndex: 1
// //           }}
// //       />
// //       <View
// //         style={{
// //           backgroundColor: "gold",
// //           width: 100,
// //           height: 100,
// //           // position: "absolute",
// //           top: 20,
// //           left: 20
// //         }}
// //       />
// //       <View
// //         style={{
// //           backgroundColor: "tomato",
// //           width: 100,
// //           height: 100
// //         }}
// //       />

// //       {/* <View style={{ backgroundColor: "dodgerblue", flex: 2}}/>
// //     <View style={{ backgroundColor: "gold", flex: 1}}/>
// //     <View style={{ backgroundColor: "tomato", flex: 1}}/> */}
// //     </View>

// //     {/* <View
// //       style={{
// //         backgroundColor: "dodgerblue",
// //         width: "100%", height: landscape ?"100%": "30%"
// //       }}
// //     ></View> */}

// //     {/* <Button title="Click Me" color="orange" onPress={()=>
// //     Alert.alert("My title", "My message", [
// //       {text: "Yes", onPress: ()=>console.log("Yes")},
// //       {text: "No",  onPress: ()=>console.log("No")}
// //       ])
// //       // Alert.prompt("Title", "My message", text => console.log(text)) // NB: Only Works on IOS not Andriod
// //     }
// //     /> */}
// //     {/* <Text numberOfLines={1} onPress={() => console.log("text pressed")}>
// //       Hello react native dev!
// //     </Text> */}
// //     {/* <Image source={require('./assets/favicon.png')}/> */}
// //     {/* <TouchableNativeFeedback onPress={() => console.log("image tapped")}> */}
// //     {/* <Image
// //         // blurRadius={10}
// //         // fadeDuration={1000}
// //         source={{
// //           width: 200,
// //           height: 300,
// //           uri: "https://picsum.photos/200/300",
// //         }}
// //       /> */}
// //     {/* <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue"}}></View> */}
// //     {/* </TouchableNativeFeedback> */}
// //     {/* <StatusBar style="auto" /> */}
// //   </SafeAreaView>
// // );

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
