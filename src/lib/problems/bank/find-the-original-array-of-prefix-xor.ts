import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-original-array-of-prefix-xor',
  title: 'Find the Original Array of Prefix XOR',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`pref\` of size \`n\`. Find and return the array \`arr\` of size \`n\` that satisfies:

- \`pref[i] = arr[0] XOR arr[1] XOR ... XOR arr[i]\`.

**Note** that \`XOR\` denotes the bitwise-XOR operation.

It can be proven that the answer is **unique**.`,
  constraints: [
    '1 <= pref.length <= 10^5',
    '0 <= pref[i] <= 10^6',
  ],
  examples: [
    {
      input: 'pref = [5,2,0,3,1]',
      output: '[5,7,2,3,2]',
      explanation: 'arr[0]=5, arr[1]=5^2=7, arr[2]=2^0=2, arr[3]=0^3=3, arr[4]=3^1=2.',
    },
    {
      input: 'pref = [13]',
      output: '[13]',
      explanation: 'Single element: arr[0] = pref[0] = 13.',
    },
  ],
  hints: [
    'arr[0] = pref[0].',
    'For i > 0, arr[i] = pref[i] XOR pref[i-1], because XORing pref[i-1] cancels all terms before i.',
    `\`\`\`js
const arr = [pref[0]];
for (let i=1; i<pref.length; i++) arr.push(pref[i]^pref[i-1]);
return arr;\`\`\``
  ],
  functionName: 'findArray',
  params: ['pref'],
  starterCode: {
    javascript: `function findArray(pref) {

}`,
    python: `def findArray(pref):
    pass`,
  },
  visibleTests: [
    { args: [[5, 2, 0, 3, 1]], expected: [5, 7, 2, 3, 2] },
    { args: [[13]], expected: [13] },
  ],
  hiddenTests: [
    { args: [[0, 0, 0]], expected: [0, 0, 0] },
    { args: [[1, 3, 2]], expected: [1, 2, 1] },
    { args: [[4, 4, 4, 4]], expected: [4, 0, 0, 0] },
    { args: [[7, 3, 5]], expected: [7, 4, 6] },
  ],
};
