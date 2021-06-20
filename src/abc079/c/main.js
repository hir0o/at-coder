"use strict";
{
  const main = (input) => {
    const r = _io(input);
		let [a, b, c, d] = r.s().split("").map(Number)

		for (let i = 0; i < 16; i++) {
			a *= -1
			if(i % 2 === 0) b *= -1
			if(i % 4 === 0) c *= -1
			if(i % 8 === 0) d *= -1
			if(a + b + c + d === 7) i = 16
		}

		const toS = (n, f = false) => n >= 0 ? f ? String(n) : `+${n}` : String(n);
    return toS(a, true)+toS(b)+toS(c)+toS(d) + "=7"
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
