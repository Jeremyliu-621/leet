import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-array-alternating',
  title: 'Minimum Operations to Make Array Alternating',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** array \`nums\` of \`n\` positive integers.

The array \`nums\` is called **alternating** if:
- \`nums[i - 2] == nums[i]\` for all indices \`i\` where \`2 <= i < n\`.
- \`nums[i - 1] != nums[i]\` for all indices \`i\` where \`1 <= i < n\`.

In other words: all elements at **even** indices must be equal to each other, all elements at **odd** indices must be equal to each other, and adjacent elements must differ.

In one operation, you can choose an index \`i\` and change \`nums[i]\` to **any** value.

Return the **minimum number of operations** to make the array alternating.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [3,1,3,2,4,3]',
      output: '3',
      explanation: 'Change indices 1, 3, 5 to 3 → [3,3,3,3,3,3]? No — must alternate. Best: set all even indices to 3 and all odd indices to some other value (e.g., 1). Costs at most 3 changes.',
    },
    {
      input: 'nums = [1,2,2,2,2]',
      output: '2',
      explanation: 'Set even indices to 1 and odd indices to 2: [1,2,1,2,1]. Change indices 2 and 4.',
    },
    {
      input: 'nums = [1,2]',
      output: '0',
      explanation: 'Already alternating: nums[0] != nums[1].',
    },
  ],
  hints: [
    'Level 1: Find the most common value at even indices and the most common value at odd indices. Changing everything else costs n - count(best_even) - count(best_odd).',
    'Level 2: The catch: if the most common even value equals the most common odd value, you must use the second-most-common for one of them. Compare both options and pick the cheaper one.',
    'Level 3: For even indices, find the top-2 values by count (e0 >= e1). Same for odd (o0 >= o1). If e0.val != o0.val: answer = n - e0.count - o0.count. Otherwise: answer = n - max(e0.count + o1.count, e1.count + o0.count).',
  ],
  functionName: 'minimumOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumOperations(nums) {

}`,
    typescript: `function minimumOperations(nums: number[]): number {

}`,
    python: `def minimumOperations(nums):
    pass`,
  },
  visibleTests: [
    { args: [[3, 1, 3, 2, 4, 3]], expected: 3 },
    { args: [[1, 2, 2, 2, 2]], expected: 2 },
    { args: [[1, 2]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 2, 1, 2]], expected: 0 },
    { args: [[2, 2, 2, 2, 2]], expected: 2 },
    { args: [[1, 1, 1, 1]], expected: 2 },
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[5, 5, 5, 5, 5, 5]], expected: 3 },
    { args: [[1, 2, 1, 2, 1, 2]], expected: 0 },
  ],
};
