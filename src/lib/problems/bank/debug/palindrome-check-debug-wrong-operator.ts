import type { Problem } from '../../types';

export const problem: Problem = {
  id: 'palindrome-check-debug-wrong-operator',
  title: 'Fix the Bug: Palindrome Check',
  difficulty: 'easy',
  tags: ['strings', 'two-pointers'],
  kind: 'debug',
  description: `The following implementation of **Palindrome Check** has a bug. Given a string \`s\`, return \`true\` if it reads the same forwards and backwards (case-insensitive, ignoring non-alphanumeric characters).

Find and fix the bug so all tests pass.

**Hint:** The bug is a logical operator error in the comparison.`,
  constraints: [
    '1 <= s.length <= 2 * 10^5',
    's consists only of printable ASCII characters.',
  ],
  examples: [
    {
      input: 's = "A man, a plan, a canal: Panama"',
      output: 'true',
    },
    {
      input: 's = "race a car"',
      output: 'false',
    },
  ],
  hints: [
    'Trace the code on "aba". What comparison is being made?',
    'The code uses `===` (equality) where it should use `!==` (inequality) to detect mismatches.',
    'Change `if (cleaned[lo] === cleaned[hi]) return false;` to `if (cleaned[lo] !== cleaned[hi]) return false;`.',
  ],
  functionName: 'isPalindrome',
  params: ['s'],
  buggyCode: {
    javascript: `function isPalindrome(s) {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let lo = 0;
  let hi = cleaned.length - 1;
  while (lo < hi) {
    if (cleaned[lo] === cleaned[hi]) return false;
    lo++;
    hi--;
  }
  return true;
}`,
    python: `def isPalindrome(s):
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    lo, hi = 0, len(cleaned) - 1
    while lo < hi:
        if cleaned[lo] == cleaned[hi]:
            return False
        lo += 1
        hi -= 1
    return True`,
  },
  starterCode: {
    javascript: `function isPalindrome(s) {
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let lo = 0;
  let hi = cleaned.length - 1;
  while (lo < hi) {
    if (cleaned[lo] === cleaned[hi]) return false;
    lo++;
    hi--;
  }
  return true;
}`,
    python: `def isPalindrome(s):
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    lo, hi = 0, len(cleaned) - 1
    while lo < hi:
        if cleaned[lo] == cleaned[hi]:
            return False
        lo += 1
        hi -= 1
    return True`,
  },
  visibleTests: [
    { args: ['A man, a plan, a canal: Panama'], expected: true },
    { args: ['race a car'], expected: false },
    { args: [' '], expected: true },
  ],
  hiddenTests: [
    { args: ['a'], expected: true },
    { args: ['ab'], expected: false },
    { args: ['aba'], expected: true },
    { args: ['No lemon, no melon'], expected: true },
    { args: ['hello'], expected: false },
  ],
};
