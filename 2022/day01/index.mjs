import { readFileSync } from "fs";

const fileContent = readFileSync("./input.txt").toString();
const rawElves = fileContent.split("\r\n\r\n");

const parseElf = (input) => {
  const lines = input.split("\r\n");
  return lines.reduce((acc, x) => acc + parseInt(x, 10), 0);
};

const result = rawElves
  .map(parseElf)
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((acc, x) => acc + x, 0);

console.log(result);
