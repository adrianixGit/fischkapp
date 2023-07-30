import { StyledHeader, StyledLogo } from "./styles/Header.styled";
import addButton from "../assets/addButton.svg";
import { StyledAddButton } from "./styles/buttons/AddButton";
import { useRef } from "react";

type HeaderPropTypes = {
  onSetNewCard: (isSettingCard: boolean) => void;
  onFlashCardsNumber: number;
  isNewCard: boolean;
  topRef: any;
};

export const Header = ({
  onSetNewCard,
  onFlashCardsNumber,
  isNewCard,
  topRef,
}: HeaderPropTypes) => {
  const scrollToTop = () => {
    topRef.current.scrollIntoView({
      behavior: "smooth",
    });
    console.log(topRef);
  };

  const handleAddNewCard = () => {
    scrollToTop();
    onSetNewCard(!isNewCard);
  };

  return (
    <StyledHeader ref={topRef}>
      <StyledLogo>
        <h1>FLASHCARDS</h1>
        <p>{onFlashCardsNumber}</p>
      </StyledLogo>
      <StyledAddButton>
        <img src={addButton} alt="button" onClick={() => handleAddNewCard()} />
      </StyledAddButton>
    </StyledHeader>
  );
};
