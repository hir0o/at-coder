"use strict";

const { stringify } = require("querystring");

{
  const main = (input) => {
    const r = _io(input);
    const n = r.s();
    const lines = r.lines;

    const mountains = lines.map((line) => {
      const [name, height] = line.split(" ");
      return {
        name,
        height,
      };
    });

    const newMountains = mountains.sort((a, b) => b.height - a.height);
    return newMountains[1].name;
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
