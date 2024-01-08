export const openSettingsButton: HTMLElement | null =
  document.getElementById("openSettings");
export const closePopupButton: HTMLElement | null =
  document.getElementById("closePopup");
export const openProfileButton: HTMLElement | null =
  document.getElementById("openProfile");
export const settingsPopup: HTMLElement | null =
  document.getElementById("settingsPopup");

export const profilePopup: HTMLElement | null =
  document.getElementById("profilePopup");

export const overlay: HTMLElement | null = document.getElementById("overlay");
export const usernameInput: HTMLInputElement | null = document.getElementById(
  "username"
) as HTMLInputElement;
export const saveSettingsButton: HTMLElement | null =
  document.getElementById("saveSettings");
export const submitForm: HTMLFormElement | null = document.querySelector(
  ".footer__form"
) as HTMLFormElement;
export const messageInput: HTMLInputElement | null = document.querySelector(
  ".input"
) as HTMLInputElement;
export const chat: HTMLElement | null = document.querySelector(".chat");

export const messageReceived: HTMLElement | null = document.querySelector(
  "#received-message-template"
);
export const messageSent: HTMLElement | null = document.querySelector(
  "#sent-message-template"
);
export const messageText: HTMLElement | null =
  document.querySelector(".message-text");
export const arrayOfMessages: any[] = [];

export const codeInputForm: HTMLInputElement | null =
  document.querySelector("#codeInput");

export const codeInput: HTMLInputElement | null =
  document.querySelector("#codeInput1");

export const authScreen = document.getElementById(
  "authScreen"
) as HTMLDivElement;
export const codeScreen = document.getElementById(
  "codeScreen"
) as HTMLDivElement;
export const mainScreen = document.getElementById(
  "mainScreen"
) as HTMLDivElement;
export const emailInput = document.getElementById(
  "emailInput"
) as HTMLInputElement;

export const nextButton = document.getElementById(
  "nextButton"
) as HTMLButtonElement;
export const loginButton = document.getElementById(
  "loginButton"
) as HTMLButtonElement;
export const getCodeButton = document.getElementById(
  "getCodeButton"
) as HTMLButtonElement;

export const changeNameInput: HTMLInputElement | null =
  document.querySelector(".popup__input");

export const changeAuthorizationTokenButton: HTMLButtonElement | null =
  document.querySelector(".changeToken");

export const alreadyHaveToken: HTMLButtonElement | null =
  document.querySelector(".codereadybtn");

export const messageSearch = document.getElementById(
  "messageSearch"
) as HTMLInputElement;
export const messageList: HTMLElement | null =
  document.getElementById("messageList");

export const API_URL = "https://edu.strada.one/api/user";
