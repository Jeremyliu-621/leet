import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-make-array-equal',
  title: 'Minimum Cost to Make Array Equal',
  difficulty: 'hard',
  tags: ['binary-search', 'arrays'],
  description: `You are given two 0-indexed arrays \`nums\` and \`cost\` both of length \`n\`. You can change \`nums[i]\` to any value; the cost is \`abs(nums[i] - target) * cost[i]\`. Find the minimum total cost to make all values equal.

**Binary search:** the optimal target is the weighted median. Binary search on target value \`v\`: if \`cost(v) <= cost(v+1)\`, search left half, else right half.`,
  constraints: [
    'n == nums.length == cost.length',
    '1 <= n <= 10^5',
    '1 <= nums[i], cost[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [1,3,5,2], cost = [2,3,1,14]',
      output: '8',
    },
    {
      input: 'nums = [2,2,2,2,2], cost = [4,2,8,1,3]',
      output: '0',
    },
  ],
  hints: [
    'The cost function f(v) = sum(abs(nums[i]-v)*cost[i]) is convex (piecewise linear).',
    'Binary search: if f(mid) <= f(mid+1), optimal is in [lo, mid]; else in [mid+1, hi].',
    'This finds the weighted median: the optimal target v where cumulative cost flips from < to >= total/2.',
  ],
  functionName: 'minCost',
  params: ['nums', 'cost'],
  starterCode: {
    javascript: 'function minCost(nums, cost) {\n\n}\n',
    typescript: "function minCost(nums: number[], cost: number[]): number {\n\n}",

    python: 'def minCost(nums: list, cost: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 5, 2], [2, 3, 1, 14]], expected: 8 },
    { args: [[2, 2, 2, 2, 2], [4, 2, 8, 1, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], [1, 1, 1]], expected: 2 },
    { args: [[1], [1]], expected: 0 },
    { args: [[1, 5], [2, 3]], expected: 8 },
    { args: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]], expected: 15 },
  ],
};
