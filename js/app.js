import { createState } from "./data/createState.js";
import { createCardComponent } from "./ui/card.js";
import { addCard } from "./data/actions.js";

document.addEventListener("DOMContentLoaded", () => {
  // Example of how we can create app state responsible for holding data
  let appState = createState();

  // Example of how we can create UI component using reusable function
  const newCardData = { front: "Good morning", back: "Dzień dobry" };
  const card = createCardComponent(newCardData);

  // Example of how we can add card to our state
  const updatedAppState = addCard(appState, newCardData);
  appState = updatedAppState;

  const app = document.getElementById("app");

  // Example of how to display created card in our UI
  app.append(card);

  console.log(`You have ${appState.flashcards.length} card/s.`);
});
