import type { Problem } from '../types';

export const problem: Problem = {
  id: 'continuous-subarray-sum',
  title: 'Continuous Subarray Sum',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return \`true\` if \`nums\` has a **good subarray** or \`false\` otherwise.

A **good subarray** is a subarray where:

- its length is **at least two**, and
- the sum of the elements of the subarray is a multiple of \`k\`.

**Note** that:

- A **subarray** is a contiguous part of the array.
- An integer \`x\` is a multiple of \`k\` if there exists an integer \`n\` such that \`x = n * k\`. \`0\` is **always** a multiple of \`k\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^9',
    '0 <= sum(nums[i]) <= 2^31 - 1',
    '1 <= k <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'nums = [23,2,4,6,7], k = 6',
      output: 'true',
      explanation: '[2,4] is a subarray of length 2 with sum 6.',
    },
    {
      input: 'nums = [23,2,6,4,7], k = 6',
      output: 'true',
      explanation: '[23,2,6,4,7] is a subarray of length 5 with sum 42 (= 7 × 6).',
    },
  ],
  hints: [
    'Level 1: Use prefix sums mod k. If two prefix sums have the same remainder when divided by k, the subarray between them has sum divisible by k. Track indices where each remainder first appeared — if the gap is ≥ 2, return true.',
    'Level 2: Map remainder → first index. Initialize {0: -1} (empty prefix). For each i: cumSum = (cumSum + nums[i]) % k. If remainder seen at index j and i-j >= 2, return true. Otherwise store the first occurrence.',
    'Level 3: const seen=new Map([[0,-1]]);let s=0;for(let i=0;i<nums.length;i++){s=(s+nums[i])%k;if(seen.has(s)){if(i-seen.get(s)>=2)return true;}else seen.set(s,i);}return false;',
  ],
  functionName: 'checkSubarraySum',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function checkSubarraySum(nums, k) {\n  // your code here\n}\n',
    typescript: "function checkSubarraySum(nums: number[], k: number): boolean {\n  // your code here\n}",

    python: 'def checkSubarraySum(nums, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[23, 2, 4, 6, 7], 6], expected: true },
    { args: [[23, 2, 6, 4, 7], 6], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 1], 10], expected: false },
    { args: [[1, 2, 3], 5], expected: true },
    { args: [[0, 0], 1], expected: true },
    { args: [[1], 1], expected: false },
    { args: [[5, 0, 0, 0], 5], expected: true },
  ],
};
