import { monthNames } from "./constants";

export const getFormattedDate = (date: Date): string => {
  return `${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
};
