import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-integers-in-ranges',
  title: 'Count Integers in Ranges',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming'],
  description: `You are given two integers \`lo\` and \`hi\`. Return the count of **stepping numbers** in the inclusive range \`[lo, hi]\`.

A **stepping number** is an integer such that all of its adjacent digits have an absolute difference of exactly \`1\`.

Since the answer may be very large, return it **modulo 10^9 + 7**.`,
  constraints: ['0 <= lo <= hi <= 10^15'],
  examples: [
    {
      input: 'lo = 0, hi = 21',
      output: '13',
      explanation: 'Stepping numbers in [0, 21]: 0,1,2,3,4,5,6,7,8,9,10,12,21. Total = 13.',
    },
    {
      input: 'lo = 10, hi = 15',
      output: '2',
      explanation: 'Stepping numbers in [10, 15]: 10, 12. Total = 2.',
    },
  ],
  hints: [
    'Use digit DP: count stepping numbers ≤ n. Answer = count(hi) - count(lo - 1).',
    'State: (position, last_digit, tight, started). tight = whether we\'re still bounded by n\'s digits. started = whether a non-zero digit has been placed.',
    'At each position, try digits 0-9 (limited by tight). The next digit must be last_digit ± 1 (once started).',
  ],
  functionName: 'countSteppingNumbers',
  params: ['lo', 'hi'],
  starterCode: {
    javascript: 'function countSteppingNumbers(lo, hi) {\n  \n}\n',
    typescript: 'function countSteppingNumbers(lo: number, hi: number): number {\n  \n}\n',
    python: 'def countSteppingNumbers(lo, hi):\n    pass\n',
  },
  visibleTests: [
    { args: [0, 21], expected: 13 },
    { args: [10, 15], expected: 2 },
  ],
  hiddenTests: [
    { args: [0, 0], expected: 1 },
    { args: [1, 9], expected: 9 },
    { args: [0, 9], expected: 10 },
    { args: [100, 200], expected: 3 },
    { args: [0, 100], expected: 27 },
    { args: [1000000000000000, 1000000000000000], expected: 0 },
  ],
};
