import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-of-elements-in-two-non-overlapping-subarrays',
  title: 'Maximum Sum of Two Non-Overlapping Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming', 'sliding-window'],
  description: `Given the array \`nums\` and two integers \`firstLen\` and \`secondLen\`, return *the maximum sum of elements in two non-overlapping subarrays with lengths \`firstLen\` and \`secondLen\`*.

The subarray with length \`firstLen\` could occur before or after the subarray with length \`secondLen\`, but they have to be non-overlapping.`,
  constraints: [
    '1 <= firstLen, secondLen <= 1000',
    '2 <= firstLen + secondLen <= 1000',
    'firstLen + secondLen <= nums.length <= 1000',
    '0 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2',
      output: '20',
      explanation: 'One choice of subarrays is [9] with length 1, and [6,5] with length 2.',
    },
    {
      input: 'nums = [3,8,1,3,2,1,8,9,0], firstLen = 3, secondLen = 2',
      output: '29',
      explanation: 'One choice of subarrays is [3,8,1] with length 3, and [8,9] with length 2.',
    },
    {
      input: 'nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4, secondLen = 3',
      output: '31',
      explanation: 'One choice of subarrays is [5,6,0,9] with length 4, and [0,3,8] with length 3.',
    },
  ],
  hints: [
    'Level 1: Build a prefix sum array. For any window [i, i+len), the sum = prefix[i+len] - prefix[i] in O(1).',
    'Level 2: Try both orderings: firstLen before secondLen, and secondLen before firstLen. For each split position, track the best subarray ending before the split.',
    'Level 3: Precompute maxFirst[i] = max window of firstLen ending at or before i, and maxSecond[i] similarly. Then sweep the split boundary.',
  ],
  functionName: 'maxSumTwoNoOverlap',
  params: ['nums', 'firstLen', 'secondLen'],
  starterCode: {
    javascript: `function maxSumTwoNoOverlap(nums, firstLen, secondLen) {
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];
  const window = (start, len) => prefix[start + len] - prefix[start];
  const maxF = new Array(n).fill(0), maxS = new Array(n).fill(0);
  for (let i = firstLen - 1; i < n; i++) {
    const v = window(i - firstLen + 1, firstLen);
    maxF[i] = i > firstLen - 1 ? Math.max(maxF[i - 1], v) : v;
  }
  for (let i = secondLen - 1; i < n; i++) {
    const v = window(i - secondLen + 1, secondLen);
    maxS[i] = i > secondLen - 1 ? Math.max(maxS[i - 1], v) : v;
  }
  let best = 0;
  for (let i = firstLen + secondLen - 1; i < n; i++) {
    best = Math.max(best, maxF[i - secondLen] + window(i - secondLen + 1, secondLen));
    best = Math.max(best, maxS[i - firstLen] + window(i - firstLen + 1, firstLen));
  }
  return best;
}`,
    typescript: `function maxSumTwoNoOverlap(nums: number[], firstLen: number, secondLen: number): number {
  const n = nums.length;
  const prefix = new Array<number>(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i]! + nums[i]!;
  const window = (start: number, len: number) => prefix[start + len]! - prefix[start]!;
  const maxF = new Array<number>(n).fill(0), maxS = new Array<number>(n).fill(0);
  for (let i = firstLen - 1; i < n; i++) {
    const v = window(i - firstLen + 1, firstLen);
    maxF[i] = i > firstLen - 1 ? Math.max(maxF[i - 1]!, v) : v;
  }
  for (let i = secondLen - 1; i < n; i++) {
    const v = window(i - secondLen + 1, secondLen);
    maxS[i] = i > secondLen - 1 ? Math.max(maxS[i - 1]!, v) : v;
  }
  let best = 0;
  for (let i = firstLen + secondLen - 1; i < n; i++) {
    best = Math.max(best, maxF[i - secondLen]! + window(i - secondLen + 1, secondLen));
    best = Math.max(best, maxS[i - firstLen]! + window(i - firstLen + 1, firstLen));
  }
  return best;
}`,
    python: `def maxSumTwoNoOverlap(nums, firstLen, secondLen):
    n = len(nums)
    prefix = [0] * (n + 1)
    for i in range(n):
        prefix[i + 1] = prefix[i] + nums[i]
    def window(start, length):
        return prefix[start + length] - prefix[start]
    max_f = [0] * n
    max_s = [0] * n
    for i in range(firstLen - 1, n):
        v = window(i - firstLen + 1, firstLen)
        max_f[i] = max(max_f[i - 1], v) if i > firstLen - 1 else v
    for i in range(secondLen - 1, n):
        v = window(i - secondLen + 1, secondLen)
        max_s[i] = max(max_s[i - 1], v) if i > secondLen - 1 else v
    best = 0
    for i in range(firstLen + secondLen - 1, n):
        best = max(best, max_f[i - secondLen] + window(i - secondLen + 1, secondLen))
        best = max(best, max_s[i - firstLen] + window(i - firstLen + 1, firstLen))
    return best`,
  },
  visibleTests: [
    { args: [[0, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2], expected: 20 },
    { args: [[3, 8, 1, 3, 2, 1, 8, 9, 0], 3, 2], expected: 29 },
    { args: [[2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3], expected: 31 },
  ],
  hiddenTests: [
    { args: [[1, 1], 1, 1], expected: 2 },
    { args: [[1, 2, 3], 1, 2], expected: 6 },
    { args: [[5, 5, 5, 5], 2, 2], expected: 20 },
    { args: [[1, 0, 1], 1, 1], expected: 2 },
    { args: [[0, 0, 0, 1, 0, 1], 2, 1], expected: 2 },
    { args: [[3, 2, 1, 4, 3], 2, 2], expected: 12 },
  ],
};
