import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      animation: "slide_from_right",
      //   headerShown: false,
    }}
  >
    <Stack.Screen
      name={routes.SUBACCOUNT}
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
