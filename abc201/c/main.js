"use strict";
{
  const main = (input) => {
		const r = _io(input);

		const strs = r.s().split("");
		let count = 0;
		for (let i = 0; i <= 9999; i++) {
			const zeroNum = `0000${i}`.slice(-4);
			let oFlag = true
			let xFlag = true;
			strs.map((s, j) => {
				if(s === "o" && !zeroNum.includes(String(j))) {
					oFlag = false
				}
				if(s === "x" && zeroNum.includes(String(j))) {
					xFlag = false
				}
			})
			if(xFlag && oFlag) {
				count++
			};
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
