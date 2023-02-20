import { cardBody } from "./cardsBody.js";
import { generateRandomCard } from "./generateRandomCard.js";

export { generateCard };
let count = 0;
const generateCard = () => {
  const stopSecuence = setInterval(function() {
    document.getElementById("cardDiv");
    let arrayTemp = generateRandomCard();
    cardBody(arrayTemp[0], arrayTemp[1]);
    count++;
    console.log(count);
    if (count == 12) {
      setTimeout(function() {
        clearInterval(stopSecuence);
        count = 0;
      }, 5000);
    }
  }, 5000);
};
