import uniqid from "uniqid";

export function createMessage(userMessage: string, currentTime: string) {
  return {
    message: userMessage,
    isSent: false,
    time: currentTime,
    id: uniqid(),
  };
}
