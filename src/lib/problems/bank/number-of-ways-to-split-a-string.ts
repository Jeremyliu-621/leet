import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-split-a-string',
  title: 'Number of Ways to Split a String',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `Given a binary string \`s\`, you can split \`s\` into 3 **non-empty** substrings \`s1\`, \`s2\`, and \`s3\` where \`s1 + s2 + s3 = s\`.

Return the number of ways \`s\` can be split such that the number of characters \`'1'\` in \`s1\`, \`s2\`, and \`s3\` are all the same. Since the answer may be too large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '`3 <= s.length <= 10^5`',
    '`s[i]\` is either \`\'0\'\` or \`\'1\'`',
  ],
  examples: [
    {
      input: 's = "10101"',
      output: '4',
      explanation: 'The good splits are: "1|0|101", "1|01|01", "10|1|01", "10|10|1".',
    },
    {
      input: 's = "1001"',
      output: '0',
      explanation: 'There are 2 ones which is not divisible by 3, so no valid split exists.',
    },
    {
      input: 's = "0000"',
      output: '3',
      explanation: 'With all zeros, any split works. There are C(3, 2) = 3 ways to split 4 characters into 3 non-empty parts.',
    },
  ],
  hints: [
    'If the number of 1s is not divisible by 3, the answer is 0. If there are no 1s, any two split points work: C(n-1, 2) = (n-1)*(n-2)/2.',
    'Otherwise, each part must have exactly `ones/3` ones. Count the "gap" between where the first and second parts can end: gapA = (index of (third+1)-th 1) - (index of third-th 1). Similarly gapB for the boundary between parts 2 and 3.',
    '```js\nfunction numWays(s) {\n  const MOD = 1000000007n;\n  const n = s.length;\n  const ones = [...s].filter(c => c === \'1\').length;\n  if (ones % 3 !== 0) return 0;\n  if (ones === 0) return Number((BigInt(n - 1) * BigInt(n - 2) / 2n) % MOD);\n  const third = ones / 3;\n  let cnt = 0, pos1 = -1, pos2 = -1, pos3 = -1, pos4 = -1;\n  for (let i = 0; i < n; i++) {\n    if (s[i] === \'1\') {\n      cnt++;\n      if (cnt === third) pos1 = i;\n      if (cnt === third + 1) pos2 = i;\n      if (cnt === 2 * third) pos3 = i;\n      if (cnt === 2 * third + 1) pos4 = i;\n    }\n  }\n  return Number((BigInt(pos2 - pos1) * BigInt(pos4 - pos3)) % MOD);\n}\n```',
  ],
  functionName: 'numWays',
  params: ['s'],
  starterCode: {
    javascript: `function numWays(s) {

}`,
    typescript: `function numWays(s: string): number {

}`,
    python: `def numWays(s):
    pass`,
  },
  visibleTests: [
    { args: ['10101'], expected: 4 },
    { args: ['1001'], expected: 0 },
    { args: ['0000'], expected: 3 },
  ],
  hiddenTests: [
    { args: ['111'], expected: 1 },
    { args: ['100100100'], expected: 9 },
  ],
};
