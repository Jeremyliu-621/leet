import type { Problem } from '../types';

export const problem: Problem = {
  id: 'increasing-triplet-subsequence',
  title: 'Increasing Triplet Subsequence',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return \`true\` if there exists a triple of indices \`(i, j, k)\` such that \`i < j < k\` and \`nums[i] < nums[j] < nums[k]\`. If no such indices exist, return \`false\`.`,
  constraints: [
    '1 <= nums.length <= 5 * 10^5',
    '-2^31 <= nums[i] <= 2^31 - 1',
  ],
  examples: [
    { input: 'nums = [1,2,3,4,5]', output: 'true', explanation: 'Any triplet where i < j < k is valid.' },
    { input: 'nums = [5,4,3,2,1]', output: 'false', explanation: 'No increasing triplet exists.' },
    { input: 'nums = [2,1,5,0,4,6]', output: 'true', explanation: '(3, 4, 5) is valid: nums[3] = 0 < nums[4] = 4 < nums[5] = 6.' },
  ],
  hints: [
    'Track the two smallest values seen so far: `first` and `second`. If you find a value larger than both, return true.',
    'Initialize first = second = Infinity. If nums[i] <= first, update first. Else if nums[i] <= second, update second. Else return true.',
  ],
  functionName: 'increasingTriplet',
  params: ['nums'],
  starterCode: {
    javascript: 'function increasingTriplet(nums) {\n  \n}\n',
    python: 'def increasingTriplet(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: true },
    { args: [[5, 4, 3, 2, 1]], expected: false },
    { args: [[2, 1, 5, 0, 4, 6]], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 1, 1]], expected: false },
    { args: [[1, 2, 1, 3]], expected: true },
    { args: [[20, 100, 10, 12, 5, 13]], expected: true },
    { args: [[1, 5, 0, 4, 1, 3]], expected: true },
    { args: [[0, 4, 2, 1, 0, -1, -3]], expected: false },
  ],
};
