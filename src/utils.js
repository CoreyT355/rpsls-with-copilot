import { choices } from "./choices.js";

// get a random number between min and max
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// pick a random choice from choices
export const pickRandomChoice = () => {
  return choices[getRandomNumber(0, choices.length - 1)];
};

// determine the winner between two choices
export const determineWinner = (choice1, choice2) => {
  if (choice1.name === choice2.name) {
    return 'Draw!';
  }
  if (choice1.winsAgainst.includes(choice2.name)) {
    return `${choice1.name} wins!`;
  } else {
    return `${choice2.name} wins!`;
  }
};
