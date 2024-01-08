import { messageReceived, messageSent } from "../shared/constants";
import { translateText } from "./translate-text";
import { generateAvatar } from "silhouettejs";

export const createMessageTemplate = (
  messageContent: string,
  messageTime: string,
  isSent: boolean,
  nickName: string
): HTMLTemplateElement => {
  const template = isSent ? messageSent : messageReceived;
  if (!template) {
    console.error(
      "Message template not found for",
      isSent ? "sent" : "received"
    );
    return document.createElement("template");
  }

  const message = template.content?.cloneNode(true) as HTMLTemplateElement;

  const messageCurrentTime = message.querySelector(".message-time");
  const messageText = message.querySelector(".message-text");
  const userNickname = message.querySelector(".message-sender");
  const changeLanguage = message.querySelector(".changelanguagebutton");

  if (changeLanguage) {
    changeLanguage.addEventListener("click", async (e: Event) => {
      if (messageText && messageText.textContent) {
        try {
          const translatedText = await translateText(messageText.textContent);
          if (messageText) {
            messageText.textContent = translatedText || " ";
          }
        } catch (error) {
          console.error("Error translating text:", error);
        }
      }
    });
  }

  const userAvatar: HTMLImageElement | null =
    message.querySelector(".userAvatar");

  if (userAvatar) {
    userAvatar.src = generateAvatar(nickName, {
      backgroundColor: "#333",
      rounded: true,
    });
  }

  if (messageText) {
    messageText.textContent = messageContent;
  }

  if (messageCurrentTime) {
    messageCurrentTime.textContent = messageTime;
  }

  if (userNickname) {
    userNickname.textContent = nickName;
  }

  return message;
};
