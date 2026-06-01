import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shuffle-the-array',
  title: 'Shuffle the Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given the array \`nums\` consisting of \`2n\` elements in the form \`[x1,x2,...,xn,y1,y2,...,yn]\`.

Return the array in the form \`[x1,y1,x2,y2,...,xn,yn]\`.`,
  constraints: [
    '`1 <= n <= 500`',
    '`nums.length == 2n`',
    '`1 <= nums[i] <= 10^3`',
  ],
  examples: [
    {
      input: 'nums = [2,5,1,3,4,7], n = 3',
      output: '[2,3,5,4,1,7]',
      explanation: 'Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 the answer is [2,3,5,4,1,7].',
    },
    {
      input: 'nums = [1,2,3,4,4,3,2,1], n = 4',
      output: '[1,4,2,3,3,2,4,1]',
    },
    {
      input: 'nums = [1,1,2,2], n = 2',
      output: '[1,2,1,2]',
    },
  ],
  hints: [
    'Iterate from 0 to n-1. At each index i, push nums[i] and nums[i+n] alternately.',
    'Reconstruct the array by interleaving: `[nums[0], nums[n], nums[1], nums[n+1], ...]`.',
    `\`\`\`js
const res = [];
for (let i = 0; i < n; i++) { res.push(nums[i]); res.push(nums[i+n]); }
return res;\`\`\``
  ],
  functionName: 'shuffle',
  params: ['nums', 'n'],
  starterCode: {
    javascript: `function shuffle(nums, n) {
  const res = [];
  for (let i = 0; i < n; i++) { res.push(nums[i]); res.push(nums[i + n]); }
  return res;
}`,
    typescript: `function shuffle(nums: number[], n: number): number[] {
  const res: number[] = [];
  for (let i = 0; i < n; i++) { res.push(nums[i]!); res.push(nums[i + n]!); }
  return res;
}`,
    python: `def shuffle(nums, n):
    return [x for i in range(n) for x in (nums[i], nums[i + n])]`,
  },
  visibleTests: [
    { args: [[2, 5, 1, 3, 4, 7], 3], expected: [2, 3, 5, 4, 1, 7] },
    { args: [[1, 2, 3, 4, 4, 3, 2, 1], 4], expected: [1, 4, 2, 3, 3, 2, 4, 1] },
    { args: [[1, 1, 2, 2], 2], expected: [1, 2, 1, 2] },
  ],
  hiddenTests: [
    { args: [[1, 2], 1], expected: [1, 2] },
    { args: [[1, 1], 1], expected: [1, 1] },
    { args: [[10, 20, 30, 100, 200, 300], 3], expected: [10, 100, 20, 200, 30, 300] },
    { args: [[5, 4, 3, 2, 1, 2, 3, 4, 5, 1], 5], expected: [5, 2, 4, 3, 3, 4, 2, 5, 1, 1] },
  ],
};
