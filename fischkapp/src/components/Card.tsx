import { StyledCard } from "./styles/Card.styled";
import { FrontCard } from "./cards/FrontCard";
import { BackCard } from "./cards/BackCard";
import { useState } from "react";
export const Card = () => {
  const [isFront, setIsFront] = useState<boolean>(true);

  const handleFlipCard = () => {
    setIsFront(!isFront);
  };

  return (
    <StyledCard>
      {isFront ? (
        <FrontCard onFlipCard={handleFlipCard} />
      ) : (
        <BackCard onFlipCard={handleFlipCard} />
      )}
    </StyledCard>
  );
};
