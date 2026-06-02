import type { Problem } from '../types';

export const problem: Problem = {
  id: 'three-sum-zero',
  title: 'Three Numbers That Sum to Zero',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Given an integer array \`nums\`, return all unique triplets \`[a, b, c]\` such that \`a + b + c === 0\` and \`a <= b <= c\`.

The result must not contain duplicate triplets.

**Example:** For \`[-1, 0, 1, 2, -1, -4]\`, the answer is \`[[-1,-1,2],[-1,0,1]]\`.`,
  constraints: [
    '0 <= nums.length <= 1000',
    '-100 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [-1,0,1,2,-1,-4]',
      output: '[[-1,-1,2],[-1,0,1]]',
      explanation: 'nums[0]+nums[1]+nums[2]=-1+0+1=0, nums[0]+nums[1]+nums[4]=-1+-1+2=0. Duplicates removed.',
    },
    {
      input: 'nums = [0,1,1]',
      output: '[]',
      explanation: 'No three numbers sum to zero.',
    },
    {
      input: 'nums = [0,0,0]',
      output: '[[0,0,0]]',
      explanation: '0+0+0=0.',
    },
  ],
  hints: [
    'Sort the array first. Then think about fixing one element and using two pointers on the rest — similar to two-sum with a sorted array.',
    'Sort nums. For each index i (skip duplicates), set left=i+1, right=n-1. Move pointers inward based on the sum: if sum < 0 advance left, if sum > 0 decrement right, if sum === 0 record and skip duplicates on both sides.',
    '`nums.sort((a,b)=>a-b); const res=[]; for(let i=0;i<nums.length-2;i++){ if(i>0&&nums[i]===nums[i-1]) continue; let l=i+1,r=nums.length-1; while(l<r){ const s=nums[i]+nums[l]+nums[r]; if(s===0){res.push([nums[i],nums[l],nums[r]]); while(l<r&&nums[l]===nums[l+1])l++; while(l<r&&nums[r]===nums[r-1])r--; l++;r--;} else if(s<0)l++; else r--;} } return res;`',
  ],
  functionName: 'threeSumZero',
  params: ['nums'],
  starterCode: {
    javascript: `function threeSumZero(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const s = nums[i] + nums[l] + nums[r];
      if (s === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++; r--;
      } else if (s < 0) l++; else r--;
    }
  }
  return res;
}`,
    typescript: `function threeSumZero(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res: number[][] = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const s = nums[i]! + nums[l]! + nums[r]!;
      if (s === 0) {
        res.push([nums[i]!, nums[l]!, nums[r]!]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++; r--;
      } else if (s < 0) l++; else r--;
    }
  }
  return res;
}`,
    python: `def threeSumZero(nums):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    nums = sorted(int(x) for x in nums)
    res = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i-1]: continue
        l, r = i + 1, len(nums) - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if s == 0:
                res.append([nums[i], nums[l], nums[r]])
                while l < r and nums[l] == nums[l+1]: l += 1
                while l < r and nums[r] == nums[r-1]: r -= 1
                l += 1; r -= 1
            elif s < 0: l += 1
            else: r -= 1
    return res`,
  },
  visibleTests: [
    { args: [[-1, 0, 1, 2, -1, -4]], expected: [[-1, -1, 2], [-1, 0, 1]] },
    { args: [[0, 1, 1]], expected: [] },
    { args: [[0, 0, 0]], expected: [[0, 0, 0]] },
  ],
  hiddenTests: [
    { args: [[]], expected: [] },
    { args: [[-2, 0, 2]], expected: [[-2, 0, 2]] },
    { args: [[-4, -1, -1, 0, 1, 2]], expected: [[-1, -1, 2], [-1, 0, 1]] },
    { args: [[1, 2, 3]], expected: [] },
    { args: [[-1, -1, -1, 2, 2]], expected: [[-1, -1, 2]] },
    { args: [[-2, 0, 0, 2, 2]], expected: [[-2, 0, 2]] },
  ],
};
