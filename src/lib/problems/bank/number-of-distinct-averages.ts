import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-distinct-averages',
  title: 'Number of Distinct Averages',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** integer array \`nums\` of **even** length.

Repeatedly perform the following operation until \`nums\` is empty:
1. Find the **minimum** and **maximum** values in \`nums\`.
2. Compute their average (which may be a non-integer).
3. Remove both from \`nums\`.

Return the number of **distinct** averages computed.`,
  constraints: [
    '2 <= nums.length <= 100',
    'nums.length is even.',
    '0 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [4,1,4,0,3,5]',
      output: '2',
      explanation: 'Sorted: [0,1,3,4,4,5]. Averages: (0+5)/2=2.5, (1+4)/2=2.5, (3+4)/2=3.5 → {2.5, 3.5} → 2 distinct.',
    },
    {
      input: 'nums = [1,100]',
      output: '1',
      explanation: 'Only one operation: average=(1+100)/2=50.5.',
    },
  ],
  hints: [
    'Sort the array. Then pair the smallest with the largest: nums[0]+nums[n-1], nums[1]+nums[n-2], etc.',
    'Two averages are distinct iff their sums are distinct. Store sums in a Set and return its size.',
  ],
  functionName: 'distinctAverages',
  params: ['nums'],
  starterCode: {
    javascript: 'function distinctAverages(nums) {\n  \n}\n',
    python: 'def distinctAverages(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 1, 4, 0, 3, 5]], expected: 2 },
    { args: [[1, 100]], expected: 1 },
    { args: [[1, 2, 3, 4]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0, 0]], expected: 1 },
    { args: [[0, 100]], expected: 1 },
    { args: [[0, 2, 4, 100]], expected: 2 },
    { args: [[1, 3, 5, 50]], expected: 2 },
    { args: [[1, 1, 2, 2]], expected: 1 },
  ],
};
