import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-triplets-forming-two-arrays-of-equal-xor',
  title: 'Count Triplets That Can Form Two Arrays of Equal XOR',
  difficulty: 'medium',
  tags: ['bit-manipulation', 'arrays', 'math'],
  description: `Given an array of integers \`arr\`.

We want to select three indices \`i\`, \`j\` and \`k\` where \`(0 <= i < j <= k < arr.length)\`.

Let's define \`a\` and \`b\` as follows:
- \`a = arr[i] XOR arr[i + 1] XOR ... XOR arr[j - 1]\`
- \`b = arr[j] XOR arr[j + 1] XOR ... XOR arr[k]\`

Note that **XOR of a single element** equals that element.

Return the **number of triplets** (i, j, k) such that \`a == b\`.`,
  constraints: [
    '`1 <= arr.length <= 300`',
    '`1 <= arr[i] <= 10^8`',
  ],
  examples: [
    {
      input: 'arr = [2,3,1,6,7]',
      output: '4',
      explanation:
        'Triplets: (0,1,2), (0,2,2), (2,3,4), (2,4,4). For each, a == b.',
    },
    {
      input: 'arr = [1,1,1,1,1]',
      output: '10',
    },
  ],
  hints: [
    'a XOR b = 0 means arr[i] XOR arr[i+1] XOR ... XOR arr[k] = 0.',
    'For any valid (i, k) pair where xor(arr[i..k]) == 0, any j from i+1 to k works — that\'s (k - i) valid triplets.',
    `\`\`\`js
function countTriplets(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let xor = arr[i];
    for (let k = i + 1; k < arr.length; k++) {
      xor ^= arr[k];
      if (xor === 0) count += k - i;
    }
  }
  return count;
}\`\`\``,
  ],
  functionName: 'countTriplets',
  params: ['arr'],
  starterCode: {
    javascript: `function countTriplets(arr) {

}`,
    typescript: 'function countTriplets(arr: number[]): number {\n\n}',
    python: `def countTriplets(arr):
    pass`,
  },
  visibleTests: [
    { args: [[2, 3, 1, 6, 7]], expected: 4 },
    { args: [[1, 1, 1, 1, 1]], expected: 10 },
    { args: [[2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[0, 0, 0]], expected: 4 },
    { args: [[4, 4, 4, 4]], expected: 6 },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: 14 },
  ],
};
