import type { Problem } from '../types';

export const problem: Problem = {
  id: 'contains-duplicate',
  title: 'Contains Duplicate',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return \`true\` if any value appears **at least twice**, and \`false\` if every element is distinct.

The brute-force double loop works in O(n²). A more efficient approach trades a little memory for much faster lookups.`,
  constraints: [
    '1 <= nums.length <= 1000',
    'All values are integers.',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,1]',
      output: 'true',
      explanation: '1 appears at indices 0 and 3.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: 'false',
      explanation: 'All elements are distinct.',
    },
    {
      input: 'nums = [1,1,1,3,3,4,3,2,4,2]',
      output: 'true',
      explanation: 'Multiple duplicates exist.',
    },
  ],
  hints: [
    'For each element, you need to know whether you have seen it before. What data structure answers "have I seen this?" in O(1)?',
    'Use a `Set`. Walk through `nums`; for each value, check if it is already in the set. If yes, return `true` immediately (early exit). Otherwise add it and continue.',
    '`const seen = new Set(); for (const n of nums) { if (seen.has(n)) return true; seen.add(n); } return false;`',
  ],
  functionName: 'containsDuplicate',
  params: ['nums'],
  starterCode: {
    javascript: 'function containsDuplicate(nums) {\n  // your code here\n}\n',
    typescript: 'function containsDuplicate(nums: number[]): boolean {\n  // your code here\n}\n',
    python: 'def containsDuplicate(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 1]], expected: true },
    { args: [[1, 2, 3, 4]], expected: false },
    { args: [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]], expected: true },
  ],
  hiddenTests: [
    { args: [[1]], expected: false },
    { args: [[1, 1]], expected: true },
    { args: [[0, 0]], expected: true },
    { args: [[-1, -2, -3, -1]], expected: true },
    { args: [[100, 200, 300, 400, 500]], expected: false },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]], expected: false },
  ],
};
