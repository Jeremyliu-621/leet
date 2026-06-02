import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-triangle-number',
  title: 'Valid Triangle Number',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Given an integer array \`nums\`, return the number of **triplets** chosen from the array that can make triangles if we take them as side lengths of a triangle.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '0 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [2,2,3,4]',
      output: '3',
      explanation: 'Valid triplets: (2,3,4) using index (0,2,3), (2,3,4) using index (1,2,3), (2,2,3) using index (0,1,2).',
    },
    {
      input: 'nums = [4,2,3,4]',
      output: '4',
    },
  ],
  hints: [
    'Level 1: Sort the array. For a valid triangle with sides a ≤ b ≤ c, only check a+b > c (the other conditions are automatic). Use a three-pointer approach.',
    'Level 2: Sort nums. For each largest side (index k from n-1 down to 2), use two pointers l=0, r=k-1. If nums[l]+nums[r]>nums[k], then nums[l+1..r-1] + nums[r] > nums[k] too — add r-l to count and move r left. Otherwise move l right.',
    'Level 3: nums.sort((a,b)=>a-b);let cnt=0;for(let k=nums.length-1;k>=2;k--){let l=0,r=k-1;while(l<r){if(nums[l]+nums[r]>nums[k]){cnt+=r-l;r--;}else l++;}}return cnt;',
  ],
  functionName: 'triangleNumber',
  params: ['nums'],
  starterCode: {
    javascript: `function triangleNumber(nums) {
  nums.sort((a, b) => a - b); let cnt = 0;
  for (let k = nums.length - 1; k >= 2; k--) {
    let l = 0, r = k - 1;
    while (l < r) { if (nums[l] + nums[r] > nums[k]) { cnt += r - l; r--; } else l++; }
  }
  return cnt;
}`,
    typescript: `function triangleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b); let cnt = 0;
  for (let k = nums.length - 1; k >= 2; k--) {
    let l = 0, r = k - 1;
    while (l < r) { if (nums[l]! + nums[r]! > nums[k]!) { cnt += r - l; r--; } else l++; }
  }
  return cnt;
}`,
    python: `def triangleNumber(nums):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    nums = sorted(int(x) for x in nums); cnt = 0
    for k in range(len(nums)-1, 1, -1):
        l, r = 0, k - 1
        while l < r:
            if nums[l] + nums[r] > nums[k]: cnt += r - l; r -= 1
            else: l += 1
    return cnt`,
  },
  visibleTests: [
    { args: [[2, 2, 3, 4]], expected: 3 },
    { args: [[4, 2, 3, 4]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[2, 2, 2]], expected: 1 },
    { args: [[1, 1, 2, 2, 3]], expected: 3 },
  ],
};
