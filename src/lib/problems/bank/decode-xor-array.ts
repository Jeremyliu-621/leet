import type { Problem } from '../types';

export const problem: Problem = {
  id: 'decode-xor-array',
  title: 'Decode XOR\'d Array',
  difficulty: 'easy',
  tags: ['bit-manipulation', 'arrays', 'math'],
  description: `There is a **hidden** integer array \`arr\` that consists of \`n\` non-negative integers.

It was encoded into another array \`encoded\` of length \`n - 1\`, such that \`encoded[i] = arr[i] XOR arr[i + 1]\`. For example, if \`arr = [1,0,2,1]\`, then \`encoded = [1,2,3]\`.

You are given the \`encoded\` array. You are also given an integer \`first\`, that is the first element of \`arr\`, i.e. \`arr[0] = first\`.

Return the original array \`arr\`. It can be proved that the answer exists and is unique.`,
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
      explanation: 'arr[0]=1; arr[1]=1^1=0; arr[2]=0^2=2; arr[3]=2^3=1.',
    },
    {
      input: 'encoded = [6,2,7,3], first = 4',
      output: '[4,2,0,7,4]',
      explanation: 'arr[0]=4; arr[1]=4^6=2; arr[2]=2^2=0; arr[3]=0^7=7; arr[4]=7^3=4.',
    },
  ],
  hints: [
    'arr[i] = encoded[i-1] XOR arr[i-1] for i >= 1.',
    'Start from first and build the array iteratively.',
    `\`\`\`js
function decode(encoded, first) {
  const arr = [first];
  for (const e of encoded) arr.push(arr[arr.length-1] ^ e);
  return arr;
}\`\`\``,
  ],
  functionName: 'decode',
  params: ['encoded', 'first'],
  starterCode: {
    javascript: `function decode(encoded, first) {

}`,
    typescript: "function decode(encoded: number[], first: number): number[] {\n\n}",

    python: `def decode(encoded, first):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3], 1], expected: [1, 0, 2, 1] },
    { args: [[6, 2, 7, 3], 4], expected: [4, 2, 0, 7, 4] },
  ],
  hiddenTests: [
    { args: [[0], 5], expected: [5, 5] },
    { args: [[1], 0], expected: [0, 1] },
    { args: [[3, 1], 2], expected: [2, 1, 0] },
    { args: [[0, 0], 7], expected: [7, 7, 7] },
  ],
};
