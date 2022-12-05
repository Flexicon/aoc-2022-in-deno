import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { readInput } from "../util.ts";

const day = 5;
const theme = "Supply Stacks";

console.log(`Day ${day}: ${theme}\n`);

function part1(_input: string): string {
  return '';
}

function part2(_input: string): string {
  return '';
}

const input = readInput(`day_${day}_input`);
const testInput = readInput(`day_${day}_test_input`);

assertEquals(part1(testInput), 'CMZ');
assertEquals(part2(testInput), '');

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
