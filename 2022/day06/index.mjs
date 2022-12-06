import { readFileSync } from "fs";

const input = readFileSync("./input.txt").toString();

const getLastSequenceMarkerLocation = (sequence) => {
  let lastFourCharacters = [];
  for (let index = 0; index < sequence.length; index++) {
    const element = input[index];
    lastFourCharacters.push(element);
    if (lastFourCharacters.length > 14) {
      lastFourCharacters = lastFourCharacters.slice(1);
    }
    if (lastFourCharacters.length !== 14) {
      continue;
    }
    if ([...new Set(lastFourCharacters)].length === 14) {
      return index + 1;
    }
  }
};
console.log(getLastSequenceMarkerLocation(input));
