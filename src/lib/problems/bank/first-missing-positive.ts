import type { Problem } from '../types';

export const problem: Problem = {
  id: 'first-missing-positive',
  title: 'First Missing Positive',
  difficulty: 'hard',
  tags: ['arrays'],
  description: `Given an unsorted integer array \`nums\`, return the **smallest missing positive integer**.

You must implement an algorithm that runs in **O(n) time** and uses **O(1) extra space** (modifying the input array is allowed).

**Key insight:** The answer is always in the range \`[1, n+1]\` where \`n\` is the length of the array. Any number outside this range cannot be the first missing positive.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-2^31 <= nums[i] <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'nums = [1,2,0]',
      output: '3',
      explanation: '1 and 2 are present; the smallest missing positive is 3.',
    },
    {
      input: 'nums = [3,4,-1,1]',
      output: '2',
      explanation: '1 and 3, 4 are present; 2 is missing.',
    },
    {
      input: 'nums = [7,8,9,11,12]',
      output: '1',
      explanation: '1 is not in the array, so the answer is 1.',
    },
  ],
  hints: [
    'The answer must be in [1, n+1]. Use the array itself as a hash map: for each value v in [1, n], mark index v-1 as "seen" by making nums[v-1] negative.',
    'First, replace all non-positive numbers and numbers > n with n+1 (a sentinel). Then walk the array: for each abs(nums[i]) = v in [1, n], negate nums[v-1] to mark v as present. Finally, the first index with a positive value gives the answer.',
    '`// Step 1: replace out-of-range values\nfor (let i = 0; i < nums.length; i++) if (nums[i] <= 0 || nums[i] > nums.length) nums[i] = nums.length + 1;\n// Step 2: mark present values\nfor (let i = 0; i < nums.length; i++) { const v = Math.abs(nums[i]); if (v <= nums.length) nums[v-1] = -Math.abs(nums[v-1]); }\n// Step 3: find first positive index\nfor (let i = 0; i < nums.length; i++) if (nums[i] > 0) return i + 1;\nreturn nums.length + 1;`',
  ],
  functionName: 'firstMissingPositive',
  params: ['nums'],
  starterCode: {
    javascript: `function firstMissingPositive(nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) if (nums[i] <= 0 || nums[i] > n) nums[i] = n + 1;
  for (let i = 0; i < n; i++) {
    const v = Math.abs(nums[i]);
    if (v <= n) nums[v - 1] = -Math.abs(nums[v - 1]);
  }
  for (let i = 0; i < n; i++) if (nums[i] > 0) return i + 1;
  return n + 1;
}`,
    typescript: `function firstMissingPositive(nums: number[]): number {
  const n = nums.length;
  for (let i = 0; i < n; i++) if (nums[i]! <= 0 || nums[i]! > n) nums[i] = n + 1;
  for (let i = 0; i < n; i++) {
    const v = Math.abs(nums[i]!);
    if (v <= n) nums[v - 1] = -Math.abs(nums[v - 1]!);
  }
  for (let i = 0; i < n; i++) if (nums[i]! > 0) return i + 1;
  return n + 1;
}`,
    python: `def firstMissingPositive(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    n = len(nums)
    for i in range(n):
        if nums[i] <= 0 or nums[i] > n:
            nums[i] = n + 1
    for i in range(n):
        v = abs(nums[i])
        if v <= n:
            nums[v - 1] = -abs(nums[v - 1])
    for i in range(n):
        if nums[i] > 0:
            return i + 1
    return n + 1`,
  },
  visibleTests: [
    { args: [[1, 2, 0]], expected: 3 },
    { args: [[3, 4, -1, 1]], expected: 2 },
    { args: [[7, 8, 9, 11, 12]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 2 },
    { args: [[1, 2, 3]], expected: 4 },
    { args: [[-1, -2, -3]], expected: 1 },
    { args: [[2, 1]], expected: 3 },
    { args: [[1, 1, 2, 2]], expected: 3 },
  ],
};
