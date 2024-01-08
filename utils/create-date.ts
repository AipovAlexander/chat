import { parseISO, isValid } from "date-fns";
import format from "date-fns/format";

export const createDate = (sentDate: string): string => {
  if (!sentDate || !isValid(parseISO(sentDate))) {
    console.error("Invalid date string:", sentDate);
    return "Invalid Date";
  }

  return format(parseISO(sentDate), "HH:mm");
};
