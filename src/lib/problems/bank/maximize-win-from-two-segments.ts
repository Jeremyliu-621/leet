import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-win-from-two-segments',
  title: 'Maximize Win From Two Segments',
  difficulty: 'medium',
  tags: ['sliding-window'],
  description: `There are some prizes on a number line. You are given a **sorted** integer array \`prizePositions\` (can have duplicates) where \`prizePositions[i]\` is the position of the i-th prize.

You have two segments, each of length \`k\`. A segment \`[x, x + k]\` (inclusive) captures all prizes at positions in that range. Choose two **non-overlapping** segments to maximize the total number of prizes captured (a prize captured by both segments is counted only once from its position perspective, but since segments are non-overlapping, each prize is covered by at most one segment).

Return the **maximum** number of prizes you can win.

**Approach:**
- For each right index \`r\` (using binary search or two pointers), find the window \`[prizePositions[l], prizePositions[l] + k]\` covering as many prizes as possible ending at \`r\`.
- Maintain \`best[i]\` = maximum prizes capturable by a single segment whose right end index is ≤ i.
- For a second window ending at index \`r\`, find the first index \`j\` where \`prizePositions[j] > prizePositions[r] - k - 1\`, i.e., the largest non-overlapping left window. Answer = max(window_size + best[j-1]).`,
  constraints: [
    '1 <= prizePositions.length <= 10^5',
    '0 <= k <= 10^9',
    '0 <= prizePositions[i] <= 10^9',
    'prizePositions is sorted in non-decreasing order',
  ],
  examples: [
    {
      input: 'prizePositions = [1,1,2,2,3,3,5], k = 2',
      output: '7',
      explanation: 'Segment [1,3] captures prizes at positions 1,1,2,2,3,3 (6 prizes). Segment [5,7] captures prize at 5 (1 prize). Total = 7.',
    },
    {
      input: 'prizePositions = [1,2,3,4], k = 0',
      output: '2',
      explanation: 'With k=0, each segment covers exactly one position. Choose positions 1 and 2 (or any two): 1+1 = 2 prizes.',
    },
    {
      input: 'prizePositions = [1,2,3,4,5], k = 1',
      output: '4',
      explanation: 'Segment [1,2] captures 2 prizes, segment [3,4] captures 2 prizes. Total = 4.',
    },
  ],
  hints: [
    'Use a sliding window to find, for each right index r, how many prizes are in the window ending at prizePositions[r] (i.e., [prizePositions[r]-k, prizePositions[r]]). Store the running max in a prefix array `best[r]`.',
    'For a second segment with right index r, the first segment must end before `prizePositions[r] - k`. Binary search for the last index j where `prizePositions[j] <= prizePositions[r] - k - 1`. The answer candidate is `(r - l + 1) + best[j]`.',
    'Iterate r from 0 to n-1, maintaining left pointer l (sliding window). At each step, answer = max(answer, (r-l+1) + (j >= 0 ? best[j] : 0)). Update best[r] = max(best[r-1], r-l+1) as you go.',
  ],
  functionName: 'maximizeWin',
  params: ['prizePositions', 'k'],
  starterCode: {
    javascript: 'function maximizeWin(prizePositions, k) {\n  // your code here\n}\n',
    typescript: "function maximizeWin(prizePositions: number[], k: number): number {\n  // your code here\n}",

    python: 'def maximizeWin(prizePositions, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1,1,2,2,3,3,5], 2], expected: 7 },
    { args: [[1,2,3,4], 0], expected: 2 },
    { args: [[1,2,3,4,5], 1], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], 0], expected: 1 },
    { args: [[1,1,1,1], 0], expected: 4 },
    { args: [[1,2,3,4,5,6,7,8,9,10], 2], expected: 6 },
    { args: [[1,2,3,4,5], 10], expected: 5 },
    { args: [[0,0,0,0,1000000000], 0], expected: 5 },
  ],
};
