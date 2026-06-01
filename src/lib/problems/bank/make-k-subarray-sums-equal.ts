import type { Problem } from '../types';

export const problem: Problem = {
  id: 'make-k-subarray-sums-equal',
  title: 'Make K-Subarray Sums Equal',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`arr\` and an integer \`k\`. The array \`arr\` is **circular**. In other words, the first element of the array is adjacent to the last element.

You can do the following operation any number of times:

- Pick any element and increase or decrease it by 1.

Return the **minimum** number of operations to make the sum of every **subarray** of length \`k\` equal.`,
  constraints: [
    '`1 <= k <= arr.length <= 10^5`',
    '`1 <= arr[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'arr = [1,4,1,3], k = 2',
      output: '1',
      explanation: 'Groups (circular, k=2, gcd(4,2)=2): {0,2}→[1,1] cost 0; {1,3}→[4,3] cost 1. Total 1.',
    },
    {
      input: 'arr = [1,1,1], k = 1',
      output: '0',
      explanation: 'All elements must be equal (gcd(3,1)=1, single group [1,1,1]). Already equal, cost 0.',
    },
    {
      input: 'arr = [1,3,2], k = 1',
      output: '2',
      explanation: 'Single group [1,3,2], median=2, cost |1-2|+|3-2|+|2-2|=2.',
    },
  ],
  hints: [
    'For all subarrays of length k to have equal sum in a circular array, arr[i] must equal arr[(i+k) % n] for all i.',
    'Following i → (i+k) % n repeatedly gives a cycle. Each cycle has length n / gcd(n, k). Elements within each cycle must all be equal.',
    'The minimum operations to equalize a group is achieved by choosing the median. Sum |element - median| for each group and total them.',
  ],
  functionName: 'makeSubKSumEqual',
  params: ['arr', 'k'],
  starterCode: {
    javascript: `function makeSubKSumEqual(arr, k) {

}`,
    typescript: `function makeSubKSumEqual(arr: number[], k: number): number {

}`,
    python: `def makeSubKSumEqual(arr, k):
    pass`,
  },
  visibleTests: [
    { args: [[1, 4, 1, 3], 2], expected: 1 },
    { args: [[1, 1, 1], 1], expected: 0 },
    { args: [[1, 3, 2], 1], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 3], expected: 0 },
    { args: [[5, 5, 5, 5], 2], expected: 0 },
    { args: [[3, 3, 4, 4], 2], expected: 2 },
    { args: [[2, 2, 2, 3], 1], expected: 1 },
    { args: [[1, 2, 3, 4], 1], expected: 4 },
  ],
};
