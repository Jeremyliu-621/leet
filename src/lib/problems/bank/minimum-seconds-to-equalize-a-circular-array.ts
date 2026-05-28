import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-seconds-to-equalize-a-circular-array',
  title: 'Minimum Seconds to Equalize a Circular Array',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **circular** array \`nums\` of length \`n\`. Each second, you may set any element in \`nums\` equal to any of its neighbors' value.

Return the **minimum** number of seconds needed to make all elements in \`nums\` equal.`,
  constraints: [
    '`1 <= n <= 10^5`',
    '`1 <= nums[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [1,2,1,2]',
      output: '1',
      explanation: 'After 1 second: set nums[1]=1 and nums[3]=1. All equal to 1.',
    },
    {
      input: 'nums = [2,1,3,3,2]',
      output: '2',
      explanation: 'We can make all elements equal to 2 in 2 seconds.',
    },
    {
      input: 'nums = [5,5,5,5]',
      output: '0',
      explanation: 'All elements are already equal.',
    },
  ],
  hints: [
    'For each unique value, collect the indices where it appears.',
    'A value at two adjacent positions can expand to fill the gap between them in `floor(gap / 2)` seconds.',
    'The circular array means you must also consider the gap that wraps around from the last occurrence to the first occurrence.',
    'The answer is the minimum over all values of `floor(maxGap / 2)`, where `maxGap` is the maximum circular gap between consecutive occurrences of that value.',
  ],
  functionName: 'minimumSeconds',
  params: ['nums'],
  starterCode: {
    javascript: `function minimumSeconds(nums) {

}`,
    typescript: "function minimumSeconds(nums: number[]): number {\n\n}",

    python: `def minimumSeconds(nums: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 1, 2]], expected: 1 },
    { args: [[2, 1, 3, 3, 2]], expected: 2 },
    { args: [[5, 5, 5, 5]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 1 },
    { args: [[1, 1]], expected: 0 },
    { args: [[1, 3, 1, 3, 1]], expected: 1 },
  ],
};
