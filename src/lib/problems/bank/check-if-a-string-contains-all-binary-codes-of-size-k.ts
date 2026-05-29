import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-a-string-contains-all-binary-codes-of-size-k',
  title: 'Check if a String Contains all Binary Codes of Size k',
  difficulty: 'medium',
  tags: ['bit-manipulation', 'strings', 'hash-map', 'sliding-window'],
  description: `Given a binary string \`s\` and an integer \`k\`, return \`true\` if every binary code of length \`k\` is a substring of \`s\`. Otherwise, return \`false\`.`,
  constraints: [
    '`1 <= s.length <= 5 * 10^5`',
    '`s[i]` is either `\'0\'` or `\'1\'`.',
    '`1 <= k <= 20`',
  ],
  examples: [
    {
      input: 's = "00110110", k = 2',
      output: 'true',
      explanation: 'The binary codes of length 2 are "00", "01", "10" and "11". All are substrings of "00110110".',
    },
    {
      input: 's = "0110", k = 1',
      output: 'true',
      explanation: 'The binary codes of length 1 are "0" and "1". Both appear in "0110".',
    },
    {
      input: 's = "0110", k = 2',
      output: 'false',
      explanation: 'Missing "00" and "11".',
    },
  ],
  hints: [
    'Use a sliding window of size k to collect all distinct substrings into a Set. Check if the Set\'s size equals 2^k.',
    'Early exit: if s.length < 2^k, it\'s impossible to contain all binary codes — return false immediately.',
    'For large k, represent each k-bit window as a rolling integer (bitwise shift and mask) instead of a string for O(n) time and better cache performance.',
  ],
  functionName: 'hasAllCodes',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function hasAllCodes(s, k) {

}`,
    typescript: 'function hasAllCodes(s: string, k: number): boolean {\n\n}',
    python: `def hasAllCodes(s, k):
    pass`,
  },
  visibleTests: [
    { args: ['00110110', 2], expected: true },
    { args: ['0110', 1], expected: true },
    { args: ['0110', 2], expected: false },
  ],
  hiddenTests: [
    { args: ['01', 1], expected: true },
    { args: ['0', 1], expected: false },
    { args: ['11', 1], expected: false },
    { args: ['0001011100', 3], expected: true },
    { args: ['00110', 2], expected: true },
    { args: ['1111111111', 2], expected: false },
  ],
};
