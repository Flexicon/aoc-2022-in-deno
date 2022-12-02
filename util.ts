export function readInput(file: string): string {
  return Deno.readTextFileSync(`./${file}.txt`);
}
