import { StyledHeader, StyledLogo } from "./styles/Header.styled";
import addButton from "../assets/addButton.svg";
import { StyledAddButton } from "./styles/buttons/AddButton";
import { flashCardsData } from "../data/data";
export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <h1>FLASHCARDS</h1>
        <p>{flashCardsData.length}</p>
      </StyledLogo>
      <StyledAddButton>
        <img src={addButton} alt="button" />
      </StyledAddButton>
    </StyledHeader>
  );
};
