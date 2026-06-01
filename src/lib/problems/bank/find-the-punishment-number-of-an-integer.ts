import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-punishment-number-of-an-integer',
  title: 'Find the Punishment Number of an Integer',
  difficulty: 'medium',
  tags: ['math', 'backtracking'],
  description: `Given a positive integer \`n\`, return the **punishment number** of \`n\`.

The **punishment number** of \`n\` is defined as the sum of the squares of all integers \`i\` such that:
- \`1 <= i <= n\`
- The decimal representation of \`i * i\` can be partitioned into contiguous substrings such that the sum of the integer values of these substrings equals \`i\`.`,
  constraints: [
    '1 <= n <= 1000',
  ],
  examples: [
    {
      input: 'n = 10',
      output: '182',
      explanation: 'i=1: 1→"1"=1 ✓. i=9: 81→"8"+"1"=9 ✓. i=10: 100→"10"+"0"=10 ✓. Sum=1+81+100=182.',
    },
    {
      input: 'n = 37',
      output: '1478',
      explanation: 'i=1,9,10,36 qualify. 36²=1296→"1"+"29"+"6"=36. Sum=1+81+100+1296=1478.',
    },
  ],
  hints: [
    'Level 1: For each i from 1 to n, compute s = String(i*i) and check if s can be split into parts that sum to i. Use recursion or backtracking over all ways to split s.',
    'Level 2: canPartition(s, pos, remaining): try all substrings s[pos..end) as next part; if parseInt(s[pos..end]) <= remaining, recurse with (end, remaining - part). Base case: pos == s.length && remaining == 0.',
    'Level 3: The branching factor is at most 10 (up to 7 digits for 1000²=1e6). Accumulate i² for all qualifying i. Total time O(n * 10^d) where d ≤ 7.',
  ],
  functionName: 'punishmentNumber',
  params: ['n'],
  starterCode: {
    javascript: `function punishmentNumber(n) {

}`,
    typescript: `function punishmentNumber(n: number): number {

}`,
    python: `def punishmentNumber(n):
    pass`,
  },
  visibleTests: [
    { args: [10], expected: 182 },
    { args: [37], expected: 1478 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [5], expected: 1 },
    { args: [9], expected: 82 },
    { args: [36], expected: 1478 },
    { args: [100], expected: 41334 },
    { args: [45], expected: 3503 },
    { args: [55], expected: 6528 },
  ],
};
