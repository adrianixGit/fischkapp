import {
  StyledCardContent,
  StyledTextContainer,
} from "../styles/CardGlobal.styled";
import { StyledIcon } from "../styles/CardGlobal.styled";
import editIcon from "../../assets/edit.svg";

type FrontCardPropTypes = {
  backText: string;
  //   onFlipCard: Function;
  onEdit: Function;
};

export const BackCard = ({
  backText,
  //   onFlipCard,
  onEdit,
}: FrontCardPropTypes) => {
  return (
    <StyledCardContent>
      <StyledIcon>
        <img src={editIcon} alt="editIcon" onClick={() => onEdit(backText)} />
      </StyledIcon>
      <StyledTextContainer>
        <p>{backText}</p>
      </StyledTextContainer>
    </StyledCardContent>
  );
};
