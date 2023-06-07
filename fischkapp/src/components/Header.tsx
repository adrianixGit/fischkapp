import { StyledHeader, StyledLogo } from "./styles/Header.styled";
import addButton from "../assets/addButton.svg";
import { StyledAddButton } from "./styles/buttons/AddButton";

type HeaderPropTypes = {
  onSetNewCard: Function;
  onFlashCardsNumber: number;
};

export const Header = ({
  onSetNewCard,
  onFlashCardsNumber,
}: HeaderPropTypes) => {
  return (
    <StyledHeader>
      <StyledLogo>
        <h1>FLASHCARDS</h1>
        <p>{onFlashCardsNumber}</p>
      </StyledLogo>
      <StyledAddButton>
        <img src={addButton} alt="button" onClick={() => onSetNewCard(true)} />
      </StyledAddButton>
    </StyledHeader>
  );
};
