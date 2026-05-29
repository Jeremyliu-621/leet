import type { Problem } from '../types';

export const problem: Problem = {
  id: 'replace-elements-with-greatest-element-on-right-side',
  title: 'Replace Elements with Greatest Element on Right Side',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array \`arr\`, replace every element in that array with the greatest element among the elements to its right, and replace the last element with \`-1\`.

After doing so, return the array.`,
  constraints: [
    '`1 <= arr.length <= 10^4`',
    '`1 <= arr[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'arr = [17,18,5,4,6,1]',
      output: '[18,6,6,6,1,-1]',
      explanation: 'Each element is replaced by the max of all elements to its right. Last becomes -1.',
    },
    {
      input: 'arr = [400]',
      output: '[-1]',
      explanation: 'Single element has no right neighbors, so it becomes -1.',
    },
  ],
  hints: [
    'Process the array from right to left, maintaining a running maximum.',
    'Replace arr[i] with the current maximum, then update the maximum if needed.',
    'Initialize maxRight = -1 for the last element.',
  ],
  functionName: 'replaceElements',
  params: ['arr'],
  starterCode: {
    javascript: `function replaceElements(arr) {

}`,
    typescript: `function replaceElements(arr: number[]): number[] {

}`,
    python: `def replaceElements(arr):
    pass`,
  },
  visibleTests: [
    { args: [[17, 18, 5, 4, 6, 1]], expected: [18, 6, 6, 6, 1, -1] },
    { args: [[400]], expected: [-1] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [-1] },
    { args: [[1, 2]], expected: [2, -1] },
    { args: [[2, 1]], expected: [1, -1] },
    { args: [[1, 2, 3]], expected: [3, 3, -1] },
    { args: [[3, 2, 1]], expected: [2, 1, -1] },
    { args: [[5, 5, 5]], expected: [5, 5, -1] },
  ],
};
