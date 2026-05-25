import type { Problem } from '../types';

export const problem: Problem = {
  id: 'replace-elements-with-greatest-on-right',
  title: 'Replace Elements with Greatest Element on Right Side',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array \`arr\`, replace every element in that array with the greatest element among the elements to its right. Replace the last element with \`-1\`.

After doing so, return the array.`,
  constraints: [
    '1 <= arr.length <= 10^4',
    '1 <= arr[i] <= 10^5',
  ],
  examples: [
    {
      input: 'arr = [17,18,5,4,6,1]',
      output: '[18,6,6,6,1,-1]',
      explanation: 'Greatest to right of 17 is 18; of 18 is 6; of 5 is 6; of 4 is 6; of 6 is 1; last → -1.',
    },
    {
      input: 'arr = [400]',
      output: '[-1]',
      explanation: 'Single element: last element replaced by -1.',
    },
  ],
  hints: [
    'Traverse right to left, keeping track of the current max.',
    'At each position, swap the current element with the tracked max, then update the max.',
  ],
  functionName: 'replaceElements',
  params: ['arr'],
  starterCode: {
    javascript: `function replaceElements(arr) {

}`,
    python: `def replaceElements(arr):
    pass`,
  },
  visibleTests: [
    { args: [[17, 18, 5, 4, 6, 1]], expected: [18, 6, 6, 6, 1, -1] },
    { args: [[400]], expected: [-1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: [3, 3, -1] },
    { args: [[3, 2, 1]], expected: [2, 1, -1] },
    { args: [[1]], expected: [-1] },
    { args: [[5, 5, 5, 5]], expected: [5, 5, 5, -1] },
  ],
};
