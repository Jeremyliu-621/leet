import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-pushes-to-type-word-ii',
  title: 'Minimum Number of Pushes to Type Word II',
  difficulty: 'medium',
  tags: ['math'],
  description: `You are given a string \`word\` containing lowercase English letters. You need to remap the 8 telephone keys (2–9) so that the number of key pushes to type \`word\` is minimized.

Each key can have any number of letters assigned to it. To type the **i-th letter** assigned to a key, you press that key **i times** (1-indexed position on that key).

There are 8 keys, so:
- Letters assigned at **position 1** (first on their key) cost **1 push** each.
- Letters at **position 2** cost **2 pushes** each.
- Letters at **position 3** cost **3 pushes** each.
- Letters at **position 4** cost **4 pushes** each.

**Strategy:** Count the frequency of each distinct letter. Sort frequencies in descending order. Assign the 8 most frequent letters to position 1 (1 push), the next 8 to position 2 (2 pushes), etc.

**Formula:** For the i-th most frequent letter (0-indexed), cost = \`freq[i] × (Math.floor(i / 8) + 1)\`.

**Example:** \`word = "aabbccdd"\`
- Frequencies: a=2, b=2, c=2, d=2 (all equal)
- Sort descending: [2, 2, 2, 2]
- All 4 letters fit in position 1 → total = 2+2+2+2 = **8**`,
  constraints: [
    '1 <= word.length <= 10^5',
    'word consists of lowercase English letters only',
  ],
  examples: [
    {
      input: 'word = "aabbccdd"',
      output: '8',
      explanation: 'Frequencies: a=2,b=2,c=2,d=2. All 4 fit in position 1 (1 push each). Total = 2+2+2+2 = 8.',
    },
    {
      input: 'word = "xyzxyzxyzxyz"',
      output: '12',
      explanation: 'x=4, y=4, z=4. Three letters, all in position 1. Total = 4+4+4 = 12.',
    },
    {
      input: 'word = "aabbccddeeffgghhiiiiii"',
      output: '24',
      explanation: 'i=6, others=2. Sort descending: [6,2,2,2,2,2,2,2]. First 8 at cost 1: 6+2+2+2+2+2+2+2 = 20. No overflow. Wait — 8 letters exactly fit. Total = 20? Actually: [6,2,2,2,2,2,2,2] → sum = 6+7*2 = 20. But we have 8 distinct letters (a,b,c,d,e,f,g,h,i = 9). Sorted: [6,2,2,2,2,2,2,2,2]. First 8 cost 1: 6+2*7=20. 9th (freq=2) cost 2: 4. Total = 24.',
    },
  ],
  hints: [
    'You only need to care about letter frequencies, not which specific letters appear. Count each letter\'s frequency in `word`.',
    'Sort the frequencies in descending order. The most frequent letters should cost the fewest pushes, so assign them to position 1 on their keys.',
    'With 8 keys available, the first 8 frequencies (indices 0–7) cost 1 push, the next 8 (indices 8–15) cost 2, and so on. Total = sum of `freq[i] * (Math.floor(i/8) + 1)` for all i.',
  ],
  functionName: 'minimumPushes',
  params: ['word'],
  starterCode: {
    javascript: 'function minimumPushes(word) {\n  // your code here\n}\n',
    python: 'def minimumPushes(word):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['aabbccdd'], expected: 8 },
    { args: ['xyzxyzxyzxyz'], expected: 12 },
    { args: ['aabbccddeeffgghhiiiiii'], expected: 24 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['abcdefghijklmnopqrstuvwxyz'], expected: 56 },
    { args: ['aaaaaaaaaaaaaaaaaaaaaaaaa'], expected: 25 },
    { args: ['aabbccddeeffgghh'], expected: 16 },
    { args: ['abcdefgh'], expected: 8 },
    { args: ['zzzzzzzzzzzzzzzzz'], expected: 17 },
  ],
};
