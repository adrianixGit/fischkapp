import axios, { AxiosResponse } from "axios";
import { FlashCardType, NewFlashCardType } from "../AddNewCard/types";
import { useState, useEffect } from "react";

const url = "https://training.nerdbord.io/api/v1/fischkapp/flashcards";

export const getFlashCards = () => {
  return axios.get(url).then((response: AxiosResponse<FlashCardType[]>) => {
    return response.data;
  });
};

export const postFlashCards = (newFlashCard: NewFlashCardType) => {
  return axios
    .post(url, newFlashCard, {
      headers: {
        Authorization: "secret_token",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err.response.data));
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

export const patchFlashCards = (id: number, text: string, side: string) => {
  const patchUrl = url + "/" + id;

  return axios
    .patch(
      patchUrl,
      {
        [side]: text,
      },
      {
        headers: {
          Authorization: "secret_token",
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err.response.data));
};
