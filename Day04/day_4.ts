import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { readInput } from "../util.ts";

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

function part2(input: string): number {
  const semiOverlappedPairs = input.split("\n")
    .map((line) => line.split(","))
    .map((pairs) => pairs.map((range) => range.split("-").map(toInt)))
    .filter(([range1, range2]) => isEitherRangeSemiOverlapped(range1, range2));

  return semiOverlappedPairs.length;
}

function toInt(value: string): number {
  return parseInt(value);
}

function isEitherRangeFullyOverlapped(
  range1: number[],
  range2: number[],
): boolean {
  return isFullyOverlappedBy(range1, range2) ||
    isFullyOverlappedBy(range2, range1);
}

function isFullyOverlappedBy([x1, y1]: number[], [x2, y2]: number[]): boolean {
  return x2 <= x1 && y2 >= y1;
}

function isEitherRangeSemiOverlapped(
  range1: number[],
  range2: number[],
): boolean {
  return isSemiOverlappedBy(range1, range2) ||
    isSemiOverlappedBy(range2, range1);
}

function isSemiOverlappedBy([x1, y1]: number[], [x2, y2]: number[]): boolean {
  return (x2 <= y1 && y2 >= y1) || (y2 >= x1 && x2 <= x1);
}

const input = readInput(`day_${day}_input`);
const testInput = readInput(`day_${day}_test_input`);

assertEquals(part1(testInput), 2);
assertEquals(part2(testInput), 4);

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
