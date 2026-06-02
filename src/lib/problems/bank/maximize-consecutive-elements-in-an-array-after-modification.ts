import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-consecutive-elements-in-an-array-after-modification',
  title: 'Maximize Consecutive Elements in an Array After Modification',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given a 0-indexed array \`nums\` consisting of **positive** integers.

You can apply the following operation to **each element at most once**:
- Choose an element \`nums[i]\` and **increase** it by \`1\`.

Return the **maximum** number of elements in \`nums\` that can be made to form a **consecutive sequence** (i.e., a set of distinct integers forming a contiguous range like \`{3, 4, 5, 6}\`) after performing at most one increment per element.

**Constraints:**
- \`1 ≤ nums.length ≤ 10^5\`
- \`1 ≤ nums[i] ≤ 10^6\``,
  examples: [
    {
      input: 'nums = [2,1,5,1,1]',
      output: '3',
      explanation: 'Increase one of the 1s to 2 and another to 3: {1, 2, 3}. No sequence of length 4 is achievable.',
    },
    {
      input: 'nums = [1,4,7,10]',
      output: '1',
      explanation: 'Elements differ by 3; no two can be in the same consecutive sequence after only incrementing.',
    },
  ],
  constraints: ['Each element can be kept as-is or increased by 1. Sort, then use DP: dp[v] = max consecutive length ending at v.'],
  hints: [
    'Sort nums. Each element x can stay at x or become x+1 (at most +1 per element).',
    'After sorting, maintain a hash map dp where dp[v] = max number of elements in a consecutive sequence ending at value v.',
    'For each sorted element x: update dp[x] = dp[x-1] + 1 (keep x as-is) and dp[x+1] = max(dp[x+1], dp[x] + 1) (increase x to x+1). Process both updates before moving to the next element.',
    'The answer is the maximum value in dp after processing all elements.',
  ],
  params: ['nums'],
  starterCode: {
    javascript: `function maxSelectedElements(nums) {
  nums.sort((a, b) => a - b);
  const dp = new Map();
  let ans = 1;
  for (const x of nums) {
    const keep = (dp.get(x - 1) || 0) + 1;
    const inc = (dp.get(x) || 0) + 1;
    dp.set(x, Math.max(dp.get(x) || 0, keep));
    dp.set(x + 1, Math.max(dp.get(x + 1) || 0, inc));
    ans = Math.max(ans, keep, inc);
  }
  return ans;
}`,
    typescript: `function maxSelectedElements(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const dp = new Map<number, number>();
  let ans = 1;
  for (const x of nums) {
    const keep = (dp.get(x - 1) ?? 0) + 1;
    const inc = (dp.get(x) ?? 0) + 1;
    dp.set(x, Math.max(dp.get(x) ?? 0, keep));
    dp.set(x + 1, Math.max(dp.get(x + 1) ?? 0, inc));
    ans = Math.max(ans, keep, inc);
  }
  return ans;
}`,
    python: `def maxSelectedElements(nums: list[int]) -> int:
    nums.sort()
    dp = {}
    ans = 1
    for x in nums:
        keep = dp.get(x - 1, 0) + 1
        inc = dp.get(x, 0) + 1
        dp[x] = max(dp.get(x, 0), keep)
        dp[x + 1] = max(dp.get(x + 1, 0), inc)
        ans = max(ans, keep, inc)
    return ans`,
  },
  functionName: 'maxSelectedElements',
  visibleTests: [
    { args: [[2, 1, 5, 1, 1]], expected: 3 },
    { args: [[1, 4, 7, 10]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 3 },
    { args: [[3, 2, 1]], expected: 3 },
    { args: [[1, 1, 1, 1]], expected: 2 },
    { args: [[1, 2, 1, 2]], expected: 3 },
    { args: [[1, 1, 2, 2, 3, 3]], expected: 4 },
    { args: [[5, 4, 3, 2, 1]], expected: 5 },
    { args: [[1, 3, 5, 7]], expected: 2 },
  ],
};
