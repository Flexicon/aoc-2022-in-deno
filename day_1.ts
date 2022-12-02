import { readInput } from "./util.ts";

const day = 1;
const theme = "Counting Calories";

console.log(`Day ${day}: ${theme}\n`);

function part1(input: string): number {
  return sumTop(input, 1);
}

function part2(input: string): number {
  return sumTop(input, 3);
}

function sumTop(input: string, top: number): number {
  return input.split("\n\n")
    .map((elf) => elf.split("\n").map((line) => parseInt(line)))
    .map((lines) => lines.reduce((sum, line) => sum + line, 0))
    .sort((a, b) => b - a)
    .slice(0, top)
    .reduce((sum, value) => sum + value, 0);
}

const input = readInput(`day_${day}_input`);

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
