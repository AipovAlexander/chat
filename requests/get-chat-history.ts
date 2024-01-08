import { fetchOnServer } from "./fetcn-on-server";
import { getUserInfo } from "./get-user-info";
import { filterMessages } from "../utils/filter-messages";
import { messageSearch } from "../shared/constants";
import { render } from "../utils/dom-actions";

const API_MESSAGES_URL = "https://edu.strada.one/api/messages";

export const getChatHistory = async (token: string) => {
  try {
    const response = await fetchOnServer(API_MESSAGES_URL, "GET", token);

    if (response.ok) {
      const messages = await response.json();
      const userInfo = await getUserInfo(token);
      messages.messages.reverse();

      handleSearchInput(messages.messages, userInfo);
      render(messages.messages, userInfo);
    } else {
      console.error(
        `Failed to get chat history. Error code: ${response.status}`,
        await response.text()
      );
      return null;
    }
  } catch (error) {
    console.error("An error occurred while making the request:", error);
    return null;
  }
};

const handleSearchInput = (messages: any[], userInfo: any) => {
  messageSearch.addEventListener("input", () => {
    filterMessages(messages, messageSearch.value.toLowerCase());
  });
};
