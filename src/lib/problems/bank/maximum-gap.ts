import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-gap',
  title: 'Maximum Gap',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\`, return the **maximum difference** between two successive elements in its sorted form. If the array contains fewer than two elements, return \`0\`.

You must write an algorithm that runs in linear time and uses linear extra space.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^9',
  ],
  examples: [
    { input: 'nums = [3,6,9,1]', output: '3', explanation: 'Sorted: [1,3,6,9]. Gaps: 2,3,3. Maximum = 3.' },
    { input: 'nums = [10]', output: '0', explanation: 'Fewer than two elements.' },
  ],
  hints: [
    'Level 1: Sort the array, then find the maximum difference between consecutive elements.',
    'Level 2: For the linear-time solution, use bucket sort. But sorting in O(n log n) also works for the constraints.',
    'Level 3: if(nums.length<2)return 0;nums.sort((a,b)=>a-b);let max=0;for(let i=1;i<nums.length;i++)max=Math.max(max,nums[i]-nums[i-1]);return max;',
  ],
  functionName: 'maximumGap',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumGap(nums) {
  if (nums.length < 2) return 0;
  nums.sort((a, b) => a - b);
  let max = 0;
  for (let i = 1; i < nums.length; i++) max = Math.max(max, nums[i] - nums[i - 1]);
  return max;
}`,
    typescript: `function maximumGap(nums: number[]): number {
  if (nums.length < 2) return 0;
  nums.sort((a, b) => a - b);
  let max = 0;
  for (let i = 1; i < nums.length; i++) max = Math.max(max, nums[i]! - nums[i - 1]!);
  return max;
}`,
    python: `def maximumGap(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    if len(nums) < 2: return 0
    nums.sort()
    return max(nums[i] - nums[i - 1] for i in range(1, len(nums)))`,
  },
  visibleTests: [
    { args: [[3, 6, 9, 1]], expected: 3 },
    { args: [[10]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 0 },
    { args: [[1, 10000000]], expected: 9999999 },
    { args: [[1, 3, 2, 5, 4]], expected: 1 },
    { args: [[1, 2, 100]], expected: 98 },
    { args: [[1]], expected: 0 },
  ],
};
