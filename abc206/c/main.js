"use strict";
{
  const main = (input) => {
    const r = _io(input);

		const n = r.n();
		const nums = r.ns()
		const count = {}
		const choice = (num) => (num * (num - 1))/2


		nums.forEach(num => {
			count[num] = (count[num] || 0) + 1;
		});

		let ans = choice(n);
		Object.values(count).forEach(val => {
			if(val > 1) {
				ans -= choice(val);
			}
		})

		return ans
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
