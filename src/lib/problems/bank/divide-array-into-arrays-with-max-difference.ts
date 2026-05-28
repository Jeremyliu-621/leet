import type { Problem } from '../types';

export const problem: Problem = {
  id: 'divide-array-into-arrays-with-max-difference',
  title: 'Divide Array Into Arrays With Max Difference',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an integer array \`nums\` of size \`n\` where \`n\` is a multiple of 3, and a positive integer \`k\`.

Divide the array into \`n / 3\` arrays of size 3 such that the difference between any two elements in each array is **less than or equal to** \`k\`.

Return a **2D** array containing the arrays. If it is impossible to satisfy the conditions, return an empty array. If there are multiple answers, return any of them.`,
  constraints: [
    '`n == nums.length`',
    '`1 <= n <= 10^5`',
    '`n` is a multiple of 3.',
    '`1 <= nums[i] <= 10^5`',
    '`1 <= k <= 10^5`',
  ],
  examples: [
    {
      input: 'nums = [1,3,4,8,7,9,3,5,1], k = 2',
      output: '[[1,1,3],[3,4,5],[7,8,9]]',
      explanation: 'After sorting [1,1,3,3,4,5,7,8,9], each consecutive triplet has max−min ≤ 2.',
    },
    {
      input: 'nums = [1,3,3,2,7,3], k = 3',
      output: '[]',
      explanation: 'After sorting [1,2,3,3,3,7]: group [1,2,3] is valid, but [3,3,7] has diff 4 > 3 — impossible.',
    },
    {
      input: 'nums = [4,2,9,8,2,12,7,12,10], k = 5',
      output: '[[2,2,4],[7,8,9],[10,12,12]]',
      explanation: 'After sorting [2,2,4,7,8,9,10,12,12]: each consecutive triplet has diff ≤ 5.',
    },
  ],
  functionName: 'divideArray',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
function divideArray(nums, k) {

}`,
    typescript: "function divideArray(nums: number[], k: number): number[][] {number[]} nums\n * @param {number} k\n * @return {number[][]}\n */\nfunction divideArray(nums, k) {\n\n}",

    python: `def divideArray(nums: list[int], k: int) -> list[list[int]]:
    pass`,
  },
  hints: [
    'In any valid grouping, each group must consist of elements that are close together in value. What does that imply about how the array should be ordered?',
    'After sorting, the only valid grouping (if any exists) is consecutive triplets: [0..2], [3..5], [6..8], etc. Any other grouping would force elements farther apart.',
    'Sort the array, then iterate in steps of 3. For each triplet, if `nums[i+2] − nums[i] > k`, return []. Otherwise append [nums[i], nums[i+1], nums[i+2]] to the result.',
  ],
  visibleTests: [
    { args: [[1, 3, 4, 8, 7, 9, 3, 5, 1], 2], expected: [[1, 1, 3], [3, 4, 5], [7, 8, 9]] },
    { args: [[1, 3, 3, 2, 7, 3], 3], expected: [] },
    { args: [[4, 2, 9, 8, 2, 12, 7, 12, 10], 5], expected: [[2, 2, 4], [7, 8, 9], [10, 12, 12]] },
  ],
  hiddenTests: [
    { args: [[1, 1, 1], 0], expected: [[1, 1, 1]] },
    { args: [[1, 2, 100], 5], expected: [] },
    { args: [[3, 3, 3, 3, 3, 3], 0], expected: [[3, 3, 3], [3, 3, 3]] },
    { args: [[1, 2, 3, 4, 5, 6], 2], expected: [[1, 2, 3], [4, 5, 6]] },
    { args: [[10, 1, 5, 2, 4, 9], 4], expected: [] },
  ],
};
