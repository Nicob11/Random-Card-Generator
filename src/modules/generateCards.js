import { cardBody } from "./cardsBody.js";

export { generateCard };
const generateCard = event => {
  const btn = document.getElementById("carddiv");
  btn.innerHTML = `${cardBody}`;
};
