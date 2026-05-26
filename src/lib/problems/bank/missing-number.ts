import type { Problem } from '../types';

export const problem: Problem = {
  id: 'missing-number',
  title: 'Missing Number',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an array \`nums\` containing \`n\` distinct numbers in the range \`[0, n]\`, return the only number in the range that is missing from the array.`,
  examples: [
    { input: 'nums = [3,0,1]', output: '2', explanation: 'n = 3 since there are 3 numbers. Missing = 2.' },
    { input: 'nums = [0,1]', output: '2' },
    { input: 'nums = [9,6,4,2,3,5,7,0,1]', output: '8' },
  ],
  constraints: [
    'n == nums.length',
    '1 <= n <= 10^4',
    '0 <= nums[i] <= n',
    'All the numbers of nums are unique.',
  ],
  functionName: 'missingNumber',
  params: ['nums'],
  starterCode: {
    javascript: 'function missingNumber(nums) {\n  // your code here\n}\n',
    python: 'def missingNumber(nums):\n    # your code here\n    pass\n',
  },
  hints: [
    'The sum of 0 to n is n*(n+1)/2. The missing number is that expected sum minus the actual sum of nums.',
    'Or use XOR: XOR all indices 0..n with all values in nums. Paired values cancel; the remaining is the missing number.',
    'Both approaches are O(n) time, O(1) space. The sum approach is simpler to code; the XOR trick avoids any overflow risk.',
  ],
  visibleTests: [
    { args: [[3, 0, 1]], expected: 2 },
    { args: [[0, 1]], expected: 2 },
    { args: [[9, 6, 4, 2, 3, 5, 7, 0, 1]], expected: 8 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 1 },
    { args: [[1]], expected: 0 },
    { args: [[0, 1, 2, 3, 4]], expected: 5 },
  ],
};
