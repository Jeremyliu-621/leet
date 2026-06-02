import type { Problem } from '../types';

export const problem: Problem = {
  id: 'collecting-chocolates',
  title: 'Collecting Chocolates',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You are given a **0-indexed** integer array \`nums\` of length \`n\` representing the cost of collecting chocolates at each position. Each chocolate has a **type** equal to its current index. You can do the following operation any number of times:

- Choose any index \`i\` and pay \`x\` coins. This rotates the types of all chocolates by 1 to the **left**: the chocolate at position \`j\` now has type \`(j - 1 + n) % n\`.

Return the **minimum** cost to collect **all types** of chocolates.

For each chocolate type, you may collect it when its cost is lowest (at any rotation step).`,
  constraints: [
    '`1 <= nums.length <= 1000`',
    '`1 <= nums[i] <= 10^9`',
    '`1 <= x <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [20,1,15], x = 5',
      output: '13',
      explanation: 'After 2 rotations (cost 10): chocolate 0 → type 2 cost 15, type 0 cost 20, type 1 cost 1 — min is 1. Chocolate 1 → min is 1. Chocolate 2 → min is 1. Total = 10+1+1+1 = 13.',
    },
    {
      input: 'nums = [1,2,3], x = 4',
      output: '6',
      explanation: 'No rotation is cheaper: 1+2+3=6. Any rotation adds ≥4 but only saves ≤3.',
    },
  ],
  hints: [
    'For k rotations, each chocolate i can be collected at the minimum cost over its types in rotations 0..k.',
    'Iterate k from 0 to n-1. For each k, update minCost[i] = min(minCost[i], nums[(i+k)%n]).',
    'The total cost for k rotations = k*x + sum(minCost). Return the minimum over all k.',
  ],
  functionName: 'collectChocolates',
  params: ['nums', 'x'],
  starterCode: {
    javascript: `function collectChocolates(nums, x) {
  const n = nums.length;
  const mc = nums.slice();
  let ans = BigInt(nums.reduce((a, b) => a + b, 0));
  const X = BigInt(x);
  for (let r = 1; r < n; r++) {
    for (let i = 0; i < n; i++) mc[i] = Math.min(mc[i], nums[(i + r) % n]);
    const total = BigInt(r) * X + BigInt(mc.reduce((a, b) => a + b, 0));
    if (total < ans) ans = total;
  }
  return Number(ans);
}`,
    typescript: `function collectChocolates(nums: number[], x: number): number {
  const n = nums.length;
  const mc = nums.slice();
  let ans = BigInt(nums.reduce((a, b) => a + b, 0));
  const X = BigInt(x);
  for (let r = 1; r < n; r++) {
    for (let i = 0; i < n; i++) mc[i] = Math.min(mc[i], nums[(i + r) % n]);
    const total = BigInt(r) * X + BigInt(mc.reduce((a, b) => a + b, 0));
    if (total < ans) ans = total;
  }
  return Number(ans);
}`,
    python: `def collectChocolates(nums, x):
    n = len(nums)
    mc = nums[:]
    ans = sum(nums)
    for r in range(1, n):
        for i in range(n): mc[i] = min(mc[i], nums[(i + r) % n])
        ans = min(ans, r * x + sum(mc))
    return ans`,
  },
  visibleTests: [
    { args: [[20, 1, 15], 5], expected: 13 },
    { args: [[1, 2, 3], 4], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[10, 1], 5], expected: 7 },
    { args: [[2, 2, 2], 1], expected: 6 },
    { args: [[100, 1, 1], 3], expected: 6 },
    { args: [[1, 100, 1000], 50], expected: 103 },
    { args: [[1, 1000000000], 500000000], expected: 500000002 },
  ],
};
