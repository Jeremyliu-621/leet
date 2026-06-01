import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-subarray-with-bitwise-and-closest-to-k',
  title: 'Find Subarray With Bitwise AND Closest to K',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation'],
  description: `You are given an integer array \`nums\` and an integer \`k\`.

Return the **minimum** absolute difference between \`k\` and the bitwise AND of any non-empty subarray of \`nums\`.

The bitwise AND of a subarray \`nums[l..r]\` is \`nums[l] & nums[l+1] & ... & nums[r]\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= k <= 10^9',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,2,4,5], k = 3',
      output: '1',
      explanation:
        'The closest AND value to 3 is 2 (subarray [2]) or 4 (subarray [4]), each with |AND - 3| = 1.',
    },
    {
      input: 'nums = [1,3,5,7], k = 4',
      output: '1',
      explanation:
        '3 (subarray [3]) or 5 (subarray [5]) give |3-4|=1 and |5-4|=1.',
    },
    {
      input: 'nums = [1,2,3], k = 2',
      output: '0',
      explanation: 'Subarray [2] has AND = 2. |2-2| = 0.',
    },
  ],
  hints: [
    'Level 1: Since AND only turns off bits (never turns them on), for each ending index r, the set of distinct AND values for subarrays ending at r is small — at most O(log max_val) distinct values.',
    'Level 2: Maintain a set of distinct AND values for subarrays ending at the current position. For each new element, the new set is {element} ∪ {prev_and & element for each prev_and in the previous set}.',
    'Level 3: For each value in the current set, update the global minimum |AND - k|. The set has at most 30 elements (one per bit) so each step is O(log max_val).',
  ],
  functionName: 'minimumDifference',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minimumDifference(nums, k) {
  let ans = Infinity;
  let prev = new Set();
  for (const num of nums) {
    const curr = new Set([num]);
    for (const p of prev) curr.add(p & num);
    for (const v of curr) {
      const diff = Math.abs(v - k);
      if (diff < ans) ans = diff;
    }
    prev = curr;
  }
  return ans;
}`,
    typescript: `function minimumDifference(nums: number[], k: number): number {
  let ans = Infinity;
  let prev = new Set<number>();
  for (const num of nums) {
    const curr = new Set<number>([num]);
    for (const p of prev) curr.add(p & num);
    for (const v of curr) {
      const diff = Math.abs(v - k);
      if (diff < ans) ans = diff;
    }
    prev = curr;
  }
  return ans;
}`,
    python: `def minimumDifference(nums, k):
    ans = float('inf')
    prev = set()
    for num in nums:
        curr = {num}
        for p in prev:
            curr.add(p & num)
        for v in curr:
            ans = min(ans, abs(v - k))
        prev = curr
    return ans`,
  },
  visibleTests: [
    { args: [[1, 2, 4, 5], 3], expected: 1 },
    { args: [[1, 3, 5, 7], 4], expected: 1 },
    { args: [[1, 2, 3], 2], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 0 },
    { args: [[1], 2], expected: 1 },
    { args: [[5], 3], expected: 2 },
    { args: [[3, 5], 4], expected: 1 },
    { args: [[7], 7], expected: 0 },
    { args: [[2, 3], 1], expected: 1 },
    { args: [[1, 2, 4, 8], 3], expected: 1 },
    { args: [[15, 14, 13, 12], 10], expected: 2 },
  ],
};
