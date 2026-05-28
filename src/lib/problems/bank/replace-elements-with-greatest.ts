import type { Problem } from '../types';

export const problem: Problem = {
  id: 'replace-elements-with-greatest',
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
      explanation: 'Index 0: greatest to the right is 18. Index 1: greatest is 6. Index 4: greatest is 1. Index 5: -1.',
    },
    {
      input: 'arr = [400]',
      output: '[-1]',
    },
  ],
  hints: [
    'Traverse from right to left. Track the running maximum of elements seen so far. For each element, set it to the running max, then update the running max.',
    'Scan right-to-left. Track the running maximum from the right. For each position, the answer is the current max, then update the max to include the current element.',
    `\`\`\`js
let maxRight = -1;
for (let i = arr.length-1; i >= 0; i--) {
  const cur = arr[i];
  arr[i] = maxRight;
  maxRight = Math.max(maxRight, cur);
}
return arr;\`\`\``
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
    { args: [[1]], expected: [-1] },
    { args: [[1, 2]], expected: [2, -1] },
    { args: [[5, 4, 3, 2, 1]], expected: [4, 3, 2, 1, -1] },
    { args: [[1, 2, 3, 4, 5]], expected: [5, 5, 5, 5, -1] },
  ],
};
