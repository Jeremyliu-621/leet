import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-x-sum-of-all-k-long-subarrays-i',
  title: 'Find X-Sum of All K-Long Subarrays I',
  difficulty: 'easy',
  tags: ['arrays', 'sliding-window'],
  description: `You are given an array \`nums\` of \`n\` integers and two integers \`k\` and \`x\`.

The **x-sum** of an array is computed as follows:

1. Count the occurrences of all elements in the array.
2. Keep only the \`x\` elements with the highest occurrence counts. If two elements have the same occurrence count, the element with the **higher value** is selected.
3. Calculate and return the sum of the selected elements, where each selected element contributes \`value × occurrenceCount\`.

Return an integer array \`answer\` of length \`n - k + 1\` where \`answer[i]\` is the x-sum of the subarray \`nums[i..i+k-1]\`.

**Note:** Elements listed in step 2 can appear fewer than \`x\` times if there are fewer than \`x\` distinct elements.`,
  constraints: [
    '1 <= n <= 50',
    '1 <= k <= n',
    '1 <= x <= k',
    '1 <= nums[i] <= 50',
  ],
  examples: [
    {
      input: 'nums = [1,1,2,2,3,1], k = 6, x = 2',
      output: '[7]',
      explanation: 'Single window [1,1,2,2,3,1]: frequencies are 1→3, 2→2, 3→1. Top 2 by freq: 1 (freq=3) and 2 (freq=2). x-sum = 1*3 + 2*2 = 7.',
    },
    {
      input: 'nums = [3,8,7,8,7,3,1,5], k = 4, x = 3',
      output: '[26,30,25,18,15]',
      explanation: 'Window [3,8,7,8]: top 3 by freq then value are 8(×2),7(×1),3(×1) → 16+7+3=26. Window [8,7,8,7]: top 2 (only 2 distinct) are 8(×2),7(×2) → 16+14=30. And so on.',
    },
  ],
  hints: [
    'For each window of length k, build a frequency map of all elements.',
    'Sort the (element, frequency) pairs by frequency descending, then element value descending to break ties.',
    'Take the first x entries from this sorted list and compute the sum as element * frequency for each.',
  ],
  functionName: 'findXSumOfAllKLongSubarraysI',
  params: ['nums', 'k', 'x'],
  starterCode: {
    javascript: `function findXSumOfAllKLongSubarraysI(nums, k, x) {
  const n = nums.length, res = [];
  for (let i = 0; i <= n - k; i++) {
    const freq = new Map();
    for (let j = i; j < i + k; j++) freq.set(nums[j], (freq.get(nums[j]) ?? 0) + 1);
    const sorted = [...freq.entries()].sort((a, b) => b[1] - a[1] || b[0] - a[0]);
    let sum = 0;
    for (let j = 0; j < Math.min(x, sorted.length); j++) sum += sorted[j][0] * sorted[j][1];
    res.push(sum);
  }
  return res;
}`,
    typescript: `function findXSumOfAllKLongSubarraysI(nums: number[], k: number, x: number): number[] {
  const n = nums.length, res: number[] = [];
  for (let i = 0; i <= n - k; i++) {
    const freq = new Map<number, number>();
    for (let j = i; j < i + k; j++) freq.set(nums[j], (freq.get(nums[j]) ?? 0) + 1);
    const sorted = [...freq.entries()].sort((a, b) => b[1] - a[1] || b[0] - a[0]);
    let sum = 0;
    for (let j = 0; j < Math.min(x, sorted.length); j++) sum += sorted[j][0] * sorted[j][1];
    res.push(sum);
  }
  return res;
}`,
    python: `def findXSumOfAllKLongSubarraysI(nums, k, x):
    from collections import Counter
    n, res = len(nums), []
    for i in range(n - k + 1):
        freq = Counter(nums[i:i+k])
        top = sorted(freq.items(), key=lambda e: (e[1], e[0]), reverse=True)[:x]
        res.append(sum(v * c for v, c in top))
    return res`,
  },
  visibleTests: [
    { args: [[1, 1, 2, 2, 3, 1], 6, 2], expected: [7] },
    { args: [[3, 8, 7, 8, 7, 3, 1, 5], 4, 3], expected: [26, 30, 25, 18, 15] },
  ],
  hiddenTests: [
    { args: [[1], 1, 1], expected: [1] },
    { args: [[1, 2, 3, 1], 2, 1], expected: [2, 3, 3] },
    { args: [[5, 5, 5], 3, 2], expected: [15] },
    { args: [[1, 1, 1, 1], 2, 1], expected: [2, 2, 2] },
    { args: [[4, 4, 2, 2, 2], 3, 2], expected: [10, 8, 6] },
    { args: [[1, 2, 3, 4, 5], 3, 2], expected: [5, 7, 9] },
    { args: [[3, 3, 2], 3, 3], expected: [8] },
    { args: [[1, 2, 2, 1, 3], 4, 2], expected: [6, 7] },
  ],
};
