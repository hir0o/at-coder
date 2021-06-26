"use strict";
{
  const main = (): number | string | void => {
    const r = _io();
    const n = r.n();
    const nums = r.ns();
    const { abs } = Math;

    // 符号を確かめる
    let changeCount = 0;
    let sum = nums[0];

    for (let i = 1; i < n; i++) {
      if (sum > 0 && sum + nums[i] > 0) {
        changeCount += abs(sum + nums[i]) + 1;
        sum = -1;
      } else if (sum < 0 && sum + nums[i] < 0) {
        changeCount += abs(sum + nums[i]) + 1;
        sum = 1;
      } else if (sum + nums[i] === 0) {
        changeCount += 1;
        if (sum > 0) sum = -1;
        if (sum < 0) sum = 1;
      } else {
        sum += nums[i];
      }
    }

    return changeCount;
  };

  const _io = () => {
    const str: string = require("fs").readFileSync("/dev/stdin", "utf8");
    const lines = str.trim().split("\n");
    const s = (): string => lines.shift() || "";
    const n = (): number => Number(s());
    const ss = (): string[] => s().split(" ");
    const ns = (): number[] => ss().map(Number);
    const nls = (): number[] => lines.map(Number);
    const nla = (): number[][] =>
      lines.map((line) => line.split(" ").map(Number));

    return { lines, s, n, ss, ns, nls, nla };
  };

  const _res = main();

  if (typeof _res === "number" || typeof _res === "string") console.log(_res);
}
