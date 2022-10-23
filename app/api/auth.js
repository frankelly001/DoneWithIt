import apiClient from "./client";

const login = (email, password) => apiClient.post("/auth", { email, password });

// const signUp = (name, email, password) =>
//   apiClient.post("/users", { name, email, password });

export default {
  login,
  // signUp,
};
