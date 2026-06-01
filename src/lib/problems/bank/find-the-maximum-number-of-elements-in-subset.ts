import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-maximum-number-of-elements-in-subset',
  title: 'Find the Maximum Number of Elements in Subset',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given an array of **positive** integers \`nums\`.

You need to select a **subset** of \`nums\` which satisfies the following condition:

- You can place the selected elements in a sequence such that it follows the pattern: \`x, x^2, x^4, ..., x^(2^k), ..., x^4, x^2, x\` (Note that k can be 0 in which case there is only one element in the sequence).

Return the **maximum** number of elements in a subset that satisfies these conditions.`,
  constraints: [
    '2 <= nums.length <= 50',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [5,4,1,2,2,3,3]',
      output: '3',
      explanation: 'Choose [2,2,4]. Sequence: 2, 4, 2 (x=2, x^2=4). Length = 3.',
    },
    {
      input: 'nums = [1,3,2,4]',
      output: '1',
      explanation: 'No pair (x, x^2) both appear at least twice. Best is any single element.',
    },
  ],
  hints: [
    'For each number x, build the longest chain x, x^2, x^4, ... where each value appears at least twice in nums.',
    'If the chain has length L, the full sequence uses 2 copies of each element — total 2L elements. Then check if (last element)^2 exists at least once to add a middle element.',
    'For x = 1, any odd count of 1s is valid (1^k = 1 always). Return freq[1] if odd, or freq[1] - 1 if even.',
  ],
  functionName: 'findMaximumElement',
  params: ['nums'],
  starterCode: {
    javascript: 'function findMaximumElement(nums) {\n  \n}\n',
    typescript: 'function findMaximumElement(nums: number[]): number {\n  \n}',
    python: 'def findMaximumElement(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 4, 1, 2, 2, 3, 3]], expected: 3 },
    { args: [[1, 3, 2, 4]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[2, 2, 4]], expected: 3 },
    { args: [[1, 1, 1, 1, 1]], expected: 5 },
    { args: [[2, 2]], expected: 1 },
    { args: [[3, 3, 9, 9, 81]], expected: 5 },
    { args: [[2, 4, 2, 4]], expected: 3 },
  ],
};
