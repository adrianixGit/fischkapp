import {
  StyledCardContent,
  StyledTextContainer,
} from "../styles/CardGlobal.styled";
import { StyledIcon } from "../styles/CardGlobal.styled";
import editIcon from "../../assets/edit.svg";

type FrontCardPropTypes = {
  backText: string;
  onSwitchModeEditCard: (text: string, editedSide: string) => void;
  onIsAnimate: () => void;
  onClick?: () => void;
};

export const BackCard = ({
  backText,
  onSwitchModeEditCard,
  onIsAnimate,
}: FrontCardPropTypes) => {
  const editedSide = "backText";

  return (
    <StyledCardContent>
      <StyledIcon>
        <img
          src={editIcon}
          alt="editIcon"
          onClick={() => onSwitchModeEditCard(backText, editedSide)}
        />
      </StyledIcon>
      <StyledTextContainer onClick={() => onIsAnimate()}>
        <p>{backText}</p>
      </StyledTextContainer>
    </StyledCardContent>
  );
};
