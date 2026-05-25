import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-complete-day-pairs',
  title: 'Count Complete Day Pairs',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`hours\` representing times in **hours**, return an integer denoting the number of pairs \`i\`, \`j\` where \`i < j\` such that \`hours[i] + hours[j]\` forms a **complete day**.

A **complete day** is defined as a time duration that is a **multiple of 24 hours**.`,
  constraints: [
    '1 <= hours.length <= 100',
    '1 <= hours[i] <= 10^9',
  ],
  examples: [
    {
      input: 'hours = [12,12,30,24,24]',
      output: '2',
      explanation: '(0,1): 12+12=24 ✓. (3,4): 24+24=48 ✓. That\'s 2 pairs.',
    },
    {
      input: 'hours = [72,48,24,3]',
      output: '3',
      explanation: '(0,1): 72+48=120=5×24 ✓. (0,2): 72+24=96=4×24 ✓. (1,2): 48+24=72=3×24 ✓. 3 pairs.',
    },
  ],
  hints: [
    'For a pair to sum to a multiple of 24, hours[i] % 24 + hours[j] % 24 must be 0 or 24.',
    'Count the frequency of each remainder mod 24 using a hash map.',
    'For remainder r, find how many previous elements have remainder (24 - r) % 24.',
  ],
  functionName: 'countCompleteDayPairs',
  params: ['hours'],
  starterCode: {
    javascript: `function countCompleteDayPairs(hours) {

}`,
    python: `def countCompleteDayPairs(hours):
    pass`,
  },
  visibleTests: [
    { args: [[12, 12, 30, 24, 24]], expected: 2 },
    { args: [[72, 48, 24, 3]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[24]], expected: 0 },
    { args: [[24, 24]], expected: 1 },
    { args: [[1, 23, 2, 22]], expected: 2 },
    { args: [[48, 24, 72]], expected: 3 },
  ],
};
