"use strict";
{
  const main = (input) => {
    const r = _io(input);
    const [a, b] = r.ns();
    const num = Number(`${a}${b}`)


    return Math.sqrt(num) === Math.floor(Math.sqrt(num)) ? "Yes" : "No";
  };

  const _io = (str) => {
    const lines = str.trim().split("\n");
    const s = () => lines.shift() || "";
    const n = () => Number(s());
    const ss = () => s().split(" ");
    const ns = () => ss().map(Number);
    const nls = () => lines.map(Number);
    return { lines, s, n, ss, ns, nls };
  };

  const _getInput = () => require("fs").readFileSync("/dev/stdin", "utf8");
  const _res = main(_getInput());

  if (typeof _res === "number" || typeof _res === "string") console.log(_res);
}