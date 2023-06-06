import { StyledCard } from "./styles/CardGlobal.styled";
import { AddNewFrontCard } from "./AddNewCard/AddNewFrontCard";
import { AddNewBackCard } from "./AddNewCard/AddNewBackCard";
import { useState } from "react";

type AddNewCardPropType = {
  onSetNewCard: Function;
};

export const AddNewCard = ({ onSetNewCard }: AddNewCardPropType) => {
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
        <AddNewBackCard onFlipCard={handleFlipCard} frontText={forntText} />
      )}
    </StyledCard>
  );
};
