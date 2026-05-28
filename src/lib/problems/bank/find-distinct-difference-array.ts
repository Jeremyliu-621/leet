import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-distinct-difference-array',
  title: 'Find the Distinct Difference Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** array \`nums\` of length \`n\`.

The **distinct difference array** of \`nums\` is an integer array \`diff\` of length \`n\` such that:

\`diff[i] = (number of distinct values in nums[0..i]) - (number of distinct values in nums[i+1..n-1])\`

Return the distinct difference array of \`nums\`.

**Note:** \`nums[i+1..n-1]\` is the suffix starting at index \`i+1\`, and \`nums[0..i]\` is the prefix ending at index \`i\`. For the last index, the suffix count is 0.`,
  constraints: [
    '1 <= nums.length <= 50',
    '1 <= nums[i] <= 50',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5]',
      output: '[-3,-1,1,3,5]',
      explanation: 'At i=0: prefix distinct={1}=1, suffix distinct={2,3,4,5}=4 → diff=1-4=-3. At i=2: prefix={1,2,3}=3, suffix={4,5}=2 → 3-2=1.',
    },
    {
      input: 'nums = [3,2,3,4,2]',
      output: '[-2,-1,0,2,3]',
      explanation: 'At i=2: prefix {3,2,3}={2,3} has 2 distinct, suffix {4,2} has 2 distinct → diff = 2-2 = 0.',
    },
  ],
  hints: [
    'For each index i, compute the number of distinct elements in nums[0..i] and nums[i+1..n-1] separately.',
    'You can use a prefix array of Sets growing left-to-right, and a suffix array of Sets growing right-to-left.',
    'diff[i] = prefixDistinct[i] - suffixDistinct[i], where prefixDistinct[i] = |set(nums[0..i])| and suffixDistinct[i] = |set(nums[i+1..n-1])|.',
  ],
  functionName: 'distinctDifferenceArray',
  params: ['nums'],
  starterCode: {
    javascript: 'function distinctDifferenceArray(nums) {\n  // your code here\n}\n',
    typescript: "function distinctDifferenceArray(nums: number[]): number[] {\n  // your code here\n}",

    python: 'def distinctDifferenceArray(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: [-3, -1, 1, 3, 5] },
    { args: [[3, 2, 3, 4, 2]], expected: [-2, -1, 0, 2, 3] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[1, 1]], expected: [0, 1] },
    { args: [[1, 2]], expected: [0, 2] },
    { args: [[1, 1, 1, 1]], expected: [0, 0, 0, 1] },
    { args: [[1, 2, 1, 2, 1]], expected: [-1, 0, 0, 1, 2] },
  ],
};
