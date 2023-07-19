import { deleteFlashCards, patchFlashCards } from "./components/API/ApiMethods";
import { FlashCardType } from "./components/AddNewCard/types";
import { StyledCardList } from "./components/styles/CardList.styled";
import { AddNewCard } from "./components/AddNewCard";
import { CreatedCard } from "./components/CreatedCrad";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme/theme";
import { Wrapper } from "./components/styles/Wrapper";
import { Header } from "./components/Header";
import { GlobalStyle } from "./components/styles/GlobalStyles";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { getFlashCards } from "./components/API/ApiMethods";

function App() {
  const [isNewCard, setNewCard] = useState(false);
  const [flashCards, setFlashCards] = useState<FlashCardType[]>([]);

  const fetchData = async () => {
    try {
      const response = await getFlashCards();
      setFlashCards(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangeCardValue = async (
    id: number,
    text: string,
    side: string
  ) => {
    try {
      const patchedCard = await patchFlashCards(id, text, side);
      console.log(patchedCard);
      if (patchedCard < 400) {
        const updateCard = flashCards.map((card) => {
          if (card._id === id) {
            return {
              ...card,
              [side]: text,
            };
          }

          return card;
        });

        setFlashCards(updateCard);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCard = async (id: number) => {
    try {
      const handleDeleteCard = await deleteFlashCards(id);

      if (handleDeleteCard < 400) {
        const cardIndex = flashCards.findIndex((card) => card._id === id);
        flashCards.splice(cardIndex, 1);
        setFlashCards([...flashCards]);
      }
    } catch (error) {
      console.log(error);
    }

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
              id={flashCard._id}
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
