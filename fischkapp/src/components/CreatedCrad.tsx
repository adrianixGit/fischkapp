import { AddNewBackCard } from "./AddNewCard/AddNewBackCard";
import { FrontCard } from "./CreatedCard.tsx/FrontCard";
import { BackCard } from "./CreatedCard.tsx/BackCard";
import { useState } from "react";
import { StyledCard } from "./styles/CardGlobal.styled";
import { EditCard } from "./CreatedCard.tsx/EditCard";
import { useEffect } from "react";

type CreatedCardPropType = {
  frontText: string;
  backText: string;
};

export const CreatedCard = ({ frontText, backText }: CreatedCardPropType) => {
  const [flipCard, setFlipCard] = useState(true);
  const [isAnimate, setIsAnimate] = useState(true);
  const [edit, setEdit] = useState(false);
  const [cardText, setCardText] = useState("");

  useEffect(() => {
    setIsAnimate(!isAnimate);
  }, [flipCard]);

  const handleFlipCard = () => {
    setFlipCard(!flipCard);
    setIsAnimate(false);
  };

  const handleEditCard = (text: string) => {
    setEdit(!edit);
    setCardText(text);
  };

  return (
    <StyledCard onClick={() => handleFlipCard()} isAnimate={isAnimate}>
      {edit ? (
        <EditCard onEdit={handleEditCard} cardText={cardText} />
      ) : flipCard ? (
        <FrontCard
          frontText={frontText}
          // onFlipCard={handleFlipCard}
          onEdit={handleEditCard}
        />
      ) : (
        <BackCard
          backText={backText}
          // onFlipCard={handleFlipCard}
          onEdit={handleEditCard}
        />
      )}
    </StyledCard>
  );
};
