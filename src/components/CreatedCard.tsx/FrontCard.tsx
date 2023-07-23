import {
  StyledCardContent,
  StyledIcon,
  StyledTextContainer,
} from "../styles/CardGlobal.styled";
import editIcon from "../../assets/edit.svg";

type FrontCardPropTypes = {
  frontText: string;
  onSwitchModeEditCard: (text: string, editedSide: string) => void;
  onIsAnimate: () => void;
  onClick?: () => void;
};

export const FrontCard = ({
  frontText,
  onSwitchModeEditCard,
  onIsAnimate,
}: FrontCardPropTypes) => {
  const editedSide = "front";

  return (
    <StyledCardContent>
      <StyledIcon>
        <img
          src={editIcon}
          alt="editIcon"
          onClick={() => onSwitchModeEditCard(frontText, editedSide)}
        />
      </StyledIcon>
      <StyledTextContainer
        onClick={() => onIsAnimate()}
        textLength={frontText.length}
      >
        <p>{frontText}</p>
      </StyledTextContainer>
    </StyledCardContent>
  );
};
