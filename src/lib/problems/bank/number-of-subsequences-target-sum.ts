import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-subsequences-target-sum',
  title: 'Number of Subsequences That Satisfy the Given Sum Condition',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers', 'binary-search'],
  description: `You are given an array of integers \`nums\` and an integer \`target\`.

Return the **number of non-empty subsequences** of \`nums\` such that the sum of the minimum and maximum element on it is less than or equal to \`target\`. Since the answer may be too large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
    '1 <= target <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [3,5,6,7], target = 9',
      output: '4',
      explanation: 'Valid subsequences: [3],[3,5],[3,5,6],[3,6].',
    },
    {
      input: 'nums = [3,3,6,8], target = 10',
      output: '6',
      explanation: 'Valid subsequences: [3],[3],[3,3],[3,6],[3,6],[3,3,6].',
    },
  ],
  hints: [
    'Level 1: Sort the array. For each left index l (minimum), binary-search for the rightmost r where nums[l]+nums[r]<=target. All 2^(r-l) non-empty subsets with nums[l] as min are valid.',
    'Level 2: Sort nums. Precompute powers of 2 mod 1e9+7. Use two pointers: for each l, find the largest r such that nums[l]+nums[r]<=target. Add 2^(r-l) to the answer.',
    'Level 3: const MOD=1e9+7,n=nums.length,pow2=Array(n).fill(1);for(let i=1;i<n;i++)pow2[i]=pow2[i-1]*2%MOD;nums.sort((a,b)=>a-b);let ans=0,l=0,r=n-1;while(l<=r){if(nums[l]+nums[r]<=target){ans=(ans+pow2[r-l])%MOD;l++;}else r--;}return ans;',
  ],
  functionName: 'numSubseq',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function numSubseq(nums, target) {
  const MOD = 1000000007;
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const pow2 = new Array(n).fill(1);
  for (let i = 1; i < n; i++) pow2[i] = pow2[i-1] * 2 % MOD;
  let ans = 0, l = 0, r = n - 1;
  while (l <= r) {
    if (nums[l] + nums[r] <= target) { ans = (ans + pow2[r - l]) % MOD; l++; }
    else r--;
  }
  return ans;
}`,
    typescript: `function numSubseq(nums: number[], target: number): number {
  const MOD = 1000000007;
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const pow2 = new Array(n).fill(1) as number[];
  for (let i = 1; i < n; i++) pow2[i] = pow2[i-1]! * 2 % MOD;
  let ans = 0, l = 0, r = n - 1;
  while (l <= r) {
    if (nums[l]! + nums[r]! <= target) { ans = (ans + pow2[r - l]!) % MOD; l++; }
    else r--;
  }
  return ans;
}`,
    python: `def numSubseq(nums, target):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    if hasattr(target, 'to_py'): target = target.to_py()
    nums = sorted(int(x) for x in nums); target = int(target)
    MOD = 10**9+7; n = len(nums)
    pow2 = [1]*n
    for i in range(1,n): pow2[i] = pow2[i-1]*2%MOD
    ans = 0; l = 0; r = n-1
    while l <= r:
        if nums[l]+nums[r] <= target: ans = (ans+pow2[r-l])%MOD; l += 1
        else: r -= 1
    return ans`,
  },
  visibleTests: [
    { args: [[3, 5, 6, 7], 9], expected: 4 },
    { args: [[3, 3, 6, 8], 10], expected: 6 },
  ],
  hiddenTests: [
    { args: [[2, 3, 3, 4, 6, 7], 12], expected: 61 },
    { args: [[5, 2, 4, 1, 7, 6, 8], 16], expected: 127 },
    { args: [[1], 1], expected: 0 },
    { args: [[2], 1], expected: 0 },
    { args: [[1, 1], 2], expected: 3 },
  ],
};
