import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { readInput } from "./util.ts";

const day = 3;
const theme = "Rucksack Reorganization";

console.log(`Day ${day}: ${theme}\n`);

function part1(input: string): number {
  return input.split("\n")
    .map((rucksack) => {
      const half = rucksack.length / 2;
      return [rucksack.slice(0, half), rucksack.slice(half)];
    })
    .map(([firstHalf, secondHalf]) =>
      [...firstHalf].find((char) => secondHalf.includes(char)) as string
    )
    .reduce((sum, item) => sum + priority(item), 0);
}

function part2(input: string): number {
  const rucksacks = input.split("\n");

  const groups = [];
  for (let i = 0; i < rucksacks.length; i += 3) {
    groups.push(rucksacks.slice(i, i + 3));
  }

  return groups.map(([first, second, third]) => {
    return [...first].find((char) =>
      second.includes(char) && third.includes(char)
    ) as string;
  }).reduce((sum, item) => sum + priority(item), 0);
}

function priority(item: string): number {
  const code = item.charCodeAt(0);
  return code < 97 ? code - 38 : code - 96;
}

const input = readInput(`day_${day}_input`);
const testInput = readInput(`day_${day}_test_input`);

assertEquals(part1(testInput), 157);
assertEquals(part2(testInput), 70);

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
