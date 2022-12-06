import { readFileSync } from "fs";

const fileContent = readFileSync("./input.txt").toString();
const sections = fileContent.split("\r\n\r\n");
const crateLines = sections[0].split("\r\n");

const instructions = sections[1].split("\r\n");

const organiseCrates = (crateLines) => {
  const stacks = crateLines[crateLines.length - 1].split("   ").map((x) => []);
  for (let row = crateLines.length - 2; row >= 0; row--) {
    for (let column = 0; column < stacks.length; column++) {
      const crate = crateLines[row][1 + column * 4];
      if (crate && crate != " ") {
        stacks[column].push(crate);
      }
    }
  }
  return stacks;
};

const applyInstruction = (instruction, stacks) => {
  const [count, firstColumn, secondColumn] = instruction.match(/\d+/g);
  const cratesToMove = stacks[firstColumn - 1].slice(-count);
  stacks[firstColumn - 1] = stacks[firstColumn - 1].slice(0, -count);
  stacks[secondColumn - 1] = [...stacks[secondColumn - 1], ...cratesToMove];
};

const stacks = organiseCrates(crateLines);
instructions.forEach((x) => applyInstruction(x, stacks));
console.log(stacks);
console.log(stacks.map((x) => x.pop()).join(""));
