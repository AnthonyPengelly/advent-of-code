import { readFileSync } from "fs";

const fileContent = readFileSync("./input.txt").toString();
const rucksacks = fileContent.split("\r\n");

const getSharedCharacter = (rucksack) => {
  const middle = Math.floor(rucksack.length / 2);
  const firstCompartment = rucksack.substr(0, middle);
  const secondCompartment = rucksack.substr(middle);
  return Array.from(firstCompartment).find((x) =>
    secondCompartment.includes(x)
  );
};

const getCharacterValue = (character) => {
  if (character === String(character).toUpperCase()) {
    return character.charCodeAt(0) - "A".charCodeAt(0) + 27;
  }
  return character.charCodeAt(0) - "a".charCodeAt(0) + 1;
};

const part1 = () => {
  console.log(
    rucksacks
      .map(getSharedCharacter)
      .map(getCharacterValue)
      .reduce((acc, x) => acc + x, 0)
  );
};

const getBadge = (group) => {
  return Array.from(group[0])
    .filter((x) => group[1].includes(x))
    .find((x) => group[2].includes(x));
};

const getGroups = (rucksacks) => {
  const groups = [];
  for (let i = 0; i < rucksacks.length; i += 3) {
    groups.push(rucksacks.slice(i, i + 3));
  }
  return groups;
};

const part2 = () => {
  console.log(
    getGroups(rucksacks)
      .map(getBadge)
      .map(getCharacterValue)
      .reduce((acc, x) => acc + x, 0)
  );
};

part1();
part2();
