import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
import auth from "../api/auth";
import useAuth from "../auth/useAuth";
import routes from "../navigation/routes";
import users from "../api/users";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = ({ navigation }) => {
  // const [signUpScreenFailed, setSignUpScreenFailed] = useState(false);
  const [error, setError] = useState("");
  const { logIn } = useAuth();
  const registerApi = useApi(users.register);
  const loginApi = useApi(auth.login);

  const handleSubmit = async (userInfo) => {
    // const result = await users.register(userInfo);
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error ocurred");
        console.log(result);
      }
      return;
    }

    // const { data: authToken } = await auth.login(
    //   userInfo.email,
    //   userInfo.password
    // );
    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    logIn(authToken); // NautoLogin.data is authToken
    // navigation.navigate(routes.LOGIN);
  };

  // const handleSubmit = async ({ name, email, password }) => {
  //   const result = await auth.signUp(name, email, password);

  //   if (!result.ok) {
  //     setError(result.data.error);
  //     return setSignUpScreenFailed(true);
  //   }

  //   const autoLogin = await auth.login(email, password);
  //   if (!autoLogin.ok) return setSignUpScreenFailed(true);

  //   setSignUpScreenFailed(false);
  //   alert("Sign up Successful");
  //   logIn(autoLogin.data);
  //   // navigation.navigate(routes.LOGIN);
  // };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
            textContentType="name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            name="password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="SignUp" />
        </AppForm>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
