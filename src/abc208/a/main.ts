"use strict";
{
  const main = (): number | string | void => {
    const r = _io();
    const [A, B] = r.n();

    return B >= A && B <= A * 6 ? "Yes" : "No";
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
