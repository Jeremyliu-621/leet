import type { Problem } from '../types';

export const problem: Problem = {
  id: 'contains-duplicate',
  title: 'Contains Duplicate',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\`, return \`true\` if any value appears **at least twice** in the array, and return \`false\` if every element is distinct.`,
  examples: [
    { input: 'nums = [1,2,3,1]', output: 'true' },
    { input: 'nums = [1,2,3,4]', output: 'false' },
    { input: 'nums = [1,1,1,3,3,4,3,2,4,2]', output: 'true' },
  ],
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
  ],
  functionName: 'containsDuplicate',
  params: ['nums'],
  starterCode: {
    javascript: 'function containsDuplicate(nums) {\n  // your code here\n}\n',
    python: 'def containsDuplicate(nums):\n    # your code here\n    pass\n',
  },
  hints: [
    'Add each element to a Set as you iterate. If you try to add something already in the Set, return true.',
    'Alternatively, sort the array and check adjacent elements.',
  ],
  visibleTests: [
    { args: [[1, 2, 3, 1]], expected: true },
    { args: [[1, 2, 3, 4]], expected: false },
    { args: [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]], expected: true },
  ],
  hiddenTests: [
    { args: [[1]], expected: false },
    { args: [[1, 1]], expected: true },
    { args: [[-1, -2, -3]], expected: false },
  ],
};
