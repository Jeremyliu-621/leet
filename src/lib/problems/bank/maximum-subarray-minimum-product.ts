import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-subarray-minimum-product',
  title: 'Maximum Subarray Min-Product',
  difficulty: 'medium',
  tags: ['arrays', 'stack'],
  description: `The **min-product** of an array is equal to the **minimum value** in the array **multiplied by** the array's **sum**.

- For example, the array \`[3,2,5]\` (minimum value is \`2\`) has a min-product of \`2 * (3+2+5) = 2 * 10 = 20\`.

Given an array of integers \`nums\`, return the **maximum min-product** of any **non-empty subarray** of \`nums\`. Since the answer may be large, return it **modulo** \`10^9 + 7\`.

Note that the min-product should be maximized **before** performing the modulo operation.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^7',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,2]',
      output: '14',
      explanation:
        'Subarray [2,3,2] has min=2, sum=7, min-product=14. All others are smaller.',
    },
    {
      input: 'nums = [2,3,3,1,2]',
      output: '18',
      explanation:
        'Subarray [2,3,3] (indices 0-2) has min=2, sum=8, product=16. Subarray [3,3] (indices 1-2, using index 2 as min) has min=3, sum=6, product=18.',
    },
    {
      input: 'nums = [3,1,5,6,4,2]',
      output: '60',
      explanation: 'Subarray [5,6,4] has min=4, sum=15, min-product=60.',
    },
  ],
  hints: [
    'Level 1: For each element as the minimum, find the widest subarray where it is the minimum. The min-product is nums[i] * sum(subarray).',
    'Level 2: Use a monotonic stack to compute left[i] (nearest strictly smaller to the left) and right[i] (nearest <= to the right). O(n) time.',
    'Level 3: With prefix sums, score(i) = nums[i] * (prefix[right[i]] - prefix[left[i]+1]). Take max before applying modulo.',
  ],
  functionName: 'maxSumMinProduct',
  params: ['nums'],
  starterCode: {
    javascript: `function maxSumMinProduct(nums) {
  const MOD = 1_000_000_007n;
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];
  const left = new Array(n).fill(-1);
  const right = new Array(n).fill(n);
  const stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] >= nums[i]) stack.pop();
    left[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(i);
  }
  stack.length = 0;
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) stack.pop();
    right[i] = stack.length ? stack[stack.length - 1] : n;
    stack.push(i);
  }
  let ans = 0n;
  for (let i = 0; i < n; i++) {
    const s = BigInt(prefix[right[i]] - prefix[left[i] + 1]);
    const prod = BigInt(nums[i]) * s;
    if (prod > ans) ans = prod;
  }
  return Number(ans % MOD);
}`,
    typescript: `function maxSumMinProduct(nums: number[]): number {
  const MOD = 1_000_000_007n;
  const n = nums.length;
  const prefix = new Array<number>(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i]! + nums[i]!;
  const left = new Array<number>(n).fill(-1);
  const right = new Array<number>(n).fill(n);
  const stack: number[] = [];
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]!]! >= nums[i]!) stack.pop();
    left[i] = stack.length ? stack[stack.length - 1]! : -1;
    stack.push(i);
  }
  stack.length = 0;
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]!]! > nums[i]!) stack.pop();
    right[i] = stack.length ? stack[stack.length - 1]! : n;
    stack.push(i);
  }
  let ans = 0n;
  for (let i = 0; i < n; i++) {
    const s = BigInt(prefix[right[i]!]! - prefix[left[i]! + 1]!);
    const prod = BigInt(nums[i]!) * s;
    if (prod > ans) ans = prod;
  }
  return Number(ans % MOD);
}`,
    python: `def maxSumMinProduct(nums):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    nums = [int(x) for x in nums]
    MOD = 10**9 + 7
    n = len(nums)
    prefix = [0] * (n + 1)
    for i in range(n): prefix[i + 1] = prefix[i] + nums[i]
    left = [-1] * n; right = [n] * n
    stack = []
    for i in range(n):
        while stack and nums[stack[-1]] >= nums[i]: stack.pop()
        left[i] = stack[-1] if stack else -1
        stack.append(i)
    stack = []
    for i in range(n - 1, -1, -1):
        while stack and nums[stack[-1]] > nums[i]: stack.pop()
        right[i] = stack[-1] if stack else n
        stack.append(i)
    ans = 0
    for i in range(n):
        s = prefix[right[i]] - prefix[left[i] + 1]
        ans = max(ans, nums[i] * s)
    return ans % MOD`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 2]], expected: 14 },
    { args: [[2, 3, 3, 1, 2]], expected: 18 },
    { args: [[3, 1, 5, 6, 4, 2]], expected: 60 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[2, 1]], expected: 4 },
    { args: [[1, 2, 3, 4]], expected: 21 },
    { args: [[2, 3, 2]], expected: 14 },
    { args: [[5, 5, 5]], expected: 75 },
  ],
};
