import type { Problem } from '../types';

export const problem: Problem = {
  id: 'divide-chocolate',
  title: 'Divide Chocolate',
  difficulty: 'hard',
  tags: ['binary-search', 'arrays'],
  description: `You have a chocolate bar with chunks. The \`i\`-th chunk has \`sweetness[i]\` sweetness units.

You want to share the chocolate with \`k\` friends, so you need to cut it into exactly **k + 1** pieces (you keep one piece). Each piece must be a **contiguous** segment of chunks.

Since you are very greedy, you want to maximize the **minimum total sweetness** among all \`k + 1\` pieces.

Return the **maximum** possible minimum sweetness.`,
  constraints: [
    '0 <= k < sweetness.length <= 10^4',
    '1 <= sweetness[i] <= 10^5',
  ],
  examples: [
    {
      input: 'sweetness = [1,2,3,4,5,6,7,8,9], k = 5',
      output: '6',
      explanation: 'Divide into [1,2,3], [4,5], [6], [7], [8], [9]. Minimum sweetness = 6.',
    },
    {
      input: 'sweetness = [5,6,7], k = 0',
      output: '18',
      explanation: 'k = 0 means no cuts. You keep the whole bar with sweetness 5+6+7 = 18.',
    },
    {
      input: 'sweetness = [1,2,3], k = 1',
      output: '3',
      explanation: 'Cut into [1,2] and [3] → minimum = 3. Or [1] and [2,3] → minimum = 1. The best is 3.',
    },
  ],
  hints: [
    'Binary search on the answer (minimum sweetness). The range is [min(sweetness), sum(sweetness)].',
    'For a candidate minimum `m`, greedily walk left to right accumulating chunk sweetness. Whenever the running sum reaches `m`, make a cut and reset. Count the number of pieces formed.',
    'If the piece count is ≥ k + 1, then minimum `m` is achievable — try larger. Otherwise, try smaller. This is a "maximize the minimum" binary search (upper-biased: `lo = mid`).',
  ],
  functionName: 'maximizeSweetness',
  params: ['sweetness', 'k'],
  starterCode: {
    javascript: `function maximizeSweetness(sweetness, k) {
  let lo = Math.min(...sweetness);
  let hi = sweetness.reduce((a, b) => a + b, 0);
  // Binary search: find largest min-sweetness that allows k+1 pieces
}`,
    typescript: "function maximizeSweetness(sweetness: number[], k: number): number {\n  let lo = Math.min(...sweetness);\n  let hi = sweetness.reduce((a, b) => a + b, 0);\n  // Binary search: find largest min-sweetness that allows k+1 pieces\n}",

    python: `def maximizeSweetness(sweetness, k):
    lo, hi = min(sweetness), sum(sweetness)
    # Binary search: find largest min-sweetness that allows k+1 pieces
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9], 5], expected: 6 },
    { args: [[5, 6, 7], 0], expected: 18 },
    { args: [[1, 2, 3], 1], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3], 2], expected: 1 },
    { args: [[3, 3, 3, 3], 1], expected: 6 },
    { args: [[1, 2, 3, 4, 5], 2], expected: 4 },
    { args: [[6, 3, 2, 8, 7, 5], 2], expected: 9 },
    { args: [[100], 0], expected: 100 },
  ],
};
