import { fetchOnServer } from "./fetcn-on-server";

const API_USER_INFO_URL = "https://edu.strada.one/api/user/me";

export const getUserInfo = async (token: string) => {
  try {
    const response = await fetchOnServer(API_USER_INFO_URL, "GET", token);

    if (response.ok) {
      const userInfo = await response.json();
      return userInfo;
    } else {
      console.error(
        `Failed to get user information. Error code: ${response.status}`,
        await response.text()
      );
      return null;
    }
  } catch (error) {
    console.error("An error occurred while making the request:", error);
    return null;
  }
};
