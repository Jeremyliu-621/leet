import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-make-array-equal',
  title: 'Minimum Cost to Make Array Equal',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search'],
  description: `You are given two **0-indexed** arrays \`nums\` and \`cost\` both of length \`n\`.

You can increase or decrease any \`nums[i]\` by \`1\` any number of times. The cost of changing \`nums[i]\` is \`cost[i]\` per unit change.

Return the **minimum** total cost to make all elements of \`nums\` equal.`,
  constraints: [
    '`n == nums.length == cost.length`',
    '`1 <= n <= 10^5`',
    '`1 <= nums[i], cost[i] <= 10^6`',
  ],
  examples: [
    {
      input: 'nums = [1,3,5,2], cost = [2,3,1,14]',
      output: '8',
      explanation: 'Set all to 2: |1-2|*2+|3-2|*3+|5-2|*1+|2-2|*14=2+3+3+0=8.',
    },
    {
      input: 'nums = [2,2,2,2,2], cost = [4,2,8,6,2]',
      output: '0',
      explanation: 'All elements are already equal.',
    },
  ],
  hints: [
    'The optimal target value is the **weighted median** of `nums` with weights `cost`.',
    'Sort `(nums[i], cost[i])` pairs by `nums[i]`. The weighted median is the value where the cumulative weight from the left first reaches half the total weight.',
    'Once you find the target value, compute the total weighted absolute deviation.',
    `\`\`\`js
function minCost(nums, cost) {
  const pairs = nums.map((v, i) => [v, cost[i]]).sort((a, b) => a[0] - b[0]);
  const total = cost.reduce((s, c) => s + c, 0);
  let prefix = 0, median = pairs[0][0];
  for (const [v, c] of pairs) {
    prefix += c;
    if (prefix * 2 >= total) { median = v; break; }
  }
  return pairs.reduce((s, [v, c]) => s + Math.abs(v - median) * c, 0);
}\`\`\``,
  ],
  functionName: 'minCost',
  params: ['nums', 'cost'],
  starterCode: {
    javascript: `function minCost(nums, cost) {
  const pairs = nums.map((v, i) => [v, cost[i]]).sort((a, b) => a[0] - b[0]);
  const total = cost.reduce((s, c) => s + c, 0);
  let prefix = 0, median = pairs[0][0];
  for (const [v, c] of pairs) { prefix += c; if (prefix * 2 >= total) { median = v; break; } }
  return pairs.reduce((s, [v, c]) => s + Math.abs(v - median) * c, 0);
}`,
    typescript: `function minCost(nums: number[], cost: number[]): number {
  const pairs = nums.map((v, i) => [v, cost[i]!] as [number, number]).sort((a, b) => a[0] - b[0]);
  const total = cost.reduce((s, c) => s + c, 0);
  let prefix = 0, median = pairs[0]![0];
  for (const [v, c] of pairs) { prefix += c; if (prefix * 2 >= total) { median = v; break; } }
  return pairs.reduce((s, [v, c]) => s + Math.abs(v - median) * c, 0);
}`,
    python: `def minCost(nums, cost):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    if hasattr(cost, 'to_py'): cost = list(cost.to_py())
    pairs = sorted(zip(nums, cost)); total = sum(cost); prefix = 0; median = pairs[0][0]
    for v, c in pairs:
        prefix += c
        if prefix * 2 >= total: median = v; break
    return sum(abs(v - median) * c for v, c in pairs)`,
  },
  visibleTests: [
    { args: [[1, 3, 5, 2], [2, 3, 1, 14]], expected: 8 },
    { args: [[2, 2, 2, 2, 2], [4, 2, 8, 6, 2]], expected: 0 },
    { args: [[1, 5], [10, 1]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], [5]], expected: 0 },
    { args: [[1, 2], [1, 1]], expected: 1 },
    { args: [[1, 3], [4, 1]], expected: 2 },
    { args: [[1, 2, 3], [1, 1, 1]], expected: 2 },
    { args: [[1, 1000000], [1000000, 1]], expected: 999999 },
    { args: [[1, 2, 3, 4, 5], [5, 4, 3, 2, 1]], expected: 15 },
  ],
};
