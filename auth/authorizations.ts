import {
  codeInput,
  authScreen,
  codeScreen,
  mainScreen,
} from "../shared/constants";
import { getTokenFromCookie, saveTokenToCookie } from "../utils/cookie";
import { getUserInfo } from "../requests/get-user-info";
import { getChatHistory } from "../requests/get-chat-history";

export const authorization = async () => {
  const codeInputValue = codeInput?.value ?? null;

  if (codeInputValue !== null) {
    saveTokenToCookie(codeInputValue);
  }

  const token = getTokenFromCookie() ?? "";

  try {
    if (token) {
      const userInfo = await getUserInfo(token);

      if (userInfo) {
        console.log(userInfo);
        authScreen.style.display = "none";
        codeScreen.style.display = "none";
        mainScreen.style.display = "block";

        getChatHistory(token);
      }
    }
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
};

export const autoLogin = () => {
  const token = getTokenFromCookie() || "";

  if (codeInput?.value !== undefined) {
    codeInput.value = token;
    authorization();
    codeInput.value = "";
  }
};
