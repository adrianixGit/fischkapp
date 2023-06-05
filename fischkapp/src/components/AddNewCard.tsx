import { StyledCard } from "./styles/CardGlobal.styled";
import { AddNewFrontCard } from "./AddNewCard/AddNewFrontCard";
import { AddNewBackCard } from "./AddNewCard/AddNewBackCard";
import { useState } from "react";
export const AddNewCard = () => {
  const [isFront, setIsFront] = useState<boolean>(true);

  const handleFlipCard = () => {
    setIsFront(!isFront);
  };

  return (
    <StyledCard>
      {isFront ? (
        <AddNewFrontCard onFlipCard={handleFlipCard} />
      ) : (
        <AddNewBackCard onFlipCard={handleFlipCard} />
      )}
    </StyledCard>
  );
};
