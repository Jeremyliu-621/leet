import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-if-array-can-be-sorted',
  title: 'Find if Array Can Be Sorted',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a **0-indexed** array of positive integers \`nums\`.

In one **operation**, you can swap any two **adjacent** elements if they have the same number of **set bits** (1-bits in binary representation).

Return \`true\` if you can sort the array, or \`false\` otherwise.

**Approach:** Group consecutive elements with the same popcount. Within each group, you can freely reorder. Check that the maximum of each group is less than the minimum of the next group.`,
  constraints: [
    '1 <= nums.length <= 500',
    '1 <= nums[i] <= 2^9',
  ],
  examples: [
    {
      input: 'nums = [8,4,2,30,15]',
      output: 'true',
      explanation: '8=1000(1 bit), 4=100(1 bit), 2=10(1 bit) → group [8,4,2]. 30=11110(4 bits), 15=1111(4 bits) → group [30,15]. Max of group1=8 < min of group2=15. Sortable.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: 'true',
      explanation: 'Already sorted.',
    },
    {
      input: 'nums = [3,16,8,4,2]',
      output: 'false',
      explanation: '3=11(2 bits). 16,8,4,2=1 bit each (group). Max of group [16,8,4,2]=16 > min of group2... 3 comes first with different popcount — cannot swap with 16 (1 bit ≠ 2 bits) and 3 > 2, so not sorted.',
    },
  ],
  hints: [
    'Group consecutive elements with the same popcount (number of set bits).',
    'Within a group, all swaps are free — so we only need to ensure each group\'s maximum is less than the next group\'s minimum.',
    '```js\nconst popcount = n => { let c = 0; while (n) { c += n & 1; n >>= 1; } return c; };\nlet prevMax = -Infinity;\nlet i = 0;\nwhile (i < nums.length) {\n  let j = i, bits = popcount(nums[i]), gMin = nums[i], gMax = nums[i];\n  while (j < nums.length && popcount(nums[j]) === bits) {\n    gMin = Math.min(gMin, nums[j]); gMax = Math.max(gMax, nums[j]); j++;\n  }\n  if (gMin < prevMax) return false;\n  prevMax = gMax; i = j;\n}\nreturn true;\n```',
  ],
  functionName: 'canSortArray',
  params: ['nums'],
  starterCode: {
    javascript: `function canSortArray(nums) {
  const pop = n => { let c = 0; while (n) { c += n & 1; n >>= 1; } return c; };
  let prevMax = -Infinity, i = 0;
  while (i < nums.length) {
    let j = i, bits = pop(nums[i]), gMin = nums[i], gMax = nums[i];
    while (j < nums.length && pop(nums[j]) === bits) {
      gMin = Math.min(gMin, nums[j]); gMax = Math.max(gMax, nums[j]); j++;
    }
    if (gMin < prevMax) return false;
    prevMax = gMax; i = j;
  }
  return true;
}`,
    typescript: `function canSortArray(nums: number[]): boolean {
  const pop = (n: number) => { let c = 0; while (n) { c += n & 1; n >>= 1; } return c; };
  let prevMax = -Infinity, i = 0;
  while (i < nums.length) {
    let j = i, bits = pop(nums[i]!), gMin = nums[i]!, gMax = nums[i]!;
    while (j < nums.length && pop(nums[j]!) === bits) {
      gMin = Math.min(gMin, nums[j]!); gMax = Math.max(gMax, nums[j]!); j++;
    }
    if (gMin < prevMax) return false;
    prevMax = gMax; i = j;
  }
  return true;
}`,
    python: `def canSortArray(nums: list) -> bool:
    def pop(n):
        return bin(n).count('1')
    prev_max = float('-inf')
    i = 0
    while i < len(nums):
        j, bits = i, pop(nums[i])
        g_min, g_max = nums[i], nums[i]
        while j < len(nums) and pop(nums[j]) == bits:
            g_min = min(g_min, nums[j])
            g_max = max(g_max, nums[j])
            j += 1
        if g_min < prev_max:
            return False
        prev_max = g_max
        i = j
    return True`,
  },
  visibleTests: [
    { args: [[8, 4, 2, 30, 15]], expected: true },
    { args: [[1, 2, 3, 4, 5]], expected: true },
    { args: [[3, 16, 8, 4, 2]], expected: false },
  ],
  hiddenTests: [
    { args: [[1]], expected: true },
    { args: [[2, 1]], expected: true },
    { args: [[7, 3]], expected: false },
    { args: [[1, 2, 4, 8]], expected: true },
    { args: [[15, 3, 5, 6]], expected: false },
    { args: [[7, 3, 5, 6]], expected: false },
    { args: [[1, 2, 3, 4, 8, 16]], expected: true },
  ],
};
