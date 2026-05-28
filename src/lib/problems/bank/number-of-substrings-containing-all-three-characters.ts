import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-substrings-containing-all-three-characters',
  title: 'Number of Substrings Containing All Three Characters',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `Given a string \`s\` consisting only of characters **a**, **b** and **c**.

Return the number of substrings containing **at least** one occurrence of all these characters **a**, **b** and **c**.`,
  constraints: [
    '3 <= s.length <= 5 * 10^4',
    's only consists of a, b or c characters.',
  ],
  examples: [
    {
      input: 's = "abcabc"',
      output: '10',
      explanation: 'The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again).',
    },
    {
      input: 's = "aaacb"',
      output: '3',
      explanation: 'The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb".',
    },
  ],
  hints: [
    'For each right index, track the last seen position of each of a, b, c.',
    'The number of valid substrings ending at index i is min(last_a, last_b, last_c) + 1.',
    'Sum over all positions.',
  ],
  functionName: 'numberOfSubstrings',
  params: ['s'],
  starterCode: {
    javascript: 'function numberOfSubstrings(s) {\n\n}\n',
    typescript: "function numberOfSubstrings(s: string): number {\n\n}",

    python: 'def numberOfSubstrings(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['abcabc'], expected: 10 },
    { args: ['aaacb'], expected: 3 },
  ],
  hiddenTests: [
    { args: ['abc'], expected: 1 },
    { args: ['cbaabc'], expected: 7 },
    { args: ['abcbc'], expected: 3 },
    { args: ['aabcbc'], expected: 6 },
  ],
};
