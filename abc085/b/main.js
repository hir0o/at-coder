"use strict";
{
  const main = (input) => {
    const r = _io(input);
		const n = r.n()
		const ns = r.nls()
		const arr = [...new Array(100)].map(n => 0)
		let res = 0

		ns.forEach(num => {
			arr[num - 1]++
		});

		arr.forEach((item) => {
			if(item > 0) res ++
		})

    return res;

		// * バケットを使わずに解く
		// return ns.filter((n, i) => ns.indexOf(n) === i).length;

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
