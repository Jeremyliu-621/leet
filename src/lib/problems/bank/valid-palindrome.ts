import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-palindrome',
  title: 'Valid Palindrome',
  difficulty: 'easy',
  tags: ['strings'],
  description: `A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string \`s\`, return \`true\` if it is a palindrome, or \`false\` otherwise.

**Approach:** Two pointers from both ends. Skip non-alphanumeric characters, compare lowercase versions. If any mismatch, return false.`,
  constraints: [
    '1 <= s.length <= 2 * 10^5',
    's consists only of printable ASCII characters.',
  ],
  examples: [
    {
      input: 's = "A man, a plan, a canal: Panama"',
      output: 'true',
      explanation: '"amanaplanacanalpanama" is a palindrome.',
    },
    {
      input: 's = "race a car"',
      output: 'false',
      explanation: '"raceacar" is not a palindrome.',
    },
    {
      input: 's = " "',
      output: 'true',
      explanation: 'After removing non-alphanumeric characters, s becomes "". An empty string reads the same forward and backward.',
    },
  ],
  hints: [
    'Use two pointers starting from both ends.',
    'Skip characters that are not alphanumeric (not a letter or digit).',
    '```js\nfunction isPalindrome(s) {\n  const isAlnum = c => /[a-zA-Z0-9]/.test(c);\n  let l = 0, r = s.length - 1;\n  while (l < r) {\n    while (l < r && !isAlnum(s[l])) l++;\n    while (l < r && !isAlnum(s[r])) r--;\n    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;\n    l++; r--;\n  }\n  return true;\n}\n```',
  ],
  functionName: 'isPalindrome',
  params: ['s'],
  starterCode: {
    javascript: `function isPalindrome(s) {
  // return true if s is a palindrome (ignoring non-alphanumeric chars and case)

}`,
    python: `def isPalindrome(s: str) -> bool:
    # return true if s is a palindrome (ignoring non-alphanumeric chars and case)
    pass
`,
  },
  visibleTests: [
    { args: ['A man, a plan, a canal: Panama'], expected: true },
    { args: ['race a car'], expected: false },
    { args: [' '], expected: true },
  ],
  hiddenTests: [
    { args: ['a'], expected: true },
    { args: ['ab'], expected: false },
    { args: [''], expected: true },
    { args: ['Was it a car or a cat I saw?'], expected: true },
    { args: ['No lemon, no melon'], expected: true },
    { args: ['0P'], expected: false },
    { args: ['.,;'], expected: true },
  ],
};
