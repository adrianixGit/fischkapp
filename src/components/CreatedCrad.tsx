import { AddNewBackCard } from "./AddNewCard/AddNewBackCard";
import { FrontCard } from "./CreatedCard.tsx/FrontCard";
import { BackCard } from "./CreatedCard.tsx/BackCard";
import { useState } from "react";
import { StyledCard } from "./styles/CardGlobal.styled";
import { EditCard } from "./CreatedCard.tsx/EditCard";
import { useEffect } from "react";
import { CardSide, FlashCardType } from "../App";

interface CreatedCardPropType extends FlashCardType {
  onSaveEdit(cardId: number, text: string, side: CardSide): void;
}

export const CreatedCard = ({
  frontText,
  backText,
  id,
  onSaveEdit,
}: CreatedCardPropType) => {
  const [isCardFront, setFlipCard] = useState(true);
  const [isAnimate, setIsAnimate] = useState(false);
  const [edit, setEdit] = useState(false);
  const [cardTextToEdit, setCardTextToEdit] = useState("");
  const [editedActiveSide, setEditedSide] = useState<CardSide | null>(null);
  const [currentActiveSide, setCurrentActiveSide] = useState<CardSide | null>(
    null
  );

  const handleAnimateCard = () => {
    setIsAnimate(!isAnimate);

    setTimeout(() => {
      setIsAnimate(false);
    }, 2000);
  };

  const handleFlipCard = () => {
    setFlipCard(!isCardFront);
  };

  const handleToggleEditMode = (selectedSide: CardSide) => (text: string) => {
    setEdit(true);
    setCardTextToEdit(text);
    setEditedSide(selectedSide);
  };

  const handleEditSaveCard = (text: string) => {
    if (!editedActiveSide) {
      throw Error("Side is not selected!");
    }
    onSaveEdit(id, text, editedActiveSide);
    handleCancelEdit();
  };

  const handleCancelEdit = () => {
    setEdit(false);
    setEditedSide(null);
  };

  return (
    <StyledCard onClick={() => handleFlipCard()} isAnimate={isAnimate}>
      {edit ? (
        <EditCard
          onEdit={handleEditSaveCard}
          onCancel={handleCancelEdit}
          cardText={cardTextToEdit}
        />
      ) : isCardFront ? (
        <FrontCard
          frontText={frontText}
          onEdit={handleToggleEditMode(CardSide.frontText)}
          onIsAnimate={handleAnimateCard}
        />
      ) : (
        <BackCard
          backText={backText}
          onEdit={handleToggleEditMode(CardSide.backText)}
          onIsAnimate={handleAnimateCard}
        />
      )}
    </StyledCard>
  );
};
