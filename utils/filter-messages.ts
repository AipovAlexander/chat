import { messageList } from "../shared/constants";

export const filterMessages = (messagesArray: any, searchText: string) => {
  const elementsToAdd = [];

  for (const message of messagesArray) {
    const messageText = message.text.toLowerCase();
    const userNickname = message.user.name;

    if (searchText && messageText.includes(searchText)) {
      const userLogin = document.createElement("div");
      const filteredText = document.createElement("div");
      const generalDiv = document.createElement("div");

      generalDiv.className = "filteredDiv";
      filteredText.innerText = messageText;
      userLogin.innerText = userNickname;

      generalDiv.appendChild(userLogin);
      generalDiv.appendChild(filteredText);
      elementsToAdd.push(generalDiv);
    }
  }

  if (messageList) {
    messageList.innerHTML = "";
    const fragment = document.createDocumentFragment();

    elementsToAdd.forEach((element) => {
      fragment.appendChild(element);
    });

    messageList.appendChild(fragment);
    messageList.scrollTop = messageList.scrollHeight;
  }
};
