import { flashCardsData } from "../data/data";
import { AddNewCard } from "./AddNewCard";
import { StyledCardList } from "./styles/CardList.styled";
import { FrontCard } from "./CreatedCard.tsx/FrontCard";
import { CreatedCard } from "./CreatedCrad";
import { useState, useEffect } from "react";

type CardListPropTypes = {
  onIsNewCard: boolean;
  onSetNewCard: Function;
};

interface FlashCardType {
  id?: number;
  frontText: String;
  backText: String;
}

export const CardList = ({ onIsNewCard, onSetNewCard }: CardListPropTypes) => {
  return (
    <StyledCardList>
      {onIsNewCard ? <AddNewCard onSetNewCard={onSetNewCard} /> : null}
      {flashCardsData.map((flashCard) => (
        <CreatedCard
          frontText={flashCard.frontText}
          backText={flashCard.backText}
        />
      ))}
    </StyledCardList>
  );
};
