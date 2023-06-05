import { StyledHeader, StyledLogo } from "./styles/Header.styled";
import addButton from "../assets/addButton.svg";
import { StyledAddButton } from "./styles/buttons/AddButton";
import { flashCardsData } from "../data/data";

type HeaderPropTypes = {
  onSetNewCard: Function;
};

export const Header = ({ onSetNewCard }: HeaderPropTypes) => {
  return (
    <StyledHeader>
      <StyledLogo>
        <h1>FLASHCARDS</h1>
        <p>{flashCardsData.length}</p>
      </StyledLogo>
      <StyledAddButton>
        <img src={addButton} alt="button" onClick={() => onSetNewCard(true)} />
      </StyledAddButton>
    </StyledHeader>
  );
};
