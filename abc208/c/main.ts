{
  const factorial = (n: number): number => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  };

  const main = (): number | string => {
    const r = _io();
    const [P] = r.n();
  };

  const _io = () => {
    const str: string = require("fs").readFileSync("/dev/stdin", "utf8");
    const lines = str.trim().split("\n");
    const s = (): string[] => lines.shift()?.split(" ") || [];
    const n = (): number[] => s().map(Number);

    return { lines, s, n };
  };

  console.log(main());
}
