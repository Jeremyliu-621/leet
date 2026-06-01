import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-suffix-flips',
  title: 'Minimum Suffix Flips',
  difficulty: 'medium',
  tags: ['strings', 'simulation'],
  description: `You are given a **0-indexed** binary string \`target\` of length \`n\`. You have another binary string \`s\` of length \`n\` that is initially set to all zeros. You want to make \`s\` equal to \`target\`.

In one operation, you can pick an index \`i\` where \`0 <= i < n\` and **flip** all characters of \`s\` from index \`i\` to index \`n - 1\` (i.e., \`s[i], s[i+1], ..., s[n-1]\` all flip: 0 becomes 1, 1 becomes 0).

Return the **minimum number of operations** needed to make \`s\` equal to \`target\`.

**Key insight:** Scan left to right. Whenever \`target[i]\` differs from \`target[i-1]\` (treating \`target[-1] = '0'\`), a new flip at position \`i\` is required — each such transition adds exactly 1 to the answer.`,
  constraints: [
    '`n == target.length`',
    '`1 <= n <= 10^5`',
    '`target[i]\` is either `\'0\'` or `\'1\'`.',
  ],
  examples: [
    {
      input: 'target = "10111"',
      output: '3',
      explanation:
        'Initially s = "00000". Flip from index 0 → "11111". Flip from index 1 → "10000". Flip from index 2 → "10111". 3 operations.',
    },
    {
      input: 'target = "011"',
      output: '1',
      explanation: 'Initially s = "000". Flip from index 1 → "011". 1 operation.',
    },
    {
      input: 'target = "0"',
      output: '0',
      explanation: 's already equals target. 0 operations.',
    },
  ],
  hints: [
    'Notice that after each operation the current character you are trying to match gets fixed.',
    'Whenever target[i] differs from target[i-1] (treating target[-1] = \'0\'), you must perform one flip at position i.',
    'Simply count the number of transitions in target relative to the implicit leading \'0\'. Time: O(n), Space: O(1).',
  ],
  functionName: 'minFlips',
  params: ['target'],
  starterCode: {
    javascript: `function minFlips(target) {

}`,
    typescript: `function minFlips(target: string): number {

}`,
    python: `def minFlips(target):
    pass`,
  },
  visibleTests: [
    { args: ['10111'], expected: 3 },
    { args: ['011'], expected: 1 },
    { args: ['0'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['1'], expected: 1 },
    { args: ['10'], expected: 2 },
    { args: ['01'], expected: 1 },
    { args: ['11'], expected: 1 },
    { args: ['010'], expected: 2 },
    { args: ['101'], expected: 3 },
    { args: ['0000'], expected: 0 },
    { args: ['1111'], expected: 1 },
    { args: ['10101'], expected: 5 },
  ],
};
