import { Card } from "./Card";
import { flashCardsData } from "../data/data";
import { StyledCardList } from "./styles/CardList.styled";

export const CardList = () => {
  return (
    <StyledCardList>
      {flashCardsData.map((flashCard) => (
        <Card key={flashCard.id} />
      ))}
    </StyledCardList>
  );
};
