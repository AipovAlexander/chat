import {
  emailInput,
  authScreen,
  codeScreen,
  codeInputForm,
  codeInput,
} from "../shared/constants";
import { fetchOnServer } from "../requests/fetcn-on-server";
import { authorization } from "./authorizations";
import { API_URL } from "../shared/constants";

export const enterEmailOrToken = async () => {
  const email = emailInput.value;

  if (!email) {
    console.log("Введите адрес электронной почты.");
    return;
  }

  try {
    const response = await fetchOnServer(
      API_URL,
      "POST",
      "123",
      JSON.stringify({ email })
    );

    if (response.ok) {
      authScreen.style.display = "none";
      codeScreen.style.display = "block";
    } else {
      console.log("Не удалось отправить запрос на получение кода.");
    }
  } catch (error) {
    console.error("Произошла ошибка:", error);
    console.log("Произошла ошибка при отправке запроса.");
  }
};

if (codeInputForm) {
  codeInputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    authorization();
    if (codeInput) {
      codeInput.value = "";
    }
  });
}
