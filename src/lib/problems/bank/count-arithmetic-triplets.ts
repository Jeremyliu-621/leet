import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-arithmetic-triplets',
  title: 'Count Arithmetic Triplets',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map', 'two-pointers'],
  description: `Given a **strictly increasing** integer array \`nums\` and a positive integer \`diff\`, return the number of **arithmetic triplets**.

A triplet \`(i, j, k)\` is **arithmetic** if:
- \`i < j < k\`
- \`nums[j] - nums[i] == diff\`
- \`nums[k] - nums[j] == diff\`

**Example:** \`nums = [0, 1, 4, 6, 7, 10]\`, \`diff = 3\`

Valid triplets:
- \`(1, 4, 7)\` — indices 1, 3, 4 — differences 3 and 3 ✓
- \`(4, 7, 10)\` — indices 2, 4, 5 — differences 3 and 3 ✓

Answer: **2**`,
  constraints: [
    '3 <= nums.length <= 200',
    '0 <= nums[i] <= 200',
    '1 <= diff <= 50',
    'nums is strictly increasing',
  ],
  examples: [
    {
      input: 'nums = [0,1,4,6,7,10], diff = 3',
      output: '2',
      explanation: '(1,4,7) and (4,7,10) are the two arithmetic triplets with difference 3.',
    },
    {
      input: 'nums = [4,5,6,7,8,9], diff = 2',
      output: '2',
      explanation: '(4,6,8) and (5,7,9) are arithmetic triplets with difference 2.',
    },
    {
      input: 'nums = [1,2,3,4,5], diff = 1',
      output: '3',
      explanation: '(1,2,3), (2,3,4), (3,4,5) are all arithmetic with difference 1.',
    },
  ],
  hints: [
    'A triplet (i,j,k) is arithmetic iff nums[k]-nums[j]==diff and nums[j]-nums[i]==diff. Equivalently: for each element x, check if x-diff and x-2*diff also appear in nums.',
    'Build a HashSet of all values. For each x in nums, add 1 to the count if both (x-diff) and (x-2*diff) are in the set. O(n) time.',
    '```js\nconst seen = new Set(nums);\nreturn nums.filter(x => seen.has(x - diff) && seen.has(x - 2*diff)).length;\n```',
  ],
  functionName: 'countArithmeticTriplets',
  params: ['nums', 'diff'],
  starterCode: {
    javascript: `function countArithmeticTriplets(nums, diff) {
  const seen = new Set(nums);
  return nums.filter(x => seen.has(x - diff) && seen.has(x - 2 * diff)).length;
}`,
    typescript: `function countArithmeticTriplets(nums: number[], diff: number): number {
  const seen = new Set(nums);
  return nums.filter(x => seen.has(x - diff) && seen.has(x - 2 * diff)).length;
}`,
    python: `def countArithmeticTriplets(nums: list[int], diff: int) -> int:
    seen = set(nums)
    return sum(1 for x in nums if x - diff in seen and x - 2 * diff in seen)
`,
  },
  visibleTests: [
    { args: [[0, 1, 4, 6, 7, 10], 3], expected: 2 },
    { args: [[4, 5, 6, 7, 8, 9], 2], expected: 2 },
    { args: [[1, 2, 3, 4, 5], 1], expected: 3 },
  ],
  hiddenTests: [
    { args: [[0, 2, 4, 6, 8], 2], expected: 3 },
    { args: [[1, 3, 5, 7, 9], 2], expected: 3 },
    { args: [[1, 2, 3], 1], expected: 1 },
    { args: [[1, 10, 20], 5], expected: 0 },
    { args: [[0, 1, 2, 3, 4, 5, 6], 2], expected: 3 },
    { args: [[0, 50, 100], 50], expected: 1 },
  ],
};
