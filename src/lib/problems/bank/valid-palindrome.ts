import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-palindrome',
  title: 'Valid Palindrome',
  difficulty: 'easy',
  tags: ['two-pointers', 'strings'],
  description: `A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string \`s\`, return \`true\` if it is a palindrome, or \`false\` otherwise.`,
  examples: [
    { input: 's = "A man, a plan, a canal: Panama"', output: 'true', explanation: '"amanaplanacanalpanama" is a palindrome.' },
    { input: 's = "race a car"', output: 'false', explanation: '"raceacar" is not a palindrome.' },
    { input: 's = " "', output: 'true', explanation: 'After removing non-alphanumeric characters, it becomes "".' },
  ],
  constraints: [
    '1 <= s.length <= 2 * 10^5',
    's consists only of printable ASCII characters.',
  ],
  functionName: 'isPalindrome',
  params: ['s'],
  starterCode: {
    javascript: 'function isPalindrome(s) {\n  // your code here\n}\n',
    python: 'def isPalindrome(s):\n    # your code here\n    pass\n',
  },
  hints: [
    'Filter the string to only alphanumeric characters, convert to lowercase, then check if it equals its reverse.',
    'Or use two pointers: skip non-alphanumeric characters, compare lowercase letters/digits from both ends.',
  ],
  visibleTests: [
    { args: ['A man, a plan, a canal: Panama'], expected: true },
    { args: ['race a car'], expected: false },
    { args: [' '], expected: true },
  ],
  hiddenTests: [
    { args: ['0P'], expected: false },
    { args: ['a'], expected: true },
    { args: ['1b1'], expected: true },
    { args: ['Madam'], expected: true },
  ],
};
