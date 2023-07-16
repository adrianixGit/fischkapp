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
    //const cardToEdit = flashCards.filter((card) => card._id === id);
    // const updatedCard = cardToEdit.map((card) => {
    //   return {
    //     ...card,
    //     [side]: text,
    //   };
    // });

    try {
      const patchedCard = await patchFlashCards(id, text, side);
      if (patchedCard.updatedFlashcard.acknowledged) {
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
      if (handleDeleteCard.message === "Flashcard deleted successfully") {
        const cardIndex = flashCards.findIndex((card) => card._id === id);
        flashCards.splice(cardIndex, 1);
        setFlashCards([...flashCards]);

        setTimeout(() => {
          alert("Card has been removed");
        }, 100);
      }
    } catch (error) {
      console.log(error);
    }
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
