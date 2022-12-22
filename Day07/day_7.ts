import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { readInput } from "../util.ts";

const day = 7;
const theme = "No Space Left On Device";

console.log(`Day ${day}: ${theme}\n`);

class Dir {
  public size = 0;
  public children: Dir[] = [];

  constructor(
    public name: string,
    public parent: Dir | null,
  ) {}
}

function buildCommands(input: string): string[][] {
  return input.split("\n").slice(1)
    .map((line) => line.replace("$ ", "").split(" "))
    .filter(([cmd]) => cmd !== "ls");
}

function buildDirTree(commands: string[][]): Dir {
  const root = new Dir("/", null);
  let current: Dir = root;

  commands.forEach(([cmd, arg]) => {
    switch (cmd) {
      case "cd":
        if (arg === "..") {
          current = current.parent!;
        } else {
          current = current.children.find((child) => child.name === arg)!;
        }
        break;
      case "dir":
        current.children.push(new Dir(arg, current));
        break;
      default:
        current.size += parseInt(cmd) || 0;
        break;
    }
  });

  return root;
}

function recursiveDirSizes(current: Dir): number[] {
  const childDirSizes = current.children.flatMap((child) =>
    recursiveDirSizes(child)
  );

  return [calculateSize(current), ...childDirSizes];
}

function calculateSize(dir: Dir): number {
  return dir.size + dir.children
    .map((child) => calculateSize(child))
    .reduce((sum, size) => sum + size, 0);
}

function part1(input: string): number {
  const commands = buildCommands(input);
  const rootDir = buildDirTree(commands);
  const dirSizes = recursiveDirSizes(rootDir);

  return dirSizes
    .filter((size) => size <= 100_000)
    .reduce((sum, size) => sum + size, 0);
}

function part2(input: string): number {
  const commands = buildCommands(input);
  const rootDir = buildDirTree(commands);
  const dirSizes = recursiveDirSizes(rootDir);

  const totalSpace = 70_000_000;
  const requiredSpace = 30_000_000;
  const freeSpace = totalSpace - dirSizes[0];
  const requiredSize = requiredSpace - freeSpace;

  const deleteOptions = dirSizes.filter((size) => size >= requiredSize);

  return Math.min(...deleteOptions);
}

const input = readInput(`day_${day}_input`);
const testInput = readInput(`day_${day}_test_input`);

assertEquals(part1(testInput), 95437);
assertEquals(part2(testInput), 24933642);

console.log("Part 1:", part1(input));
console.log("Part 2:", part2(input));
