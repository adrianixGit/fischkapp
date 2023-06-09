import { FlashCardType } from "./types";
import { StyledCardContent } from "../styles/CardGlobal.styled";
import { StyledInput } from "../styles/AddNewCard.styled";
import { StyledCardButton } from "../styles/buttons/CardButton";
import { StyledButtonsContainer } from "../styles/AddNewCard.styled";
import { StyledControlCardPanel } from "../styles/AddNewCard.styled";
import { StyledDeleteButton } from "../styles/buttons/DeleteButton";
import deleteIcon from "../../assets/deleteIcon.svg";
import { useState } from "react";

type BackCardProps = {
  onFlipCard: () => void;
  frontText: string;
  flashCards: FlashCardType[];
  onSetFlashCards: (isGetingObject: FlashCardType[]) => void;
  onSetNewCard: (isSettingCard: boolean) => void;
};

export const AddNewBackCard = ({
  onFlipCard,
  frontText,
  flashCards,
  onSetFlashCards,
  onSetNewCard,
}: BackCardProps) => {
  const [backText, setBackText] = useState("");
  const addNewFlashCard = (front: string, back: string) => {
    const newFlashCard: FlashCardType = {
      id: Date.now(),
      front: front,
      back: back,
    };

    onSetFlashCards([...flashCards, newFlashCard]);
    onSetNewCard(false);
  };

  return (
    <StyledCardContent>
      <StyledControlCardPanel>
        <p>{frontText}</p>
        <StyledDeleteButton>
          <img src={deleteIcon} alt="delete" />
        </StyledDeleteButton>
      </StyledControlCardPanel>
      <StyledInput
        type="text"
        placeholder="Type word.."
        onChange={(e) => setBackText(e.target.value)}
      />
      <StyledButtonsContainer>
        <StyledCardButton onClick={() => onFlipCard()}>Back</StyledCardButton>
        <StyledCardButton
          bg="violet"
          onClick={() => addNewFlashCard(frontText, backText)}
        >
          Save
        </StyledCardButton>
      </StyledButtonsContainer>
    </StyledCardContent>
  );
};
