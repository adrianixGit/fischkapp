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
  onChangeCardValue: (id: number, text: string, cardSide: string) => void;
  id: number;
};

export const CreatedCard = ({
  frontText,
  backText,
  onChangeCardValue,
  id,
}: CreatedCardPropType) => {
  const [flipCard, setFlipCard] = useState(true);
  const [isAnimate, setIsAnimate] = useState(false);
  const [edit, setEdit] = useState(false);
  const [cardTextToEdit, setCardTextToEdit] = useState("");
  const [editedSide, setEditedSide] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleAnimateCard = () => {
    setIsAnimate(!isAnimate);

    setTimeout(() => {
      setIsAnimate(false);
    }, 2000);
  };

  const handleFlipCard = () => {
    setFlipCard(!flipCard);
  };

  const handleSwitchModeEditCard = (text: string, editedSide: string) => {
    setEdit(!edit);
    setCardTextToEdit(text);
    setEditedSide(editedSide);
  };

  const handleCancelCard = () => {
    setEdit(false);
  };

  return (
    <StyledCard onClick={() => handleFlipCard()} isAnimate={isAnimate}>
      {edit ? (
        <EditCard
          onCancelEditCard={handleCancelCard}
          cardTextToEdit={cardTextToEdit}
          editedSide={editedSide}
          onChangeCardValue={onChangeCardValue}
          id={id}
        />
      ) : flipCard ? (
        <FrontCard
          frontText={frontText}
          onSwitchModeEditCard={handleSwitchModeEditCard}
          onIsAnimate={handleAnimateCard}
        />
      ) : (
        <BackCard
          backText={backText}
          onSwitchModeEditCard={handleSwitchModeEditCard}
          onIsAnimate={handleAnimateCard}
        />
      )}
    </StyledCard>
  );
};
