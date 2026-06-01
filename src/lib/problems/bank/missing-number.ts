import type { Problem } from '../types';

export const problem: Problem = {
  id: 'missing-number',
  title: 'Find the Missing Number',
  difficulty: 'easy',
  tags: ['bit-manipulation', 'arrays'],
  description: `Given an array \`nums\` containing **n** distinct integers in the range \`[0, n]\`, return the one integer in the range that is missing from the array.

The array has exactly one missing number — your job is to find it.

**Hint for efficiency:** The sum of integers \`0\` through \`n\` is \`n * (n + 1) / 2\`. Subtracting the actual sum of the array gives the missing value in O(1) extra space.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 1000',
    '0 <= nums[i] <= n',
    'All values in nums are distinct.',
  ],
  examples: [
    {
      input: 'nums = [3,0,1]',
      output: '2',
      explanation: 'n = 3. The range [0,3] has 4 numbers; 2 is the one missing.',
    },
    {
      input: 'nums = [0,1]',
      output: '2',
      explanation: 'n = 2. The range [0,2] has 3 numbers; 2 is missing.',
    },
    {
      input: 'nums = [9,6,4,2,3,5,7,0,1]',
      output: '8',
      explanation: 'n = 9. The missing number in [0,9] is 8.',
    },
  ],
  hints: [
    'The expected sum of all integers from 0 to n is a well-known formula. Once you know the expected total, you only need the actual total.',
    'Compute `expectedSum = n * (n + 1) / 2` where `n = nums.length`. Then compute `actualSum` by adding up all elements in `nums`.',
    '`const n = nums.length; const expected = n * (n + 1) / 2; const actual = nums.reduce((a, b) => a + b, 0); return expected - actual;`',
  ],
  functionName: 'missingNumber',
  params: ['nums'],
  starterCode: {
    javascript: `function missingNumber(nums) {
  const n = nums.length;
  return (n * (n + 1)) / 2 - nums.reduce((a, b) => a + b, 0);
}`,
    typescript: `function missingNumber(nums: number[]): number {
  const n = nums.length;
  return (n * (n + 1)) / 2 - nums.reduce((a, b) => a + b, 0);
}`,
    python: `def missingNumber(nums):
    n = len(nums)
    return n * (n + 1) // 2 - sum(nums)`,
  },
  visibleTests: [
    { args: [[3, 0, 1]], expected: 2 },
    { args: [[0, 1]], expected: 2 },
    { args: [[9, 6, 4, 2, 3, 5, 7, 0, 1]], expected: 8 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 1 },
    { args: [[1]], expected: 0 },
    { args: [[0, 2]], expected: 1 },
    { args: [[1, 0, 4, 3]], expected: 2 },
    { args: [[0, 1, 2, 3]], expected: 4 },
    { args: [[5, 4, 3, 2, 1, 0]], expected: 6 },
  ],
};
