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
import Screen from "./app/components/Screen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import colors from "./app/config/colors";
import Icon from "./app/components/Icon";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/authStorage";
import jwtDecode from "jwt-decode";
import AppLoading from "expo-app-loading";
import { navigationRef } from "./app/navigation/rootNavigation";
import * as Notifications from "expo-notifications";
import logger from "./app/utility/logger";

logger.start();

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  const showNotifications = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Congratulation! 📬",
        body: "Yor order was successfully placed",
        data: { data: "goes here" },
      },
      trigger: { seconds: 1 },
    });
  };

  console.log(user);

  // useEffect(() => {
  //   restoreToken();
  // }, []);

  // const unSubscribe = NetInfo.addEventListener((netInfo) => console.log(netInfo));
  // const netInfo = useNetInfo();

  // const demo = async () => {
  //   try {
  //     await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
  //     const value = await AsyncStorage.getItem("person");
  //     const person = JSON.parse(value);
  //     console.log(person);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // demo();

  // return <Button disabled={!netInfo.isInternetReachable} />

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {/* <Screen>
        <Button
          title="Press to schedule a notification"
          onPress={showNotifications}
        />
      </Screen> */}
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {/* <TabNavigator /> */}
        {/* <ListingDetailsScreen /> */}
        {/* <AccountScreen /> */}
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

// // const Link = () => {
// //   const navigation = useNavigation();

// //   return (
// //     <Button
// //       title="Click"
// //       onPress={() =>
// //         navigation.navigate("TweetDetails", {
// //           id: 1,
// //           value: "what's up TweetDetail nigga",
// //         })
// //       }
// //     />
// //   );
// // };

// // const Tweets = ({ navigation }) => {
// //   return (
// //     <Screen>
// //       <Text>Tweets</Text>
// //       <Link />
// //     </Screen>
// //   );
// // };

// // const TweetDetails = ({ route }) => {
// //   return (
// //     <Screen>
// //       <Text>Tweets Details {route.params.value}</Text>
// //     </Screen>
// //   );
// // };

// // const Stack = createNativeStackNavigator();
// // const FeedNavigator = () => {
// //   return (
// //     <Stack.Navigator
// //       initialRouteName="Tweets"
// //       screenOptions={{
// //         headerStyle: { backgroundColor: "dodgerblue" },
// //         headerTintColor: "white",
// //       }}
// //     >
// //       <Stack.Screen
// //         name="TweetDetails"
// //         component={TweetDetails}
// //         options={({ route }) => ({
// //           title: route.params.value,
// //           headerStyle: { backgroundColor: "tomato" },
// //           headerTintColor: "white",
// //         })}
// //       />
// //       <Stack.Screen name="Tweets" component={Tweets} />
// //     </Stack.Navigator>
// //   );
// // };

// // const Account = () => (
// //   <Screen>
// //     <Text>Account</Text>
// //   </Screen>
// // );

// // const Tab = createBottomTabNavigator();

// // const TabNavigator = () => (
// //   <Tab.Navigator
// //     screenOptions={{
// //       tabBarActiveBackgroundColor: "tomato",
// //       tabBarActiveTintColor: "white",
// //       tabBarInactiveBackgroundColor: "#eee",
// //       tabBarInactiveTintColor: "black",
// //       // headerShown: false,
// //     }}
// //   >
// //     <Tab.Screen
// //       name="Feed"
// //       options={{
// //         tabBarIcon: ({ size, color }) => (
// //           <MaterialCommunityIcons name="home" size={size} color={color} />
// //         ),
// //       }}
// //       component={FeedNavigator}
// //     />
// //     <Tab.Screen
// //       name="Account"
// //       options={{
// //         tabBarIcon: ({ size, color }) => (
// //           <MaterialCommunityIcons name="account" size={size} color={color} />
// //         ),
// //       }}
// //       component={Account}
// //     />
// //   </Tab.Navigator>
// // );

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const StackNavigation = () => (
//   <Stack.Navigator
//     screenOptions={
//       {
//         // headerShown: false,
//       }
//     }
//   >
//     <Stack.Screen
//       name="ListingsScreen"
//       component={ListingsScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <Stack.Screen
//       name="ListingDetailsScreen"
//       component={ListingDetailsScreen}
//     />
//   </Stack.Navigator>
// );

// const TabNavigator = () => (
//   <Tab.Navigator
//     screenOptions={{
//       tabBarActiveTintColor: colors.primary,
//       tabBarInactiveTintColor: colors.medium,
//       tabBarStyle: { height: 60, paddingBottom: 10 },
//       // headerShown: false,
//     }}
//   >
//     <Tab.Screen
//       name="Home"
//       options={{
//         tabBarIcon: ({ size, color }) => (
//           <MaterialCommunityIcons name="home" size={size} color={color} />
//         ),
//         headerShown: false,
//       }}
//       component={StackNavigation}
//     />
//     <Tab.Screen
//       name="ListEdit"
//       options={{
//         tabBarIcon: () => (
//           <View
//             style={{
//               borderRadius: 50,
//               borderColor: colors.white,
//               borderWidth: 10,
//             }}
//           >
//             <Icon
//               name="plus-circle"
//               backgroundColor={colors.primary}
//               size={65}
//             />
//           </View>
//         ),
//         tabBarLabelStyle: { display: "none" },
//         tabBarIconStyle: { marginBottom: 15 },
//         headerShown: false,
//       }}
//       component={ListingEditScreen}
//     />
//     <Tab.Screen
//       name="Account"
//       options={{
//         tabBarIcon: ({ size, color }) => (
//           <MaterialCommunityIcons name="account" size={size} color={color} />
//         ),
//       }}
//       component={AccountScreen}
//     />
//   </Tab.Navigator>
// );

// export default function App() {
//   return (
//     <NavigationContainer theme={navigationTheme}>
//       {/* <TabNavigator /> */}
//       {/* <ListingDetailsScreen /> */}
//       {/* <AccountScreen /> */}
//       {/* <AuthNavigator /> */}
//       <AppNavigator />
//     </NavigationContainer>
//   );
// }

{
  /* <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View> */
}
