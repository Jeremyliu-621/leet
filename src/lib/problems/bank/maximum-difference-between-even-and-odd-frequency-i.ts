import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-difference-between-even-and-odd-frequency-i',
  title: 'Maximum Difference Between Even and Odd Frequency I',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`s\` consisting of lowercase English letters.

Your task is to find the **maximum** difference \`diff = freq(a₁) - freq(a₂)\` between the frequency of characters \`a₁\` and \`a₂\` in the string such that:

- \`a₁\` has an **odd** frequency in the string.
- \`a₂\` has an **even** frequency in the string.

Return this **maximum** difference. It is guaranteed that there exists at least one character with an odd frequency and one character with an even frequency.`,
  constraints: [
    '3 <= s.length <= 100',
    's consists only of lowercase English letters.',
    's has at least one character with an odd frequency and one with an even frequency.',
  ],
  examples: [
    {
      input: 's = "aaaaabbc"',
      output: '3',
      explanation: 'The frequency of \'a\' is 5 (odd) and \'b\' is 2 (even). diff = 5 - 2 = 3.',
    },
    {
      input: 's = "abcabcab"',
      output: '1',
      explanation: 'Frequencies: a=3 (odd), b=3 (odd), c=2 (even). Max odd=3, min even=2. diff = 3 - 2 = 1.',
    },
    {
      input: 's = "zzaabbb"',
      output: '1',
      explanation: 'Frequencies: z=2 (even), a=2 (even), b=3 (odd). max_odd=3, min_even=2. diff = 3 - 2 = 1.',
    },
  ],
  hints: [
    'Build a frequency map of all characters in s.',
    'Separate the frequencies into two groups: odd frequencies and even frequencies.',
    'Return max(odd frequencies) - min(even frequencies).',
  ],
  functionName: 'maxDifference',
  params: ['s'],
  starterCode: {
    javascript: `function maxDifference(s) {

}`,
    typescript: `function maxDifference(s: string): number {

}`,
    python: `def maxDifference(s):
    pass`,
  },
  visibleTests: [
    { args: ['aaaaabbc'], expected: 3 },
    { args: ['abcabcab'], expected: 1 },
    { args: ['zzaabbb'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['aaabb'], expected: 1 },
    { args: ['aabbc'], expected: -1 },
    { args: ['aaaaabb'], expected: 3 },
    { args: ['aabcde'], expected: -1 },
    { args: ['aabc'], expected: -1 },
    { args: ['aabbccc'], expected: 1 },
  ],
};
