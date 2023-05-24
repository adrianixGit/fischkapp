import { CardsWrapper } from "../styles/SitesCards.styled";
import { StyledInput } from "../styles/SitesCards.styled";
import { StyledCardButton } from "../styles/buttons/CardButton";
import { StyledButtonsContainer } from "../styles/SitesCards.styled";
import { StyledControlCardPanel } from "../styles/SitesCards.styled";
import { StyledDeleteButton } from "../styles/buttons/DeleteButton";
import deleteIcon from "../../assets/deleteIcon.svg";

type BackCardProps = {
  onFlipCard: Function;
};

export const BackCard = ({ onFlipCard }: BackCardProps) => {
  return (
    <CardsWrapper>
      <StyledControlCardPanel>
        <p>Text from input</p>
        <StyledDeleteButton>
          <img src={deleteIcon} alt="delete" />
        </StyledDeleteButton>
      </StyledControlCardPanel>
      <StyledInput type="text" placeholder="Type word.." />
      <StyledButtonsContainer>
        <StyledCardButton onClick={() => onFlipCard()}>Back</StyledCardButton>
        <StyledCardButton bg="violet">Save</StyledCardButton>
      </StyledButtonsContainer>
    </CardsWrapper>
  );
};
