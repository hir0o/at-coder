"use strict";
{
  const main = (input) => {
    const r = _io(input);
    const N = r.s();
    let S = r.s();
    r.s();
    const T = r.lines.map((line) => line.split(" "));

    T.forEach((nums) => {
      let [t, a, b] = nums.map(Number);
      if (t === 1) {
        // a文字目とc文字目を入れ替える
        S =
          S.slice(0, a - 1) +
          S.slice(b - 1, b) +
          S.slice(a, b - 1) +
          S.slice(a - 1, a) +
          S.slice(b);
      } else {
        S = S.slice(N) + S.slice(0, N);
      }
    });
    return S;
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
