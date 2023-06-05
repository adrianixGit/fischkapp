import { StyledCard } from "./styles/CardGlobal.styled";
import { AddNewFrontCard } from "./AddNewCard/AddNewFrontCard";
import { AddNewBackCard } from "./AddNewCard/AddNewBackCard";
import { useState } from "react";

type AddNewCardPropType = {
  onSetNewCard: Function;
};

export const AddNewCard = ({ onSetNewCard }: AddNewCardPropType) => {
  const [isFront, setIsFront] = useState<boolean>(true);

  const handleFlipCard = () => {
    setIsFront(!isFront);
  };

  return (
    <StyledCard>
      {isFront ? (
        <AddNewFrontCard
          onFlipCard={handleFlipCard}
          onSetNewCard={onSetNewCard}
        />
      ) : (
        <AddNewBackCard onFlipCard={handleFlipCard} />
      )}
    </StyledCard>
  );
};
