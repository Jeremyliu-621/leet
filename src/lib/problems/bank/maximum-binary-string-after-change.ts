import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-binary-string-after-change',
  title: 'Maximum Binary String After Change',
  difficulty: 'medium',
  tags: ['strings'],
  description: `Given a binary string \`binary\`, you may apply these operations any number of times in any order:
- Replace \`"00"\` with \`"10"\`
- Replace \`"10"\` with \`"01"\`

Return the **maximum** binary string you can get (lexicographically largest).

**Key insight:** The second operation lets a \`1\` slide right past any \`0\`. Combined with the first, you can concentrate all zeros, then reduce them to a single zero. The result is all \`1\`s with exactly one \`0\`, placed as late as possible.`,
  constraints: [
    '1 <= binary.length <= 10^5',
    'binary consists only of "0" and "1"',
  ],
  examples: [
    {
      input: 'binary = "000110"',
      output: '"111011"',
      explanation: 'First 0 at index 0, 4 zeros total → zero ends at index 3. Result: "111" + "0" + "11".',
    },
    {
      input: 'binary = "01"',
      output: '"01"',
      explanation: 'Only one zero. Already optimal: single 0 at end.',
    },
    {
      input: 'binary = "111"',
      output: '"111"',
      explanation: 'No zeros — already maximum.',
    },
  ],
  hints: [
    'If the string has no zeros, it\'s already at maximum. Otherwise the answer always has exactly one zero.',
    'The lone zero\'s position is `firstZeroIndex + totalZeros - 1`. Everything else is `"1"`.',
    '```js\nconst n = binary.length;\nconst firstZero = binary.indexOf("0");\nif (firstZero === -1) return binary;\nconst zeros = [...binary].filter(c => c === "0").length;\nreturn "1".repeat(firstZero + zeros - 1) + "0" +\n       "1".repeat(n - firstZero - zeros);\n```',
  ],
  functionName: 'maximumBinaryString',
  params: ['binary'],
  starterCode: {
    javascript: `function maximumBinaryString(binary) {
  // return the maximum binary string achievable

}`,
    python: `def maximumBinaryString(binary: str) -> str:
    # return the maximum binary string achievable
    pass
`,
  },
  visibleTests: [
    { args: ['000110'], expected: '111011' },
    { args: ['01'], expected: '01' },
    { args: ['111'], expected: '111' },
  ],
  hiddenTests: [
    { args: ['0'], expected: '0' },
    { args: ['1'], expected: '1' },
    { args: ['00'], expected: '10' },
    { args: ['010'], expected: '101' },
    { args: ['0001'], expected: '1101' },
  ],
};
