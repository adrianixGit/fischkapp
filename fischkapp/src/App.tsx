import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/theme/theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Hello World</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
