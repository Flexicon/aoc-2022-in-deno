import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { readInput } from "../util.ts";

const day = 5;
const theme = "Supply Stacks";

console.log(`Day ${day}: ${theme}\n`);

function part1(input: string): string {
  const [stacksInput, instructionsInput] = input.split("\n\n")
    .map((part) => part.split("\n"));

  const stackIndexes = [
    ...(stacksInput.splice(-1)[0].matchAll(/\d+/g)),
  ].map((m) => m.index as number);

  const stacks: string[][] = stackIndexes.map(() => []);
  stacksInput.forEach((line) =>
    stackIndexes
      .map((i) => line[i])
      .forEach((item, i) => item.trim() && stacks[i].push(item))
  );

  instructionsInput
    .map((line) => line.split(" ").map((el) => parseInt(el)).filter(Boolean))
    .map(([amount, src, dest]) => [amount, src - 1, dest - 1])
    .forEach(([amount, src, dest]) => {
      const itemsToMove = stacks[src].splice(0, amount).reverse();
      stacks[dest] = [...itemsToMove, ...stacks[dest]];
    });

  return stacks.map((stack) => stack[0] ?? "").join('');
}

function part2(_input: string): string {
  return "";
}

const input = readInput(`day_${day}_input`);
const testInput = readInput(`day_${day}_test_input`);

assertEquals(part1(testInput), "CMZ");
assertEquals(part2(testInput), "");

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
