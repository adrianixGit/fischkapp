type CreatedCardPropType = {
  frontText: string;
  backText: string;
  onChangeCardValue: (id: number, text: string, cardSide: string) => void;
  id: number;
  onHandleDeleteCard: (id: number) => void;
};

type BackCardPropTypes = {
  backText: string;
  onSwitchModeEditCard: (text: string, editedSide: string) => void;
  onIsAnimate: () => void;
  onClick?: () => void;
};

type EditCardPropType = {
  cardTextToEdit: string;
  onCancelEditCard: () => void;
  editedSide: string;
  onChangeCardValue: (id: number, text: string, cardSide: string) => void;
  id: number;
  onHandleDeleteCard: (id: number) => void;
};

type FrontCardPropTypes = {
  frontText: string;
  onSwitchModeEditCard: (text: string, editedSide: string) => void;
  onIsAnimate: () => void;
  onClick?: () => void;
};
