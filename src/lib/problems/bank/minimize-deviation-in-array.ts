import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimize-deviation-in-array',
  title: 'Minimize Deviation in Array',
  difficulty: 'hard',
  tags: ['heap', 'math'],
  description: `You are given an array \`nums\` of \`n\` positive integers.

You can perform two types of operations on any element of the array any number of times:
- If the element is **even**, you can **divide** it by \`2\`.
- If the element is **odd**, you can **multiply** it by \`2\`.

The **deviation** of the array is the **maximum difference** between any two elements in the array.

Return the **minimum deviation** the array can have after performing some number of operations.`,
  constraints: [
    'n == nums.length',
    '2 <= n <= 5 * 10^4',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '1',
      explanation: 'After multiplying 1→2 and 3→6, then dividing 6→3, 4→2, 2→1: we can reach [2,2,2,2] deviation 0, or [2,3,2,2] deviation 1.',
    },
    {
      input: 'nums = [4,1,5,20,3]',
      output: '3',
      explanation: 'After operations: [4,2,5,5,3] → deviation = 5-2 = 3.',
    },
    {
      input: 'nums = [2,10,8]',
      output: '3',
      explanation: 'Divide 10→5 and 8→4→2: [2,5,2] deviation 3.',
    },
  ],
  hints: [
    'Multiply all odd numbers by 2 first, then use a max-heap.',
    'Track the minimum element. Keep halving the max (if even) and update deviation.',
    'Stop when the max element is odd — you cannot reduce it further.',
  ],
  functionName: 'minimumDeviation',
  params: ['nums'],
  starterCode: {
    javascript: 'function minimumDeviation(nums) {\n  \n}\n',
    python: 'def minimumDeviation(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: 1 },
    { args: [[4, 1, 5, 20, 3]], expected: 3 },
    { args: [[2, 10, 8]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[3, 5]], expected: 1 },
    { args: [[1, 1]], expected: 0 },
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[1, 10, 6]], expected: 3 },
  ],
};
