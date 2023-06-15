import { flashCardsData } from "../data/data";
import { AddNewCard } from "./AddNewCard";
import { StyledCardList } from "./styles/CardList.styled";
import { CreatedCard } from "./CreatedCrad";
import { useState, useEffect } from "react";

interface FlashCardType {
  id?: number;
  frontText: string;
  backText: string;
}

type CardListPropTypes = {
  isNewCard: boolean;
  onSetNewCard: (isSettingCard: boolean) => void;
  flashCards: FlashCardType[];
  onSetFlashCards: (isGetingObject: FlashCardType[]) => void;
};

export const CardList = ({
  isNewCard,
  onSetNewCard,
  flashCards,
  onSetFlashCards,
}: CardListPropTypes) => {
  return (
    <StyledCardList>
      {isNewCard ? (
        <AddNewCard
          onSetNewCard={onSetNewCard}
          flashCards={flashCards}
          onSetFlashCards={onSetFlashCards}
        />
      ) : null}
      {flashCards.map((flashCard, index) => (
        <CreatedCard
          frontText={flashCard.frontText}
          backText={flashCard.backText}
          index={index}
        />
      ))}
    </StyledCardList>
  );
};
