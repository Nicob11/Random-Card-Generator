import { cards } from "./Cards";

export { generateRandomCard };
const generateRandomCard = () => {
  let randomHint = Math.floor(Math.random() * cards.hint.length);
  let randomValue = Math.floor(Math.random() * cards.cardValue.length);

  const hint = cards.hint[randomHint];
  const numero = cards.cardValue[randomValue];
  console.log(hint, numero);
  return [hint, numero];
};
