import { CardsWrapper } from "../styles/SitesCards.styled";
import { StyledInput } from "../styles/SitesCards.styled";
import { StyledCardButton } from "../styles/buttons/CardButton";
import { StyledButtonsContainer } from "../styles/SitesCards.styled";

type FrontCardProps = {
  onFlipCard: Function;
};

export const FrontCard = ({ onFlipCard }: FrontCardProps) => {
  return (
    <CardsWrapper>
      <StyledInput type="text" placeholder="Type word.." />
      <StyledButtonsContainer>
        <StyledCardButton>Cancel</StyledCardButton>
        <StyledCardButton bg="violet" onClick={() => onFlipCard()}>
          Next
        </StyledCardButton>
      </StyledButtonsContainer>
    </CardsWrapper>
  );
};
