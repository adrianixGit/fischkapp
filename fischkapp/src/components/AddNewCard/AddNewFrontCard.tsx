// import { CardWrapper } from "../styles/SitesCards.styled";
import { StyledInput } from "../styles/AddNewCard.styled";
import { StyledCardButton } from "../styles/buttons/CardButton";
import { StyledCardContent } from "../styles/CardGlobal.styled";
import { StyledButtonsContainer } from "../styles/AddNewCard.styled";

type FrontCardProps = {
  onFlipCard: Function;
  onSetNewCard: Function;
  onSetFrontText: Function;
};

export const AddNewFrontCard = ({
  onFlipCard,
  onSetNewCard,
  onSetFrontText,
}: FrontCardProps) => {
  return (
    <StyledCardContent>
      <StyledInput
        type="text"
        placeholder="Type word.."
        onChange={(e) => onSetFrontText(e.target.value)}
      />
      <StyledButtonsContainer>
        <StyledCardButton onClick={() => onSetNewCard(false)}>
          Cancel
        </StyledCardButton>
        <StyledCardButton bg="violet" onClick={() => onFlipCard()}>
          Next
        </StyledCardButton>
      </StyledButtonsContainer>
    </StyledCardContent>
  );
};
