import { StyledCardContent } from "../styles/CardGlobal.styled";
import { StyledInput } from "../styles/AddNewCard.styled";
import { StyledCardButton } from "../styles/buttons/CardButton";
import { StyledButtonsContainer } from "../styles/AddNewCard.styled";
import { StyledControlCardPanel } from "../styles/AddNewCard.styled";
import { StyledDeleteButton } from "../styles/buttons/DeleteButton";
import deleteIcon from "../../assets/deleteIcon.svg";

type BackCardProps = {
  onFlipCard: Function;
};

export const AddNewBackCard = ({ onFlipCard }: BackCardProps) => {
  return (
    <StyledCardContent>
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
    </StyledCardContent>
  );
};
