import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-substrings',
  title: 'Number of Substrings Containing All Three Characters',
  difficulty: 'medium',
  tags: ['sliding-window'],
  description: `Given a string \`s\` consisting only of characters \`'a'\`, \`'b'\`, and \`'c'\`, return the number of substrings containing **at least** one occurrence of all these characters.`,
  constraints: [
    '3 <= s.length <= 5 * 10^4',
    "s only consists of 'a', 'b', or 'c' characters.",
  ],
  examples: [
    {
      input: 's = "abcabc"',
      output: '10',
      explanation: 'The substrings containing at least one occurrence of each character are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (second occurrence).',
    },
    {
      input: 's = "aaacb"',
      output: '3',
      explanation: 'The substrings containing at least one occurrence of each character are "acb", "aacb", and "aaacb".',
    },
    {
      input: 's = "abc"',
      output: '1',
    },
  ],
  hints: [
    'Use a sliding window. Maintain counts of a, b, c in the current window.',
    'When the window contains all three characters, every extension to the right also contains all three. The number of valid substrings starting at left and ending at right or beyond is (n - right).',
    'Slide the left pointer forward to find the next valid window.',
  ],
  functionName: 'numberOfSubstrings',
  params: ['s'],
  starterCode: {
    javascript: `function numberOfSubstrings(s) {
  // Return count of substrings with at least one 'a', 'b', and 'c'
}`,
    typescript: "function numberOfSubstrings(s: string): number {\n  // Return count of substrings with at least one 'a', 'b', and 'c'\n}",

    python: `def numberOfSubstrings(s):
    # Return count of substrings with at least one 'a', 'b', and 'c'
    pass`,
  },
  visibleTests: [
    { args: ['abcabc'], expected: 10 },
    { args: ['aaacb'], expected: 3 },
    { args: ['abc'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 0 },
    { args: ['aab'], expected: 0 },
    { args: ['abcbc'], expected: 3 },
    { args: ['bcabc'], expected: 6 },
  ],
};
