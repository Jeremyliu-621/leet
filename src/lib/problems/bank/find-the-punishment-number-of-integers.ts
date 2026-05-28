import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-punishment-number-of-integers',
  title: 'Find the Punishment Number of Integers',
  difficulty: 'medium',
  tags: ['math', 'backtracking'],
  description: `Given a positive integer \`n\`, return the **punishment number** of \`n\`.

The punishment number of \`n\` is defined as the sum of the squares of all integers \`i\` such that:
- \`1 <= i <= n\`
- The decimal representation of \`i * i\` can be partitioned into contiguous substrings such that the sum of the integer values of these substrings equals \`i\`.

**Example:** \`i = 9\`, \`i*i = 81\`. We can split "81" into "8" and "1", and \`8 + 1 = 9 = i\`. So 9 qualifies.`,
  constraints: [
    '1 <= n <= 1000',
  ],
  examples: [
    {
      input: 'n = 10',
      output: '182',
      explanation: 'Qualifying integers: 1 (1²=1, "1"→1), 9 (9²=81, "8"+"1"=9), 10 (10²=100, "10"+"0"=10). Sum = 1+81+100 = 182.',
    },
    {
      input: 'n = 37',
      output: '1478',
      explanation: 'Additional qualifying integers include 36 (36²=1296, "1"+"29"+"6"=36) among others.',
    },
  ],
  hints: [
    'For each i from 1 to n, compute s = String(i*i). Then check if s can be split into parts whose integer sum equals i.',
    'Use recursion/backtracking: try every possible first substring, subtract its value from the target, and recurse on the remainder.',
    'canPartition(s, target): if s is empty return target===0; for each prefix, parse it as int and recurse on the rest with target reduced.',
  ],
  functionName: 'punishmentNumber',
  params: ['n'],
  starterCode: {
    javascript: 'function punishmentNumber(n) {\n  // your code here\n}\n',
    python: 'def punishmentNumber(n):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [10], expected: 182 },
    { args: [37], expected: 1478 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [5], expected: 1 },
    { args: [2], expected: 1 },
    { args: [9], expected: 82 },
    { args: [100], expected: 41334 },
  ],
};
