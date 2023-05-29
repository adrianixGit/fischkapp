import {
  StyledCardContent,
  StyledIcon,
  StyledTextContainer,
} from "../styles/CardGlobal.styled";

import editIcon from "../../assets/edit.svg";

type FrontCardPropTypes = {
  frontText: string;
  // onFlipCard: Function;
  onEdit: Function;
};

export const FrontCard = ({
  frontText,
  // onFlipCard,
  onEdit,
}: FrontCardPropTypes) => {
  return (
    <StyledCardContent>
      <StyledIcon>
        <img src={editIcon} alt="editIcon" onClick={() => onEdit(frontText)} />
      </StyledIcon>
      <StyledTextContainer>
        <p>{frontText}</p>
      </StyledTextContainer>
    </StyledCardContent>
  );
};
