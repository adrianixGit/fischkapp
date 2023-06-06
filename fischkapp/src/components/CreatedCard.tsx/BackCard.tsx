import {
  StyledCardContent,
  StyledTextContainer,
} from "../styles/CardGlobal.styled";
import { StyledIcon } from "../styles/CardGlobal.styled";
import editIcon from "../../assets/edit.svg";

type FrontCardPropTypes = {
  backText: String;
  onEdit: Function;
  onIsAnimate: Function;
};

export const BackCard = ({
  backText,
  onEdit,
  onIsAnimate,
}: FrontCardPropTypes) => {
  return (
    <StyledCardContent>
      <StyledIcon>
        <img src={editIcon} alt="editIcon" onClick={() => onEdit(backText)} />
      </StyledIcon>
      <StyledTextContainer onClick={() => onIsAnimate()}>
        <p>{backText}</p>
      </StyledTextContainer>
    </StyledCardContent>
  );
};
