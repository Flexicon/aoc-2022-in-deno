console.log("Day 1: Counting Calories\n");

function findMaxAndIndex(input: number[]): [number, number] {
  const max = Math.max(...input);
  const index = input.indexOf(max) + 1;

  return [max, index];
}

function findTopThree(input: number[]): [number, number, number] {
  const sorted = [...input].sort((a, b) => a > b ? -1 : 1);
  const [first = 0, second = 0, third = 0] = sorted;

  return [first, second, third];
}

const text = await Deno.readTextFile("./input.txt");
const elvesTexts = text.split("\n\n");
const elvesItems = elvesTexts.map((t) => t.split("\n").map((cal) => +cal));
const elvesSums = elvesItems.map((items) =>
  items.reduce((sum, item) => sum + item, 0)
);

const [maxCalories, elfWithMax] = findMaxAndIndex(elvesSums);

console.log("Highest amount of calories:", maxCalories);
console.log(`Held by elf #${elfWithMax}\n`);

const [first, second, third] = findTopThree(elvesSums);

console.log(`Top 3:\n  #1: ${first}\n  #2: ${second}\n  #3: ${third}`);
console.log(`Sum: ${first + second + third}`);
