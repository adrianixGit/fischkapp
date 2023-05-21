import { StyledHeader, StyledLogo } from "./styles/Header.styled";
import addButton from "../assets/addButton.svg";
import { StyledAddButton } from "./styles/buttons/AddButton";
export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <h1>FLASHCARDS</h1>
        <p>0</p>
      </StyledLogo>
      <StyledAddButton>
        <img src={addButton} alt="button" />
      </StyledAddButton>
    </StyledHeader>
  );
};
