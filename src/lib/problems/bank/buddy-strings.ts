import type { Problem } from '../types';

export const problem: Problem = {
  id: 'buddy-strings',
  title: 'Buddy Strings',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given two strings \`s\` and \`goal\`, return \`true\` if you can swap two letters in \`s\` so the result is equal to \`goal\`, otherwise return \`false\`.

Swapping letters is defined as taking two indices \`i\` and \`j\` (0-indexed) such that \`i != j\` and swapping the characters at \`s[i]\` and \`s[j]\`. For example, swapping at indices \`0\` and \`2\` in \`"abcd"\` results in \`"cbad"\`.

**Approach:**
- If lengths differ: false.
- If \`s == goal\`: need at least one repeated character (swap two identical chars).
- Otherwise: find positions where they differ. There must be exactly 2, and swapping those positions in \`s\` must equal \`goal\`.`,
  constraints: [
    '1 <= s.length, goal.length <= 2 * 10^4',
    's and goal consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "ab", goal = "ba"',
      output: 'true',
      explanation: 'Swap s[0] and s[1] to get "ba".',
    },
    {
      input: 's = "ab", goal = "ab"',
      output: 'false',
      explanation: 'Same strings, but no repeated character to swap.',
    },
    {
      input: 's = "aa", goal = "aa"',
      output: 'true',
      explanation: 'Swap s[0] and s[1] — both are "a", so result is unchanged.',
    },
  ],
  hints: [
    'If s equals goal, check for any duplicate character.',
    'If s differs from goal, find the differing indices. Exactly 2 diffs, with s[i]==goal[j] and s[j]==goal[i].',
    '```js\nfunction buddyStrings(s, goal) {\n  if (s.length !== goal.length) return false;\n  if (s === goal) return new Set(s).size < s.length;\n  const diffs = [];\n  for (let i = 0; i < s.length; i++) {\n    if (s[i] !== goal[i]) { diffs.push(i); if (diffs.length > 2) return false; }\n  }\n  return diffs.length === 2 && s[diffs[0]] === goal[diffs[1]] && s[diffs[1]] === goal[diffs[0]];\n}\n```',
  ],
  functionName: 'buddyStrings',
  params: ['s', 'goal'],
  starterCode: {
    javascript: `function buddyStrings(s, goal) {
  // return true if swapping two letters in s can make s equal goal

}`,
    python: `def buddyStrings(s: str, goal: str) -> bool:
    # return true if swapping two letters in s can make s equal goal
    pass
`,
  },
  visibleTests: [
    { args: ['ab', 'ba'], expected: true },
    { args: ['ab', 'ab'], expected: false },
    { args: ['aa', 'aa'], expected: true },
  ],
  hiddenTests: [
    { args: ['aaaaaaabc', 'aaaaaaacb'], expected: true },
    { args: ['ab', 'ca'], expected: false },
    { args: ['a', 'a'], expected: false },
    { args: ['abab', 'abba'], expected: true },
    { args: ['abc', 'bca'], expected: false },
    { args: ['abcaa', 'abcbb'], expected: false },
    { args: ['xp', 'px'], expected: true },
  ],
};
