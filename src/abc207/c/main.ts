"use strict";
{
  const main = (): number | string | void => {
    const r = _io();
    const n = r.n();
    const NS = r.lines.map((line: string) => line.split(" ").map(Number));

    const objs = [];
    let count = 0;

    for (let i = 0; i < n; i++) {
      let start = 0,
        end = 0;
      switch (NS[i][0]) {
        case 1:
          start = NS[i][1];
          end = NS[i][2];
          break;
        case 2:
          start = NS[i][1];
          end = NS[i][2] - 0.5;
          break;
        case 3:
          start = NS[i][1] + 0.5;
          end = NS[i][2];
          break;
        case 4:
          start = NS[i][1] + 0.5;
          end = NS[i][2] - 0.5;
          break;
      }
      objs.push({ start, end });
    }

    const { max, min } = Math;

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        // if (objs[i].start <= objs[j].end && objs[i].end >= objs[j].start) {
        if (
          max(objs[i].start, objs[j].start) <= min(objs[i].end, objs[j].end)
        ) {
          count++;
        }
      }
    }

    return count;
  };

  const _io = () => {
    const str: string = require("fs").readFileSync("/dev/stdin", "utf8");
    const lines = str.trim().split("\n");
    const s = (): string => lines.shift() || "";
    const n = (): number => Number(s());
    const ss = (): string[] => s().split(" ");
    const ns = (): number[] => ss().map(Number);
    const nls = (): number[] => lines.map(Number);
    const nla = (): number[][] =>
      lines.map((line) => line.split(" ").map(Number));

    return { lines, s, n, ss, ns, nls, nla };
  };

  const _res = main();

  if (typeof _res === "number" || typeof _res === "string") console.log(_res);
}
