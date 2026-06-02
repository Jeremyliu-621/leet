import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-width-ramp',
  title: 'Maximum Width Ramp',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `A **ramp** in an integer array \`nums\` is a pair \`(i, j)\` for which \`i < j\` and \`nums[i] <= nums[j]\`. The **width** of such a ramp is \`j - i\`.

Given an integer array \`nums\`, return the **maximum width of a ramp** in \`nums\`. If there is no ramp in \`nums\`, return \`0\`.`,
  constraints: [
    '2 <= nums.length <= 5 * 10^4',
    '0 <= nums[i] <= 5 * 10^4',
  ],
  examples: [
    {
      input: 'nums = [6,0,8,2,1,5]',
      output: '4',
      explanation: 'The ramp (i=1,j=5) has width 5-1=4 (nums[1]=0 ≤ nums[5]=5).',
    },
    {
      input: 'nums = [9,8,1,0,1,9,4,0,4,1]',
      output: '7',
      explanation: 'The ramp (i=2,j=9) with nums[2]=1 ≤ nums[9]=1 is not the widest; (i=1,j=8) has width 7.',
    },
  ],
  hints: [
    'Level 1: Build a decreasing stack of indices from the left (candidates for i). Then traverse from right to left: for each j, pop indices from the stack while nums[stack.top] ≤ nums[j] and track max j-i.',
    'Level 2: First pass (left→right): push i if nums[i] < nums[stack.top] (build strictly decreasing candidates). Second pass (right→left): for j from n-1 downward, pop from stack while nums[stack.top] ≤ nums[j], updating max width.',
    'Level 3: const st=[];for(let i=0;i<nums.length;i++)if(!st.length||nums[i]<nums[st[st.length-1]])st.push(i);let ans=0;for(let j=nums.length-1;j>=0;j--)while(st.length&&nums[st[st.length-1]]<=nums[j])ans=Math.max(ans,j-st.pop());return ans;',
  ],
  functionName: 'maxWidthRamp',
  params: ['nums'],
  starterCode: {
    javascript: `function maxWidthRamp(nums) {
  const st = [];
  for (let i = 0; i < nums.length; i++)
    if (!st.length || nums[i] < nums[st[st.length - 1]]) st.push(i);
  let ans = 0;
  for (let j = nums.length - 1; j >= 0; j--)
    while (st.length && nums[st[st.length - 1]] <= nums[j])
      ans = Math.max(ans, j - st.pop());
  return ans;
}`,
    typescript: `function maxWidthRamp(nums: number[]): number {
  const st: number[] = [];
  for (let i = 0; i < nums.length; i++)
    if (!st.length || nums[i]! < nums[st[st.length - 1]!]!) st.push(i);
  let ans = 0;
  for (let j = nums.length - 1; j >= 0; j--)
    while (st.length && nums[st[st.length - 1]!]! <= nums[j]!)
      ans = Math.max(ans, j - st.pop()!);
  return ans;
}`,
    python: `def maxWidthRamp(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    st = []
    for i, v in enumerate(nums):
        if not st or v < nums[st[-1]]: st.append(i)
    ans = 0
    for j in range(len(nums) - 1, -1, -1):
        while st and nums[st[-1]] <= nums[j]:
            ans = max(ans, j - st.pop())
    return ans`,
  },
  visibleTests: [
    { args: [[6, 0, 8, 2, 1, 5]], expected: 4 },
    { args: [[9, 8, 1, 0, 1, 9, 4, 0, 4, 1]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 0]], expected: 0 },
    { args: [[0, 1]], expected: 1 },
    { args: [[3, 2, 1, 0]], expected: 0 },
    { args: [[0, 1, 2, 3]], expected: 3 },
    { args: [[5, 3, 1, 0, 6]], expected: 4 },
  ],
};
