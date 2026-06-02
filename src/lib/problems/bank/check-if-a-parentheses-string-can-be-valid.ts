import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-a-parentheses-string-can-be-valid',
  title: 'Check if a Parentheses String Can Be Valid',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `A parentheses string is a **non-empty** string consisting only of \`'('\` and \`')'\`. It is valid if **any** of the following conditions is true:

- It is \`"()"\`.
- It can be written as \`AB\` (A concatenated with B), where A and B are valid strings.
- It can be written as \`(A)\`, where A is a valid string.

You are given a parentheses string \`s\` and a string \`locked\`, both of length \`n\`. \`locked\` is a binary string consisting of \`'0'\`s and \`'1'\`s. For each index \`i\` of \`s\`:

- If \`locked[i]\` is \`'1'\`, you **cannot** change \`s[i]\`.
- If \`locked[i]\` is \`'0'\`, you **can** change \`s[i]\` to either \`'('\` or \`')'\`.

Return \`true\` if you can make \`s\` a valid parentheses string. Otherwise, return \`false\`.`,
  constraints: [
    'n == s.length == locked.length',
    '1 <= n <= 10^5',
    's[i] is either \'(\' or \')\'',
    'locked[i] is either \'0\' or \'1\'',
  ],
  examples: [
    {
      input: 's = "))()))", locked = "010100"',
      output: 'true',
      explanation: 'Unlocked positions 0, 2, 4, 5 can be changed. Changing position 0 to \'(\' and position 5 to \')\' yields "()(())" which is valid.',
    },
    {
      input: 's = "()()", locked = "0000"',
      output: 'true',
      explanation: 'All positions are unlocked. "()()" is already valid.',
    },
    {
      input: 's = ")", locked = "0"',
      output: 'false',
      explanation: 'Odd length string can never be valid.',
    },
  ],
  hints: [
    'If the string length is odd, immediately return false.',
    'Scan left to right, tracking a range [lo, hi] of possible open-bracket counts.',
    'For a locked \'(\': lo++, hi++. For a locked \')\': lo--, hi--. For unlocked: lo--, hi++ (it can be either).',
    'Clamp lo = max(lo, 0). If hi < 0 at any point, return false. After the full scan, return lo == 0.',
  ],
  functionName: 'canBeValid',
  params: ['s', 'locked'],
  starterCode: {
    javascript: `function canBeValid(s, locked) {
  if (s.length % 2 !== 0) return false;
  let lo = 0, hi = 0;
  for (let i = 0; i < s.length; i++) {
    if (locked[i] === '1') {
      const delta = s[i] === '(' ? 1 : -1;
      lo += delta; hi += delta;
    } else {
      lo--; hi++;
    }
    lo = Math.max(lo, 0);
    if (hi < 0) return false;
  }
  return lo === 0;
}`,
    typescript: `function canBeValid(s: string, locked: string): boolean {
  if (s.length % 2 !== 0) return false;
  let lo = 0, hi = 0;
  for (let i = 0; i < s.length; i++) {
    if (locked[i] === '1') {
      const delta = s[i] === '(' ? 1 : -1;
      lo += delta; hi += delta;
    } else {
      lo--; hi++;
    }
    lo = Math.max(lo, 0);
    if (hi < 0) return false;
  }
  return lo === 0;
}`,
    python: `def canBeValid(s, locked):
    if len(s) % 2 != 0:
        return False
    lo, hi = 0, 0
    for i in range(len(s)):
        if locked[i] == '1':
            delta = 1 if s[i] == '(' else -1
            lo += delta; hi += delta
        else:
            lo -= 1; hi += 1
        lo = max(lo, 0)
        if hi < 0:
            return False
    return lo == 0`,
  },
  visibleTests: [
    { args: ['))()))', '010100'], expected: true },
    { args: ['()()', '0000'], expected: true },
    { args: [')', '0'], expected: false },
  ],
  hiddenTests: [
    { args: ['()', '00'], expected: true },
    { args: ['()', '11'], expected: true },
    { args: [')(', '11'], expected: false },
    { args: ['))', '00'], expected: true },
    { args: ['((', '11'], expected: false },
    { args: ["))((" , '1111'], expected: false },
    { args: ['(()())', '000000'], expected: true },
    { args: [')(()', '0100'], expected: true },
  ],
};
