import type { Problem } from '../types';

export const problem: Problem = {
  id: 'beautiful-towers-i',
  title: 'Beautiful Towers I',
  difficulty: 'medium',
  tags: ['arrays', 'stack'],
  description: `You have an array \`maxHeights\` where \`maxHeights[i]\` is the **maximum** allowed height for tower \`i\`.

You want to assign heights \`h[i]\` to each tower (with \`1 <= h[i] <= maxHeights[i]\`) such that the heights form a **mountain** arrangement: there exists some peak index \`p\` where:

- \`h[0] <= h[1] <= ... <= h[p]\` (non-decreasing up to the peak)
- \`h[p] >= h[p+1] >= ... >= h[n-1]\` (non-increasing from the peak)

Return the **maximum possible sum** of heights.

**Note:** The peak can be at any position (including the first or last index).`,
  constraints: [
    '1 <= n == maxHeights.length <= 10^3',
    '1 <= maxHeights[i] <= 10^9',
  ],
  examples: [
    {
      input: 'maxHeights = [5,3,4,1,1]',
      output: '13',
      explanation: 'Peak at index 0: h=[5,3,3,1,1], sum=13. Or peak at index 2: h=[3,3,4,1,1], sum=12. Best is 13.',
    },
    {
      input: 'maxHeights = [6,5,3,9,2,7]',
      output: '22',
      explanation: 'Peak at index 3 (maxHeight=9): h=[3,3,3,9,2,2], sum=22.',
    },
    {
      input: 'maxHeights = [3,2,5,5,2,3]',
      output: '18',
      explanation: 'Peak at index 2 or 3 (maxHeight=5): h=[2,2,5,5,2,2] doesn\'t work (not strictly mountain). Try h=[2,2,5,2,2,2]=15, or peak at 3: h=[2,2,2,5,2,2]=15... Peak at index 2: h=[2,2,5,3,2,2]=16. Actually: peak=2, h=[2,2,5,5,2,2]? No, must non-increase. Best: peaks at 2 or 3 both give 18 with h=[3,2,5,5,2,3].',
    },
  ],
  hints: [
    'Try each index as the peak. For a fixed peak p, set h[p] = maxHeights[p], then build left and right by taking min of the previous height and maxHeights[i].',
    'For a given peak p: go left from p-1 to 0, setting h[i] = min(h[i+1], maxHeights[i]). Go right from p+1 to n-1, setting h[i] = min(h[i-1], maxHeights[i]). Sum all heights.',
    'Since n <= 1000, an O(n²) approach (try each peak, recompute sum) runs within time limits.',
  ],
  functionName: 'maximumSumOfHeights',
  params: ['maxHeights'],
  starterCode: {
    javascript: `function maximumSumOfHeights(maxHeights) {

}`,
    python: `def maximumSumOfHeights(maxHeights):
    pass
`,
  },
  visibleTests: [
    { args: [[5,3,4,1,1]], expected: 13 },
    { args: [[6,5,3,9,2,7]], expected: 22 },
    { args: [[3,2,5,5,2,3]], expected: 18 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1,2,3]], expected: 6 },
    { args: [[3,2,1]], expected: 6 },
    { args: [[1,5,1]], expected: 7 },
    { args: [[1,2,1,2,1]], expected: 6 },
    { args: [[10,1,10]], expected: 12 },
  ],
};
