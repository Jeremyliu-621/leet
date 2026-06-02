import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-ways-to-split-array',
  title: 'Count Ways To Split Array',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\` of length \`n\`.

\`nums\` contains a **valid split** at index \`i\` if the following are true:
- The sum of the first \`i + 1\` elements is **greater than or equal to** the sum of the last \`n - i - 1\` elements.
- There is **at least one** element to the right of \`i\`. That is, \`0 <= i < n - 1\`.

Return the number of **valid splits** in \`nums\`.`,
  constraints: [
    '2 <= nums.length <= 10^5',
    '-10^5 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [10,4,-8,7]',
      output: '2',
      explanation: 'i=0: 10 >= 4-8+7=3 ✓. i=1: 14 >= -1 ✓. i=2: 6 >= 7 ✗. Splits: 2.',
    },
    {
      input: 'nums = [2,3,1,0]',
      output: '2',
    },
  ],
  hints: [
    'Compute the total sum, then scan with a running prefix sum.',
    'At each index i (except last), check if prefix >= total - prefix.',
    `\`\`\`js
const total = nums.reduce((a,b)=>a+b, BigInt ? BigInt(0) : 0);
let left = 0, count = 0;
for (let i = 0; i < nums.length-1; i++) {
  left += nums[i];
  if (left >= total - left) count++;
}
return count;\`\`\``
  ],
  functionName: 'waysToSplitArray',
  params: ['nums'],
  starterCode: {
    javascript: `function waysToSplitArray(nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  let left = 0, count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    left += nums[i];
    if (left >= total - left) count++;
  }
  return count;
}`,
    typescript: `function waysToSplitArray(nums: number[]): number {
  const total = nums.reduce((a, b) => a + b, 0);
  let left = 0, count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    left += nums[i]!;
    if (left >= total - left) count++;
  }
  return count;
}`,
    python: `def waysToSplitArray(nums):
    total = sum(nums)
    left = count = 0
    for i in range(len(nums) - 1):
        left += nums[i]
        if left >= total - left:
            count += 1
    return count`,
  },
  visibleTests: [
    { args: [[10,4,-8,7]], expected: 2 },
    { args: [[2,3,1,0]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1,1]], expected: 1 },
    { args: [[0,0,0]], expected: 2 },
    { args: [[-1,2]], expected: 0 },
    { args: [[5,-3,2]], expected: 2 },
  ],
};
