import { StyledCardContent, StyledIcon } from "../styles/CardGlobal.styled";
import { StyledInput } from "../styles/AddNewCard.styled";
import { StyledCardButton } from "../styles/buttons/CardButton";
import { StyledButtonsContainer } from "../styles/AddNewCard.styled";
import deleteIcon from "../../assets/deleteIcon.svg";
import { useState } from "react";

type EditCardPropType = {
  onEdit: (text: string) => void;
  onCancel: () => void;
  cardText: string;
};

export const EditCard = ({ onEdit, cardText, onCancel }: EditCardPropType) => {
  const [editedCardText, setNewCardText] = useState(cardText);

  const handleCancel = () => {
    setNewCardText(cardText);
    onCancel();
  };

  return (
    <StyledCardContent>
      <StyledIcon>
        <img src={deleteIcon} alt="editIcon" />
      </StyledIcon>
      <StyledInput
        type="text"
        value={editedCardText}
        placeholder={"Add value"}
        onChange={(e) => setNewCardText(e.target.value)}
      />
      <StyledButtonsContainer>
        <StyledCardButton onClick={handleCancel}>Cancel</StyledCardButton>
        <StyledCardButton onClick={() => onEdit(editedCardText)} bg="violet">
          Save
        </StyledCardButton>
      </StyledButtonsContainer>
    </StyledCardContent>
  );
};
