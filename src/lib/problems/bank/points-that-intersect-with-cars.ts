import type { Problem } from '../types';

export const problem: Problem = {
  id: 'points-that-intersect-with-cars',
  title: 'Points That Intersect With Cars',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `You are given a **0-indexed** 2D integer array \`nums\` representing some cars on a number line. Each \`nums[i] = [start_i, end_i]\` describes the position of the \`i\`-th car on the number line.

Return the **number of integer points** on the number line that are **covered** by at least one car segment.`,
  constraints: [
    '`1 <= nums.length <= 100`',
    '`nums[i].length == 2`',
    '`1 <= start_i <= end_i <= 100`',
  ],
  examples: [
    {
      input: 'nums = [[3,6],[1,5],[4,7]]',
      output: '7',
      explanation: 'Points 1, 2, 3, 4, 5, 6, and 7 are all covered by at least one car.',
    },
    {
      input: 'nums = [[1,3],[5,8]]',
      output: '7',
      explanation: 'Points 1, 2, 3, 5, 6, 7, 8 are covered. Point 4 is not covered by any car.',
    },
  ],
  hints: [
    'Use a Set to collect all integer points covered by each segment.',
    'For each segment [start, end], add every integer from start to end (inclusive) to the Set.',
    `\`\`\`js
function numberOfPoints(nums) {
  const covered = new Set();
  for (const [s, e] of nums)
    for (let i = s; i <= e; i++) covered.add(i);
  return covered.size;
}
\`\`\``,
  ],
  functionName: 'numberOfPoints',
  params: ['nums'],
  starterCode: {
    javascript: `function numberOfPoints(nums) {

}`,
    typescript: `function numberOfPoints(nums: number[][]): number {

}`,
    python: `def numberOfPoints(nums):
    pass`,
  },
  visibleTests: [
    { args: [[[3, 6], [1, 5], [4, 7]]], expected: 7 },
    { args: [[[1, 3], [5, 8]]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[[1, 1]]], expected: 1 },
    { args: [[[1, 5]]], expected: 5 },
    { args: [[[1, 3], [3, 5]]], expected: 5 },
    { args: [[[1, 2], [3, 4], [5, 6]]], expected: 6 },
    { args: [[[1, 10], [2, 9], [3, 8]]], expected: 10 },
    { args: [[[1, 1], [1, 1], [1, 1]]], expected: 1 },
    { args: [[[50, 60], [70, 80]]], expected: 22 },
    { args: [[[1, 100]]], expected: 100 },
  ],
};
