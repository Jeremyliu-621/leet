import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-pairs',
  title: 'Reverse Pairs',
  difficulty: 'hard',
  tags: ['binary-indexed-tree', 'arrays'],
  description: `Given an integer array \`nums\`, return the number of **reverse pairs** in the array.

A reverse pair is a pair \`(i, j)\` where:
- \`0 <= i < j < nums.length\` and
- \`nums[i] > 2 * nums[j]\`.`,
  constraints: ['1 <= nums.length <= 5 * 10^4', '-2^31 <= nums[i] <= 2^31 - 1'],
  examples: [
    { input: 'nums = [1,3,2,3,1]', output: '2', explanation: 'Pairs (1,4): (3,1) where 3>2*1, and (3,1) at other index.' },
    { input: 'nums = [2,4,3,5,1]', output: '3' },
  ],
  hints: [
    'Use merge sort. During the merge of two halves, count reverse pairs between them.',
    'For each element nums[i] in the left half, count how many elements nums[j] in the right half satisfy nums[i] > 2*nums[j]. Use a two-pointer since both halves are sorted.',
    'After counting, proceed with the standard merge.',
  ],
  functionName: 'reversePairs',
  params: ['nums'],
  starterCode: {
    javascript: 'function reversePairs(nums) {\n\n}\n',
    python: 'def reversePairs(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 2, 3, 1]], expected: 2 },
    { args: [[2, 4, 3, 5, 1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[]], expected: 0 },
    { args: [[1]], expected: 0 },
    { args: [[6, 1, 2, 3, 4, 5]], expected: 2 },
    { args: [[5, 4, 3, 2, 1]], expected: 4 },
  ],
};
