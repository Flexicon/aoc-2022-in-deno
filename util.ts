export function readInput(): string {
  return Deno.readTextFileSync("./input.txt");
}
