"use strict";
{
  const main = (input) => {
    const r = _io(input);
    const n = r.n();

    return [...Array(n).keys()]
      .map((i) => i + 1)
      .reduce((prevValue, currrentValue) => prevValue + currrentValue);
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
