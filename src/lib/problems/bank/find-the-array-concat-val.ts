import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-array-concat-val',
  title: 'Find the Array Concatenation Value',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a **0-indexed** integer array \`nums\`.

The **concatenation** of two numbers is the number formed by concatenating their numerals. For example, the concatenation of \`15\`, \`49\` is \`1549\`.

The **concatenation value** of \`nums\` is initially equal to \`0\`. Perform this operation until \`nums\` becomes empty:
- If there exists more than one element in \`nums\`, pick the first element and last element in \`nums\` respectively and add the value of their concatenation to the concatenation value of \`nums\`, then delete the first and last element from \`nums\`.
- If one element exists, add its value to the concatenation value of \`nums\`, then delete it.

Return the **concatenation value** of \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [7,52,2,4]',
      output: '596',
      explanation: 'Step 1: concat(7,4)=74. Step 2: concat(52,2)=522. Total = 74+522 = 596.',
    },
    {
      input: 'nums = [5,14,13,8,12]',
      output: '673',
      explanation: 'Step 1: concat(5,12)=512. Step 2: concat(14,8)=148. Step 3: middle=13. Total = 512+148+13 = 673.',
    },
  ],
  hints: [
    'Use two pointers left=0, right=n-1. While left < right, concatenate nums[left] and nums[right] and add. Advance pointers inward.',
    'If left === right (odd length), add nums[left] directly.',
    'Concatenation: parseInt(String(a) + String(b)) or Number(String(a) + String(b)).',
  ],
  functionName: 'findTheArrayConcVal',
  params: ['nums'],
  starterCode: {
    javascript: `function findTheArrayConcVal(nums) {
  let lo = 0, hi = nums.length - 1, val = 0;
  while (lo < hi) {
    val += Number(String(nums[lo]) + String(nums[hi]));
    lo++; hi--;
  }
  if (lo === hi) val += nums[lo];
  return val;
}`,
    typescript: `function findTheArrayConcVal(nums: number[]): number {
  let lo = 0, hi = nums.length - 1, val = 0;
  while (lo < hi) {
    val += Number(String(nums[lo]) + String(nums[hi]));
    lo++; hi--;
  }
  if (lo === hi) val += nums[lo]!;
  return val;
}`,
    python: `def findTheArrayConcVal(nums):
    lo, hi, val = 0, len(nums) - 1, 0
    while lo < hi:
        val += int(str(nums[lo]) + str(nums[hi]))
        lo += 1; hi -= 1
    if lo == hi: val += nums[lo]
    return val`,
  },
  visibleTests: [
    { args: [[7, 52, 2, 4]], expected: 596 },
    { args: [[5, 14, 13, 8, 12]], expected: 673 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 12 },
    { args: [[9, 9]], expected: 99 },
    { args: [[1, 2, 3, 4]], expected: 37 },
  ],
};
