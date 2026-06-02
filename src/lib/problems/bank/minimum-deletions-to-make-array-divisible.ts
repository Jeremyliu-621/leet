import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-deletions-to-make-array-divisible',
  title: 'Minimum Deletions to Make Array Divisible',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `You are given two positive integer arrays \`nums\` and \`numsDivide\`. You can delete any number of elements from \`nums\`.

Return the **minimum** number of deletions such that the **smallest** element in \`nums\` **divides** all the elements of \`numsDivide\`. If this is not possible, return \`-1\`.

Note that an integer \`x\` divides \`y\` if \`y % x == 0\`.`,
  constraints: [
    '1 <= nums.length, numsDivide.length <= 10^5',
    '1 <= nums[i], numsDivide[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [2,3,2,4,3], numsDivide = [9,6,9,3,15]',
      output: '2',
      explanation:
        'GCD(numsDivide)=3. Sort nums=[2,2,3,3,4]. First element dividing 3 is 3 (index 2). Delete 2 elements.',
    },
    {
      input: 'nums = [4,3,6], numsDivide = [8,2,6,10]',
      output: '-1',
      explanation: 'GCD(numsDivide)=2. No element in nums divides 2 (only 2 would, but 2 ∉ nums).',
    },
  ],
  hints: [
    'Level 1: The smallest remaining element must divide all elements in numsDivide. x divides all of numsDivide iff x divides GCD(numsDivide).',
    'Level 2: Compute g = GCD of all numsDivide elements. Sort nums. Find the leftmost nums[i] such that g % nums[i] == 0. Return i (delete i elements).',
    'Level 3: Use gcd(a,b) with gcd(0,x)=x to fold over numsDivide. Sort nums; scan linearly; return first index where g % nums[i] == 0, or -1.',
  ],
  functionName: 'minOperations',
  params: ['nums', 'numsDivide'],
  starterCode: {
    javascript: `function minOperations(nums, numsDivide) {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const g = numsDivide.reduce((acc, v) => gcd(acc, v), 0);
  const sorted = [...nums].sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) if (g % sorted[i] === 0) return i;
  return -1;
}`,
    typescript: `function minOperations(nums: number[], numsDivide: number[]): number {
  const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
  const g = numsDivide.reduce((acc, v) => gcd(acc, v), 0);
  const sorted = [...nums].sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) if (g % sorted[i]! === 0) return i;
  return -1;
}`,
    python: `def minOperations(nums, numsDivide):
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    if hasattr(numsDivide, 'to_py'): numsDivide = list(numsDivide.to_py())
    from math import gcd
    g = 0
    for v in numsDivide: g = gcd(g, v)
    nums = sorted(nums)
    for i, v in enumerate(nums):
        if g % v == 0: return i
    return -1`,
  },
  visibleTests: [
    { args: [[2, 3, 2, 4, 3], [9, 6, 9, 3, 15]], expected: 2 },
    { args: [[4, 3, 6], [8, 2, 6, 10]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], [4, 8, 12]], expected: 0 },
    { args: [[5, 7, 4, 6], [12, 18]], expected: 2 },
    { args: [[7, 11], [5, 10]], expected: -1 },
    { args: [[3, 6, 9], [18]], expected: 0 },
    { args: [[5, 10, 15], [20, 30]], expected: 0 },
  ],
};
