import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-reorder-array-to-get-same-bst',
  title: 'Number of Ways to Reorder Array to Get Same BST',
  difficulty: 'hard',
  tags: ['tree', 'dynamic-programming', 'math'],
  description: `Given an array \`nums\` that represents a permutation of integers from \`1\` to \`n\`, we are going to construct a **Binary Search Tree (BST)** by inserting the elements of \`nums\` in order into an initially empty BST. Find the number of different ways to reorder \`nums\` so that the constructed BST is **identical** to the BST formed from the original array.

Return the answer **modulo** \`10^9 + 7\`.

Since we are counting **other** orderings, do not include the original ordering.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= nums.length',
    'All integers in nums are distinct.',
  ],
  examples: [
    {
      input: 'nums = [2,1,3]',
      output: '1',
      explanation: 'The original [2,1,3] and [2,3,1] produce the same BST.',
    },
    {
      input: 'nums = [3,4,5,1,2]',
      output: '5',
      explanation: 'Right subtree [4,5] and left subtree [1,2] can be freely interleaved: C(4,2)=6 orderings including the original, so 5 others.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '0',
      explanation: 'Only one way to build this right-chain BST.',
    },
  ],
  hints: [
    'The root must always be nums[0]. Elements smaller form the left subtree; elements larger form the right subtree.',
    'The number of ways to interleave L left-subtree elements with R right-subtree elements is C(L+R, L).',
    'Use recursion: count(arr) = C(L+R, L) * count(left) * count(right). Answer = count(nums) - 1.',
    'Use Pascal\'s triangle to compute binomial coefficients modulo 10^9+7.',
  ],
  functionName: 'numOfWays',
  params: ['nums'],
  starterCode: {
    javascript: 'function numOfWays(nums) {\n  \n}\n',
    typescript: 'function numOfWays(nums: number[]): number {\n  \n}',
    python: 'def numOfWays(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 1, 3]], expected: 1 },
    { args: [[3, 4, 5, 1, 2]], expected: 5 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[2, 3, 1]], expected: 1 },
    { args: [[4, 1, 2, 3]], expected: 0 },
    { args: [[3, 1, 2, 4]], expected: 2 },
    { args: [[4, 2, 1, 3]], expected: 1 },
  ],
};
