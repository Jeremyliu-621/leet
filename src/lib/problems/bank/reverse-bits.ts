import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-bits',
  title: 'Reverse Bits',
  difficulty: 'easy',
  tags: ['bit-manipulation', 'math'],
  description: `Reverse bits of a given 32-bit unsigned integer.

**Note:** In some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, since the integer's internal binary representation is the same, whether it is signed or unsigned.`,
  constraints: [
    'The input must be a **binary string** of length **32**',
  ],
  examples: [
    {
      input: 'n = 43261596',
      output: '964176192',
      explanation: '43261596 in binary is 00000010100101000001111010011100, reversed is 00111001011110000010100101000000 = 964176192.',
    },
    {
      input: 'n = 4294967293',
      output: '3221225471',
      explanation: '4294967293 = 11111111111111111111111111111101, reversed = 10111111111111111111111111111111 = 3221225471.',
    },
  ],
  hints: [
    'Iterate through all 32 bits. For each bit, shift the result left and OR in the least significant bit of n, then shift n right.',
    '```js\nlet result = 0;\nfor (let i = 0; i < 32; i++) {\n  result = (result * 2 + (n & 1)) >>> 0;\n  n = Math.floor(n / 2);\n}\nreturn result >>> 0;\n```',
    `\`\`\`js
function reverseBits(n) {
  let result=0;
  for(let i=0;i<32;i++){result=(result*2)+(n&1);n>>=1;}
  return result>>>0;
}\`\`\``,
  ],
  functionName: 'reverseBits',
  params: ['n'],
  starterCode: {
    javascript: `function reverseBits(n) {

}`,
    typescript: "function reverseBits(n: number): number {\n\n}",

    python: `def reverseBits(n):
    pass`,
  },
  visibleTests: [
    { args: [43261596], expected: 964176192 },
    { args: [4294967293], expected: 3221225471 },
  ],
  hiddenTests: [
    { args: [0], expected: 0 },
    { args: [1], expected: 2147483648 },
    { args: [2147483648], expected: 1 },
    { args: [4294967295], expected: 4294967295 },
  ],
};
