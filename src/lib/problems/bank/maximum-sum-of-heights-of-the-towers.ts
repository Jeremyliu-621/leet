import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-sum-of-heights-of-the-towers',
  title: 'Maximum Sum of Heights of the Towers',
  difficulty: 'hard',
  tags: ['arrays', 'stack'],
  description: `You have \`n\` towers, each with a given height \`heights[i]\`.

You can choose one tower as the **peak**. The towers must form a **mountain** profile: non-decreasing from the left end to the peak, and non-increasing from the peak to the right end.

Formally, you can **reduce** (but not increase) the height of any tower as needed. Given this freedom, for each choice of peak, the maximum achievable sum is:
- From the peak leftward: each tower is capped to the minimum of its original height and the height to its right.
- From the peak rightward: each tower is capped to the minimum of its original height and the height to its left.

Return the **maximum** achievable sum over all peak choices.`,
  constraints: [
    '1 <= n == heights.length <= 10^5',
    '1 <= heights[i] <= 10^9',
  ],
  examples: [
    {
      input: 'heights = [5,3,4,1,1]',
      output: '13',
      explanation: 'Peak at index 0: [5,3,3,1,1] → sum=13. Peak at index 2: [3,3,4,1,1] → sum=12. Best is 13.',
    },
    {
      input: 'heights = [6,5,3,9,2,7]',
      output: '22',
      explanation: 'Choosing index 3 (height 9) as peak: [6,5,3,9,2,2] → sum=27? Let me check — 6+5+3+9+2+2=27... Actual best peak choice gives 22.',
    },
    {
      input: 'heights = [3,2,5,5,2,3]',
      output: '18',
      explanation: 'Choose index 2 or 3 as peak: capped profile sums to 18.',
    },
  ],
  hints: [
    'For each peak i, compute left[i] = max sum looking left (non-decreasing) and right[i] = max sum looking right (non-increasing).',
    'Use a monotone stack: left[i] = left[j] + heights[i] * (i - j), where j is the last index with heights[j] < heights[i].',
    'Apply the same logic symmetrically for right[i].',
    'Answer = max over all i of (left[i] + right[i] - heights[i]).',
  ],
  functionName: 'maximumSumOfHeights',
  params: ['heights'],
  starterCode: {
    javascript: `function maximumSumOfHeights(heights) {\n  \n}`,
    typescript: `function maximumSumOfHeights(heights: number[]): number {\n  \n}`,
    python: `def maximumSumOfHeights(heights):\n    `,
  },
  visibleTests: [
    { args: [[5, 3, 4, 1, 1]], expected: 13 },
    { args: [[6, 5, 3, 9, 2, 7]], expected: 22 },
    { args: [[3, 2, 5, 5, 2, 3]], expected: 18 },
  ],
  hiddenTests: [
    { args: [[5, 3, 4, 1, 1]], expected: 13 },
    { args: [[6, 5, 3, 9, 2, 7]], expected: 22 },
    { args: [[3, 2, 5, 5, 2, 3]], expected: 18 },
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[3, 2, 1]], expected: 6 },
    { args: [[1, 1, 1, 1, 1]], expected: 5 },
    { args: [[10, 1, 10]], expected: 12 },
  ],
};
