import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimize-length-of-array-using-operations',
  title: 'Minimize Length of Array Using Operations',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\` containing **positive** integers.

Your task is to **minimize** the length of \`nums\` by performing the following operations **any** number of times (including zero):

- Select two distinct indices \`i\` and \`j\` from \`nums\`, such that \`nums[i] > 0\`, \`nums[j] > 0\`, and \`nums[i] * nums[j]\` is **even** (i.e., \`nums[i] % nums[j] > 0\` OR...

Actually: select \`i\` and \`j\` where \`nums[i] > nums[j] > 0\`. Replace \`nums[i]\` with \`nums[i] % nums[j]\`. If the result is \`0\`, **remove** it from the array.

Return the **minimum length** of \`nums\` after performing the operations optimally.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,4,3,1]',
      output: '2',
      explanation: '4%1=0 (remove), 3%1=0 (remove). Two 1s remain and cannot be reduced.',
    },
    {
      input: 'nums = [5,5,5,10,5]',
      output: '4',
      explanation: '10%5=0 (remove). Four 5s remain; all equal so no further reduction.',
    },
    {
      input: 'nums = [2,3,4]',
      output: '1',
      explanation: '3%2=1, making [2,1,4]. 4%1=0 (remove), 2%1=0 (remove). One element remains.',
    },
  ],
  hints: [
    'Level 1: Any element can eventually be reduced to the GCD of all elements using the Euclidean algorithm.',
    'Level 2: Let g = gcd(nums). Every element is a multiple of g. Elements that already equal g cannot be reduced further (would need a smaller element to take mod against).',
    'Level 3: Count occurrences of g in nums. All elements larger than g can be eliminated (they produce 0 when mod-ed by g). The answer is max(1, count(g in nums)).',
  ],
  functionName: 'minimizeArrayLength',
  params: ['nums'],
  starterCode: {
    javascript: `function minimizeArrayLength(nums) {
  function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
  let g = nums[0];
  for (const x of nums) g = gcd(g, x);
  let count = 0;
  for (const x of nums) if (x === g) count++;
  return Math.max(1, count);
}`,
    typescript: `function minimizeArrayLength(nums: number[]): number {
  function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
  let g = nums[0]!;
  for (const x of nums) g = gcd(g, x);
  let count = 0;
  for (const x of nums) if (x === g) count++;
  return Math.max(1, count);
}`,
    python: `def minimizeArrayLength(nums):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    nums = [int(x) for x in nums]
    from math import gcd
    g = nums[0]
    for x in nums: g = gcd(g, x)
    count = nums.count(g)
    return max(1, count)`,
  },
  visibleTests: [
    { args: [[1, 4, 3, 1]], expected: 2 },
    { args: [[5, 5, 5, 10, 5]], expected: 4 },
    { args: [[2, 3, 4]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[3]], expected: 1 },
    { args: [[2, 2]], expected: 2 },
    { args: [[6, 4, 2]], expected: 1 },
    { args: [[4, 6, 8]], expected: 1 },
    { args: [[1, 1, 1]], expected: 3 },
  ],
};
