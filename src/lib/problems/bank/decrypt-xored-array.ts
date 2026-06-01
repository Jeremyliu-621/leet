import type { Problem } from '../types';

export const problem: Problem = {
  id: 'decrypt-xored-array',
  title: 'Decode XORed Array',
  difficulty: 'easy',
  tags: ['bit-manipulation', 'arrays', 'math'],
  description: `There is a **hidden** integer array \`arr\` that consists of \`n\` non-negative integers.

It was encoded into another integer array \`encoded\` of length \`n - 1\`, such that \`encoded[i] = arr[i] XOR arr[i + 1]\`. For example, if \`arr = [1,0,2,1]\`, then \`encoded = [1,2,3]\`.

You are given the \`encoded\` array. You are also given an integer \`first\`, that is the first element of \`arr\`, i.e. \`arr[0] = first\`.

Return *the original array* \`arr\`. It can be proved that the answer exists and is unique.`,
  constraints: [
    '2 <= n <= 10^4',
    'encoded.length == n - 1',
    '0 <= encoded[i] <= 10^5',
    '0 <= first <= 10^5',
  ],
  examples: [
    {
      input: 'encoded = [1,2,3], first = 1',
      output: '[1,0,2,1]',
      explanation: 'arr[0]=1. arr[1]=1 XOR 1=0. arr[2]=2 XOR 0=2. arr[3]=3 XOR 2=1.',
    },
    {
      input: 'encoded = [6,2,7,3], first = 4',
      output: '[4,2,0,7,4]',
      explanation: 'arr[0]=4. arr[1]=6 XOR 4=2. arr[2]=2 XOR 2=0. arr[3]=7 XOR 0=7. arr[4]=3 XOR 7=4.',
    },
  ],
  hints: [
    'Since encoded[i] = arr[i] XOR arr[i+1], we can recover arr[i+1] = encoded[i] XOR arr[i].',
    'Start with arr[0] = first, then iterate: arr[i+1] = encoded[i] XOR arr[i].',
    'The XOR operation is its own inverse: if x XOR y = z, then z XOR y = x.',
  ],
  functionName: 'decode',
  params: ['encoded', 'first'],
  starterCode: {
    javascript: `function decode(encoded, first) {\n\n}`,
    typescript: `function decode(encoded: number[], first: number): number[] {

}`,
    python: `def decode(encoded, first):\n    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3], 1], expected: [1, 0, 2, 1] },
    { args: [[6, 2, 7, 3], 4], expected: [4, 2, 0, 7, 4] },
  ],
  hiddenTests: [
    { args: [[1], 5], expected: [5, 4] },
    { args: [[3, 1], 2], expected: [2, 1, 0] },
    { args: [[0, 0, 0], 5], expected: [5, 5, 5, 5] },
    { args: [[7], 7], expected: [7, 0] },
    { args: [[5, 3, 7, 9], 2], expected: [2, 7, 4, 3, 10] },
    { args: [[0], 0], expected: [0, 0] },
  ],
};
