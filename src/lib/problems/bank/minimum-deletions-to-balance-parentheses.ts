import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-deletions-to-balance-parentheses',
  title: 'Minimum Deletions to Make String Balanced',
  difficulty: 'medium',
  tags: ['stack'],
  description: `You are given a string \`s\` consisting only of characters \`'a'\` and \`'b'\`.

You can delete any number of characters in \`s\` to make it **balanced**. \`s\` is balanced if there is no pair of indices \`(i, j)\` with \`i < j\` and \`s[i] = 'b'\` and \`s[j] = 'a'\` (no 'a' appears after any 'b').

Return the **minimum number of deletions** needed to make \`s\` balanced.

**Example 1:**
\`\`\`
Input: s = "aababbab"
Output: 2
\`\`\`

**Example 2:**
\`\`\`
Input: s = "bbaaaaabb"
Output: 2
\`\`\`

**Constraints:**
- \`1 ≤ s.length ≤ 10⁵\`
- \`s[i]\` is \`'a'\` or \`'b'\``,
  constraints: [
    '1 ≤ s.length ≤ 10⁵',
    "s[i] is 'a' or 'b'",
  ],
  examples: [
    { input: 's = "aababbab"', output: '2' },
    { input: 's = "bbaaaaabb"', output: '2' },
  ],
  hints: [
    "Balanced means all 'a's come before all 'b's.",
    "When we encounter 'a' after some 'b's, we must delete one (either this 'a' or a previous 'b') — pick the cheaper option, always 1.",
    "Track bCount (unmatched 'b's). For each 'a', if bCount > 0, decrement it and increment deletions.",
  ],
  functionName: 'minimumDeletions',
  params: ['s'],
  starterCode: {
    javascript: 'function minimumDeletions(s) {\n\n}\n',
    typescript: "function minimumDeletions(s: string): number {\n\n}",

    python: 'def minimumDeletions(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['aababbab'], expected: 2 },
    { args: ['bbaaaaabb'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['aaaaaa'], expected: 0 },
    { args: ['bbbbbb'], expected: 0 },
    { args: ['ba'], expected: 1 },
    { args: ['ababab'], expected: 2 },
    { args: ['a'], expected: 0 },
    { args: ['b'], expected: 0 },
  ],
};
