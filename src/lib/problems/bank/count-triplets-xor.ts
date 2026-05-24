import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-triplets-xor',
  title: 'Count Triplets That Can Form Two Arrays of Equal XOR',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an array of integers \`arr\`, return *the number of triplets* \`(i, j, k)\` such that \`0 <= i < j <= k < arr.length\` and \`a == b\`, where:

- \`a = arr[i] XOR arr[i + 1] XOR ... XOR arr[j - 1]\`
- \`b = arr[j] XOR arr[j + 1] XOR ... XOR arr[k]\`

**Note:** \`a == b\` implies \`a XOR b == 0\`, which means \`arr[i] XOR arr[i+1] XOR ... XOR arr[k] == 0\`.`,
  constraints: [
    '1 <= arr.length <= 300',
    '1 <= arr[i] <= 10^8',
  ],
  examples: [
    {
      input: 'arr = [2,3,1,6,7]',
      output: '4',
      explanation: 'Valid triplets: (0,1,2), (0,2,2), (2,3,4), (2,4,4).',
    },
    {
      input: 'arr = [1,1,1,1,1]',
      output: '10',
    },
  ],
  hints: [
    'If arr[i] XOR ... XOR arr[k] == 0, then for any j in (i, k], a == b.',
    'That means for each pair (i, k) where prefix XOR from i to k is 0, there are (k - i) valid j positions.',
    'Use a prefix XOR array to check if XOR of arr[i..k] == 0 in O(1).',
  ],
  functionName: 'countTriplets',
  params: ['arr'],
  starterCode: {
    javascript: `function countTriplets(arr) {

}`,
    python: `def countTriplets(arr):
    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 1, 6, 7]], expected: 4 },
    { args: [[1, 1, 1, 1, 1]], expected: 10 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 0 },
    { args: [[1, 1]], expected: 1 },
    { args: [[2, 2, 2]], expected: 2 },
    { args: [[1, 2, 3, 4]], expected: 2 },
    { args: [[1, 1, 2, 2]], expected: 5 },
  ],
};
