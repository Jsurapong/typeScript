import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => row.split(","));

let manUnitedWins = 0;

const homeWin = "H";
const awayWin = "A";
const draw = "D";

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === homeWin) {
    manUnitedWins++;
  }

  if (match[2] === "Man United" && match[5] === awayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
