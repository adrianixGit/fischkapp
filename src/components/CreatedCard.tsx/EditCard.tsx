import { StyledCardContent, StyledIcon } from "../styles/CardGlobal.styled";
import { StyledInput } from "../styles/AddNewCard.styled";
import { StyledCardButton } from "../styles/buttons/CardButton";
import { StyledButtonsContainer } from "../styles/AddNewCard.styled";
import deleteIcon from "../../assets/deleteIcon.svg";
import { useState, useRef, useEffect } from "react";

type EditCardPropType = {
  cardTextToEdit: string;
  onCancelEditCard: () => void;
  editedSide: string;
  onChangeCardValue: (id: number, text: string, cardSide: string) => void;
  id: number;
  onHandleDeleteCard: (id: number) => void;
};

export const EditCard = ({
  cardTextToEdit,
  onCancelEditCard,
  editedSide,
  onChangeCardValue,
  id,
  onHandleDeleteCard,
}: EditCardPropType) => {
  const [editedText, setEditedText] = useState(cardTextToEdit);
  const focusRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

  const handleSaveEditedCard = () => {
    onChangeCardValue(id, editedText, editedSide);
    onCancelEditCard();
  };

  const handleDeleteCard = () => {
    onHandleDeleteCard(id);
    onCancelEditCard();
  };

  return (
    <StyledCardContent>
      <StyledIcon>
        <img
          src={deleteIcon}
          alt="editIcon"
          onClick={() => handleDeleteCard()}
        />
      </StyledIcon>
      <StyledInput
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
        ref={focusRef}
      />
      <StyledButtonsContainer>
        <StyledCardButton onClick={() => onCancelEditCard()}>
          Cancel
        </StyledCardButton>
        <StyledCardButton bg="violet" onClick={(e) => handleSaveEditedCard()}>
          Save
        </StyledCardButton>
      </StyledButtonsContainer>
    </StyledCardContent>
  );
};
