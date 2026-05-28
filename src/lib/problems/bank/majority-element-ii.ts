import type { Problem } from '../types';

export const problem: Problem = {
  id: 'majority-element-ii',
  title: 'Majority Element II',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an integer array of size \`n\`, find all elements that appear more than \`⌊ n/3 ⌋\` times.`,
  constraints: [
    '1 <= nums.length <= 5 * 10^4',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [3,2,3]',
      output: '[3]',
    },
    {
      input: 'nums = [1]',
      output: '[1]',
    },
    {
      input: 'nums = [1,2]',
      output: '[1,2]',
    },
  ],
  hints: [
    'At most two elements can appear more than n/3 times.',
    'Use Boyer-Moore Voting for two candidates. First pass: find candidates; second pass: verify counts.',
    'Initialize two candidate/count pairs. Decrement both when the current element matches neither.',
  ],
  functionName: 'majorityElementIIRunner',
  params: ['nums'],
  preamble: {
    javascript: `function majorityElementIIRunner(nums) {
  return majorityElementII(nums).slice().sort((a, b) => a - b);
}`,
    typescript: "function majorityElementIIRunner(nums: number[]): number[] {\n  // Return all elements appearing more than n/3 times\n}",

    python: `def majorityElementIIRunner(nums):
    return sorted(majorityElementII(nums))
`,
  },
  starterCode: {
    javascript: `function majorityElementII(nums) {
  // Return all elements appearing more than n/3 times
}`,
    python: `def majorityElementII(nums):
    # Return all elements appearing more than n/3 times
    pass`,
  },
  visibleTests: [
    { args: [[3, 2, 3]], expected: [3] },
    { args: [[1]], expected: [1] },
    { args: [[1, 2]], expected: [1, 2] },
  ],
  hiddenTests: [
    { args: [[2, 2, 1, 3]], expected: [2] },
    { args: [[1, 1, 1, 3, 3, 2, 2, 2]], expected: [1, 2] },
    { args: [[0]], expected: [0] },
    { args: [[1, 2, 3, 4, 5, 6]], expected: [] },
  ],
};
