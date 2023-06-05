import { flashCardsData } from "../data/data";
import { AddNewCard } from "./AddNewCard";
import { StyledCardList } from "./styles/CardList.styled";
import { FrontCard } from "./CreatedCard.tsx/FrontCard";
import { CreatedCard } from "./CreatedCrad";

export const CardList = () => {
  return (
    <StyledCardList>
      {flashCardsData.map((flashCard) => (
        <CreatedCard
          frontText={flashCard.frontText}
          backText={flashCard.backText}
        />
      ))}
    </StyledCardList>
  );
};

//Musze stworzyc nowy plik ktory bedzie bardzo podobny do AddNewCard tylko ze ten bedzie dzialal na stworzonej juz karcie i bedzie pokazywal przod albo tyl,  stworzonej juz karty