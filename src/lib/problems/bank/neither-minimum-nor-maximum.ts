import type { Problem } from '../types';

export const problem: Problem = {
  id: 'neither-minimum-nor-maximum',
  title: 'Neither Minimum nor Maximum',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\` containing **distinct** positive integers, find and return **any** number from the array that is neither the **minimum** nor the **maximum** value in the array, or \`-1\` if there is no such number.

Return the selected integer.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
    'All values in nums are distinct.',
  ],
  examples: [
    { input: 'nums = [3,2,1,4]', output: '2', explanation: '2 is neither the minimum (1) nor the maximum (4). 3 is also valid.' },
    { input: 'nums = [1,2]', output: '-1', explanation: 'Only 2 elements; one is min, one is max.' },
    { input: 'nums = [2,1,3]', output: '2', explanation: '2 is neither min (1) nor max (3).' },
  ],
  hints: [
    'Find min and max, then return the first element that is neither.',
  ],
  functionName: 'findNonMinOrMax',
  params: ['nums'],
  starterCode: {
    javascript: 'function findNonMinOrMax(nums) {\n  \n}\n',
    python: 'def findNonMinOrMax(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[3,2,1,4]], expected: 3 },
    { args: [[1,2]], expected: -1 },
    { args: [[2,1,3]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[5]], expected: -1 },
    { args: [[1,2,3,4,5]], expected: 2 },
    { args: [[10,1,5,3]], expected: 5 },
    { args: [[7,3,1]], expected: 3 },
    { args: [[100,50,1]], expected: 50 },
  ],
};
