"use strict";
{
  const main = (input) => {
    const r = _io(input);
    const n = r.n()

    const price = Math.floor(n * 1.08);

    if(price < 206) {
      return "Yay!"
    } else if(price === 206) {
      return "so-so"
    } else {
      return ":("
    }
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
