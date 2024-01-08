import translate from "translate";

const DEFAULT_TARGET_LANGUAGE = "ru";

export const translateText = async (
  text: string,
  targetLanguage: string = DEFAULT_TARGET_LANGUAGE
): Promise<string | undefined> => {
  if (!text.trim()) {
    console.log("Text is empty or contains only whitespace.");
    return undefined;
  }

  try {
    const translatedText = await translate(text, targetLanguage);
    return translatedText;
  } catch (error) {
    console.error("Error translating text:", error);
  }

  return undefined;
};
