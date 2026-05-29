import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-even-and-odd-indices-independently',
  title: 'Sort Even and Odd Indices Independently',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a **0-indexed** integer array \`nums\`. Rearrange the values of \`nums\` according to the following rules:

1. Sort the values at **odd indices** of \`nums\` in **non-increasing** order.
2. Sort the values at **even indices** of \`nums\` in **non-decreasing** order.

Return the array formed after rearranging the values of \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [4,1,2,3]',
      output: '[2,3,4,1]',
      explanation: 'Even indices: [4,2] → sorted ascending → [2,4]. Odd indices: [1,3] → sorted descending → [3,1]. Result: [2,3,4,1].',
    },
    {
      input: 'nums = [2,1]',
      output: '[2,1]',
      explanation: 'Even indices: [2], odd indices: [1]. Already sorted. Result: [2,1].',
    },
  ],
  hints: [
    'Extract elements at even indices into one array and elements at odd indices into another.',
    'Sort the even-index array ascending and the odd-index array descending.',
    'Reconstruct the result by interleaving: result[0]=even[0], result[1]=odd[0], result[2]=even[1], ...',
  ],
  functionName: 'sortEvenOdd',
  params: ['nums'],
  starterCode: {
    javascript: `function sortEvenOdd(nums) {

}`,
    typescript: `function sortEvenOdd(nums: number[]): number[] {

}`,
    python: `def sortEvenOdd(nums: list[int]) -> list[int]:
    pass`,
  },
  visibleTests: [
    { args: [[4, 1, 2, 3]], expected: [2, 3, 4, 1] },
    { args: [[2, 1]], expected: [2, 1] },
    { args: [[1, 3, 2, 4, 5]], expected: [1, 4, 2, 3, 5] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[2, 3, 1, 4]], expected: [1, 4, 2, 3] },
    { args: [[5, 5, 5, 5]], expected: [5, 5, 5, 5] },
    { args: [[3, 2, 1]], expected: [1, 2, 3] },
    { args: [[1, 2, 3, 4, 5, 6]], expected: [1, 6, 3, 4, 5, 2] },
    { args: [[10, 1, 1, 10]], expected: [1, 10, 10, 1] },
    { args: [[4, 3, 2, 1]], expected: [2, 3, 4, 1] },
    { args: [[1, 5, 3, 4, 2]], expected: [1, 5, 2, 4, 3] },
  ],
};
