import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-string-contains-all-binary-codes-of-size-k',
  title: 'Check if a String Contains All Binary Codes of Size K',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `Given a binary string \`s\` and an integer \`k\`, return \`true\` if every binary code of length \`k\` is a **substring** of \`s\`. Otherwise, return \`false\`.`,
  constraints: [
    '1 <= s.length <= 5 * 10^5',
    's[i] is either \'0\' or \'1\'.',
    '1 <= k <= 20',
  ],
  examples: [
    {
      input: 's = "00110110", k = 2',
      output: 'true',
      explanation: 'Binary codes "00", "01", "10", "11" are all substrings of "00110110".',
    },
    {
      input: 's = "0110", k = 1',
      output: 'true',
      explanation: '"0" and "1" are both substrings.',
    },
    {
      input: 's = "0110", k = 2',
      output: 'false',
      explanation: '"00" is not a substring.',
    },
  ],
  hints: [
    'Use a sliding window of size k to collect all k-length substrings into a set.',
    'If the set contains 2^k entries, all codes are present.',
    'Early termination: return true as soon as the set reaches 2^k.',
  ],
  functionName: 'hasAllCodes',
  params: ['s', 'k'],
  starterCode: {
    javascript: 'function hasAllCodes(s, k) {\n\n}\n',
    typescript: "function hasAllCodes(s: string, k: number): boolean {\n\n}",

    python: 'def hasAllCodes(s, k):\n    pass\n',
  },
  visibleTests: [
    { args: ['00110110', 2], expected: true },
    { args: ['0110', 1], expected: true },
    { args: ['0110', 2], expected: false },
  ],
  hiddenTests: [
    { args: ['0', 1], expected: false },
    { args: ['01', 1], expected: true },
    { args: ['00110', 2], expected: true },
    { args: ['00110011', 2], expected: true },
  ],
};
