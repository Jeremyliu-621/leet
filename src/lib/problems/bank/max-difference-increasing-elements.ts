import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-difference-increasing-elements',
  title: 'Maximum Difference Between Increasing Elements',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a **0-indexed** integer array \`nums\` of size \`n\`, find the **maximum difference** between \`nums[j]\` and \`nums[i]\` (i.e., \`nums[j] - nums[i]\`), such that \`0 <= i < j < n\` and \`nums[i] < nums[j]\`.

Return the **maximum difference**. If no such \`i\` and \`j\` exists, return \`-1\`.`,
  constraints: [
    'n == nums.length',
    '2 <= n <= 1000',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [7,1,5,4]',
      output: '4',
      explanation: 'Max difference is nums[2]-nums[1] = 5-1 = 4.',
    },
    {
      input: 'nums = [9,4,3,2]',
      output: '-1',
      explanation: 'There is no i < j with nums[i] < nums[j].',
    },
    {
      input: 'nums = [1,5,2,10]',
      output: '9',
      explanation: 'nums[3]-nums[0] = 10-1 = 9.',
    },
  ],
  hints: [
    'Level 1: Track the minimum element seen so far as you iterate. For each j, check nums[j] - minSoFar.',
    'Level 2: Keep a running minimum; update max diff whenever nums[j] > minSoFar.',
    'Level 3: let min=nums[0],max=-1;for(let j=1;j<nums.length;j++){if(nums[j]>min)max=Math.max(max,nums[j]-min);else min=nums[j];}return max;',
  ],
  functionName: 'maximumDifference',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumDifference(nums) {
  let min = nums[0], max = -1;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] > min) max = Math.max(max, nums[j] - min);
    else min = nums[j];
  }
  return max;
}`,
    typescript: `function maximumDifference(nums: number[]): number {
  let min = nums[0]!, max = -1;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j]! > min) max = Math.max(max, nums[j]! - min);
    else min = nums[j]!;
  }
  return max;
}`,
    python: `def maximumDifference(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    mn, mx = nums[0], -1
    for j in range(1, len(nums)):
        if nums[j] > mn: mx = max(mx, nums[j] - mn)
        else: mn = nums[j]
    return mx`,
  },
  visibleTests: [
    { args: [[7, 1, 5, 4]], expected: 4 },
    { args: [[9, 4, 3, 2]], expected: -1 },
    { args: [[1, 5, 2, 10]], expected: 9 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 1 },
    { args: [[2, 1]], expected: -1 },
    { args: [[1, 1]], expected: -1 },
    { args: [[3, 1, 4, 1, 5]], expected: 4 },
    { args: [[10, 1, 2]], expected: 1 },
  ],
};
