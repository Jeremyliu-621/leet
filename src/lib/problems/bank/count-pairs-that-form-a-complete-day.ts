import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-pairs-that-form-a-complete-day',
  title: 'Count Pairs That Form a Complete Day',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`hours\` representing times in hours, return an integer denoting the number of pairs \`i, j\` where \`i < j\` such that \`hours[i] + hours[j]\` forms a **complete day**.

A **complete day** is defined as a time duration that is an **exact multiple of 24 hours**.`,
  constraints: [
    '1 <= hours.length <= 5 * 10^5',
    '1 <= hours[i] <= 10^9',
  ],
  examples: [
    {
      input: 'hours = [12,12,30,24,24]',
      output: '2',
      explanation:
        'Pairs (0,1): 12+12=24 (multiple of 24) ✓; pairs (3,4): 24+24=48 (multiple of 24) ✓. Answer = 2.',
    },
    {
      input: 'hours = [72,48,24,3]',
      output: '3',
      explanation:
        '72%24=0, 48%24=0, 24%24=0, 3%24=3. Pairs (0,1), (0,2), (1,2) all have sum divisible by 24. Answer = 3.',
    },
  ],
  hints: [
    'Level 1: Two numbers sum to a multiple of 24 iff their remainders mod 24 sum to 0 or 24. That is, (a%24 + b%24) % 24 == 0.',
    'Level 2: Use a frequency map of (hour % 24). For each element h, its complement is (24 - h%24) % 24. Look up how many previous elements have that complement.',
    'Level 3: Single pass: maintain freq[r] = count of elements seen so far with (h%24 == r). For each h, ans += freq[(24 - h%24) % 24]. Then freq[h%24]++. O(n) time, O(24) space.',
  ],
  functionName: 'countCompleteDayPairs',
  params: ['hours'],
  starterCode: {
    javascript: `function countCompleteDayPairs(hours) {
  const freq = new Array(24).fill(0);
  let count = 0;
  for (const h of hours) { const r = h % 24; count += freq[(24 - r) % 24]; freq[r]++; }
  return count;
}`,
    typescript: `function countCompleteDayPairs(hours: number[]): number {
  const freq = new Array<number>(24).fill(0);
  let count = 0;
  for (const h of hours) { const r = h % 24; count += freq[(24 - r) % 24]!; freq[r]!++; }
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
  ],
  hiddenTests: [
    { args: [[24]], expected: 0 },
    { args: [[12, 12]], expected: 1 },
    { args: [[6, 18, 6, 18]], expected: 4 },
    { args: [[1, 23, 2, 22]], expected: 2 },
    { args: [[24, 48, 72, 96]], expected: 6 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
};
