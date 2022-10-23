import jwtDecode from "jwt-decode";
import { useContext } from "react";
import authStorage from "./authStorage";
import AuthContext from "./context";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
    console.log(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken(user);
  };

  return { user, logIn, logOut };
};
