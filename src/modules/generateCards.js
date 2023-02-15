import { cardBody } from "./cardsBody.js";
import { generateRandomCard } from "./generateRandomCard.js";

export { generateCard };
const generateCard = () => {
  const btn = document.getElementById("cardDiv");
  let arrayTemp = generateRandomCard();
  cardBody(arrayTemp[0], arrayTemp[1]);
};
