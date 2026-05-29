import type { Problem } from '../types';

export const problem: Problem = {
  id: 'strictly-palindromic-number',
  title: 'Strictly Palindromic Number',
  difficulty: 'medium',
  tags: ['math'],
  description: `An integer \`n\` is **strictly palindromic** if, for **every** base \`b\` in the range \`2 <= b <= n - 2\`, the representation of \`n\` in base \`b\` is a **palindrome**.

Given a strictly positive integer \`n\`, return \`true\` if \`n\` is strictly palindromic, and \`false\` otherwise.

A string is a palindrome if it reads the same forward and backward.

**Hint:** Consider the representation of \`n\` in base \`n - 2\`. What does it always equal?`,
  constraints: [
    '4 <= n <= 10^5',
  ],
  examples: [
    {
      input: 'n = 9',
      output: 'false',
      explanation: 'In base 2: 9 = 1001₂ (palindrome). In base 3: 9 = 100₃ (not palindrome). Since there exists a base where it is not a palindrome, return false.',
    },
    {
      input: 'n = 4',
      output: 'false',
      explanation: 'In base 2: 4 = 100₂ (not palindrome). Return false.',
    },
  ],
  hints: [
    'Try writing n in base n-2. For n=5: 5 in base 3 = "12". For n=6: 6 in base 4 = "12". For n=7: 7 in base 5 = "12".',
    'For any n >= 4, n in base (n-2) is always "12", which is never a palindrome.',
    'Therefore, no integer n >= 4 is strictly palindromic. The answer is always false.',
  ],
  functionName: 'isStrictlyPalindromic',
  params: ['n'],
  starterCode: {
    javascript: `function isStrictlyPalindromic(n) {
  // your code here
}`,
    typescript: 'function isStrictlyPalindromic(n: number): boolean {\n  // your code here\n}',
    python: `def isStrictlyPalindromic(n):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [9], expected: false },
    { args: [4], expected: false },
  ],
  hiddenTests: [
    { args: [5], expected: false },
    { args: [11], expected: false },
    { args: [13], expected: false },
    { args: [100], expected: false },
    { args: [99991], expected: false },
  ],
};
