import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-ways-to-select-buildings',
  title: 'Count Ways to Select Buildings',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given a **0-indexed** binary string \`s\` which represents the types of buildings along a street where:
- \`s[i] = '0'\` denotes an **office** and
- \`s[i] = '1'\` denotes a **residence**.

You want to select 3 buildings such that they are not all the same type. Specifically, you must select one office and two residences OR two offices and one residence. Return the number of ways to do so.

**Approach:** For each middle building, count "010" patterns (middle='1') = zeros_before × zeros_after, and "101" patterns (middle='0') = ones_before × ones_after. Use prefix counts.`,
  constraints: [
    '3 <= s.length <= 10^5',
    "s[i] is either '0' or '1'.",
  ],
  examples: [
    {
      input: 's = "001101"',
      output: '6',
      explanation: 'Ways: (0,2,4), (1,2,4), (0,3,4), (1,3,4) for pattern "010" and (2,4,5), (3,4,5) for "101".',
    },
    {
      input: 's = "11100"',
      output: '0',
      explanation: 'All "101" need a 0 between two 1s but no 0 appears between 1s.',
    },
    {
      input: 's = "10101"',
      output: '5',
      explanation: '"010" pattern: (1,2,3) = 1. "101" pattern: (0,1,2),(0,1,4),(0,3,4),(2,3,4) = 4. Total = 5.',
    },
  ],
  hints: [
    'For each middle building at index j, count how many valid triplets have j in the middle.',
    'If s[j]="1" (middle of "010"): contribution = zeros_before[j] × zeros_after[j].',
    'If s[j]="0" (middle of "101"): contribution = ones_before[j] × ones_after[j].',
    '```js\nconst n = s.length;\nconst ones = new Array(n + 1).fill(0);\nfor (let i = 0; i < n; i++) ones[i + 1] = ones[i] + (s[i] === "1" ? 1 : 0);\nconst totalOnes = ones[n];\nlet ans = 0;\nfor (let j = 1; j < n - 1; j++) {\n  const onesBefore = ones[j], zerosBefore = j - onesBefore;\n  const onesAfter = totalOnes - ones[j + 1];\n  const zerosAfter = (n - j - 1) - onesAfter;\n  if (s[j] === "1") ans += zerosBefore * zerosAfter;\n  else ans += onesBefore * onesAfter;\n}\nreturn ans;\n```',
  ],
  functionName: 'countWays',
  params: ['s'],
  starterCode: {
    javascript: `function countWays(s) {
  const n = s.length;
  const ones = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) ones[i + 1] = ones[i] + (s[i] === '1' ? 1 : 0);
  const total = ones[n];
  let ans = 0;
  for (let j = 1; j < n - 1; j++) {
    const ob = ones[j], zb = j - ob, oa = total - ones[j + 1], za = (n - j - 1) - oa;
    if (s[j] === '1') ans += zb * za;
    else ans += ob * oa;
  }
  return ans;
}`,
    typescript: `function countWays(s: string): number {
  const n = s.length;
  const ones = new Array<number>(n + 1).fill(0);
  for (let i = 0; i < n; i++) ones[i + 1] = ones[i]! + (s[i] === '1' ? 1 : 0);
  const total = ones[n]!;
  let ans = 0;
  for (let j = 1; j < n - 1; j++) {
    const ob = ones[j]!, zb = j - ob, oa = total - ones[j + 1]!, za = (n - j - 1) - oa;
    if (s[j] === '1') ans += zb * za;
    else ans += ob * oa;
  }
  return ans;
}`,
    python: `def countWays(s):
    if hasattr(s, 'to_py'): s = s.to_py()
    n = len(s)
    ones = [0] * (n + 1)
    for i in range(n): ones[i+1] = ones[i] + (1 if s[i]=='1' else 0)
    total = ones[n]; ans = 0
    for j in range(1, n-1):
        ob, zb = ones[j], j-ones[j]
        oa = total-ones[j+1]; za = (n-j-1)-oa
        if s[j]=='1': ans += zb*za
        else: ans += ob*oa
    return ans
`,
  },
  visibleTests: [
    { args: ['001101'], expected: 6 },
    { args: ['11100'], expected: 0 },
    { args: ['10101'], expected: 5 },
  ],
  hiddenTests: [
    { args: ['010'], expected: 1 },
    { args: ['101'], expected: 1 },
    { args: ['000'], expected: 0 },
    { args: ['111'], expected: 0 },
    { args: ['0110'], expected: 2 },
    { args: ['010101'], expected: 8 },
    { args: ['1001'], expected: 2 },
  ],
};
