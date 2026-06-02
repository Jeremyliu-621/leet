import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-all-possible-routes',
  title: 'Count All Possible Routes',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given an array of **distinct** integers \`locations\` where \`locations[i]\` is the position of city \`i\`. You start at city \`start\` with \`fuel\` units of fuel and want to reach city \`finish\`.

At each step you may drive from your current city \`i\` to any other city \`j\`. Driving from city \`i\` to city \`j\` costs \`|locations[i] - locations[j]|\` units of fuel. You can visit the same city more than once (and can pass through \`finish\` on your way elsewhere).

Return the **number of possible routes** from \`start\` to \`finish\`, modulo \`10^9 + 7\`.

A route is any sequence of cities (without running out of fuel) that starts at \`start\` and ends at \`finish\`.`,
  constraints: [
    '2 <= locations.length <= 100',
    '1 <= locations[i] <= 10^9',
    'All integers in locations are distinct.',
    '0 <= start, finish < locations.length',
    '1 <= fuel <= 200',
  ],
  examples: [
    {
      input: 'locations = [2,3,6,8,4], start = 1, finish = 3, fuel = 5',
      output: '4',
      explanation:
        'The possible routes are: 1→3, 1→2→3, 1→4→3, and 1→4→2→3. Other routes exceed the fuel limit.',
    },
    {
      input: 'locations = [4,3,1], start = 1, finish = 0, fuel = 6',
      output: '5',
      explanation:
        'The possible routes are: 1→0, 1→2→0, 1→0→1→0, 1→0→2→0, 1→2→0→2→0.',
    },
    {
      input: 'locations = [5,2,1], start = 0, finish = 2, fuel = 3',
      output: '0',
      explanation:
        'Driving directly from city 0 (location 5) to city 2 (location 1) costs |5−1| = 4 fuel, which exceeds the available fuel. No route exists.',
    },
  ],
  hints: [
    'Think of this as a memoized recursion. Define \`dp(pos, rem)\` as the number of ways to reach \`finish\` from city \`pos\` with \`rem\` fuel remaining. At each city you can travel to any other city — as long as you have enough fuel for that leg.',
    'The base case: if \`rem < 0\`, return 0. If \`pos === finish\`, start \`res\` at 1 (counting the route that stops here), then add the results of moving on to each other city with fuel deducted. Memoize on \`(pos, rem)\`.',
    '```js\nfunction countRoutes(locations, start, finish, fuel) {\n  const MOD = 1e9 + 7;\n  const n = locations.length;\n  const memo = new Map();\n  function dp(pos, rem) {\n    if (rem < 0) return 0;\n    const key = pos * (fuel + 1) + rem;\n    if (memo.has(key)) return memo.get(key);\n    let res = pos === finish ? 1 : 0;\n    for (let j = 0; j < n; j++) {\n      if (j === pos) continue;\n      const cost = Math.abs(locations[pos] - locations[j]);\n      if (cost <= rem) res = (res + dp(j, rem - cost)) % MOD;\n    }\n    memo.set(key, res);\n    return res;\n  }\n  return dp(start, fuel);\n}\n```',
  ],
  functionName: 'countRoutes',
  params: ['locations', 'start', 'finish', 'fuel'],
  starterCode: {
    javascript: `function countRoutes(locations, start, finish, fuel) {
  const MOD = 1000000007, n = locations.length;
  const memo = new Map();
  function dp(pos, rem) {
    if (rem < 0) return 0;
    const key = pos * (fuel + 1) + rem;
    if (memo.has(key)) return memo.get(key);
    let res = pos === finish ? 1 : 0;
    for (let j = 0; j < n; j++) {
      if (j === pos) continue;
      const cost = Math.abs(locations[pos] - locations[j]);
      if (cost <= rem) res = (res + dp(j, rem - cost)) % MOD;
    }
    memo.set(key, res);
    return res;
  }
  return dp(start, fuel);
}`,
    typescript: `function countRoutes(locations: number[], start: number, finish: number, fuel: number): number {
  const MOD = 1000000007, n = locations.length;
  const memo = new Map<number, number>();
  function dp(pos: number, rem: number): number {
    if (rem < 0) return 0;
    const key = pos * (fuel + 1) + rem;
    if (memo.has(key)) return memo.get(key)!;
    let res = pos === finish ? 1 : 0;
    for (let j = 0; j < n; j++) {
      if (j === pos) continue;
      const cost = Math.abs(locations[pos]! - locations[j]!);
      if (cost <= rem) res = (res + dp(j, rem - cost)) % MOD;
    }
    memo.set(key, res);
    return res;
  }
  return dp(start, fuel);
}`,
    python: `def countRoutes(locations, start, finish, fuel):
    MOD = 10**9 + 7
    n = len(locations)
    from functools import lru_cache
    @lru_cache(maxsize=None)
    def dp(pos, rem):
        if rem < 0:
            return 0
        res = 1 if pos == finish else 0
        for j in range(n):
            if j == pos:
                continue
            cost = abs(locations[pos] - locations[j])
            if cost <= rem:
                res = (res + dp(j, rem - cost)) % MOD
        return res
    return dp(start, fuel)`,
  },
  visibleTests: [
    { args: [[2, 3, 6, 8, 4], 1, 3, 5], expected: 4 },
    { args: [[4, 3, 1], 1, 0, 6], expected: 5 },
    { args: [[5, 2, 1], 0, 2, 3], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 0, 2, 40], expected: 615088286 },
    { args: [[2, 1, 5], 0, 0, 3], expected: 2 },
    { args: [[1, 2], 0, 1, 3], expected: 2 },
    { args: [[3, 1, 4], 0, 2, 4], expected: 2 },
    { args: [[1, 2, 3], 0, 2, 1], expected: 0 },
  ],
};
