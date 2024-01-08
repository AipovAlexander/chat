import { chat } from "../shared/constants";
import { createMessageTemplate } from "./create-message";
import { createDate } from "./create-date";

export const scrollToBottom = (): void => {
  if (chat) {
    chat.scrollTop = chat.scrollHeight;
  }
};

export const render = (arr: any, userinfo: any): void => {
  const fragment = document.createDocumentFragment();

  arr.forEach((message: any) => {
    let isSent: boolean = false;
    if (message.user.email === userinfo.email) {
      isSent = true;
    }
    const messageTime = createDate(message.createdAt);
    const msg = createMessageTemplate(
      message.text,
      messageTime,
      isSent,
      message.user.name
    );
    if (chat && msg) {
      fragment.appendChild(msg);
    }
  });

  if (chat && fragment.childNodes.length > 0) {
    chat.append(fragment);
    scrollToBottom();
  }
};

export const clearMessages = (): void => {
  const allMessages = document.querySelectorAll(".message");
  allMessages.forEach((message) => {
    message.remove();
  });
};
