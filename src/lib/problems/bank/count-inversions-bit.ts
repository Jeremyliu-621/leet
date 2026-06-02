import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-inversions-bit',
  title: 'Count Inversions — Binary Indexed Tree',
  difficulty: 'hard',
  tags: ['binary-indexed-tree', 'arrays'],
  description: `Given an array of integers \`nums\`, count the number of **inversions** — pairs \`(i, j)\` where \`i < j\` and \`nums[i] > nums[j]\`.

A brute-force O(n²) scan compares every pair. Use a **Binary Indexed Tree** (Fenwick tree) to solve this in O(n log n).

**Approach:** Coordinate-compress the values, then iterate right-to-left. For each element, query the BIT for the count of elements already inserted that are smaller than it (these form inversions with elements to its right that were already processed). Then insert the element into the BIT.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [2, 4, 1, 3, 5]',
      output: '3',
      explanation: 'Inversions: (2,1), (4,1), (4,3). Total = 3.',
    },
    {
      input: 'nums = [5, 4, 3, 2, 1]',
      output: '10',
      explanation: 'Every pair is an inversion in a reverse-sorted array: C(5,2) = 10.',
    },
  ],
  hints: [
    'Coordinate-compress: sort the unique values and map each to 1..n. This lets you use a BIT of size n.',
    'Iterate from right to left. For element at index i with compressed rank r, the number of inversions involving i is query(r - 1) — the count of already-inserted elements with rank < r. Then update(r, 1).',
    `\`\`\`js
function countInversions(nums) {
  const sorted = [...new Set(nums)].sort((a,b) => a - b);
  const rank = new Map(sorted.map((v,i) => [v, i+1]));
  const n = sorted.length;
  const bit = new Array(n+1).fill(0);
  const update = (i, d) => { for (; i <= n; i += i & -i) bit[i] += d; };
  const query = (i) => { let s = 0; for (; i > 0; i -= i & -i) s += bit[i]; return s; };
  let inv = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    const r = rank.get(nums[i]);
    inv += query(r - 1);
    update(r, 1);
  }
  return inv;
}\`\`\``,
  ],
  functionName: 'countInversions',
  params: ['nums'],
  starterCode: {
    javascript: `function countInversions(nums) {\n\n}`,
    typescript: `function countInversions(nums: number[]): number {\n\n}`,
    python: `def countInversions(nums):\n    pass`,
  },
  visibleTests: [
    { args: [[2, 4, 1, 3, 5]], expected: 3 },
    { args: [[5, 4, 3, 2, 1]], expected: 10 },
    { args: [[1, 2, 3, 4, 5]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[2, 1]], expected: 1 },
    { args: [[3, 1, 2]], expected: 2 },
    { args: [[1, 5, 3, 2, 4]], expected: 4 },
    { args: [[10, 10, 10]], expected: 0 },
    { args: [[4, 3, 2, 1, 5, 6, 7, 8]], expected: 6 },
    { args: [[1, 3, 5, 2, 4, 6]], expected: 3 },
  ],
};
