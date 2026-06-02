import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-subarrays-with-bounded-maximum',
  title: 'Number of Subarrays with Bounded Maximum',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `Given an integer array \`nums\` and two integers \`left\` and \`right\`, return the **number of contiguous non-empty subarrays** such that the value of the maximum array element in that subarray is in the range \`[left, right]\`.

**Approach:** A subarray's max is in \`[left, right]\` = count of subarrays with max ≤ right − count of subarrays with max ≤ left−1. For "max ≤ bound", the count is the sum over all elements of the length of the current valid run.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^9',
    '0 <= left <= right <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [2,1,4,3], left = 2, right = 3',
      output: '3',
      explanation: 'Subarrays with max in [2,3]: [2], [2,1], [3]. Subarray [4] and those containing 4 are excluded.',
    },
    {
      input: 'nums = [2,9,2,5,6], left = 2, right = 8',
      output: '7',
    },
    {
      input: 'nums = [1,2,3], left = 1, right = 2',
      output: '3',
    },
  ],
  hints: [
    'count(max ≤ bound) = for each index i, count consecutive valid elements ending at i (reset to 0 when nums[i] > bound).',
    'Answer = count(max ≤ right) − count(max ≤ left−1).',
    '```js\nfunction atMost(nums, b) {\n  let count = 0, cur = 0;\n  for (const v of nums) {\n    cur = v <= b ? cur + 1 : 0;\n    count += cur;\n  }\n  return count;\n}\nreturn atMost(nums, right) - atMost(nums, left - 1);\n```',
  ],
  functionName: 'numSubarrayBoundedMax',
  params: ['nums', 'left', 'right'],
  starterCode: {
    javascript: `function numSubarrayBoundedMax(nums, left, right) {
  function atMost(b) {
    let count = 0, cur = 0;
    for (const v of nums) { cur = v <= b ? cur + 1 : 0; count += cur; }
    return count;
  }
  return atMost(right) - atMost(left - 1);
}`,
    typescript: `function numSubarrayBoundedMax(nums: number[], left: number, right: number): number {
  const atMost = (b: number) => {
    let count = 0, cur = 0;
    for (const v of nums) { cur = v <= b ? cur + 1 : 0; count += cur; }
    return count;
  };
  return atMost(right) - atMost(left - 1);
}`,
    python: `def numSubarrayBoundedMax(nums: list, left: int, right: int) -> int:
    def at_most(b):
        count = cur = 0
        for v in nums:
            cur = cur + 1 if v <= b else 0
            count += cur
        return count
    return at_most(right) - at_most(left - 1)`,
  },
  visibleTests: [
    { args: [[2,1,4,3], 2, 3], expected: 3 },
    { args: [[2,9,2,5,6], 2, 8], expected: 7 },
    { args: [[1,2,3], 1, 2], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1], 1, 1], expected: 1 },
    { args: [[5], 1, 4], expected: 0 },
    { args: [[1,2,3,4,5], 2, 4], expected: 9 },
    { args: [[1,1,1,1], 1, 1], expected: 10 },
    { args: [[3,2,1], 1, 3], expected: 6 },
    { args: [[1, 3, 5, 2, 7, 5], 3, 5], expected: 9 },
    { args: [[1,2,3], 2, 2], expected: 2 },
  ],
};
