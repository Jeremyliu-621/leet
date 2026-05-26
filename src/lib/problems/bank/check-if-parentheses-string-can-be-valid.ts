import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-parentheses-string-can-be-valid',
  title: 'Check if a Parentheses String Can Be Valid',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `You are given a parentheses string \`s\` of even length consisting of \`'('\` and \`')'\`, and a binary string \`locked\` of the same length.

- If \`locked[i] = '1'\`, the character \`s[i]\` **cannot** be changed.
- If \`locked[i] = '0'\`, \`s[i]\` can be replaced with either \`'('\` or \`')'\`.

Return \`true\` if you can make \`s\` a **valid parentheses string**, or \`false\` otherwise.

A valid parentheses string has balanced brackets: every opening bracket has a matching closing bracket in the correct order.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's.length is even',
    "s[i] is '(' or ')'",
    "locked[i] is '0' or '1'",
  ],
  examples: [
    {
      input: "s = '()()', locked = '1111'",
      output: 'true',
      explanation: "All characters are locked and s is already a valid parentheses string.",
    },
    {
      input: "s = '()))', locked = '0100'",
      output: 'true',
      explanation: "locked[0]='0' so we can change s[0] to '('. The string becomes '(())' which is valid.",
    },
    {
      input: "s = ')(', locked = '11'",
      output: 'false',
      explanation: "Both characters are locked. ')(' cannot be made valid regardless of order.",
    },
  ],
  hints: [
    'Track the range [lo, hi] of possible open-bracket counts as you scan left to right. Initially lo = hi = 0.',
    "For a locked '(' add 1 to both. For a locked ')' subtract 1 from both. For an unlocked character, lo -= 1 and hi += 1 (it could be either bracket). If hi < 0 at any point, return false. Clamp lo = max(lo, 0).",
    'After processing all characters, return lo === 0. If lo > 0, there are unclosed brackets that cannot be eliminated.',
  ],
  functionName: 'canBeValid',
  params: ['s', 'locked'],
  starterCode: {
    javascript: `function canBeValid(s, locked) {
  if (s.length % 2 !== 0) return false;
  // Track [lo, hi]: the range of possible open-bracket counts.
}`,
    python: `def canBeValid(s, locked):
    if len(s) % 2 != 0: return False
    # Track [lo, hi]: the range of possible open-bracket counts.
    pass`,
  },
  visibleTests: [
    { args: ['()()', '1111'], expected: true },
    { args: ['()))', '0100'], expected: true },
    { args: [')(', '11'], expected: false },
  ],
  hiddenTests: [
    { args: ['()', '00'], expected: true },
    { args: ['))', '11'], expected: false },
    { args: ['((()))', '111111'], expected: true },
    { args: [')()(', '1010'], expected: false },
    { args: ['((()', '0100'], expected: true },
  ],
};
