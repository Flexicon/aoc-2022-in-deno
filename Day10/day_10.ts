import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { readInput } from "../util.ts";

const day = 10;
const theme = "TBD";

console.log(`Day ${day}: ${theme}\n`);

function part1(input: string): number {
  const instructions = input.split("\n");

  const cycles: number[] = instructions
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

  return measureSignalStrength(cycles);
}

function part2(_input: string): number {
  return 0;
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

assertEquals(part1(testInput), 13140);
assertEquals(part2(testInput), 0);

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
