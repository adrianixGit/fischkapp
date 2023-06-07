import { StyledCard } from "./styles/CardGlobal.styled";
import { AddNewFrontCard } from "./AddNewCard/AddNewFrontCard";
import { AddNewBackCard } from "./AddNewCard/AddNewBackCard";
import { useState } from "react";

interface FlashCardType {
  id?: number;
  frontText: String;
  backText: String;
}

type AddNewCardPropType = {
  onSetNewCard: Function;
  onFlashCards: FlashCardType[];
  onSetFlashCards: Function;
};

export const AddNewCard = ({
  onSetNewCard,
  onFlashCards,
  onSetFlashCards,
}: AddNewCardPropType) => {
  const [isFront, setIsFront] = useState<boolean>(true);
  const [forntText, setFrontText] = useState("Front Text");

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
          frontText={forntText}
          onFlashCards={onFlashCards}
          onSetFlashCards={onSetFlashCards}
          onSetNewCard={onSetNewCard}
        />
      )}
    </StyledCard>
  );
};
