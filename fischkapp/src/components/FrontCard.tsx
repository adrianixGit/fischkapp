import { StyledCard } from "./styles/Card.styled";
import { StyledInput } from "./styles/Card.styled";
import { StyledCardButton } from "./styles/buttons/CardButton";
import { StyledButtonsContainer } from "./styles/Card.styled";

type FrontCardProps = {
  getCardStatus: Function;
  cardStatus: boolean;
};

export const FrontCard = ({ getCardStatus, cardStatus }: FrontCardProps) => {
  return (
    <StyledCard cardStatus={cardStatus}>
      <StyledInput type="text" placeholder="Type word.." />
      <StyledButtonsContainer>
        <StyledCardButton>Cancel</StyledCardButton>
        <StyledCardButton bg="violet" onClick={() => getCardStatus(false)}>
          Next
        </StyledCardButton>
      </StyledButtonsContainer>
    </StyledCard>
  );
};
