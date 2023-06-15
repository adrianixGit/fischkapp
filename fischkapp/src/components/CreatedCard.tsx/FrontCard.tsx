import {
  StyledCardContent,
  StyledIcon,
  StyledTextContainer,
} from "../styles/CardGlobal.styled";

import editIcon from "../../assets/edit.svg";

type FrontCardPropTypes = {
  frontText: string;
  onEdit: (text: string) => void;
  onIsAnimate: () => void;
};

export const FrontCard = ({
  frontText,
  onEdit,
  onIsAnimate,
}: FrontCardPropTypes) => {
  return (
    <StyledCardContent>
      <StyledIcon>
        <img src={editIcon} alt="editIcon" onClick={() => onEdit(frontText)} />
      </StyledIcon>
      <StyledTextContainer onClick={() => onIsAnimate()}>
        <p>{frontText}</p>
      </StyledTextContainer>
    </StyledCardContent>
  );
};
