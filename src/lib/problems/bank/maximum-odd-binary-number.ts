import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-odd-binary-number',
  title: 'Maximum Odd Binary Number',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `You are given a **binary** string \`s\` that contains **at least** one \`'1'\`.

You have to **rearrange** the bits in such a way that the resulting binary number is the **maximum odd binary number** that can be created from this combination.

Return a string representing the maximum odd binary number from the given combination. **Note** that the resulting string **can** have leading zeroes.`,
  constraints: [
    '1 <= s.length <= 100',
    's consists only of \'0\' and \'1\'',
    's contains at least one \'1\'',
  ],
  examples: [
    {
      input: 's = "010"',
      output: '"001"',
      explanation: 'Rearranging to make the largest odd binary: the only odd arrangement is "001" (value 1) since there is exactly one 1.',
    },
    {
      input: 's = "0101"',
      output: '"1001"',
      explanation: 'One of the best ways to do it is "1001" (value 9). It is odd.',
    },
  ],
  hints: [
    'An odd binary number must end in \'1\'.',
    'To maximize the value, put all remaining \'1\'s at the front, then zeros, then the final \'1\'.',
    'Count the ones: place (count - 1) ones first, then all zeros, then one \'1\' at the end.',
  ],
  functionName: 'maximumOddBinaryNumber',
  params: ['s'],
  starterCode: {
    javascript: `function maximumOddBinaryNumber(s) {

}`,
    typescript: "function maximumOddBinaryNumber(s: string): string {\n\n}",

    python: `def maximumOddBinaryNumber(s):
    pass`,
  },
  visibleTests: [
    { args: ['010'], expected: '001' },
    { args: ['0101'], expected: '1001' },
  ],
  hiddenTests: [
    { args: ['1'], expected: '1' },
    { args: ['11'], expected: '11' },
    { args: ['000001'], expected: '000001' },
    { args: ['110101'], expected: '111001' },
  ],
};
