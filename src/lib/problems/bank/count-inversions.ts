import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-inversions',
  title: 'Count Inversions',
  difficulty: 'medium',
  tags: ['binary-indexed-tree', 'arrays'],
  description: `Given an integer array \`nums\`, return the number of **inversions**.

An **inversion** is a pair \`(i, j)\` where \`i < j\` and \`nums[i] > nums[j]\`.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [3,1,2]',
      output: '2',
      explanation: 'Pairs: (0,1): 3>1 ✓, (0,2): 3>2 ✓, (1,2): 1<2 ✗. Total = 2.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '0',
      explanation: 'The array is sorted; no inversions exist.',
    },
    {
      input: 'nums = [3,2,1]',
      output: '3',
      explanation: 'Every pair is an inversion: (0,1), (0,2), (1,2).',
    },
  ],
  hints: [
    'Use coordinate compression to map values to indices [1..n], then scan left to right. For each element, count how many already-inserted elements are strictly larger — that\'s the BIT prefix query from rank+1 to n.',
    'Equivalently, query the number of elements already seen with rank > current rank. That equals (count so far) − prefixSum(rank). Update BIT at rank after querying.',
    'Compress: build a sorted unique array, then find each value\'s 1-based rank via binary search. BIT update: `bit[i] += 1` propagating up. BIT query: sum `bit[i]` from 1 to k by stripping lowest set bit.',
  ],
  functionName: 'countInversions',
  params: ['nums'],
  starterCode: {
    javascript: `function countInversions(nums) {
  // Coordinate-compress, then use a BIT scanning left to right.
  // For each element at rank r, the number of inversions it forms
  // with previous elements = (elements already inserted) - prefixSum(r).
}`,
    typescript: "function countInversions(nums: number[]): number {\n  // Coordinate-compress, then use a BIT scanning left to right.\n  // For each element at rank r, the number of inversions it forms\n  // with previous elements = (elements already inserted) - prefixSum(r).\n}",

    python: `def countInversions(nums):
    # Coordinate-compress, then use a BIT scanning left to right.
    # For each element at rank r, inversions formed = (elements inserted) - prefix_sum(r).
    pass`,
  },
  visibleTests: [
    { args: [[3, 1, 2]], expected: 2 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[3, 2, 1]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[2, 1]], expected: 1 },
    { args: [[1, 3, 2, 5, 4]], expected: 2 },
    { args: [[5, 4, 3, 2, 1]], expected: 10 },
    { args: [[2, 4, 1, 3, 5]], expected: 3 },
  ],
};
