import {
  closePopupButton,
  openSettingsButton,
  overlay,
  submitForm,
  settingsPopup,
  profilePopup,
  authScreen,
  codeScreen,
  mainScreen,
  nextButton,
  saveSettingsButton,
  messageInput,
  changeAuthorizationTokenButton,
  alreadyHaveToken,
} from "./shared/constants";
import { openPopup, closePopup } from "./popup/popup";
import { getTokenFromCookie, removeCookie } from "./utils/cookie";
import { scrollToBottom } from "./utils/dom-actions";
import { getChatHistory } from "./requests/get-chat-history";
import { enterEmailOrToken } from "./auth/enter-email-or-token";
import { autoLogin } from "./auth/authorizations";
import { changeName } from "./requests/change-name";

export const token = getTokenFromCookie();
export const socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);

socket.onmessage = (e: MessageEvent) => {
  if (token) {
    getChatHistory(token);
  }
};

changeAuthorizationTokenButton?.addEventListener("click", (e: Event) => {
  removeCookie();
});

alreadyHaveToken?.addEventListener("click", (e: Event) => {
  codeScreen.style.display = "block";
  authScreen.style.display = "none";
});

openSettingsButton?.addEventListener("click", (e: Event) => {
  openPopup(settingsPopup);
});

closePopupButton?.addEventListener("click", (e: Event) => {
  closePopup(profilePopup);
  closePopup(settingsPopup);
});

overlay?.addEventListener("click", (e: Event) => {
  closePopup(profilePopup);
  closePopup(settingsPopup);
  autoLogin();
});

document.addEventListener("DOMContentLoaded", (e: Event) => {
  authScreen.style.display = "block";
  mainScreen.style.display = "none";
  autoLogin();
});

nextButton.addEventListener("click", async (e: Event) => {
  enterEmailOrToken();
});

saveSettingsButton?.addEventListener("click", changeName);

export const sendMessage = (e: Event): void => {
  if (e) {
    e.preventDefault();
  }
  if (messageInput?.value) {
    socket.send(JSON.stringify({ text: messageInput?.value }));
    if (messageInput) {
      messageInput.value = "";
    }
    scrollToBottom();
  }
};

submitForm?.addEventListener("submit", sendMessage);
