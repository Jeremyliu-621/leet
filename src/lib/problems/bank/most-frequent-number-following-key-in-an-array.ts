import type { Problem } from '../types';

export const problem: Problem = {
  id: 'most-frequent-number-following-key-in-an-array',
  title: 'Most Frequent Number Following Key In an Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given a 0-indexed integer array \`nums\`. You are also given an integer \`key\`, which is present in \`nums\`.

For every unique integer \`target\` in \`nums\`, count the number of times \`target\` immediately follows an occurrence of \`key\` in \`nums\`. In other words, count the number of indices \`i\` such that:

- \`0 <= i <= nums.length - 2\`,
- \`nums[i] == key\`, and
- \`nums[i + 1] == target\`.

Return the \`target\` with the **maximum** count. The test cases will be generated such that the \`target\` with maximum count is **unique**.`,
  constraints: [
    '2 <= nums.length <= 1000',
    '1 <= nums[i] <= 1000',
    'The test cases will be generated such that the answer is unique.',
  ],
  examples: [
    {
      input: 'nums = [1,100,200,1,100], key = 1',
      output: '100',
      explanation: 'nums[0] = 1, so nums[1] = 100 counts. nums[3] = 1, so nums[4] = 100 counts. 100 appears twice.',
    },
    {
      input: 'nums = [2,2,2,2,3], key = 2',
      output: '2',
      explanation: 'nums[0]=2 → nums[1]=2; nums[1]=2 → nums[2]=2; nums[2]=2 → nums[3]=2. So 2 appears 3 times after key. 3 appears once.',
    },
  ],
  hints: [
    'Iterate through nums; whenever nums[i] == key and i+1 < nums.length, increment a counter for nums[i+1].',
    'Use a hash map (object or Map) to track how many times each target follows the key.',
    'After scanning, return the target with the highest count.',
  ],
  functionName: 'mostFrequent',
  params: ['nums', 'key'],
  starterCode: {
    javascript: `function mostFrequent(nums, key) {
  // your code here
}`,
    typescript: `function mostFrequent(nums: number[], key: number): number {
  // your code here
}`,
    python: `def mostFrequent(nums, key):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[1, 100, 200, 1, 100], 1], expected: 100 },
    { args: [[2, 2, 2, 2, 3], 2], expected: 2 },
    { args: [[3, 1, 3, 3, 3, 2], 3], expected: 3 },
    { args: [[1, 2, 1, 2, 1, 4], 1], expected: 2 },
    { args: [[5, 5, 5, 7], 5], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 1, 2, 4, 1, 2], 1], expected: 2 },
    { args: [[10, 20, 10, 30, 10, 20], 10], expected: 20 },
    { args: [[1, 1], 1], expected: 1 },
    { args: [[4, 4, 4, 4, 7, 4, 4, 7, 7, 4], 4], expected: 4 },
    { args: [[1, 2, 1, 2, 1, 3], 1], expected: 2 },
  ],
};
