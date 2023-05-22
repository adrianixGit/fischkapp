import { StyledBackCard } from "./styles/BackCard.styled";
import { StyledInput } from "./styles/Card.styled";
import { StyledCardButton } from "./styles/buttons/CardButton";
import { StyledButtonsContainer } from "./styles/Card.styled";
import { StyledControlCardPanel } from "./styles/BackCard.styled";
import { StyledDeleteButton } from "./styles/buttons/DeleteButton";
import deleteIcon from "../assets/deleteIcon.svg";

type BackCardProps = {
  getCardStatus: Function;
  cardStatus: boolean;
};

export const BackCard = ({ getCardStatus, cardStatus }: BackCardProps) => {
  return (
    <StyledBackCard cardStatus={cardStatus}>
      <StyledControlCardPanel>
        <p>Text from input</p>
        <StyledDeleteButton>
          <img src={deleteIcon} alt="delete" />
        </StyledDeleteButton>
      </StyledControlCardPanel>
      <StyledInput type="text" placeholder="Type word.." />
      <StyledButtonsContainer>
        <StyledCardButton onClick={() => getCardStatus(true)}>
          Back
        </StyledCardButton>
        <StyledCardButton bg="violet">Save</StyledCardButton>
      </StyledButtonsContainer>
    </StyledBackCard>
  );
};
