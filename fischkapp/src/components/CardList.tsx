import { flashCardsData } from "../data/data";
import { AddNewCard } from "./AddNewCard";
import { StyledCardList } from "./styles/CardList.styled";
import { CreatedCard } from "./CreatedCrad";
import { useState, useEffect } from "react";

interface FlashCardType {
  id?: number;
  frontText: String;
  backText: String;
}

type CardListPropTypes = {
  onIsNewCard: boolean;
  onSetNewCard: Function;
  onFlashCards: FlashCardType[];
  onSetFlashCards: Function;
};

export const CardList = ({
  onIsNewCard,
  onSetNewCard,
  onFlashCards,
  onSetFlashCards,
}: CardListPropTypes) => {
  return (
    <StyledCardList>
      {onIsNewCard ? (
        <AddNewCard
          onSetNewCard={onSetNewCard}
          onFlashCards={onFlashCards}
          onSetFlashCards={onSetFlashCards}
        />
      ) : null}
      {onFlashCards.map((flashCard) => (
        <CreatedCard
          frontText={flashCard.frontText}
          backText={flashCard.backText}
        />
      ))}
    </StyledCardList>
  );
};
