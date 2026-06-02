import type { Problem } from '../types';

export const problem: Problem = {
  id: 'collect-chocolates',
  title: 'Collect Chocolates',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a 0-indexed integer array \`nums\` of size \`n\` representing the cost of collecting different types of chocolates. The cost of collecting the chocolate at the index \`i\` is \`nums[i]\`. Each chocolate is of a different type, and originally the type of chocolates at index \`i\` is \`i\`.

In one operation, you can do the following with a cost of \`x\`:
- Simultaneously change the type of **all** chocolates. In other words, the type of chocolate at index \`i\` will become the type of chocolate at index \`(i - 1) mod n\` (i.e., every type is shifted one position to the left).

Return the **minimum cost** to collect chocolates of all types, given that you can perform as many operations as you want.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 10^9',
    '1 <= x <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [20,1,15], x = 5',
      output: '13',
      explanation: 'Perform 2 operations (cost 10). Type i can be collected from positions i, i-1, i-2 (cyclic). Min costs: type0=min(20,15,1)=1, type1=min(1,20,15)=1, type2=min(15,1,20)=1. Total=10+3=13.',
    },
    {
      input: 'nums = [1,2,3], x = 4',
      output: '6',
      explanation: 'Collecting at cost 1+2+3=6 (no operations) is cheaper than any rotation.',
    },
  ],
  hints: [
    'Level 1: For j operations (cost j*x), each type i can be collected from positions i, i-1, ..., i-j+1 (cyclically). So min cost for type i = min(nums[(i-j)%n..i]).',
    'Level 2: Iterate j from 0 to n-1. Maintain a running minimum array: for each step, update minCost[i] = min(minCost[i], nums[(i-j)%n]). Compute total = j*x + sum(minCost). Answer is minimum over all j.',
    'Level 3: O(n²) time, which is fine for n ≤ 1000. Early termination: if x * n < sum(nums), it\'s cheaper to do all rotations; otherwise the crossover point is somewhere in [0, n-1].',
  ],
  functionName: 'minCost',
  params: ['nums', 'x'],
  starterCode: {
    javascript: `function minCost(nums, x) {
  const n = nums.length;
  // minCost[i] = cheapest way to collect type i given j rotations so far
  const minCol = [...nums];
  let ans = nums.reduce((s, v) => s + v, 0); // 0 rotations
  for (let j = 1; j < n; j++) {
    // After j rotations, type i can also be collected from position (i-j+n)%n
    for (let i = 0; i < n; i++) {
      minCol[i] = Math.min(minCol[i], nums[(i - j + n) % n]);
    }
    // TODO: update ans = min(ans, j*x + sum(minCol))
  }
  return ans;
}`,
    typescript: `function minCost(nums: number[], x: number): number {
  const n = nums.length;
  // minCol[i] = cheapest way to collect type i given j rotations so far
  const minCol = [...nums];
  let ans = nums.reduce((s, v) => s + v, 0); // 0 rotations
  for (let j = 1; j < n; j++) {
    // After j rotations, type i can also be collected from position (i-j+n)%n
    for (let i = 0; i < n; i++) {
      minCol[i] = Math.min(minCol[i], nums[(i - j + n) % n]);
    }
    // TODO: update ans = min(ans, j*x + sum(minCol))
  }
  return ans;
}`,
    python: `def minCost(nums: list[int], x: int) -> int:
    n = len(nums)
    # min_col[i] = cheapest way to collect type i given j rotations so far
    min_col = nums[:]
    ans = sum(nums)  # 0 rotations
    for j in range(1, n):
        # After j rotations, type i can also be collected from position (i-j)%n
        for i in range(n):
            min_col[i] = min(min_col[i], nums[(i - j) % n])
        # TODO: update ans = min(ans, j*x + sum(min_col))
    return ans`,
  },
  visibleTests: [
    { args: [[20, 1, 15], 5], expected: 13 },
    { args: [[1, 2, 3], 4], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[100, 1], 1], expected: 3 },
    { args: [[1, 2], 1], expected: 3 },
    { args: [[5, 3, 2, 1], 3], expected: 10 },
    { args: [[10, 10, 10], 1], expected: 30 },
    { args: [[1, 1, 1, 1], 100], expected: 4 },
    { args: [[100, 1, 1, 1], 1], expected: 5 },
  ],
};
