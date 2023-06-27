import { StyledCard } from "./styles/CardGlobal.styled";
import { AddNewFrontCard } from "./AddNewCard/AddNewFrontCard";
import { AddNewBackCard } from "./AddNewCard/AddNewBackCard";
import { useState } from "react";

interface FlashCardType {
  id: number;
  frontText: string;
  backText: string;
}

type AddNewCardPropType = {
  onSetNewCard: (isSettingCard: boolean) => void;
  flashCards: FlashCardType[];
  onSetFlashCards: (isGetingObject: FlashCardType[]) => void;
};

export const AddNewCard = ({
  onSetNewCard,
  flashCards,
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
          flashCards={flashCards}
          onSetFlashCards={onSetFlashCards}
          onSetNewCard={onSetNewCard}
        />
      )}
    </StyledCard>
  );
};
