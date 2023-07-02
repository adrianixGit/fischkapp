import { StyledCardList } from "./components/styles/CardList.styled";
import { AddNewCard } from "./components/AddNewCard";
import { CreatedCard } from "./components/CreatedCrad";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme/theme";
import { Wrapper } from "./components/styles/Wrapper";
import { Header } from "./components/Header";
import { GlobalStyle } from "./components/styles/GlobalStyles";
import { useState } from "react";
import { flashCardsData } from "./data/data";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [isNewCard, setNewCard] = useState(false);
  const [flashCards, setFlashCards] = useState<FlashCardType[]>([]);

  const getFlashCards = () => {
    const url = "https://training.nerdbord.io/api/v1/fischkapp/flashcards";
    axios.get(url).then((response) => {
      setFlashCards(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getFlashCards();
  }, []);

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

  const handleDeleteCard = (id: number) => {
    const cardIndex = flashCards.findIndex((card) => card.id === id);
    flashCards.splice(cardIndex, 1);
    setFlashCards([...flashCards]);

    setTimeout(() => {
      alert("Card has been removed");
    }, 100);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header
          onSetNewCard={setNewCard}
          onFlashCardsNumber={flashCards.length}
          isNewCard={isNewCard}
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
              frontText={flashCard.front}
              backText={flashCard.back}
              id={flashCard.id}
              onChangeCardValue={handleChangeCardValue}
              onHandleDeleteCard={handleDeleteCard}
            />
          ))}
        </StyledCardList>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

//MUSZE DODAC NOWA FUNKCJE KTORA ROZDZIELI MI CANCEL I SAVE W EDIT AK ABY CANCEL WYLACZALO TYLKO KARTE EDYTOWANIA A SAVE DODAWALO ELEMENT DO TABLICY
