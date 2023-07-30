import { FlashCardType, NewFlashCardType } from "./types";
import { postFlashCards } from "../API/ApiMethods";
import { StyledCardContent } from "../styles/CardGlobal.styled";
import { StyledInput } from "../styles/AddNewCard.styled";
import { StyledCardButton } from "../styles/buttons/CardButton";
import { StyledButtonsContainer } from "../styles/AddNewCard.styled";
import { StyledControlCardPanel } from "../styles/AddNewCard.styled";
import { StyledDeleteButton } from "../styles/buttons/DeleteButton";
import deleteIcon from "../../assets/deleteIcon.svg";
import { useState, useEffect, useRef } from "react";

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
  const focusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

  const addNewFlashCard = async (front: string, back: string) => {
    const newFlashCard: NewFlashCardType = {
      front: front,
      back: back,
    };

    try {
      const createdCard: any = await postFlashCards(newFlashCard);
      onSetFlashCards([...flashCards, createdCard.flashcard]);
      onSetNewCard(false);
    } catch (error) {
      console.log(error);
    }
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
        ref={focusRef}
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
