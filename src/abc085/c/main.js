"use strict";
{
  const main = (input) => {
    const r = _io(input);
		const [N, Y] = r.ns()
		let a = -1, b = - 1, c = -1

		for (let i = 0; i <= N; i++) {
			for (let j = 0; j + i <= N; j++) {
				// Cの枚数
				const tmp_c = N - i - j
				if(10000 * i + 5000 * j + 1000 * tmp_c === Y)  {
					a = i
					b = j
					c = tmp_c
				}
			}
		}

		return `${a} ${b} ${c}`
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
