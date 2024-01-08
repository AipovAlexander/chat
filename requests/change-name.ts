import { getTokenFromCookie } from "../utils/cookie";
import { changeNameInput } from "../shared/constants";
import { fetchOnServer } from "./fetcn-on-server";
import { getUserInfo } from "./get-user-info";
import { API_URL } from "../shared/constants";

export const changeName = async () => {
  const token = getTokenFromCookie();
  const name = changeNameInput?.value;

  if (!token) {
    console.log("Токен отсутствует.");
    return;
  }

  if (!name) {
    console.log("Введите новое имя.");
    return;
  }

  const body = JSON.stringify({ name });

  try {
    const response = await fetchOnServer(API_URL, "PATCH", token, body);

    if (response.ok) {
      const userInfo = await getUserInfo(token);
    } else {
      console.error(
        "Ошибка при отправке запроса. Код ошибки:",
        response.status
      );
    }
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
};
