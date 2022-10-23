import React, { useState, useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import * as Notifications from "expo-notifications";
import expoPushTokens from "../api/expoPushTokens";
import { Platform } from "react-native";
import * as Device from "expo-device";
import navigation from "./rootNavigation";
import useNotifications from "../hooks/useNotifications";

const Tab = createBottomTabNavigator();
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const AppNavigator = () => {
  useNotifications();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={routes.LISTING_EDIT}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

// const notificationListener = useRef();
//   const responseListener = useRef();
//   const [notification, setNotification] = useState(false);
//   console.log(notification, "truth condition");

//   useEffect(() => {
//     registerForPushNotifications();

//     // Notifications.addNotificationResponseReceivedListener((respone) =>
//     //   console.log(respone, "heyyyyyyyyyyyyyy")
//     // );
//     // Notifications.addNotificationReceivedListener((notification) => {
//     //   // setNotification(notification);
//     //   navigation.navigate(routes.ACCOUNT);
//     // });

//     // This listener is fired whenever a notification is received while the app is foregrounded
//     notificationListener.current =
//       Notifications.addNotificationReceivedListener((notification) => {
//         setNotification(notification);
//       });

//     // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
//     responseListener.current =
//       Notifications.addNotificationResponseReceivedListener((response) => {
//         console.log(response);
//       });
//     // schedulePushNotification();

//     return () => {
//       Notifications.removeNotificationSubscription(
//         notificationListener.current
//       );
//       Notifications.removeNotificationSubscription(responseListener.current);
//     };
//   }, []);

//   const registerForPushNotifications = async () => {
//     try {
//       // const permission = await Notifications.requestPermissionsAsync();
//       // if (!permission.granted) return;

//       // const token = await (await Notifications.getExpoPushTokenAsync()).data;
//       let token;
//       if (Device.isDevice) {
//         const { status: existingStatus } =
//           await Notifications.getPermissionsAsync();
//         let finalStatus = existingStatus;
//         if (existingStatus !== "granted") {
//           const { status } = await Notifications.requestPermissionsAsync();
//           finalStatus = status;
//         }
//         if (finalStatus !== "granted") {
//           alert("Failed to get push token for push notification!");
//           return;
//         }
//         token = (await Notifications.getExpoPushTokenAsync()).data;
//         console.log(token);
//       } else {
//         alert("Must use physical device for Push Notifications");
//       }

//       if (Platform.OS === "android") {
//         Notifications.setNotificationChannelAsync("default", {
//           name: "default",
//           importance: Notifications.AndroidImportance.MAX,
//           vibrationPattern: [0, 250, 250, 250],
//           lightColor: "#FF231F7C",
//         });
//       }
//       console.log(token);
//       expoPushTokens.register(token);
//     } catch (error) {
//       console.log("Error getting a push token ", error);
//     }
//   };
