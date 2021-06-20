"use strict";
{
  const main = (input) => {
    const r = _io(input);
		const [N, A, B] = r.ns();
		let total = 0;

		for (let i = 1; i <= N; i++) {
			// 各桁の合計を求める
			let j = i;
			let sum = 0;
			while(j > 0) {
				sum += Math.floor(j % 10)
				j = Math.floor(j / 10)
			}
			// console.log({sum});
			// A以上B以下かどうか
			if(sum >= A && sum <= B) {
				total += i;
			}
		}
		return total;
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
