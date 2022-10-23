import React from "react";
import { Text } from "react-native";
import defaultStyles from "../config/styles";

const AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
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

// const styles = StyleSheet.create({
//   text: {
//     color: "tomato",
//     ...Platform.select({
//       ios: {
//         fontSize: 20,
//         fontFamily: "Avenir",
//       },
//       android: {
//         fontSize: 18,
//         fontFamily: "Roboto",
//       },
//     }),
//   },
// });

export default AppText;
