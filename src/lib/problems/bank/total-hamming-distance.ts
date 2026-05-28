import type { Problem } from '../types';

export const problem: Problem = {
  id: 'total-hamming-distance',
  title: 'Total Hamming Distance',
  difficulty: 'medium',
  tags: ['math'],
  description: `The [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance) between two integers is the number of positions at which the corresponding bits differ.

Given an integer array \`nums\`, return the **sum of Hamming distances** between all the pairs of integers in \`nums\`.

**Approach:** For each of the 32 bit positions, count how many numbers have a 1 at that bit (\`ones\`). The contribution to the total is \`ones × (n − ones)\` — one side from each differing pair.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '0 <= nums[i] <= 10^9',
    'The answer will fit in a 32-bit integer.',
  ],
  examples: [
    {
      input: 'nums = [4,14,2]',
      output: '6',
      explanation: 'Pairs: (4,14)→2, (4,2)→2, (14,2)→2. Total = 6.',
    },
    {
      input: 'nums = [4,14,4]',
      output: '4',
    },
    {
      input: 'nums = [0]',
      output: '0',
      explanation: 'A single element has no pairs.',
    },
  ],
  hints: [
    'Instead of computing pairwise Hamming distances (O(n²)), count contributions bit by bit.',
    'For bit i: let `ones` = count of numbers with bit i set. Each such number pairs with (n−ones) numbers to contribute a Hamming distance of 1 at that position.',
    '```js\nlet total = 0;\nconst n = nums.length;\nfor (let i = 0; i < 32; i++) {\n  let ones = 0;\n  for (const x of nums) ones += (x >> i) & 1;\n  total += ones * (n - ones);\n}\nreturn total;\n```',
  ],
  functionName: 'totalHammingDistance',
  params: ['nums'],
  starterCode: {
    javascript: `function totalHammingDistance(nums) {
  // return sum of Hamming distances between all pairs

}`,
    typescript: "function totalHammingDistance(nums: number[]): number {\n  // return sum of Hamming distances between all pairs\n\n}",

    python: `def totalHammingDistance(nums: list) -> int:
    # return sum of Hamming distances between all pairs
    pass
`,
  },
  visibleTests: [
    { args: [[4, 14, 2]], expected: 6 },
    { args: [[4, 14, 4]], expected: 4 },
    { args: [[0]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 2 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[1, 3, 5, 7]], expected: 8 },
    { args: [[7, 4]], expected: 2 },
    { args: [[1, 1, 1]], expected: 0 },
  ],
};
