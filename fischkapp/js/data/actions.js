// This is an example of pure function, which updates passed state, and adds new card to it.

export const addCard = (previousState, newCard) => {
  const updatedState = {
    ...previousState,
    flashcards: [...previousState.flashcards, newCard],
  };

  // My function returns whole updated state
  return updatedState;
};
