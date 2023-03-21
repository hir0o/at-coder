const factorial = (n: number): number => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

const main = (): number | string => {
  const r = _io();
  const [P] = r.n();

  let idx = 0;
  const coins = [
    3628800, // 10!
    362880, // 9!
    40320, // 8!
    5040, // 7!
    720, // 6!
    120, // 5!
    24, // 4!
    6, // 3!
    2, // 2!
    1, // 1!
  ];

  // コインの枚数
  let ans = 0;
  let current = P;

  while (current > 0) {
    if (idx === coins.length) return ans + current;
    const coin = coins[idx];
    const count = Math.floor(current / coin);
    current -= count * coin;
    ans += count;
    idx++;
  }

  return ans;
};

const _io = () => {
  const str: string = require("fs").readFileSync("/dev/stdin", "utf8");
  const lines = str.trim().split("\n");
  const s = (): string[] => lines.shift()?.split(" ") || [];
  const n = (): number[] => s().map(Number);

  return { lines, s, n };
};

console.log(main());
