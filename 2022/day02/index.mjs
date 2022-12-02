import { readFileSync } from "fs";

const fileContent = readFileSync("./input.txt").toString();
const rounds = fileContent.split("\r\n");

const scoreSelection = (opponent, me) => {
  if (opponent === "A") {
    if (me === "X") {
      return 3; // Scissors for loss
    }
    if (me === "Y") {
      return 1; // Rock for draw
    }
    return 2; // Paper for win
  }
  if (opponent === "B") {
    if (me === "X") {
      return 1;
    }
    if (me === "Y") {
      return 2;
    }
    return 3;
  }
  if (me === "X") {
    return 2;
  }
  if (me === "Y") {
    return 3;
  }
  return 1;
};

const scoreResult = (result) => {
  if (result === "X") {
    return 0;
  }
  if (result === "Y") {
    return 3;
  }
  return 6;
};

const scoreRound = (round) => {
  const opponent = round[0];
  const response = round[2];
  return scoreSelection(opponent, response) + scoreResult(response);
};

const result = rounds.map(scoreRound).reduce((acc, x) => acc + x, 0);
console.log(result);
