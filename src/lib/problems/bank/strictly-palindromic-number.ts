import type { Problem } from '../types';

export const problem: Problem = {
  id: 'strictly-palindromic-number',
  title: 'Strictly Palindromic Number',
  difficulty: 'medium',
  tags: ['math'],
  description: `An integer \`n\` is **strictly palindromic** if, for **every** base \`b\` between \`2\` and \`n - 2\` (inclusive), the string representation of the integer \`n\` in base \`b\` is **palindromic**.

Given a strictly positive integer \`n\`, return \`true\` if \`n\` is strictly palindromic and \`false\` otherwise.

A string is **palindromic** if it reads the same forward and backward.`,
  constraints: [
    '4 <= n <= 10^5',
  ],
  examples: [
    {
      input: 'n = 9',
      output: 'false',
      explanation: 'In base 2: 9 = "1001" (palindrome). In base 3: 9 = "100" (not a palindrome). So 9 is not strictly palindromic.',
    },
    {
      input: 'n = 4',
      output: 'false',
      explanation: 'In base 2: 4 = "100" (not a palindrome). So 4 is not strictly palindromic.',
    },
  ],
  hints: [
    'Convert n to each base from 2 to n-2 and check if the representation is a palindrome.',
    'Think about what n looks like in base n-2: n = 1*(n-2) + 2, so it is "12", which is NOT a palindrome for n >= 5.',
    'For n = 4: base 2 is "100", not palindrome. So the answer is always false for all valid n >= 4.',
  ],
  functionName: 'isStrictlyPalindromic',
  params: ['n'],
  starterCode: {
    javascript: `function isStrictlyPalindromic(n) {

}`,
    typescript: `function isStrictlyPalindromic(n: number): boolean {

}`,
    python: `def isStrictlyPalindromic(n):
    pass`,
  },
  visibleTests: [
    { args: [9], expected: false },
    { args: [4], expected: false },
  ],
  hiddenTests: [
    { args: [5], expected: false },
    { args: [100], expected: false },
    { args: [1000], expected: false },
    { args: [100000], expected: false },
  ],
};
