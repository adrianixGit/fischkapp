import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme/theme";
import { Wrapper } from "./components/styles/Wrapper";
import { Header } from "./components/Header";
import { GlobalStyle } from "./components/styles/GlobalStyles";
import { CardList } from "./components/CardList";
import { useState, useEffect } from "react";
import { flashCardsData } from "./data/data";

interface FlashCardType {
  id?: number;
  frontText: string;
  backText: string;
}

function App() {
  const [isNewCard, setNewCard] = useState(false);
  const [flashCards, setFlashCards] = useState<FlashCardType[]>(flashCardsData);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header
          onSetNewCard={setNewCard}
          onFlashCardsNumber={flashCards.length}
        />
        <CardList
          isNewCard={isNewCard}
          onSetNewCard={setNewCard}
          flashCards={flashCards}
          onSetFlashCards={setFlashCards}
        />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
