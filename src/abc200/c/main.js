"use strict";
{
  const main = (input) => {
    const r = _io(input);
    const n = r.s();
    const an = r.ss();
    const arr = [...Array(200).keys()].map(() => 0);
    let count = 0;

    an.forEach((a) => {
      arr[a % 200] += 1;
    });

    arr.forEach((ar) => {
      count += (ar * (ar - 1)) / 2;
    });

    // for (let i = 0; i < n; i++) {
    //   for (let j = n; j > i; j--) {
    //     if ((an[i] - an[j]) % 200 === 0) {
    //       count++;
    //     }
    //   }
    // }

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
