import axios, { AxiosResponse } from "axios";
import { FlashCardType } from "../AddNewCard/types";

const url = "https://training.nerdbord.io/api/v1/fischkapp/flashcards";

export const getFlashCards = () => {
  return axios.get(url).then((response: AxiosResponse<FlashCardType[]>) => {
    return response.data;
  });
};
