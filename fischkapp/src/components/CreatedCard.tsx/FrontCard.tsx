import {
  StyledCardContent,
  StyledIcon,
  StyledTextContainer,
} from "../styles/CardGlobal.styled";
import editIcon from "../../assets/edit.svg";

export const FrontCard = ({
  frontText,
  onSwitchModeEditCard,
  onIsAnimate,
}: FrontCardPropTypes) => {
  const editedSide = "frontText";

  return (
    <StyledCardContent>
      <StyledIcon>
        <img
          src={editIcon}
          alt="editIcon"
          onClick={() => onSwitchModeEditCard(frontText, editedSide)}
        />
      </StyledIcon>
      <StyledTextContainer onClick={() => onIsAnimate()}>
        <p>{frontText}</p>
      </StyledTextContainer>
    </StyledCardContent>
  );
};
