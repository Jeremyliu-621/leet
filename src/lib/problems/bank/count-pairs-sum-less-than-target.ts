import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-pairs-sum-less-than-target',
  title: 'Count Pairs Whose Sum is Less Than Target',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `Given a **0-indexed** integer array \`nums\` of length \`n\` and an integer \`target\`, return the number of pairs \`(i, j)\` where \`0 <= i < j < n\` and \`nums[i] + nums[j] < target\`.`,
  constraints: [
    '1 <= nums.length <= 50',
    '-50 <= nums[i] <= 50',
    '-50 <= target <= 50',
  ],
  examples: [
    { input: 'nums = [-1,1,2,3,1], target = 2', output: '3', explanation: 'Pairs: (-1,1), (-1,2), (-1,1) — all sum to less than 2.' },
    { input: 'nums = [-6,2,5,-2,-7,-1,3], target = -2', output: '10' },
    { input: 'nums = [0,0,0], target = 0', output: '0' },
  ],
  hints: [
    'Sort nums, then use two pointers: if nums[lo]+nums[hi] < target, all pairs (lo, lo+1..hi) are valid — add hi-lo to count and advance lo.',
    'Sort the array. Two-pointer: if `nums[l]+nums[r] < target`, all `r-l` pairs starting at `l` are valid; advance `l`. Otherwise shrink `r`.',
    `\`\`\`js
nums.sort((a,b)=>a-b);
let l=0, r=nums.length-1, count=0;
while (l < r) {
  if (nums[l]+nums[r] < target) { count += r-l; l++; }
  else r--;
}
return count;\`\`\``
  ],
  functionName: 'countPairs',
  params: ['nums', 'target'],
  starterCode: {
    javascript: 'function countPairs(nums, target) {\n  \n}\n',
    typescript: "function countPairs(nums: number[], target: number): number {\n  \n}",

    python: 'def countPairs(nums, target):\n    pass\n',
  },
  visibleTests: [
    { args: [[-1,1,2,3,1], 2], expected: 3 },
    { args: [[-6,2,5,-2,-7,-1,3], -2], expected: 10 },
    { args: [[0,0,0], 0], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1,2,3,4,5], 10], expected: 10 },
    { args: [[5,5,5,5], 11], expected: 6 },
    { args: [[-5,0,5], 0], expected: 1 },
    { args: [[1], 5], expected: 0 },
    { args: [[-1,-1,-1], -1], expected: 3 },
  ],
};
