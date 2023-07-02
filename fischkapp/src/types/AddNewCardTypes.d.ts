type AddNewCardPropType = {
  onSetNewCard: (isSettingCard: boolean) => void;
  flashCards: FlashCardType[];
  onSetFlashCards: (isGetingObject: FlashCardType[]) => void;
};

type BackCardProps = {
  onFlipCard: () => void;
  frontText: string;
  flashCards: FlashCardType[];
  onSetFlashCards: (isGetingObject: FlashCardType[]) => void;
  onSetNewCard: (isSettingCard: boolean) => void;
};

interface FlashCardType {
  id: number;
  frontText: string;
  backText: string;
}

type FrontCardProps = {
  onFlipCard: () => void;
  onSetNewCard: (isSettingCard: boolean) => void;
  onSetFrontText: (frontText: string) => void;
};
