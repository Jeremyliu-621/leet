import type { Problem } from '../types';

export const problem: Problem = {
  id: 'most-frequent-number-following-key',
  title: 'Most Frequent Number Following Key In an Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** integer array \`nums\`. You are also given an integer \`key\`, which is present in \`nums\`.

For every **unique** integer \`target\` in \`nums\`, count the number of times \`target\` immediately follows an occurrence of \`key\` in \`nums\`. In other words, count the number of indices \`i\` such that:
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
      explanation: '1 appears at indices 0 and 3. nums[1]=100 and nums[4]=100. 100 follows key twice, more than any other.',
    },
    {
      input: 'nums = [2,2,2,2,3], key = 2',
      output: '2',
      explanation: 'key=2 at indices 0,1,2,3. nums[1]=2, nums[2]=2, nums[3]=2, nums[4]=3. 2 follows key 3 times.',
    },
  ],
  hints: [
    'Use a hash map to count how often each value follows key. Iterate i from 0 to n-2; when nums[i]===key, increment map[nums[i+1]].',
    'After counting, find the key in the map with the highest value.',
    'Since the answer is unique, you can just iterate and track the best count.',
  ],
  functionName: 'mostFrequent',
  params: ['nums', 'key'],
  starterCode: {
    javascript: `function mostFrequent(nums, key) {

}`,
    typescript: "function mostFrequent(nums: number[], key: number): number {\n\n}",

    python: `def mostFrequent(nums, key):
    pass`,
  },
  visibleTests: [
    { args: [[1, 100, 200, 1, 100], 1], expected: 100 },
    { args: [[2, 2, 2, 2, 3], 2], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 2, 1, 3, 1, 2], 1], expected: 2 },
    { args: [[3, 3, 3, 3], 3], expected: 3 },
    { args: [[1, 2], 1], expected: 2 },
    { args: [[5, 1, 5, 2, 5, 1], 5], expected: 1 },
  ],
};
