/* eslint-disable */
import "bootstrap";
import "./style.css";
import { cardsIcon } from "./modules/cardsIcon.js";
import { cardBody } from "../src/modules/cardsBody.js";
import { generateCard } from "../src/modules/generateCards.js";
import { cardsIcon } from "./modules/cardsIcon.js";

window.onload = function() {
  //write your code here
  const buttonGenerator = document.getElementById("randomCard");
  buttonGenerator.addEventListener("click", generateCard);

  console.log(cardsIcon);
};
