import { StyledHeader, StyledLogo } from "./styles/Header.styled";
import addButton from "../assets/addButton.svg";
import { StyledAddButton } from "./styles/buttons/AddButton";

type HeaderPropTypes = {
  onSetNewCard: (isSettingCard: boolean) => void;
  onFlashCardsNumber: number;
  isNewCard: boolean;
};

export const Header = ({
  onSetNewCard,
  onFlashCardsNumber,
  isNewCard,
}: HeaderPropTypes) => {
  return (
    <StyledHeader>
      <StyledLogo>
        <h1>FLASHCARDS</h1>
        <p>{onFlashCardsNumber}</p>
      </StyledLogo>
      <StyledAddButton>
        <img
          src={addButton}
          alt="button"
          onClick={() => onSetNewCard(!isNewCard)}
        />
      </StyledAddButton>
    </StyledHeader>
  );
};
