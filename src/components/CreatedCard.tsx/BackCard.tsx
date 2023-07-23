import {
  StyledCardContent,
  StyledTextContainer,
} from "../styles/CardGlobal.styled";
import { StyledIcon } from "../styles/CardGlobal.styled";
import editIcon from "../../assets/edit.svg";

type BackCardPropTypes = {
  backText: string;
  onSwitchModeEditCard: (text: string, editedSide: string) => void;
  onIsAnimate: () => void;
  onClick?: () => void;
};

export const BackCard = ({
  backText,
  onSwitchModeEditCard,
  onIsAnimate,
}: BackCardPropTypes) => {
  const editedSide = "back";

  return (
    <StyledCardContent>
      <StyledIcon>
        <img
          src={editIcon}
          alt="editIcon"
          onClick={() => onSwitchModeEditCard(backText, editedSide)}
        />
      </StyledIcon>
      <StyledTextContainer
        onClick={() => onIsAnimate()}
        textLength={backText.length}
      >
        <p>{backText}</p>
      </StyledTextContainer>
    </StyledCardContent>
  );
};
