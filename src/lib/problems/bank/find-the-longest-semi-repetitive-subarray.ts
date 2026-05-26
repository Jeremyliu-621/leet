import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-longest-semi-repetitive-subarray',
  title: 'Find the Longest Semi-Repetitive Subarray',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `Given a 0-indexed integer array \`s\`. A subarray \`s[l..r]\` is called **semi-repetitive** if it contains **at most one** pair of adjacent equal elements (i.e., at most one index \`i\` in \`[l, r-1]\` where \`s[i] === s[i+1]\`).

Return the length of the **longest semi-repetitive subarray** of \`s\`.

**Examples:**
- \`s = [5,5,5,5]\` → **2** (any window of length 2 has exactly one adjacent pair and is semi-repetitive; length 3 has two pairs)
- \`s = [1,2,3,2,2]\` → **5** (the whole array has exactly one adjacent pair at indices 3–4)
- \`s = [1,2,3]\` → **3** (no adjacent pairs; entire array qualifies)`,
  constraints: [
    '1 ≤ s.length ≤ 50',
    '1 ≤ s[i] ≤ 50',
  ],
  examples: [
    {
      input: 's = [5,5,5,5]',
      output: '2',
      explanation: 'Any subarray of length 2 (e.g., s[0..1]) contains exactly one pair of adjacent equal elements and qualifies. Any subarray of length 3 would contain two such pairs.',
    },
    {
      input: 's = [1,2,3,2,2]',
      output: '5',
      explanation: 'The full array has only one adjacent equal pair (s[3]=2 and s[4]=2), so it is semi-repetitive.',
    },
    {
      input: 's = [1,2,3]',
      output: '3',
      explanation: 'No adjacent elements are equal, so the full array is semi-repetitive.',
    },
  ],
  hints: [
    'Use a sliding window `[left, right]`. Track `pairs` — the count of adjacent equal element pairs currently inside the window.',
    'Expand `right` by 1 each iteration. If `s[right] === s[right - 1]`, increment `pairs`. While `pairs > 1`, check if `s[left] === s[left + 1]`; if so, decrement `pairs`. Then increment `left` regardless to shrink the window.',
    'After each expansion and possible contraction, update `maxLen = Math.max(maxLen, right - left + 1)`. The answer is `maxLen` after processing all indices.',
  ],
  functionName: 'longestSemiRepetitiveSubarray',
  params: ['s'],
  starterCode: {
    javascript: `function longestSemiRepetitiveSubarray(s) {
  // Return the length of the longest semi-repetitive subarray.
}`,
    python: `def longestSemiRepetitiveSubarray(s: list[int]) -> int:
    # Return the length of the longest semi-repetitive subarray.
    pass`,
  },
  visibleTests: [
    { args: [[5, 5, 5, 5]], expected: 2 },
    { args: [[1, 2, 3, 2, 2]], expected: 5 },
    { args: [[1, 2, 3]], expected: 3 },
    { args: [[1, 1, 2, 2, 3]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 1]], expected: 2 },
    { args: [[2, 2, 2, 2, 2]], expected: 2 },
    { args: [[1, 2, 1, 2, 1, 2]], expected: 6 },
    { args: [[1, 1, 1, 2, 2]], expected: 3 },
    { args: [[3, 3, 4, 4, 5, 5]], expected: 4 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
  ],
};
