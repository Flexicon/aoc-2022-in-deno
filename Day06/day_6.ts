import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { readInput } from "../util.ts";

const day = 6;
const theme = "TBD";

console.log(`Day ${day}: ${theme}\n`);

function part1(_input: string): number {
  return 0;
}

function part2(_input: string): number {
  return 0;
}

const testInput1 = "bvwbjplbgvbhsrlpgdmjqwftvncz";
assertEquals(part1(testInput1), 5);
assertEquals(part2(testInput1), 0);

const testInput2 = "nppdvjthqldpwncqszvftbrmjlhg";
assertEquals(part1(testInput2), 6);
assertEquals(part2(testInput2), 0);

const testInput3 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
assertEquals(part1(testInput3), 10);
assertEquals(part2(testInput3), 0);

const input = readInput(`day_${day}_input`);
console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
