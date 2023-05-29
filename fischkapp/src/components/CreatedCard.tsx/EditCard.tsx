import { StyledCardContent, StyledIcon } from "../styles/CardGlobal.styled";

import { StyledInput } from "../styles/AddNewCard.styled";
import { StyledCardButton } from "../styles/buttons/CardButton";
import { StyledButtonsContainer } from "../styles/AddNewCard.styled";
import deleteIcon from "../../assets/deleteIcon.svg";

type EditCardPropType = {
  onEdit: Function;
  cardText: string;
};

export const EditCard = ({ onEdit, cardText }: EditCardPropType) => {
  return (
    <StyledCardContent>
      <StyledIcon>
        <img src={deleteIcon} alt="editIcon" />
      </StyledIcon>
      <StyledInput type="text" placeholder={cardText} />
      <StyledButtonsContainer>
        <StyledCardButton onClick={() => onEdit()}>Cancel</StyledCardButton>
        <StyledCardButton bg="violet">Save</StyledCardButton>
      </StyledButtonsContainer>
    </StyledCardContent>
  );
};
