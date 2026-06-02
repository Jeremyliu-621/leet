import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-reduce-x',
  title: 'Minimum Operations to Reduce X to Zero',
  difficulty: 'medium',
  tags: ['sliding-window', 'arrays'],
  description: `You are given an integer array \`nums\` and an integer \`x\`. In one operation, you can either remove the leftmost or the rightmost element from \`nums\` and subtract its value from \`x\`. Return the **minimum number of operations** to reduce \`x\` to exactly \`0\`, or \`-1\` if it is not possible.

**Key insight:** Removing elements from both ends is equivalent to keeping a contiguous subarray in the middle. So you want to find the **longest subarray** whose sum equals \`sum(nums) - x\`. The answer is \`nums.length - length\` of that subarray.

Use a sliding window to find the longest subarray with the target sum.`,
  constraints: [
    '1 <= nums.length <= 100000',
    '1 <= nums[i] <= 10000',
    '1 <= x <= 1000000000',
  ],
  examples: [
    {
      input: 'nums = [1,1,4,2,3], x = 5',
      output: '2',
      explanation: 'Remove 3 (rightmost), then 2 (rightmost): 5 operations from the right. Or remove 1+1 from left: 2 operations total.',
    },
    {
      input: 'nums = [5,6,7,8,9], x = 4',
      output: '-1',
      explanation: 'Sum is 35. Target subarray sum would be 31. No such subarray exists.',
    },
    {
      input: 'nums = [3,2,20,1,1,3], x = 10',
      output: '5',
      explanation: 'Remove 3,2,1,1,3 (5 elements). The kept subarray is [20] with sum 24.',
    },
  ],
  hints: [
    'Instead of thinking about removing from ends, think about keeping a middle subarray. If the total sum is `S`, you want the longest subarray with sum `S - x`. Then the answer is `n - subarray_length`.',
    'Use a sliding window to find the longest subarray with sum exactly `target = sum(nums) - x`. Expand right, shrink left when sum exceeds target.',
    '`const target=nums.reduce((a,b)=>a+b)-x; if(target<0)return -1; let lo=0,sum=0,best=-1; for(let hi=0;hi<nums.length;hi++){sum+=nums[hi]; while(sum>target)sum-=nums[lo++]; if(sum===target)best=Math.max(best,hi-lo+1);} return best===-1?-1:nums.length-best;`',
  ],
  functionName: 'minOperations',
  params: ['nums', 'x'],
  starterCode: {
    javascript: `function minOperations(nums, x) {
  const target = nums.reduce((a, b) => a + b, 0) - x;
  if (target < 0) return -1;
  let lo = 0, sum = 0, best = -1;
  for (let hi = 0; hi < nums.length; hi++) {
    sum += nums[hi];
    while (sum > target) sum -= nums[lo++];
    if (sum === target) best = Math.max(best, hi - lo + 1);
  }
  return best === -1 ? -1 : nums.length - best;
}`,
    typescript: `function minOperations(nums: number[], x: number): number {
  const target = nums.reduce((a, b) => a + b, 0) - x;
  if (target < 0) return -1;
  let lo = 0, sum = 0, best = -1;
  for (let hi = 0; hi < nums.length; hi++) {
    sum += nums[hi]!;
    while (sum > target) sum -= nums[lo++]!;
    if (sum === target) best = Math.max(best, hi - lo + 1);
  }
  return best === -1 ? -1 : nums.length - best;
}`,
    python: `def minOperations(nums, x):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    target = sum(nums) - x
    if target < 0: return -1
    lo = total = best = 0; best = -1
    for hi in range(len(nums)):
        total += nums[hi]
        while total > target: total -= nums[lo]; lo += 1
        if total == target: best = max(best, hi - lo + 1)
    return -1 if best == -1 else len(nums) - best`,
  },
  visibleTests: [
    { args: [[1, 1, 4, 2, 3], 5], expected: 2 },
    { args: [[5, 6, 7, 8, 9], 4], expected: -1 },
    { args: [[3, 2, 20, 1, 1, 3], 10], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1, 1], 3], expected: -1 },
    { args: [[1, 1], 2], expected: 2 },
    { args: [[1, 1], 1], expected: 1 },
    { args: [[1, 2, 3, 4, 5], 9], expected: 2 },
  ],
};
