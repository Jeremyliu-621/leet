import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-score-of-array',
  title: 'Maximum Sum Score of an Array',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\` of length \`n\`.

The **score** of index \`i\` is the **maximum** of:
- The sum of the **first** \`i + 1\` elements of \`nums\`.
- The sum of the **last** \`n - i\` elements of \`nums\`.

Return the **maximum** score of any index.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^5 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [4,3,-2,5]',
      output: '10',
      explanation:
        'Score(0)=max(4,10)=10; Score(1)=max(7,6)=7; Score(2)=max(5,3)=5; Score(3)=max(10,5)=10. Max=10.',
    },
    {
      input: 'nums = [-3,-5]',
      output: '-3',
      explanation: 'Score(0)=max(-3,-8)=-3; Score(1)=max(-8,-5)=-5. Max=-3.',
    },
    {
      input: 'nums = [1]',
      output: '1',
      explanation: 'Score(0)=max(1,1)=1.',
    },
  ],
  hints: [
    'Level 1: Prefix sum and suffix sum arrays. Score(i) = max(prefix[i+1], suffix[i]) where prefix[k]=sum of first k elements, suffix[k]=sum of last k elements.',
    'Level 2: Note suffix[n-i] = total - prefix[i]. So Score(i) = max(prefix[i+1], total - prefix[i]).',
    'Level 3: O(n) pass: accumulate prefix sum, compute score at each index, track max.',
  ],
  functionName: 'maximumSumScore',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumSumScore(nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  let prefix = 0, ans = -Infinity;
  for (const x of nums) {
    prefix += x;
    const score = Math.max(prefix, total - prefix + x);
    if (score > ans) ans = score;
  }
  return ans;
}`,
    typescript: `function maximumSumScore(nums: number[]): number {
  const total = nums.reduce((a, b) => a + b, 0);
  let prefix = 0, ans = -Infinity;
  for (const x of nums) {
    prefix += x;
    const score = Math.max(prefix, total - prefix + x);
    if (score > ans) ans = score;
  }
  return ans;
}`,
    python: `def maximumSumScore(nums):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    nums = [int(x) for x in nums]
    total = sum(nums)
    prefix = 0; ans = float('-inf')
    for x in nums:
        prefix += x
        score = max(prefix, total - prefix + x)
        if score > ans: ans = score
    return ans`,
  },
  visibleTests: [
    { args: [[4, 3, -2, 5]], expected: 10 },
    { args: [[-3, -5]], expected: -3 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[-1, -2, -3]], expected: -1 },
    { args: [[1, -1]], expected: 1 },
    { args: [[0]], expected: 0 },
    { args: [[5, -10, 5]], expected: 5 },
  ],
};
