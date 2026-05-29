import type { Problem } from '../types';

export const problem: Problem = {
  id: 'decode-the-array-from-adjacent-xors',
  title: 'Decode the Array from Adjacent XORs',
  difficulty: 'easy',
  tags: ['bit-manipulation', 'arrays'],
  description: `There is a **hidden** integer array \`arr\` that consists of \`n\` non-negative integers.

It was encoded into another array \`encoded\` of length \`n - 1\`, such that \`encoded[i] = arr[i] XOR arr[i + 1]\`. You are also given an integer \`first\`, that equals \`arr[0]\`.

Return the original array \`arr\`. It can be proven that the answer exists and is **unique**.`,
  constraints: [
    '`2 <= n <= 10^4`',
    '`encoded.length == n - 1`',
    '`0 <= encoded[i] <= 10^5`',
    '`0 <= first <= 10^5`',
  ],
  examples: [
    {
      input: 'encoded = [1,2,3], first = 1',
      output: '[1,0,2,1]',
      explanation: 'arr[0]=1, arr[1]=1^1=0, arr[2]=0^2=2, arr[3]=2^3=1.',
    },
    {
      input: 'encoded = [6,2,7,3], first = 4',
      output: '[4,2,0,7,4]',
      explanation: 'arr[0]=4, arr[1]=4^6=2, arr[2]=2^2=0, arr[3]=0^7=7, arr[4]=7^3=4.',
    },
  ],
  hints: [
    'XOR is its own inverse: if `encoded[i] = arr[i] XOR arr[i+1]`, then `arr[i+1] = arr[i] XOR encoded[i]`.',
    'Start with `arr[0] = first` and reconstruct left-to-right.',
    'Each step is O(1), making the whole algorithm O(n).',
    `\`\`\`js
function decode(encoded, first) {
  const arr = [first];
  for (const e of encoded) arr.push(arr[arr.length - 1] ^ e);
  return arr;
}\`\`\``,
  ],
  functionName: 'decode',
  params: ['encoded', 'first'],
  starterCode: {
    javascript: `function decode(encoded, first) {

}`,
    typescript: 'function decode(encoded: number[], first: number): number[] {\n\n}',
    python: `def decode(encoded, first):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3], 1], expected: [1, 0, 2, 1] },
    { args: [[6, 2, 7, 3], 4], expected: [4, 2, 0, 7, 4] },
    { args: [[0], 5], expected: [5, 5] },
  ],
  hiddenTests: [
    { args: [[0, 0], 0], expected: [0, 0, 0] },
    { args: [[3], 3], expected: [3, 0] },
    { args: [[1, 1, 1, 1], 0], expected: [0, 1, 0, 1, 0] },
    { args: [[5, 5], 5], expected: [5, 0, 5] },
    { args: [[7, 3, 4], 2], expected: [2, 5, 6, 2] },
  ],
};
