import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { readInput } from "../util.ts";

const day = 10;
const theme = "Cathode-Ray Tube";

console.log(`Day ${day}: ${theme}\n`);

function part1(input: string): number {
  const instructions = input.split("\n");
  const cycles: number[] = buildCycles(instructions);

  return measureSignalStrength(cycles);
}

function part2(input: string): string {
  const instructions = input.split("\n");
  const cycles: number[] = buildCycles(instructions);

  // Draw to screen buffer
  let buffer = "";
  for (let i = 0; i < cycles.length; i++) {
    const spriteIndex = cycles[i] - 1;
    const pos = i % 40;

    if (pos < spriteIndex || pos > (spriteIndex + 2)) {
      buffer += ".";
    } else {
      buffer += "#";
    }

    if (pos === 39 && i < cycles.length - 1) buffer += "\n";
  }

  return buffer;
}

function buildCycles(instructions: string[]): number[] {
  const cycles = instructions
    .map((line) => line.split(" "))
    .reduce((cycles, [instruction, arg]) => {
      const register = cycles.slice(-1)[0];

      switch (instruction) {
        case "addx":
          cycles.push(register, register + (+arg));
          break;

        case "noop":
        default:
          cycles.push(register);
          break;
      }

      return cycles;
    }, [1]);

  return cycles.slice(0, -(cycles.length % 40));
}

function measureSignalStrength(cycles: number[]): number {
  let sum = 0;
  for (let i = 19; i < cycles.length; i += 40) {
    const value = cycles[i];
    sum += value * (i + 1);
  }

  return sum;
}

const input = readInput(`day_${day}_input`);
const testInput = readInput(`day_${day}_test_input`);
const test2Output = readInput(`day_${day}_test_2_output`);

assertEquals(part1(testInput), 13140);
assertEquals(part2(testInput), test2Output);

console.log("Part 1:", part1(input));
console.log(`Part 2: 👇\n${part2(input)}`);
