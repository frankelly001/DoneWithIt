import AsyncStorage from "@react-native-async-storage/async-storage";
// import moment from "moment";
import dayjs from "dayjs";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
    // logger.log(new Error(error));
  }
};

const isExpired = (item) => {
  // const now = moment(Date.now());
  const now = dayjs();
  const storedTime = dayjs(item.timestamp);
  return now.diff(storedTime, "minute") > expiryInMinutes;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      // Command Query Seperation (CQS)
      // A Command func is a func that changes the state of the system
      // a Query func is a func that returns the state state of the system
      await AsyncStorage.removeItem(prefix + key); // this breaks the rules of CQS
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};
