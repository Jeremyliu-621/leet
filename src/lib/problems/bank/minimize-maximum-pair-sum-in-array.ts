import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimize-maximum-pair-sum-in-array',
  title: 'Minimize Maximum Pair Sum in Array',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `The **pair sum** of a pair \`(a, b)\` is equal to \`a + b\`. The **maximum pair sum** is the largest pair sum in a list of pairs.

- For example, if we have pairs \`(1, 5)\`, \`(2, 3)\`, and \`(4, 4)\`, the maximum pair sum would be \`max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8\`.

Given an array \`nums\` of **even** length \`n\`, pair up the elements of \`nums\` into \`n / 2\` pairs such that:

- Each element of \`nums\` is in **exactly one** pair, and
- The **maximum pair sum** is **minimized**.

Return the minimized maximum pair sum after optimally pairing up the elements.`,
  constraints: [
    'n == nums.length',
    '2 <= n <= 10^5',
    'n is even',
    '1 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [3,5,2,3]',
      output: '7',
      explanation: 'Sort to [2,3,3,5]. Pairs (2,5) and (3,3). Max = max(7,6) = 7.',
    },
    {
      input: 'nums = [3,5,4,2,4,6]',
      output: '8',
      explanation: 'Sort to [2,3,4,4,5,6]. Pairs (2,6),(3,5),(4,4). Max = max(8,8,8) = 8.',
    },
  ],
  hints: [
    'Sort the array first.',
    'Pair the smallest element with the largest, second-smallest with second-largest, etc.',
    'This greedy strategy minimizes the maximum pair sum.',
  ],
  functionName: 'minPairSum',
  params: ['nums'],
  starterCode: {
    javascript: `function minPairSum(nums) {
  nums.sort((a, b) => a - b);
  let ans = 0;
  const n = nums.length;
  for (let i = 0; i < n / 2; i++) ans = Math.max(ans, nums[i] + nums[n - 1 - i]);
  return ans;
}`,
    typescript: `function minPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let ans = 0;
  const n = nums.length;
  for (let i = 0; i < n / 2; i++) ans = Math.max(ans, nums[i]! + nums[n - 1 - i]!);
  return ans;
}`,
    python: `def minPairSum(nums):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    nums.sort()
    n = len(nums)
    return max(nums[i] + nums[n - 1 - i] for i in range(n // 2))`,
  },
  visibleTests: [
    { args: [[3, 5, 2, 3]], expected: 7 },
    { args: [[3, 5, 4, 2, 4, 6]], expected: 8 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 3 },
    { args: [[1, 1, 1, 1]], expected: 2 },
    { args: [[1, 10, 9, 2]], expected: 11 },
    { args: [[5, 5, 5, 5, 5, 5]], expected: 10 },
  ],
};
