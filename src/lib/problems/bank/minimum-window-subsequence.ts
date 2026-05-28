import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-window-subsequence',
  title: 'Minimum Window Subsequence',
  difficulty: 'hard',
  tags: ['two-pointers', 'strings'],
  description: `Given strings \`s1\` and \`s2\`, return the minimum window in \`s1\` which will contain \`s2\` as a **subsequence**. If there is no such window in \`s1\` that covers all characters in \`s2\`, return the empty string \`""\`.

If there are multiple such minimum-length windows, return the one with the **left-most** starting index.`,
  constraints: [
    '1 <= s1.length <= 2 * 10^4',
    '1 <= s2.length <= 100',
    's1 and s2 consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 's1 = "abcdebdde", s2 = "bde"',
      output: '"bcde"',
      explanation: '"bcde" is the answer because it occurs before "bdde" and is shorter.',
    },
    {
      input: 's1 = "jmeqksfrsdcmsiwvaovztaqenprpvnbstl", s2 = "u"',
      output: '""',
    },
  ],
  hints: [
    'Use two pointers: scan right to find a window containing s2 as a subsequence.',
    'Then scan left from the end of the window to find the tightest left boundary.',
    'Track the minimum-length window found across all valid positions.',
  ],
  functionName: 'minWindow',
  params: ['s1', 's2'],
  starterCode: {
    javascript: `function minWindow(s1, s2) {

}`,
    typescript: "function minWindow(s1: string, s2: string): string {\n\n}",

    python: `def minWindow(s1, s2):
    pass`,
  },
  visibleTests: [
    { args: ['abcdebdde', 'bde'], expected: 'bcde' },
    { args: ['jmeqksfrsdcmsiwvaovztaqenprpvnbstl', 'u'], expected: '' },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: 'a' },
    { args: ['ab', 'b'], expected: 'b' },
    { args: ['abc', 'ac'], expected: 'abc' },
    { args: ['abcabc', 'abc'], expected: 'abc' },
  ],
};
