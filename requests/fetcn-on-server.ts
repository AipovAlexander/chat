export const fetchOnServer = async (
  serverLink: string,
  method: string,
  token: string,
  body: any | null = null
) => {
  try {
    const response = await fetch(serverLink, {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body,
    });
    return response;
  } catch (error) {
    console.error("Произошла ошибка при отправке запроса:", error);
    throw error;
  }
};
