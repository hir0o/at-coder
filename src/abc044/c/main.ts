"use strict";
{
  const main = (): number | string | void => {
    const r = _io();

    return 0;
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
