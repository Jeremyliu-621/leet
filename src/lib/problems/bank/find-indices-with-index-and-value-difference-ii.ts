import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-indices-with-index-and-value-difference-ii',
  title: 'Find Indices With Index and Value Difference II',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Given a **0-indexed** integer array \`nums\` and two integers \`indexDiff\` and \`valueDiff\`, find any two indices \`i\` and \`j\` such that:

- \`|i - j| >= indexDiff\`, **and**
- \`|nums[i] - nums[j]| >= valueDiff\`

Return \`[i, j]\` if such a pair exists, or \`[-1, -1]\` otherwise. If multiple valid pairs exist, return any of them.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= indexDiff < nums.length',
    '0 <= valueDiff <= 10^9',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [5,1,4,1], indexDiff = 2, valueDiff = 4',
      output: '[0,3]',
      explanation: '|0 - 3| = 3 >= 2 and |nums[0] - nums[3]| = |5 - 1| = 4 >= 4.',
    },
    {
      input: 'nums = [2,1], indexDiff = 0, valueDiff = 0',
      output: '[0,0]',
      explanation: 'indexDiff = 0 so i = j is allowed. |nums[0] - nums[0]| = 0 >= 0.',
    },
    {
      input: 'nums = [1,2,3], indexDiff = 2, valueDiff = 4',
      output: '[-1,-1]',
      explanation: 'The only pair with |i - j| >= 2 is (0, 2). |nums[0] - nums[2]| = 2, which is less than 4.',
    },
  ],
  hints: [
    'For each index j, the valid candidates for i are those with index <= j - indexDiff. Maintain a sliding window of all such candidates seen so far.',
    'Within the window you only need to track the index of the minimum value and the index of the maximum value. These are the best candidates for maximising |nums[i] - nums[j]|.',
    'When processing j: first add the new candidate i = j - indexDiff (if it exists) and update minIdx/maxIdx. Then check if nums[j] - nums[minIdx] >= valueDiff or nums[maxIdx] - nums[j] >= valueDiff.',
  ],
  functionName: 'findIndices',
  params: ['nums', 'indexDiff', 'valueDiff'],
  starterCode: {
    javascript: `function findIndices(nums, indexDiff, valueDiff) {
  // Slide a window of candidates with index <= j - indexDiff.
  // Track minIdx and maxIdx within the window.
}`,
    python: `def findIndices(nums, indexDiff, valueDiff):
    # Slide a window of candidates with index <= j - indexDiff.
    # Track min_idx and max_idx within the window.
    pass`,
  },
  visibleTests: [
    { args: [[5, 1, 4, 1], 2, 4], expected: [0, 3] },
    { args: [[2, 1], 0, 0], expected: [0, 0] },
    { args: [[1, 2, 3], 2, 4], expected: [-1, -1] },
  ],
  hiddenTests: [
    { args: [[1, 5, 3, 4, 2], 2, 3], expected: [0, 3] },
    { args: [[10, 10, 10], 1, 1], expected: [-1, -1] },
    { args: [[1, 100], 1, 50], expected: [0, 1] },
    { args: [[3, 3, 3, 3], 0, 0], expected: [0, 0] },
    { args: [[1, 2, 3, 4, 5], 3, 3], expected: [0, 3] },
  ],
};
