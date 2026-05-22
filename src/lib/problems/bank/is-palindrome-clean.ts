import type { Problem } from '../types';

export const problem: Problem = {
  id: 'is-palindrome-clean',
  title: 'Letter Palindrome Check',
  difficulty: 'easy',
  tags: ['strings'],
  description:
    'A palindrome reads the same forwards and backwards.\n\nGiven a string text, decide whether it is a palindrome when only letters are considered. Ignore every non-letter character (spaces, digits, punctuation) and treat uppercase and lowercase as equal.\n\nReturn true if the cleaned string is a palindrome, otherwise return false. An empty cleaned string counts as a palindrome.',
  constraints: [
    '0 <= text.length <= 1000',
    'text may contain letters, digits, spaces, and punctuation.',
  ],
  examples: [
    {
      input: 'text = "Race car"',
      output: 'true',
      explanation: 'Cleaned to "racecar", which reads the same both ways.',
    },
    {
      input: 'text = "hello"',
      output: 'false',
      explanation: '"hello" reversed is "olleh".',
    },
    {
      input: 'text = "Was it a car or a cat I saw?"',
      output: 'true',
    },
  ],
  functionName: 'isLetterPalindrome',
  params: ['text'],
  starterCode: {
    javascript: 'function isLetterPalindrome(text) {\n  // your code here\n}\n',
  },
  visibleTests: [
    { args: ['Race car'], expected: true },
    { args: ['hello'], expected: false },
    { args: ['Was it a car or a cat I saw?'], expected: true },
  ],
  hiddenTests: [
    { args: [''], expected: true },
    { args: ['12321'], expected: true },
    { args: ['a'], expected: true },
    { args: ['ab'], expected: false },
    { args: ['No lemon, no melon'], expected: true },
    { args: ['Almost a palindrome'], expected: false },
  ],
};
