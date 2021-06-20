"use strict";
{
  const main = (input) => {
    const r = _io(input);
    const s = r.s();

    let ans = "";
    s.split("").forEach((e) => {
      if (e === "0" || e === "1") {
        ans += e;
      } else {
        ans = ans.slice(0, -1);
      }
    });
    return ans;
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
