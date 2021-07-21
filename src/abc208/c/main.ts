"use strict";
{
  const main = (): number | string | void => {
    const r = _io();
    const [N, K] = r.s().map(BigInt);
    const nums = r.s().map(BigInt);

    // 残りのお菓子の個数
    const mod = Number(K % N);
    // 全員に配るお菓子の個数
    const count = Number(K / N);

    const great = [...nums].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

    for (let i = 0; i < N; i++) {
      if (nums[i] <= great[mod - 1]) {
        console.log(count + 1);
      } else {
        console.log(count);
      }
    }
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
