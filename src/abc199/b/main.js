"use strict";
{
  const main = (input) => {
    const r = _io(input);
    const N = Number(r.lines[0]);
    const A = r.lines[1].split(" ").map(Number);
    const B = r.lines[2].split(" ").map(Number);
    let nums = [...Array(B[0] - A[0] + 1).keys()].map((i) => i + A[0]);

    for (let i = 1; i < N; i++) {
      nums = nums.filter((n) => {
        return A[i] <= n && n <= B[i];
      });
    }
    return nums.length;
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
