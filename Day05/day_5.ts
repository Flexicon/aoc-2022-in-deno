import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { readInput } from "../util.ts";

const day = 5;
const theme = "Supply Stacks";

console.log(`Day ${day}: ${theme}\n`);

function part1(input: string): string {
  const [stacksInput, instructionsInput] = input.split("\n\n")
    .map((part) => part.split("\n"));

  return performInstructions(
    buildStacks(stacksInput),
    instructionsInput,
  ).map((stack) => stack[0] ?? "").join("");
}

function part2(input: string): string {
  const [stacksInput, instructionsInput] = input.split("\n\n")
    .map((part) => part.split("\n"));

  return performInstructions(
    buildStacks(stacksInput),
    instructionsInput,
    false,
  ).map((stack) => stack[0] ?? "").join("");
}

function buildStacks(stacksInput: string[]): string[][] {
  const stackIndexes = [
    ...(stacksInput.splice(-1)[0].matchAll(/\d+/g)),
  ].map((m) => m.index as number);

  const stacks: string[][] = stackIndexes.map(() => []);
  stacksInput.forEach((line) =>
    stackIndexes
      .map((i) => line[i])
      .forEach((item, i) => item.trim() && stacks[i].push(item))
  );

  return stacks;
}

function performInstructions(
  stacks: string[][],
  instructionsInput: string[],
  reverseStackMove = true,
): string[][] {
  const stacksCopy = [...(stacks.map((stack) => [...stack]))];

  instructionsInput
    .map((line) => line.split(" ").map((el) => parseInt(el)).filter(Boolean))
    .map(([amount, src, dest]) => [amount, src - 1, dest - 1])
    .forEach(([amount, src, dest]) => {
      const movedItems = stacksCopy[src].splice(0, amount);
      if (reverseStackMove) movedItems.reverse();

      stacksCopy[dest] = [...movedItems, ...stacksCopy[dest]];
    });

  return stacksCopy;
}

const input = readInput(`day_${day}_input`);
const testInput = readInput(`day_${day}_test_input`);

assertEquals(part1(testInput), "CMZ");
assertEquals(part2(testInput), "MCD");

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
