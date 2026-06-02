import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-subarrays-where-elements-come-in-pairs',
  title: 'Count Subarrays Where Elements Come in Pairs',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\`, return the number of subarrays where **every** element that appears in the subarray appears **exactly twice**.

A subarray is a contiguous non-empty sequence of elements within the array.`,
  constraints: [
    '1 <= nums.length <= 2000',
    '1 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '0',
      explanation: 'No element repeats in any subarray, so no element can appear exactly twice.',
    },
    {
      input: 'nums = [1,1,2,2]',
      output: '3',
      explanation:
        'Valid subarrays: [1,1] (1 appears twice), [2,2] (2 appears twice), [1,1,2,2] (both appear twice). Total: 3.',
    },
    {
      input: 'nums = [1,1,2,2,3,3]',
      output: '6',
      explanation:
        'Valid subarrays starting at each index: from 0: [1,1],[1,1,2,2],[1,1,2,2,3,3]; from 2: [2,2],[2,2,3,3]; from 4: [3,3]. Total: 6.',
    },
  ],
  hints: [
    'Level 1: Try all O(n²) subarrays. For each left endpoint, extend right while tracking element frequencies.',
    'Level 2: Track `odd` = number of elements with odd frequency. When adding nums[r], toggle its parity in `odd`. A subarray is valid when odd==0.',
    'Level 3: Early termination: if any element reaches frequency 3, no larger subarray with the same left endpoint can be valid (frequencies only grow). Break immediately.',
  ],
  functionName: 'countSubarrays',
  params: ['nums'],
  starterCode: {
    javascript: `function countSubarrays(nums) {
  let ans = 0;
  const n = nums.length;
  for (let l = 0; l < n; l++) {
    const freq = new Map();
    let odd = 0;
    for (let r = l; r < n; r++) {
      const v = nums[r];
      const f = (freq.get(v) || 0) + 1;
      if (f > 2) break;
      freq.set(v, f);
      if (f % 2 === 1) odd++; else odd--;
      if (odd === 0) ans++;
    }
  }
  return ans;
}`,
    typescript: `function countSubarrays(nums: number[]): number {
  let ans = 0;
  const n = nums.length;
  for (let l = 0; l < n; l++) {
    const freq = new Map<number, number>();
    let odd = 0;
    for (let r = l; r < n; r++) {
      const v = nums[r]!;
      const f = (freq.get(v) ?? 0) + 1;
      if (f > 2) break;
      freq.set(v, f);
      if (f % 2 === 1) odd++; else odd--;
      if (odd === 0) ans++;
    }
  }
  return ans;
}`,
    python: `def countSubarrays(nums):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    nums = [int(x) for x in nums]
    ans = 0
    n = len(nums)
    for l in range(n):
        freq = {}
        odd = 0
        for r in range(l, n):
            v = nums[r]
            f = freq.get(v, 0) + 1
            if f > 2: break
            freq[v] = f
            if f % 2 == 1: odd += 1
            else: odd -= 1
            if odd == 0: ans += 1
    return ans`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[1, 1, 2, 2]], expected: 3 },
    { args: [[1, 1, 2, 2, 3, 3]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 2, 1, 2]], expected: 1 },
    { args: [[3, 3, 3, 3]], expected: 3 },
    { args: [[1, 2, 3, 1, 2, 3]], expected: 1 },
    { args: [[2, 2, 2, 2]], expected: 3 },
  ],
};
