import type { Problem } from '../types';

export const problem: Problem = {
  id: 'matchsticks-to-square',
  title: 'Matchsticks to Square',
  difficulty: 'medium',
  tags: ['arrays', 'backtracking'],
  description: `You are given an integer array \`matchsticks\` where \`matchsticks[i]\` is the length of the \`i\`th matchstick. You want to use **all** matchsticks to make one square. You **should not** break any stick, but you can link them end to end. Return \`true\` if you can make this square and \`false\` otherwise.`,
  constraints: [
    '`1 <= matchsticks.length <= 15`',
    '`1 <= matchsticks[i] <= 10^8`',
  ],
  examples: [
    {
      input: 'matchsticks = [1,1,2,2,2]',
      output: 'true',
      explanation: 'You can form a square with side length 2: sides are [1,1], [2], [2], [2].',
    },
    {
      input: 'matchsticks = [3,3,3,3,4]',
      output: 'false',
      explanation: 'Total = 16, side = 4. The 4-stick fills one side. The remaining four 3s cannot form three sides of 4 each (3+3=6≠4, 3<4).',
    },
    {
      input: 'matchsticks = [5,5,5,5]',
      output: 'true',
      explanation: 'One matchstick per side.',
    },
  ],
  hints: [
    'This is "partition array into 4 equal-sum subsets". First check that the total sum is divisible by 4 and no single stick exceeds the target side length.',
    'Sort sticks in descending order for better pruning. Use backtracking with 4 buckets: try placing the current stick in each bucket, skipping duplicate bucket sums to avoid redundant branches.',
    '```js\nfunction makesquare(matchsticks) {\n  const total = matchsticks.reduce((a, b) => a + b, 0);\n  if (total % 4 !== 0) return false;\n  const side = total / 4;\n  matchsticks.sort((a, b) => b - a);\n  if (matchsticks[0] > side) return false;\n  const buckets = [0, 0, 0, 0];\n  function bt(i) {\n    if (i === matchsticks.length) return buckets.every(b => b === side);\n    const seen = new Set();\n    for (let j = 0; j < 4; j++) {\n      if (seen.has(buckets[j])) continue;\n      if (buckets[j] + matchsticks[i] <= side) {\n        seen.add(buckets[j]);\n        buckets[j] += matchsticks[i];\n        if (bt(i + 1)) return true;\n        buckets[j] -= matchsticks[i];\n      }\n    }\n    return false;\n  }\n  return bt(0);\n}\n```',
  ],
  functionName: 'makesquare',
  params: ['matchsticks'],
  starterCode: {
    javascript: `function makesquare(matchsticks) {
  const total = matchsticks.reduce((a, b) => a + b, 0);
  if (total % 4 !== 0) return false;
  const side = total / 4;
  matchsticks.sort((a, b) => b - a);
  if (matchsticks[0] > side) return false;
  const buckets = [0, 0, 0, 0];
  function bt(i) {
    if (i === matchsticks.length) return true;
    const seen = new Set();
    for (let j = 0; j < 4; j++) {
      if (seen.has(buckets[j])) continue;
      if (buckets[j] + matchsticks[i] <= side) {
        seen.add(buckets[j]); buckets[j] += matchsticks[i];
        if (bt(i + 1)) return true;
        buckets[j] -= matchsticks[i];
      }
    }
    return false;
  }
  return bt(0);
}`,
    typescript: `function makesquare(matchsticks: number[]): boolean {
  const total = matchsticks.reduce((a, b) => a + b, 0);
  if (total % 4 !== 0) return false;
  const side = total / 4;
  matchsticks.sort((a, b) => b - a);
  if (matchsticks[0] > side) return false;
  const buckets = [0, 0, 0, 0];
  function bt(i: number): boolean {
    if (i === matchsticks.length) return true;
    const seen = new Set<number>();
    for (let j = 0; j < 4; j++) {
      if (seen.has(buckets[j])) continue;
      if (buckets[j] + matchsticks[i] <= side) {
        seen.add(buckets[j]); buckets[j] += matchsticks[i];
        if (bt(i + 1)) return true;
        buckets[j] -= matchsticks[i];
      }
    }
    return false;
  }
  return bt(0);
}`,
    python: `def makesquare(matchsticks: list[int]) -> bool:
    total = sum(matchsticks)
    if total % 4 != 0: return False
    side = total // 4
    matchsticks.sort(reverse=True)
    if matchsticks[0] > side: return False
    buckets = [0, 0, 0, 0]
    def bt(i):
        if i == len(matchsticks): return True
        seen = set()
        for j in range(4):
            if buckets[j] in seen: continue
            if buckets[j] + matchsticks[i] <= side:
                seen.add(buckets[j]); buckets[j] += matchsticks[i]
                if bt(i + 1): return True
                buckets[j] -= matchsticks[i]
        return False
    return bt(0)`,
  },
  visibleTests: [
    { args: [[1, 1, 2, 2, 2]], expected: true },
    { args: [[3, 3, 3, 3, 4]], expected: false },
    { args: [[5, 5, 5, 5]], expected: true },
  ],
  hiddenTests: [
    { args: [[1]], expected: false },
    { args: [[2, 2, 2, 2]], expected: true },
    { args: [[1, 1, 1, 1, 4]], expected: false },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: true },
    { args: [[5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3]], expected: true },
    { args: [[1, 1, 1, 1, 1, 1, 1, 1]], expected: true },
    { args: [[10, 1, 1, 1, 1, 1, 1, 1, 1, 2]], expected: false },
    { args: [[4, 4, 4, 4, 8]], expected: false },
  ],
};
