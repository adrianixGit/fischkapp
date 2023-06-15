import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme/theme";
import { Wrapper } from "./components/styles/Wrapper";
import { Header } from "./components/Header";
import { GlobalStyle } from "./components/styles/GlobalStyles";
import { useState, useEffect } from "react";
import { flashCardsData } from "./data/data";
import { StyledCardList } from "./components/styles/CardList.styled";
import { AddNewCard } from "./components/AddNewCard";
import { CreatedCard } from "./components/CreatedCrad";

export interface CreateFlashCard {
  frontText: string;
  backText: string;
}

export interface FlashCardType extends CreateFlashCard {
  id: number;
}

export enum CardSide {
  frontText = "frontText",
  backText = "backText",
}

function App() {
  const [isNewCard, setNewCard] = useState(false);
  const [flashCards, setFlashCards] = useState<FlashCardType[]>(flashCardsData);

  const handleUpdateCardSideText = (
    id: number,
    text: string,
    side: CardSide
  ) => {
    const updatedCards = flashCards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          [side]: text,
        };
      }
      return card;
    });
    setFlashCards(updatedCards);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header
          onSetNewCard={setNewCard}
          onFlashCardsNumber={flashCards.length}
        />
        <StyledCardList>
          {isNewCard ? (
            <AddNewCard
              onSetNewCard={setNewCard}
              flashCards={flashCards}
              onSetFlashCards={(cards) => setFlashCards(cards)}
            />
          ) : null}
          {flashCards.map((flashCard, index) => (
            <CreatedCard
              onSaveEdit={handleUpdateCardSideText}
              frontText={flashCard.frontText}
              backText={flashCard.backText}
              id={flashCard.id}
            />
          ))}
        </StyledCardList>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
