"use strict";
{
  const main = (input) => {
    const r = _io(input);
		const [A, B, C, X] = r.lines.map(Number);
		let count = 0;

		for (let i = 0; i <= A; i++) {
			for (let j = 0; j <= B; j++) {
				for (let k = 0; k <= C; k++) {
					if(i * 500 + j * 100 + k * 50 === X) count++
				}
			}
		}
		return count;
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
