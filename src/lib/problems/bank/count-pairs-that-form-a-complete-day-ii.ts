import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-pairs-that-form-a-complete-day-ii',
  title: 'Count Pairs That Form a Complete Day II',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`hours\` representing times in hours, return an integer denoting the number of pairs \`i, j\` where \`i < j\` and \`hours[i] + hours[j]\` forms a **complete day**.

A **complete day** is any duration that is a multiple of 24 hours.`,
  constraints: [
    '1 <= hours.length <= 5 * 10^5',
    '1 <= hours[i] <= 10^9',
  ],
  examples: [
    {
      input: 'hours = [12,12,30,24,24]',
      output: '2',
      explanation: 'Valid pairs: (12,12)→24 and (24,24)→48, both multiples of 24.',
    },
    {
      input: 'hours = [72,48,24,3]',
      output: '3',
      explanation: 'Valid pairs: (72,48)→120, (72,24)→96, (48,24)→72 — all multiples of 24.',
    },
    {
      input: 'hours = [24,24,24]',
      output: '3',
      explanation: 'All three pairs sum to 48 = 2 × 24.',
    },
  ],
  hints: [
    'Two hours h1 and h2 form a complete day iff (h1 + h2) % 24 == 0.',
    'This is equivalent to (h1 % 24 + h2 % 24) % 24 == 0.',
    'Use a frequency array of size 24: for each element record how many prior elements have the complementary remainder.',
  ],
  functionName: 'countCompleteDayPairs',
  params: ['hours'],
  starterCode: {
    javascript: `function countCompleteDayPairs(hours) {
  const freq = new Array(24).fill(0);
  let count = 0;
  for (const h of hours) {
    const r = h % 24;
    count += freq[(24 - r) % 24];
    freq[r]++;
  }
  return count;
}`,
    typescript: `function countCompleteDayPairs(hours: number[]): number {
  const freq = new Array(24).fill(0);
  let count = 0;
  for (const h of hours) {
    const r = h % 24;
    count += freq[(24 - r) % 24];
    freq[r]++;
  }
  return count;
}`,
    python: `def countCompleteDayPairs(hours):
    freq = [0] * 24
    count = 0
    for h in hours:
        r = h % 24
        count += freq[(24 - r) % 24]
        freq[r] += 1
    return count`,
  },
  visibleTests: [
    { args: [[12, 12, 30, 24, 24]], expected: 2 },
    { args: [[72, 48, 24, 3]], expected: 3 },
    { args: [[24, 24, 24]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[24, 48]], expected: 1 },
    { args: [[23, 1, 23, 1]], expected: 4 },
    { args: [[12, 12, 12, 12]], expected: 6 },
    { args: [[1000000000, 1000000000]], expected: 0 },
  ],
};
