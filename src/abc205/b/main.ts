"use strict";
{
  const main = (): number | string | void => {
    const r = _io();
    const n = r.n()
    const nums = r.ns().sort((a, b) => a - b)
    let flag = true;


    for (let i = 0; i < n; i++) {
      if(nums[i] !== i + 1) flag = false;
    }

    return flag ? "Yes" : "No";
  };

  const _io = () => {
    const str: string = require("fs").readFileSync("/dev/stdin", "utf8");
    const lines = str.trim().split("\n");
    const s = (): string => lines.shift() || "";
    const n = (): number => Number(s());
    const ss = (): string[] => s().split(" ");
    const ns = (): number[] => ss().map(Number);
    const nls = (): number[] => lines.map(Number);
    const nla = (): number[][] => lines.map(line => line.split(" ").map(Number));

    return { lines, s, n, ss, ns, nls, nla };
  };

  const _res = main();

  if (typeof _res === "number" || typeof _res === "string") console.log(_res);
}
