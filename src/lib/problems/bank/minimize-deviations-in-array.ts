import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimize-deviations-in-array',
  title: 'Minimize Deviation in Array',
  difficulty: 'hard',
  tags: ['arrays', 'heap'],
  description: `You are given an array \`nums\` of \`n\` positive integers.

You can perform **two types** of operations on any element of the array any number of times:

- If the element is **even**, **divide** it by \`2\`.
- If the element is **odd**, **multiply** it by \`2\`.

The **deviation** of the array is the **maximum difference** between any two elements in the array.

Return the **minimum deviation** the array can have after performing some number of operations.`,
  constraints: [
    'n == nums.length',
    '2 <= n <= 5 * 10^4',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [4,1,5,20,3]',
      output: '3',
      explanation:
        'Multiply odds by 2: [4,2,10,20,6]. Then repeatedly halve the current maximum: 20→10→5. Along the way [4,2,10,5,6] has deviation 10−2=8, then [4,2,5,10,6] gives deviation 8, then [4,2,5,5,6] gives 4, then halving 6→3: [4,2,5,5,3] gives 5−2=3. Minimum is 3.',
    },
    {
      input: 'nums = [2,10,8]',
      output: '3',
      explanation:
        'All even. Halve 10→5: [2,5,8] dev=6. Halve 8→4: [2,5,4] dev=3. 5 is odd — stop. Minimum deviation = 3.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: '1',
      explanation:
        'Multiply odds: [2,2,6,4]. Halve 6→3: [2,2,3,4] dev=2. Halve 4→2: [2,2,3,2] dev=1. 3 is odd — stop. Minimum = 1.',
    },
  ],
  hints: [
    'Level 1: Odd numbers can only go up (×2) initially. Even numbers can go down (÷2) until odd. So multiply all odd numbers by 2 first, making everything even. Now only division is needed to reduce the maximum.',
    'Level 2: After making all numbers even, the minimum in the array can only decrease or stay (as we divide the max). Use a max-heap. Repeatedly extract the maximum and divide by 2 if even; track the running minimum to compute the current deviation.',
    'Level 3: Greedily halve the max: push all elements (odd × 2) into a max-heap. Track global_min. While heap top is even: pop max, update answer = min(answer, max − global_min), push max/2, update global_min. Stop when top is odd. Also compute final deviation. O(n log n log max_val).',
  ],
  functionName: 'minimizeDeviation',
  params: ['nums'],
  starterCode: {
    javascript: `function minimizeDeviation(nums) {

}`,
    typescript: `function minimizeDeviation(nums: number[]): number {

}`,
    python: `def minimizeDeviation(nums):
    pass`,
  },
  visibleTests: [
    { args: [[4, 1, 5, 20, 3]], expected: 3 },
    { args: [[2, 10, 8]], expected: 3 },
    { args: [[1, 2, 3, 4]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[3, 5]], expected: 1 },
    { args: [[1, 1]], expected: 0 },
    { args: [[3, 5, 8]], expected: 2 },
    { args: [[10, 4, 3]], expected: 2 },
    { args: [[2, 2]], expected: 0 },
    { args: [[6, 4, 2]], expected: 1 },
  ],
};
