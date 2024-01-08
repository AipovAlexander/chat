import Cookies = require("js-cookie");
import { authScreen, codeScreen, mainScreen } from "../shared/constants";

export const saveTokenToCookie = (token: string) => {
  Cookies.set("token", token);
};

export const getTokenFromCookie = (): string | undefined => {
  return Cookies.get("token");
};

export const removeCookie = () => {
  Cookies.remove("token");
  let token = getTokenFromCookie();
  if (token !== "") {
    token = null || "";
  }
  authScreen.style.display = "none";
  codeScreen.style.display = "block";
  mainScreen.style.display = "none";
};
