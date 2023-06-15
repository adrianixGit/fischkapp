import { StyledCard } from "./styles/CardGlobal.styled";
import { AddNewFrontCard } from "./AddNewCard/AddNewFrontCard";
import { AddNewBackCard } from "./AddNewCard/AddNewBackCard";
import { useState } from "react";
import { FlashCardType } from "../App";

type AddNewCardPropType = {
  onSetNewCard: (isSettingCard: boolean) => void;
  flashCards: FlashCardType[];
  onSetFlashCards: (flashcards: FlashCardType[]) => void;
};

export const AddNewCard = ({
  onSetNewCard,
  flashCards,
  onSetFlashCards,
}: AddNewCardPropType) => {
  const [isFront, setIsFront] = useState<boolean>(true);
  const [frontText, setFrontText] = useState("Front Text");

  const handleFlipCard = () => {
    setIsFront(!isFront);
  };

  return (
    <StyledCard>
      {isFront ? (
        <AddNewFrontCard
          onFlipCard={handleFlipCard}
          onSetNewCard={onSetNewCard}
          onSetFrontText={setFrontText}
        />
      ) : (
        <AddNewBackCard
          onFlipCard={handleFlipCard}
          frontText={frontText}
          flashCards={flashCards}
          onSetFlashCards={onSetFlashCards}
          onSetNewCard={onSetNewCard}
        />
      )}
    </StyledCard>
  );
};
