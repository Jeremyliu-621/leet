import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-equal-and-divisible-pairs',
  title: 'Count Equal and Divisible Pairs in an Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a **0-indexed** integer array \`nums\` of length \`n\` and an integer \`k\`, return *the number of pairs* \`(i, j)\` *where* \`0 <= i < j < n\`, such that \`nums[i] == nums[j]\` and \`(i * j)\` *is divisible by* \`k\`.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
    '1 <= k <= 100',
  ],
  examples: [
    {
      input: 'nums = [3,1,2,2,2,1,3], k = 2',
      output: '4',
      explanation: 'Valid pairs: (0,6), (2,3), (2,4), (3,4).',
    },
    {
      input: 'nums = [1,2,3,4,5], k = 1',
      output: '0',
      explanation: 'All elements are distinct, so no equal pairs exist.',
    },
  ],
  hints: [
    'Try all pairs (i, j) with i < j.',
    'Check both conditions: nums[i] == nums[j] and (i * j) % k == 0.',
    `\`\`\`js
function countPairs(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++)
    for (let j = i+1; j < nums.length; j++)
      if (nums[i] === nums[j] && (i*j) % k === 0) count++;
  return count;
}\`\`\``,
  ],
  functionName: 'countPairs',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function countPairs(nums, k) {

}`,
    python: `def countPairs(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[3, 1, 2, 2, 2, 1, 3], 2], expected: 4 },
    { args: [[1, 2, 3, 4, 5], 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1], 1], expected: 3 },
    { args: [[1, 1], 2], expected: 1 },
    { args: [[2, 2, 2], 2], expected: 3 },
    { args: [[1, 2, 1, 2], 2], expected: 1 },
  ],
};
