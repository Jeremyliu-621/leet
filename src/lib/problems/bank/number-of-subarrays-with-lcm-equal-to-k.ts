import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-subarrays-with-lcm-equal-to-k',
  title: 'Number of Subarrays with LCM Equal to K',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return the number of **subarrays** of \`nums\` where the **least common multiple** (LCM) of the subarray's elements equals \`k\`.

A **subarray** is a contiguous, non-empty sequence of elements within an array.

The **LCM** of an array is the smallest positive integer that is divisible by all array elements. It is guaranteed that the LCM of any prefix of the given array fits in a 32-bit integer.`,
  constraints: [
    '`1 <= nums.length <= 1000`',
    '`1 <= nums[i], k <= 1000`',
  ],
  examples: [
    {
      input: 'nums = [3,6,2,7,1], k = 6',
      output: '4',
      explanation: '[3,6], [3,6,2], [6], and [6,2] are the four subarrays with LCM = 6.',
    },
    {
      input: 'nums = [3], k = 2',
      output: '0',
      explanation: 'No subarray has LCM 2.',
    },
    {
      input: 'nums = [1,1,1], k = 1',
      output: '6',
      explanation: 'All 6 subarrays (including single elements) have LCM 1.',
    },
  ],
  hints: [
    'For each starting index `i`, extend the subarray to the right and maintain the running LCM.',
    'If the current LCM exceeds `k`, it can only grow (since adding elements never decreases LCM). Break early.',
    'Use `lcm(a, b) = a / gcd(a, b) * b` where `gcd` is computed recursively.',
    `\`\`\`js
function subarrayLCM(nums, k) {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const lcm = (a, b) => (a / gcd(a, b)) * b;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let cur = 1;
    for (let j = i; j < nums.length; j++) {
      cur = lcm(cur, nums[j]);
      if (cur === k) count++;
      else if (cur > k) break;
    }
  }
  return count;
}\`\`\``,
  ],
  functionName: 'subarrayLCM',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function subarrayLCM(nums, k) {

}`,
    typescript: 'function subarrayLCM(nums: number[], k: number): number {\n\n}',
    python: `def subarrayLCM(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[3, 6, 2, 7, 1], 6], expected: 4 },
    { args: [[3], 2], expected: 0 },
    { args: [[1, 1, 1], 1], expected: 6 },
  ],
  hiddenTests: [
    { args: [[2, 4, 8], 4], expected: 2 },
    { args: [[4, 4, 4], 4], expected: 6 },
    { args: [[6, 10, 15], 30], expected: 3 },
    { args: [[1, 2, 3, 6], 6], expected: 6 },
    { args: [[5, 5], 5], expected: 3 },
  ],
};
