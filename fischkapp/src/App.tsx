import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme/theme";
import { Wrapper } from "./components/styles/Wrapper";
import { Header } from "./components/Header";
import { GlobalStyle } from "./components/styles/GlobalStyles";
import { CardList } from "./components/CardList";
import { useState } from "react";

function App() {
  const [isNewCard, setNewCard] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header onSetNewCard={setNewCard} />
        <CardList onIsNewCard={isNewCard} onSetNewCard={setNewCard} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
