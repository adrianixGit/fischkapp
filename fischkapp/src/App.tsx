import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/theme/theme";
import { Wrapper } from "./components/styles/Wrapper";
import { Header } from "./components/Header";
import { GlobalStyle } from "./components/styles/GlobalStyles";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
