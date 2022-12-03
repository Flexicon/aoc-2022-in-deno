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

const counters: { [key in Shape]: Shape } = {
  "A": "C",
  "B": "A",
  "C": "B",
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
    .map(([opponent, player]) => [opponent, movesToShape[player]])
    .reduce(sumPoints, 0);
}

function part2(input: string): number {
  return input.split("\n")
    .map((line) => line.split(" ") as [Shape, PlayerMove])
    .map(([opponent, player]) => {
      const playerShape = ((move: PlayerMove, opponent: Shape) => {
        switch (move) {
          case "X":
            return counters[opponent];
          case "Y":
            return opponent;
          case "Z":
            return counteredBy[opponent];
        }
      })(player, opponent);

      return [opponent, playerShape];
    })
    .reduce(sumPoints, 0);
}

function sumPoints(sum: number, [opponent, player]: Shape[]): number {
  if (opponent === player) {
    sum += DRAW_POINTS;
  } else if (counteredBy[opponent] === player) {
    sum += WIN_POINTS;
  }

  return sum + shapeScores[player];
}

const input = readInput(`day_${day}_input`);
const testInput = readInput(`day_${day}_test_input`);

assertEquals(part1(testInput), 15);
assertEquals(part2(testInput), 12);

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
