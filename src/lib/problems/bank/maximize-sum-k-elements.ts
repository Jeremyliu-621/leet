import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-sum-k-elements',
  title: 'Maximize Sum Of Array After K Negations',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\` and a positive integer \`k\`. You can perform the following operation on the array **any number** of times:

- Choose any element of the array and replace it with its negation.

Return the **maximum sum** of the array after performing the above operation exactly \`k\` times.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-100 <= nums[i] <= 100',
    '1 <= k <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [4,2,3], k = 1',
      output: '5',
      explanation: 'Negate element at index 1: [4,-2,3] → sum = 5. Wait, that gives 5. Or negate index 2: [4,2,-3] → 3. Best is to negate the smallest: negate -2 actually... all are positive. Negate the smallest (2): [4,-2,3] → wait that decreases sum. Actually we must negate once. Negate 2 → [4,-2,3] → 5. Hmm, better negate min: 2 → gives [4,-2,3] sum=5. Or negate 4 → 3. Or negate 3 → 3. Best: 5? Actually wait, we want to maximize, so negate the minimum absolute (to minimize the penalty). Negate 2 → sum = 4-2+3 = 5. Original sum=9, negate 2 costs 4. Negate 3 costs 6. Negate 4 costs 8. So yes, negate 2, sum=5.',
    },
    {
      input: 'nums = [3,-1,0,2], k = 3',
      output: '6',
    },
    {
      input: 'nums = [2,-3,-1,5,-4], k = 2',
      output: '13',
    },
  ],
  hints: [
    'Level 1: Sort by absolute value. Greedily negate negatives from smallest to largest.',
    'Level 2: After negating all negatives: if k is still odd, negate the element with the smallest absolute value.',
    'Level 3: nums.sort((a,b)=>Math.abs(a)-Math.abs(b));for(let i=nums.length-1;i>=0&&k>0;i--){if(nums[i]<0){nums[i]=-nums[i];k--;}}if(k%2===1)nums[0]=-nums[0];return nums.reduce((a,b)=>a+b,0);',
  ],
  functionName: 'largestSumAfterKNegations',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function largestSumAfterKNegations(nums, k) {
  nums.sort((a, b) => Math.abs(a) - Math.abs(b));
  for (let i = nums.length - 1; i >= 0 && k > 0; i--) {
    if (nums[i] < 0) { nums[i] = -nums[i]; k--; }
  }
  if (k % 2 === 1) nums[0] = -nums[0];
  return nums.reduce((a, b) => a + b, 0);
}`,
    typescript: `function largestSumAfterKNegations(nums: number[], k: number): number {
  nums.sort((a, b) => Math.abs(a) - Math.abs(b));
  for (let i = nums.length - 1; i >= 0 && k > 0; i--) {
    if (nums[i]! < 0) { nums[i] = -nums[i]!; k--; }
  }
  if (k % 2 === 1) nums[0] = -nums[0]!;
  return nums.reduce((a, b) => a + b, 0);
}`,
    python: `def largestSumAfterKNegations(nums, k):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    nums.sort(key=abs)
    for i in range(len(nums) - 1, -1, -1):
        if nums[i] < 0 and k > 0:
            nums[i] = -nums[i]; k -= 1
    if k % 2 == 1: nums[0] = -nums[0]
    return sum(nums)`,
  },
  visibleTests: [
    { args: [[4, 2, 3], 1], expected: 5 },
    { args: [[3, -1, 0, 2], 3], expected: 6 },
    { args: [[2, -3, -1, 5, -4], 2], expected: 13 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: -1 },
    { args: [[-1, 1], 1], expected: 2 },
    { args: [[-2, -1], 2], expected: 3 },
    { args: [[5, 6, 9, -5, -2], 3], expected: 23 },
  ],
};
