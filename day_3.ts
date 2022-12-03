import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { readInput } from "./util.ts";

const day = 3;
const theme = "Rucksack Reorganization";

console.log(`Day ${day}: ${theme}\n`);

function part1(_input: string): number {
  return 0;
}

function part2(_input: string): number {
  return 0;
}

const input = readInput(`day_${day}_input`);
const testInput = readInput(`day_${day}_test_input`);

assertEquals(part1(testInput), 0);
assertEquals(part2(testInput), 0);

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
