import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { readInput } from "./util.ts";

const day = 4;
const theme = "Camp Cleanup";

console.log(`Day ${day}: ${theme}\n`);

function part1(input: string): number {
  const fullyOverlappedPairs = input.split("\n")
    .map((line) => line.split(","))
    .map((pairs) => pairs.map((range) => range.split("-").map(toInt)))
    .filter(([range1, range2]) => isEitherRangeFullyOverlapped(range1, range2));

  return fullyOverlappedPairs.length;
}

function part2(_input: string): number {
  return 0;
}

function toInt(value: string): number {
  return parseInt(value);
}

function isEitherRangeFullyOverlapped(
  range1: number[],
  range2: number[],
): boolean {
  return isFullyOverlapped(range1, range2) || isFullyOverlapped(range2, range1);
}

function isFullyOverlapped([x1, y1]: number[], [x2, y2]: number[]): boolean {
  return x2 <= x1 && y2 >= y1;
}

const input = readInput(`day_${day}_input`);
const testInput = readInput(`day_${day}_test_input`);

assertEquals(part1(testInput), 2);
assertEquals(part2(testInput), 0);

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
