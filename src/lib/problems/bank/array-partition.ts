import type { Problem } from '../types';

export const problem: Problem = {
  id: 'array-partition',
  title: 'Array Partition',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\` of \`2n\` integers, group these integers into \`n\` pairs \`(a1, b1), (a2, b2), ..., (an, bn)\` such that the sum of \`min(ai, bi)\` for all \`i\` is **maximized**. Return the **maximized sum**.`,
  constraints: [
    '1 <= n <= 10^4',
    'nums.length == 2 * n',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    { input: 'nums = [1,4,3,2]', output: '4', explanation: 'Pair (1,2) and (3,4): min(1,2)+min(3,4)=1+3=4.' },
    { input: 'nums = [6,2,6,5,1,2]', output: '9', explanation: 'Pair (2,1),(2,5),(6,6): 1+2+6=9.' },
  ],
  hints: [
    'Level 1: To maximize the sum of minimums, sort the array and always pair consecutive elements.',
    'Level 2: After sorting, the minimum of each pair is the element at even indices (0, 2, 4, ...).',
    'Level 3: nums.sort((a,b)=>a-b);let sum=0;for(let i=0;i<nums.length;i+=2)sum+=nums[i];return sum;',
  ],
  functionName: 'arrayPairSum',
  params: ['nums'],
  starterCode: {
    javascript: `function arrayPairSum(nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length; i += 2) sum += nums[i];
  return sum;
}`,
    typescript: `function arrayPairSum(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length; i += 2) sum += nums[i]!;
  return sum;
}`,
    python: `def arrayPairSum(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    nums.sort()
    return sum(nums[i] for i in range(0, len(nums), 2))`,
  },
  visibleTests: [
    { args: [[1, 4, 3, 2]], expected: 4 },
    { args: [[6, 2, 6, 5, 1, 2]], expected: 9 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 1 },
    { args: [[3, 3, 3, 3]], expected: 6 },
    { args: [[-1, -2, -3, -4]], expected: -6 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 9 },
  ],
};
