import { readFileSync } from "fs";

const fileContent = readFileSync("./input.txt").toString();
const pairs = fileContent.split("\r\n");

const pairIsFullyContained = (pair) => {
  const elfStrings = pair.split(",");
  const elves = elfStrings.map((x) => x.split("-"));
  if (
    parseInt(elves[0][1]) < parseInt(elves[1][0]) ||
    parseInt(elves[1][1]) < parseInt(elves[0][0])
  ) {
    return false;
  }
  return true;
};

console.log(pairs.filter(pairIsFullyContained).length);
