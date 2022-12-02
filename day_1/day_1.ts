console.log("Day 1: Counting Calories\n");

function readInput(): string {
  return Deno.readTextFileSync("./input.txt");
}

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

const input = readInput();

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
