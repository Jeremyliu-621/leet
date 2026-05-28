import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-palindromic-subsequences',
  title: 'Remove Palindromic Subsequences',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `You are given a string \`s\` consisting **only** of letters \`'a'\` and \`'b'\`. In a single step you can remove one **palindromic subsequence** from \`s\`.

Return the **minimum** number of steps to make the given string empty.

A string is a **subsequence** of another string if it can be obtained by deleting some characters (possibly none) without changing the order of the remaining characters.

A string is called **palindrome** if it reads the same backward as forward.`,
  constraints: [
    '0 <= s.length <= 1000',
    's[i] is either \'a\' or \'b\'',
  ],
  examples: [
    {
      input: 's = "ababa"',
      output: '1',
      explanation: '"ababa" is already a palindrome, so it can be removed in 1 step.',
    },
    {
      input: 's = "abb"',
      output: '2',
      explanation: '"abb" -> "bb" -> "". Remove palindromic subsequence "a" in step 1, "bb" in step 2.',
    },
    {
      input: 's = "baabb"',
      output: '2',
      explanation: '"baabb" -> "b" -> "". Remove "baab" (palindrome) in step 1, "b" in step 2.',
    },
  ],
  hints: [
    'The answer is always 0, 1, or 2.',
    'If the string is empty, return 0.',
    'If the string is already a palindrome, return 1.',
    'Otherwise, return 2 (remove all \'a\'s then all \'b\'s, each is a palindromic subsequence).',
  ],
  functionName: 'removePalindromeSub',
  params: ['s'],
  starterCode: {
    javascript: 'function removePalindromeSub(s) {\n\n}\n',
    typescript: "function removePalindromeSub(s: string): number {\n\n}",

    python: 'def removePalindromeSub(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['ababa'], expected: 1 },
    { args: ['abb'], expected: 2 },
    { args: ['baabb'], expected: 2 },
  ],
  hiddenTests: [
    { args: [''], expected: 0 },
    { args: ['a'], expected: 1 },
    { args: ['ab'], expected: 2 },
    { args: ['aabb'], expected: 2 },
  ],
};
