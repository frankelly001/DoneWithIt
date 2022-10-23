import { create } from "apisauce";
import authStorage from "../auth/authStorage";
import getCurrentSettings from "../config/settings";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: getCurrentSettings().apiURL,
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  // Before
  const respone = await get(url, params, axiosConfig);

  if (respone.ok) {
    cache.store(url, respone.data);
    return respone;
  }

  // After
  const data = await cache.get(url);
  return data ? { ok: true, data } : respone;
};

export default apiClient;
