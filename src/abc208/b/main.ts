"use strict";
{
  const main = (): number | string | void => {
    const r = _io();
    let [p] = r.n();

    // 1! = 1
    // 2! = 2
    // 3! = 6
    // 4! = 24
    // 5! = 120
    // 6! = 720
    // 7! = 5040
    // 8! = 40320
    // 9! = 362880
    // 10! = 3628800
    let count = 0;
    while (p > 0) {
      if (p >= 3628800) {
        p -= 3628800;
      } else if (p >= 362880) {
        p -= 362880;
      } else if (p >= 40320) {
        p -= 40320;
      } else if (p >= 5040) {
        p -= 5040;
      } else if (p >= 720) {
        p -= 720;
      } else if (p >= 120) {
        p -= 120;
      } else if (p >= 24) {
        p -= 24;
      } else if (p >= 6) {
        p -= 6;
      } else if (p >= 2) {
        p -= 2;
      } else {
        p -= 1;
      }

      count++;
    }
    return count;
  };

  const _io = () => {
    const str: string = require("fs").readFileSync("/dev/stdin", "utf8");
    const lines = str.trim().split("\n");
    const s = (): string[] => lines.shift().split(" ");
    const n = (): number[] => s().map(Number);
    const nla = (): number[][] =>
      lines.map((line) => line.split(" ").map(Number));

    return { lines, s, n, nla };
  };

  const _res = main();

  if (typeof _res === "number" || typeof _res === "string") console.log(_res);
}
