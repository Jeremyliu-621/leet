import type { Problem } from '../types';

export const problem: Problem = {
  id: 'generate-binary-strings-without-adjacent-zeros',
  title: 'Generate Binary Strings Without Adjacent Zeros',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming', 'backtracking'],
  description: `You are given a positive integer \`n\`.

A binary string \`x\` is **valid** if all substrings of \`x\` of length 2 contain **at least one** \`"1"\`. In other words, the string must not contain \`"00"\` as a substring.

Return all **valid** strings with length \`n\`, in any order.`,
  constraints: ['1 <= n <= 18'],
  examples: [
    {
      input: 'n = 1',
      output: '["0","1"]',
      explanation: 'Both "0" and "1" are valid since they have no substrings of length 2.',
    },
    {
      input: 'n = 2',
      output: '["01","10","11"]',
      explanation: '"00" is invalid (contains adjacent zeros). The other three strings are valid.',
    },
    {
      input: 'n = 3',
      output: '["010","011","101","110","111"]',
    },
  ],
  hints: [
    'Use DFS/backtracking: build the string character by character.',
    'You can always place "1" at any position.',
    'You can only place "0" if the previous character is "1" (or there is no previous character).',
    'The number of valid strings grows like the Fibonacci sequence.',
  ],
  functionName: 'validStrings',
  params: ['n'],
  starterCode: {
    javascript: `function validStrings(n) {

}`,
    typescript: `function validStrings(n: number): string[] {

}`,
    python: `def validStrings(n):
    pass`,
  },
  visibleTests: [
    { args: [1], expected: ['0', '1'] },
    { args: [2], expected: ['01', '10', '11'] },
    { args: [3], expected: ['010', '011', '101', '110', '111'] },
  ],
  hiddenTests: [
    { args: [4], expected: ['0101', '0110', '0111', '1010', '1011', '1101', '1110', '1111'] },
  ],
};
