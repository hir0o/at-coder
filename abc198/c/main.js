"use strict";
{
  const main = (input) => {
    const reader = _io(input);
		const [r, x, y] = reader.ns()

		const l = Math.sqrt(Math.abs(x**2) + Math.abs(y**2));

		if(l === r) {
			return 1
		} else if(l <= r * 2) {
			return 2
		} else {
			return Math.ceil(l / r)
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
