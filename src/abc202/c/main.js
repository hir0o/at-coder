"use strict";
{
  const main = (input) => {
    const r = _io(input);
    const n = r.s();
    const [an, bn, cn] = r.lines.map((line) => line.split(" "));
    let count = 0;

    const matches = [];

    const obj = [
      {
        index: 1,
        count: 2,
      },
    ];

    // for (let i = 0; i < n; i++) {
    //   if (bn.includes(an[i])) matches.push(bn[i]);
    // }

    console.log({ matches });

    // matches.forEach((m, j) => {
    //   if (m === cn[j]) count++;
    // });

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
