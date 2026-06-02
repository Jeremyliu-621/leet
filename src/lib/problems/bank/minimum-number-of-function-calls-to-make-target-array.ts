import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-function-calls-to-make-target-array',
  title: 'Minimum Number of Function Calls to Make Target Array',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation', 'math'],
  description: `You are given an integer array \`nums\` consisting of non-negative integers. There is a function \`f\` that:

- \`inc(i)\`: Increments \`nums[i]\` by \`1\` — costs **1** call.
- \`double()\`: Doubles **every** element in \`nums\` — costs **1** call.

Starting from an all-zeros array, return the **minimum number of function calls** needed to make the array equal to \`nums\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,5]',
      output: '5',
      explanation: 'inc(0)→[1,0], double→[2,0], inc(1)→[2,1], double→[4,2], inc(0),inc(1)→[5,3]? No: optimal is: inc(1)→[0,1], double→[0,2], inc(0),inc(1)→[1,3], double→[2,6]... Better: in reverse [1,5]→dec both odd→[0,4]→halve→[0,2]→halve→[0,1]→dec→[0,0]. Total 5 ops.',
    },
    {
      input: 'nums = [2,2]',
      output: '3',
      explanation: 'inc(0),inc(1)→[1,1], double→[2,2]. 3 calls.',
    },
  ],
  hints: [
    'Level 1: Think in reverse: start from `nums` and reduce to zeros using reverse operations: "decrement an odd element" (1 call) and "halve all elements" (1 call, only when all are even).',
    'Level 2: At each bit level, the number of "decrement" calls equals the number of elements with that bit set (i.e., the sum of the i-th bits across all elements). The number of "halve" (= "double" in forward) calls equals the position of the highest set bit across all elements.',
    'Level 3: Answer = sum over all elements of popcount(nums[i]) + floor(log2(max(nums))) if max > 0 else 0. The first term counts total increment calls; the second counts total double calls.',
  ],
  functionName: 'minOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minOperations(nums) {

}`,
    typescript: `function minOperations(nums: number[]): number {

}`,
    python: `def minOperations(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 5]], expected: 5 },
    { args: [[2, 2]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[1]], expected: 1 },
    { args: [[3, 2, 4]], expected: 6 },
    { args: [[16, 1, 1]], expected: 7 },
    { args: [[7]], expected: 5 },
    { args: [[1, 2]], expected: 3 },
    { args: [[4, 2, 4]], expected: 5 },
  ],
};
