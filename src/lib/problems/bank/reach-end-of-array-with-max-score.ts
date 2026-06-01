import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reach-end-of-array-with-max-score',
  title: 'Reach End of Array With Max Score',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\` of length \`n\`.

Your goal is to reach index \`n - 1\` starting from index \`0\`. You can jump from any index \`i\` to any index \`j\` where \`i < j\`. The **score** for such a jump is \`(j - i) * nums[i]\`.

Return the **maximum total score** you can achieve when reaching index \`n - 1\`.`,
  constraints: [
    '2 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1,3,1,5]',
      output: '7',
      explanation:
        'Jump 0→1 (score 1*1=1), then 1→3 (score 3*2=6). Total = 7.',
    },
    {
      input: 'nums = [4,3,1,3,2]',
      output: '16',
      explanation:
        'Jump 0→4 (score 4*4=16). Total = 16.',
    },
    {
      input: 'nums = [3,1,4,1,5]',
      output: '14',
      explanation:
        'Jump 0→2 (score 3*2=6), then 2→4 (score 4*2=8). Total = 14.',
    },
  ],
  hints: [
    'Level 1: Think of the journey as a sequence of unit steps. Each unit step from position k to k+1 earns nums[p] where p is the last "starting position" you jumped from.',
    'Level 2: To maximize, for each unit step, you want the highest possible rate. The best rate for step k is max(nums[0..k]) — the maximum value seen so far.',
    'Level 3: Answer = sum of running maximum of nums[0..n-2]: for each i from 0 to n-2, add current max(nums[0..i]) to the answer.',
  ],
  functionName: 'findMaximumScore',
  params: ['nums'],
  starterCode: {
    javascript: `function findMaximumScore(nums) {
  let ans = 0, curMax = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    curMax = Math.max(curMax, nums[i]);
    ans += curMax;
  }
  return ans;
}`,
    typescript: `function findMaximumScore(nums: number[]): number {
  let ans = 0, curMax = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    curMax = Math.max(curMax, nums[i]!);
    ans += curMax;
  }
  return ans;
}`,
    python: `def findMaximumScore(nums):
    ans = cur_max = 0
    for i in range(len(nums) - 1):
        cur_max = max(cur_max, nums[i])
        ans += cur_max
    return ans`,
  },
  visibleTests: [
    { args: [[1, 3, 1, 5]], expected: 7 },
    { args: [[4, 3, 1, 3, 2]], expected: 16 },
    { args: [[3, 1, 4, 1, 5]], expected: 14 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 1 },
    { args: [[5, 1]], expected: 5 },
    { args: [[1, 2, 3, 4, 5]], expected: 10 },
    { args: [[5, 4, 3, 2, 1]], expected: 20 },
    { args: [[1, 1000000000]], expected: 1 },
    { args: [[1000000000, 1]], expected: 1000000000 },
    { args: [[2, 4, 6, 8, 4]], expected: 20 },
    { args: [[1, 1, 1, 1, 1]], expected: 4 },
  ],
};
