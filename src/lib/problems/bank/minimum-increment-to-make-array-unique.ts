import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-increment-to-make-array-unique',
  title: 'Minimum Increment to Make Array Unique',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\`. In one move, you can pick an index \`i\` where \`0 <= i < nums.length\` and increment \`nums[i]\` by \`1\`.

Return the **minimum number of moves** to make every value in \`nums\` **unique**.

**Note:** The test cases are generated so that the answer fits in a 32-bit integer.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1,2,2]',
      output: '1',
      explanation: 'Increment the last 2 to 3. Array becomes [1,2,3].',
    },
    {
      input: 'nums = [3,2,1,2,1,7]',
      output: '6',
      explanation:
        'After sorting: [1,1,2,2,3,7]. Fix to [1,2,3,4,5,7] using 0+1+1+2+2+0 = 6 increments.',
    },
  ],
  hints: [
    'Level 1: Sort the array. Now process elements left to right: each element must be strictly greater than the previous one.',
    'Level 2: After sorting, if nums[i] <= nums[i-1], you must increment nums[i] to nums[i-1]+1. The cost is (nums[i-1]+1 - nums[i]). Set nums[i] = nums[i-1]+1 and continue.',
    'Level 3: Alternatively, use a counting array: count occurrences of each value, then sweep from left to right carrying over excess elements (duplicates) to the next value slot.',
  ],
  functionName: 'minIncrementForUnique',
  params: ['nums'],
  starterCode: {
    javascript: `function minIncrementForUnique(nums) {

}`,
    typescript: `function minIncrementForUnique(nums: number[]): number {

}`,
    python: `def minIncrementForUnique(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 2]], expected: 1 },
    { args: [[3, 2, 1, 2, 1, 7]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 1, 1]], expected: 3 },
    { args: [[0, 0, 0, 0]], expected: 6 },
    { args: [[5, 5, 5]], expected: 3 },
    { args: [[2, 1, 0]], expected: 0 },
    { args: [[1, 2, 3, 4, 5]], expected: 0 },
    { args: [[0, 5, 5, 5]], expected: 3 },
  ],
};
