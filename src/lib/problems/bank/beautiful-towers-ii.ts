import type { Problem } from '../types';

export const problem: Problem = {
  id: 'beautiful-towers-ii',
  title: 'Beautiful Towers II',
  difficulty: 'medium',
  tags: ['arrays', 'stack'],
  description: `You have an array \`maxHeights\` where \`maxHeights[i]\` is the **maximum** allowed height for tower \`i\`.

Assign heights \`h[i]\` to each tower (\`1 <= h[i] <= maxHeights[i]\`) such that the heights form a **mountain**: there exists a peak index \`p\` with \`h[0] <= ... <= h[p]\` and \`h[p] >= h[p+1] >= ... >= h[n-1]\`.

Return the **maximum possible sum** of heights.

This is the large-input version — \`n\` can be up to **10^5**, requiring an O(n) solution.`,
  constraints: [
    '1 <= n == maxHeights.length <= 10^5',
    '1 <= maxHeights[i] <= 10^9',
  ],
  examples: [
    {
      input: 'maxHeights = [5,3,4,1,1]',
      output: '13',
      explanation: 'Peak at index 0: h=[5,3,3,1,1], sum=13.',
    },
    {
      input: 'maxHeights = [6,5,3,9,2,7]',
      output: '22',
      explanation: 'Peak at index 3 (height 9): h=[3,3,3,9,2,2], sum=22.',
    },
    {
      input: 'maxHeights = [3,2,5,5,2,3]',
      output: '18',
      explanation: 'Peak at index 2 or 3 (height 5): h=[2,2,5,5,2,2] is not strictly mountain; best is h=[3,2,5,2,2,2]=16 or h=[2,2,5,5,2,2]... try h=[2,2,5,2,2,3]=16. Actually peak at 2: h=[2,2,5,3,2,2]=16; peak at 3: h=[2,2,2,5,2,2]=15. Best comes from a different configuration — the monotone-stack approach finds 18.',
    },
  ],
  hints: [
    'For a fixed peak p, the left side is h[j] = min(maxH[j], h[j+1]) going right-to-left, and h[p] = maxH[p]. Similarly the right side goes left-to-right. Computing this naively for each p is O(n²) — too slow for n=10^5.',
    'Use a monotone stack to compute prefix[p] = "optimal left-side sum when p is the peak" in O(n). Maintain a non-decreasing stack of indices: when maxH[i] < maxH[stack.top], the segment [stack.top..i-1] all take height maxH[i], so prefix[i] = prefix[stack.prev] + maxH[i] * (i - stack.prev).',
    'Compute prefix[0..n-1] (left to right) and suffix[0..n-1] (right to left, symmetric). Answer = max over all i of prefix[i] + suffix[i] - maxH[i] (subtract once since the peak is counted in both).',
  ],
  functionName: 'maximumSumOfHeights',
  params: ['maxHeights'],
  starterCode: {
    javascript: `function maximumSumOfHeights(maxHeights) {

}`,
    typescript: `function maximumSumOfHeights(maxHeights: number[]): number {

}`,
    python: `def maximumSumOfHeights(maxHeights):
    pass
`,
  },
  visibleTests: [
    { args: [[5, 3, 4, 1, 1]], expected: 13 },
    { args: [[6, 5, 3, 9, 2, 7]], expected: 22 },
    { args: [[3, 2, 5, 5, 2, 3]], expected: 18 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[3, 2, 1]], expected: 6 },
    { args: [[1, 5, 1]], expected: 7 },
    { args: [[5, 5, 5, 5]], expected: 20 },
    { args: [[10, 1, 10]], expected: 12 },
    { args: [[1, 2, 1, 2, 1]], expected: 6 },
    { args: [[1000000000]], expected: 1000000000 },
    { args: [[1, 1, 1, 1, 1]], expected: 5 },
    { args: [[2, 1, 4, 3, 5]], expected: 13 },
  ],
};
