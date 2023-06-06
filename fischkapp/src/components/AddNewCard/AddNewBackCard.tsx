import { flashCardsData } from "../../data/data";
import { StyledCardContent } from "../styles/CardGlobal.styled";
import { StyledInput } from "../styles/AddNewCard.styled";
import { StyledCardButton } from "../styles/buttons/CardButton";
import { StyledButtonsContainer } from "../styles/AddNewCard.styled";
import { StyledControlCardPanel } from "../styles/AddNewCard.styled";
import { StyledDeleteButton } from "../styles/buttons/DeleteButton";
import deleteIcon from "../../assets/deleteIcon.svg";
import { useState } from "react";

type BackCardProps = {
  onFlipCard: Function;
  frontText: String;
};

interface FlashCardType {
  id?: number;
  frontText: String;
  backText: String;
}

export const AddNewBackCard = ({ onFlipCard, frontText }: BackCardProps) => {
  const [backText, setBackText] = useState("");
  const [flashCards, setFlashCards] = useState<FlashCardType[]>(flashCardsData);

  const addNewFlashCard = (frontText: String, backText: String) => {
    const newFlashCard: FlashCardType = {
      id: 1,
      frontText: frontText,
      backText: backText,
    };

    setFlashCards([...flashCards, newFlashCard]);
    console.log(frontText, backText);

    console.log(flashCards);
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
