import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-good-pairs',
  title: 'Count Good Pairs',
  difficulty: 'easy',
  tags: ['hash-map'],
  description: `Given an integer array \`nums\`, return the number of **good pairs**.

A pair \`(i, j)\` is considered **good** if \`nums[i] == nums[j]\` and \`i < j\`.

**Example:** in \`[1,2,3,1,1,3]\`, the good pairs are: (0,3), (0,4), (3,4), (2,5) — a total of 4.

There is a concise O(n) solution using frequency counting: when you encounter a value for the kth time, it can pair with all k-1 previous occurrences of the same value.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,1,1,3]',
      output: '4',
      explanation: 'Good pairs: (0,3), (0,4), (3,4), (2,5) — indices where values are equal.',
    },
    {
      input: 'nums = [1,1,1,1]',
      output: '6',
      explanation: 'Four 1s give C(4,2) = 6 pairs.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '0',
      explanation: 'All distinct — no good pairs.',
    },
  ],
  hints: [
    'A brute-force double loop checks every (i, j) pair. It is O(n²) — can you do it in a single pass?',
    'Maintain a frequency map. As you visit each element, the number of new good pairs it forms equals the count of times that value has been seen before. Add that count to your answer, then increment the frequency.',
    '`const freq = new Map(); let count = 0; for (const n of nums) { count += freq.get(n) ?? 0; freq.set(n, (freq.get(n) ?? 0) + 1); } return count;`',
  ],
  functionName: 'countGoodPairs',
  params: ['nums'],
  starterCode: {
    javascript: `function countGoodPairs(nums) {
  const freq = new Map();
  let count = 0;
  for (const n of nums) { count += freq.get(n) ?? 0; freq.set(n, (freq.get(n) ?? 0) + 1); }
  return count;
}`,
    typescript: `function countGoodPairs(nums: number[]): number {
  const freq = new Map<number, number>();
  let count = 0;
  for (const n of nums) { count += freq.get(n) ?? 0; freq.set(n, (freq.get(n) ?? 0) + 1); }
  return count;
}`,
    python: `def countGoodPairs(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    from collections import Counter
    cnt, count = Counter(), 0
    for n in nums: count += cnt[n]; cnt[n] += 1
    return count`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 1, 1, 3]], expected: 4 },
    { args: [[1, 1, 1, 1]], expected: 6 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 1]], expected: 1 },
    { args: [[2, 2, 2]], expected: 3 },
    { args: [[1, 2, 1, 2, 1]], expected: 4 },
    { args: [[5, 5, 5, 5, 5]], expected: 10 },
    { args: [[1, 2, 3, 4, 5]], expected: 0 },
  ],
};
