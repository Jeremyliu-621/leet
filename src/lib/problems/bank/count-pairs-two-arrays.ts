import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-pairs-two-arrays',
  title: 'Count Pairs Whose Sum is Less than Target',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `Given a **0-indexed** integer array \`nums\` of length \`n\` and an integer \`target\`, return the number of pairs \`(i, j)\` where \`0 <= i < j < n\` and \`nums[i] + nums[j] < target\`.`,
  constraints: [
    '1 <= nums.length <= 50',
    '-50 <= nums[i] <= 50',
    '-50 <= target <= 50',
  ],
  examples: [
    { input: 'nums = [-1,1,2,3,1], target = 2', output: '3', explanation: 'Pairs: (-1,1), (-1,2), (-1,3) are < 2... wait let me recount. (-1+1=0<2)✓ (-1+2=1<2)✓ (-1+3=2 not <2)✗ (-1+1=0<2)✓ (1+2=3 not <2)✗. Pairs: (-1,1)×2 = indices (0,1),(0,4); (-1,2)=(0,2). Total = 3.' },
    { input: 'nums = [-6,2,5,-2,-7,-1,3], target = -2', output: '10', explanation: 'There are 10 pairs with sum < -2.' },
  ],
  hints: [
    'Level 1: Brute force: check every pair (i,j) with i<j and count those where nums[i]+nums[j]<target.',
    'Level 2: Sort the array, then use two pointers. Left pointer at start, right at end. If sum < target, all pairs (left, left+1..right) work.',
    'Level 3: nums.sort((a,b)=>a-b);let l=0,r=n-1,cnt=0;while(l<r){if(nums[l]+nums[r]<target){cnt+=r-l;l++;}else r--;}return cnt;',
  ],
  functionName: 'countPairs',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function countPairs(nums, target) {
  nums.sort((a, b) => a - b);
  let l = 0, r = nums.length - 1, cnt = 0;
  while (l < r) {
    if (nums[l] + nums[r] < target) { cnt += r - l; l++; }
    else r--;
  }
  return cnt;
}`,
    typescript: `function countPairs(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let l = 0, r = nums.length - 1, cnt = 0;
  while (l < r) {
    if (nums[l]! + nums[r]! < target) { cnt += r - l; l++; }
    else r--;
  }
  return cnt;
}`,
    python: `def countPairs(nums, target):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    nums.sort()
    l, r, cnt = 0, len(nums) - 1, 0
    while l < r:
        if nums[l] + nums[r] < target:
            cnt += r - l; l += 1
        else:
            r -= 1
    return cnt`,
  },
  visibleTests: [
    { args: [[-1, 1, 2, 3, 1], 2], expected: 3 },
    { args: [[-6, 2, 5, -2, -7, -1, 3], -2], expected: 10 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 5], expected: 2 },
    { args: [[1, 2], 5], expected: 1 },
    { args: [[-50, -50], -50], expected: 1 },
    { args: [[0, 0, 0], 1], expected: 3 },
    { args: [[-10, -10, -10, -10], -5], expected: 6 },
  ],
};
