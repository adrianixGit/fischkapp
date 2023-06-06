import { AddNewBackCard } from "./AddNewCard/AddNewBackCard";
import { FrontCard } from "./CreatedCard.tsx/FrontCard";
import { BackCard } from "./CreatedCard.tsx/BackCard";
import { useState } from "react";
import { StyledCard } from "./styles/CardGlobal.styled";
import { EditCard } from "./CreatedCard.tsx/EditCard";
import { useEffect } from "react";

type CreatedCardPropType = {
  frontText: String;
  backText: String;
};

export const CreatedCard = ({ frontText, backText }: CreatedCardPropType) => {
  const [flipCard, setFlipCard] = useState(true);
  const [isAnimate, setIsAnimate] = useState(false);
  const [edit, setEdit] = useState(false);
  const [cardText, setCardText] = useState("");

  const handleAnimateCard = () => {
    setIsAnimate(!isAnimate);

    setTimeout(() => {
      setIsAnimate(false);
    }, 2000);
  };

  const handleFlipCard = () => {
    setFlipCard(!flipCard);
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
          onEdit={handleEditCard}
          onIsAnimate={handleAnimateCard}
        />
      ) : (
        <BackCard
          backText={backText}
          onEdit={handleEditCard}
          onIsAnimate={handleAnimateCard}
        />
      )}
    </StyledCard>
  );
};
