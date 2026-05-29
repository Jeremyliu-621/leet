import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-number-of-subarrays-where-boundary-elements-are-maximum',
  title: 'Find the Number of Subarrays Where Boundary Elements Are Maximum',
  difficulty: 'hard',
  tags: ['arrays', 'stack'],
  description: `You are given a **0-indexed** integer array \`nums\` of size \`n\`.

Return the number of **non-empty** subarrays \`nums[l..r]\` such that:

- \`nums[l]\` and \`nums[r]\` are both equal to the **maximum** element in \`nums[l..r]\`.

A subarray is any contiguous part of an array (a single element is always valid).`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,4,3,3,2]',
      output: '6',
      explanation: 'Single-element subarrays (5) are always valid. [1,3] = {3,3}: boundary both 3 = max ✓. Total: 6.',
    },
    {
      input: 'nums = [3,3,3]',
      output: '6',
      explanation: 'All n(n+1)/2 = 6 subarrays have boundary elements equal to 3, which is the max in each.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '5',
      explanation: 'Only single-element subarrays qualify: no multi-element subarray has equal boundary elements with that value also being the max.',
    },
  ],
  hints: [
    'For each right endpoint r, count valid left endpoints l: need nums[l] == nums[r] == max(nums[l..r]).',
    'Use a monotone **decreasing** stack of (value, count) pairs. When processing r: pop all entries with value < nums[r] (they are now dominated by nums[r]).',
    'If the stack top value equals nums[r]: those count previous positions are all valid left endpoints — add count+1 (including l=r). Increment the top\'s count.',
    'If the stack top value is greater than nums[r] (or stack is empty): push (nums[r], 1) and add 1 to the answer (only l=r is valid).',
  ],
  functionName: 'numberOfSubarrays',
  params: ['nums'],
  starterCode: {
    javascript: `function numberOfSubarrays(nums) {

}`,
    typescript: `function numberOfSubarrays(nums: number[]): number {

}`,
    python: `def numberOfSubarrays(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 4, 3, 3, 2]], expected: 6 },
    { args: [[3, 3, 3]], expected: 6 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[2, 1]], expected: 2 },
    { args: [[5, 5]], expected: 3 },
    { args: [[1, 2, 1, 2, 1]], expected: 6 },
    { args: [[4, 1, 4, 1, 4]], expected: 8 },
    { args: [[2, 3, 1]], expected: 3 },
    { args: [[5, 5, 5, 5]], expected: 10 },
    { args: [[1, 2, 2, 3]], expected: 5 },
    { args: [[3, 1, 3, 3]], expected: 7 },
    { args: [[1, 2, 3, 2, 1]], expected: 5 },
  ],
};
