import type { Problem } from '../types';

export const problem: Problem = {
  id: 'apply-bitwise-operations-to-make-strings-equal',
  title: 'Apply Bitwise Operations to Make Strings Equal',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `You are given two **0-indexed** binary strings \`s\` and \`target\`, both of length \`n\`. You can do the following operation on \`s\` any number of times:

Choose two different indices \`i\` and \`j\` where \`0 <= i, j < n\`.
Simultaneously set \`s[i] = s[i] OR s[j]\` and \`s[j] = s[i] AND s[j]\`.

Return \`true\` if you can make the string \`s\` equal to \`target\`, or \`false\` otherwise.`,
  constraints: [
    '`n == s.length == target.length`',
    '`1 <= n <= 10^5`',
    '`s` and `target` consist of only the digits `0` and `1`.',
  ],
  examples: [
    {
      input: 's = "1010", target = "0110"',
      output: 'true',
      explanation:
        'We can do the following operations: i=0,j=3: s becomes "0011". i=1,j=2: s becomes "0110". Now s == target.',
    },
    {
      input: 's = "11", target = "00"',
      output: 'false',
      explanation: 'It is impossible to make s equal to target using any number of operations.',
    },
  ],
  hints: [
    'Consider what happens to the number of 1s under the operation. OR sets s[i]=1 if either is 1; AND sets s[j]=0 if either is 0. So: (1,0)→(1,0), (0,1)→(1,0), (1,1)→(1,1), (0,0)→(0,0). The total number of 1s is non-decreasing — you can only create 1s, never destroy them.',
    'Once you have at least one 1, you can place it anywhere: move it with (1,0)→(1,0) or spread it. Conversely if you start with all 0s you can never create a 1.',
    'The answer is: `s` has at least one 1 **if and only if** `target` has at least one 1. If both have 0 ones, they are trivially equal (all zeros). If both have ≥1 ones, any configuration is reachable.',
  ],
  functionName: 'makeStringsEqual',
  params: ['s', 'target'],
  starterCode: {
    javascript: `/**
 * @param {string} s
 * @param {string} target
 * @return {boolean}
 */
function makeStringsEqual(s, target) {

}`,
    python: `def makeStringsEqual(s: str, target: str) -> bool:
    pass
`,
  },
  visibleTests: [
    { args: ['1010', '0110'], expected: true },
    { args: ['11', '00'], expected: false },
  ],
  hiddenTests: [
    { args: ['00', '00'], expected: true },
    { args: ['0', '1'], expected: false },
    { args: ['1', '0'], expected: false },
    { args: ['10', '01'], expected: true },
    { args: ['0000', '0000'], expected: true },
    { args: ['1111', '0001'], expected: true },
    { args: ['0001', '1111'], expected: true },
    { args: ['000', '001'], expected: false },
  ],
};
