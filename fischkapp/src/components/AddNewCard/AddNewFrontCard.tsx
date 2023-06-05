// import { CardWrapper } from "../styles/SitesCards.styled";
import { StyledInput } from "../styles/AddNewCard.styled";
import { StyledCardButton } from "../styles/buttons/CardButton";
import { StyledCardContent } from "../styles/CardGlobal.styled";
import { StyledButtonsContainer } from "../styles/AddNewCard.styled";

type FrontCardProps = {
  onFlipCard: Function;
  onSetNewCard: Function;
};

export const AddNewFrontCard = ({
  onFlipCard,
  onSetNewCard,
}: FrontCardProps) => {
  return (
    <StyledCardContent>
      <StyledInput type="text" placeholder="Type word.." />
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
