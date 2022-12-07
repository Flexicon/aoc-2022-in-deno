import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { readInput } from "../util.ts";

const day = 6;
const theme = "Tuning Trouble";

console.log(`Day ${day}: ${theme}\n`);

function part1(input: string): number {
  return indexOfFirstUniqueChain(input, 4);
}

function part2(input: string): number {
  const keyIndex = indexOfFirstUniqueChain(input, 4);

  return indexOfFirstUniqueChain(input.slice(keyIndex), 14) + keyIndex;
}

function indexOfFirstUniqueChain(input: string, length: number): number {
  for (let i = length; i < input.length; i++) {
    const uniqueChars = new Set(input.split("").slice(i - length, i));
    if (uniqueChars.size === length) {
      return i;
    }
  }

  return 0;
}

const testInput1 = "bvwbjplbgvbhsrlpgdmjqwftvncz";
assertEquals(part1(testInput1), 5);
assertEquals(part2(testInput1), 23);

const testInput2 = "nppdvjthqldpwncqszvftbrmjlhg";
assertEquals(part1(testInput2), 6);
assertEquals(part2(testInput2), 23);

const testInput3 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
assertEquals(part1(testInput3), 10);
assertEquals(part2(testInput3), 29);

const input = readInput(`day_${day}_input`);
console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
