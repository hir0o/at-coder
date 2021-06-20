"use strict";
{
  const main = (input) => {
    const r = _io(input);
		const n = r.n()
		const hs = r.ns()

		const dp = []
		dp[0] = hs[0];

		const abs = (n1, n2) => Math.abs(n1 - n2)


		for (let i = 1; i < n; i++) {
			if(i === 1) {
				dp[i] = Math.abs(hs[i - 1] - hs[i])
			} else if(dp[2] + abs(hs[i - 2], hs[i]) < dp[i] + abs(hs[i - 2], hs[i])) {
				dp[i] = dp[i - 1] + abs(hs[i - 1], hs[i])
			} else {
				dp[i] = dp[i - 2] + abs(hs[i -  2], hs[i])
			}

		}

		console.log(dp)

		return dp[n -1];
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
