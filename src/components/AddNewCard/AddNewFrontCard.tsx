import { StyledInput } from "../styles/AddNewCard.styled";
import { StyledCardButton } from "../styles/buttons/CardButton";
import { StyledCardContent } from "../styles/CardGlobal.styled";
import { StyledButtonsContainer } from "../styles/AddNewCard.styled";

type FrontCardProps = {
  onFlipCard: () => void;
  onSetNewCard: (isSettingCard: boolean) => void;
  onSetFrontText: (frontText: string) => void;
  frontText: string;
};

export const AddNewFrontCard = ({
  onFlipCard,
  onSetNewCard,
  onSetFrontText,
  frontText,
}: FrontCardProps) => {
  return (
    <StyledCardContent>
      <StyledInput
        type="text"
        placeholder="Type word.."
        value={frontText}
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
