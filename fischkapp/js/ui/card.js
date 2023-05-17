export const createCardComponent = (params) => {
  let state = {
    isFront: true,
  };

  const handleToggleCard = () => {
    state = { ...state, isFront: !state.isFront };
    card.innerText = state.isFront ? params.front : params.back;
  };

  const card = document.createElement("div");
  card.classList.add("card");
  card.addEventListener("click", handleToggleCard);
  card.innerText = params.front;

  return card;
};
