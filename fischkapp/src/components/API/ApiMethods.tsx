import axios, { AxiosResponse } from "axios";
import { FlashCardType } from "../AddNewCard/types";
import { useState, useEffect } from "react";

const url = "https://training.nerdbord.io/api/v1/fischkapp/flashcards";

export const getFlashCards = () => {
  return axios.get(url).then((response: AxiosResponse<FlashCardType[]>) => {
    return response.data;
  });
};

export const postFlashCards = (newFlashCard: FlashCardType) => {
  return axios
    .post(url, newFlashCard, {
      headers: {
        Authorization: "secret_token",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const deleteFlashCards = (id: number) => {
  const deleteCardUrl = url + "/" + id;
  return axios
    .delete(deleteCardUrl, {
      headers: {
        Authorization: "secret_token",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

//musze jeszcze zrobic zeby resetowalo widok po usunieciu dzieki api a nie tak jak nez api
