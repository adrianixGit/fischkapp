import { StyledHeader } from "./styles/Header.styled";
export const Header = () => {
  return (
    <StyledHeader>
      <div className="header__logo">
        <h1 className="header__logoName">FLASHCARDS</h1>
        <p className="header__cardsNumber">0</p>
      </div>
      <button>
        <p></p>
      </button>
    </StyledHeader>
  );
};
