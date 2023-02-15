/* eslint-disable */
// import { cardBody } from "../src/modules/cardsBody.js";
// import { cards } from "./modules/Cards";
// import { generateRandomCard } from "./modules/generateRandomCard";
import "bootstrap";
import "./style.css";
import { generateCard } from "../src/modules/generateCards.js";

window.onload = function() {
  //write your code here
  const buttonGenerator = document.getElementById("randomCard");
  buttonGenerator.addEventListener("click", generateCard);
};
