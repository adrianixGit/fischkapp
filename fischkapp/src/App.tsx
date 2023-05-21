import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme/theme";
import { Wrapper } from "./components/styles/Wrapper";
import { Header } from "./components/Header";
import { GlobalStyle } from "./components/styles/GlobalStyles";
import { FrontCard } from "./components/FrontCard";
import { useState } from "react";

function App() {
  const [cardStatus, setCardStatus] = useState<boolean>(true);

  const getCardStatus = (status: boolean) => {
    setCardStatus(status);
    console.log(status);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <FrontCard getCardStatus={getCardStatus} cardStatus={cardStatus} />
        <Header />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
