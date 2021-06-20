"use strict";
{
  const main = (input) => {
    const r = _io(input);
    const a = r.lines[1].split(" ");
    const st = a.map((n, i) => {
      return [i + 1, n];
    });
    const ans = st.sort((a, b) => a[1] - b[1]);
    ans.reverse().forEach((an) => {
      console.log(an[0]);
    });
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
