"use strict";
{
  const main = (input) => {
    const r = _io(input);
    const n = r.n();
    const nums = r.ls();
    nums.unshift([0,0,0])

    let can = true;

    for (let i = 0; i < n; i++) {
      const [t, x, y] = nums[i + 1]
      const [pt, px, py] = nums[i]
      // tの差分
      const dt = t - pt
      // x + yの差分
      const dist = Math.abs(px - x) + Math.abs(py - y);
      if(dt < dist) can = false
      if(dist % 2 !== dt % 2) can = false
    }

    return can ? "Yes" : "No";
  };

  const _io = (str) => {
    const lines = str.trim().split("\n");
    const s = () => lines.shift() || "";
    const n = () => Number(s());
    const ss = () => s().split(" ");
    const ns = () => ss().map(Number);
    const nls = () => lines.map(Number);
    const ls = () => lines.map(line => line.split(" ").map(Number))

    return { lines, s, n, ss, ns, nls, ls };
  };

  const _getInput = () => require("fs").readFileSync("/dev/stdin", "utf8");
  const _res = main(_getInput());

  if (typeof _res === "number" || typeof _res === "string") console.log(_res);
}
