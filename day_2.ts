import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { readInput } from "./util.ts";

const day = 2;
const theme = "Rock Paper Scissors";

console.log(`Day ${day}: ${theme}\n`);

type Shape = "A" | "B" | "C";
type PlayerMove = "X" | "Y" | "Z";

const WIN_POINTS = 6, DRAW_POINTS = 3;

const shapeScores: { [key in Shape]: number } = {
  "A": 1,
  "B": 2,
  "C": 3,
};

const counteredBy: { [key in Shape]: Shape } = {
  "A": "B",
  "B": "C",
  "C": "A",
};

function part1(input: string): number {
  const movesToShape: { [key in PlayerMove]: Shape } = {
    "X": "A",
    "Y": "B",
    "Z": "C",
  };

  return input.split("\n")
    .map((line) => line.split(" ") as [Shape, PlayerMove])
    .reduce((sum, [opponentShape, playerMove]) => {
      const playerShape = movesToShape[playerMove];

      if (opponentShape === playerShape) {
        sum += DRAW_POINTS;
      } else if (counteredBy[opponentShape] === playerShape) {
        sum += WIN_POINTS;
      }

      return sum + shapeScores[playerShape];
    }, 0);
}

function part2(_input: string): number {
  return 0;
}

const input = readInput(`day_${day}_input`);
const testInput = readInput(`day_${day}_test_input`);

assertEquals(part1(testInput), 15);
assertEquals(part2(testInput), 0);

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
