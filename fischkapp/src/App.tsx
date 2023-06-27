import React from "react";
import { StyledCardList } from "./components/styles/CardList.styled";
import { AddNewCard } from "./components/AddNewCard";
import { CreatedCard } from "./components/CreatedCrad";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme/theme";
import { Wrapper } from "./components/styles/Wrapper";
import { Header } from "./components/Header";
import { GlobalStyle } from "./components/styles/GlobalStyles";
import { useState, useEffect } from "react";
import { flashCardsData } from "./data/data";

interface FlashCardType {
  id: number;
  frontText: string;
  backText: string;
}

function App() {
  const [isNewCard, setNewCard] = useState(false);
  const [flashCards, setFlashCards] = useState<FlashCardType[]>(flashCardsData);

  const handleChangeCardValue = (id: number, text: string, side: string) => {
    const ubdateCard = flashCards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          [side]: text,
        };
      }
      return card;
    });

    setFlashCards(ubdateCard);
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
              onSetFlashCards={setFlashCards}
            />
          ) : null}
          {flashCards.map((flashCard) => (
            <CreatedCard
              frontText={flashCard.frontText}
              backText={flashCard.backText}
              id={flashCard.id}
              onChangeCardValue={handleChangeCardValue}
            />
          ))}
        </StyledCardList>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

//MUSZE DODAC NOWA FUNKCJE KTORA ROZDZIELI MI CANCEL I SAVE W EDIT AK ABY CANCEL WYLACZALO TYLKO KARTE EDYTOWANIA A SAVE DODAWALO ELEMENT DO TABLICY
