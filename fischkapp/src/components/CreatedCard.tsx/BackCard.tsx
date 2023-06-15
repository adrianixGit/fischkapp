import {
  StyledCardContent,
  StyledTextContainer,
} from "../styles/CardGlobal.styled";
import { StyledIcon } from "../styles/CardGlobal.styled";
import editIcon from "../../assets/edit.svg";

type FrontCardPropTypes = {
  backText: string;
  onEdit: (text: string) => void;
  onIsAnimate: () => void;
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
