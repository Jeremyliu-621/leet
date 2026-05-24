import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-recolors',
  title: 'Minimum Number of Operations to Make Array Continuous',
  difficulty: 'easy',
  tags: ['sliding-window', 'strings'],
  description: `You are given a **0-indexed** string \`blocks\` of length \`n\`, where \`blocks[i]\` is either \`'W'\` or \`'B'\`, representing the color of the \`i-th\` block. The characters \`'W'\` and \`'B'\` denote the colors white and black, respectively.

You are also given an integer \`k\`, which is the desired number of **consecutive** black blocks.

In one operation, you can **recolor** a white block such that it becomes a black block.

Return the **minimum** number of operations needed such that there is at least one occurrence of \`k\` consecutive black blocks.`,
  constraints: [
    'n == blocks.length',
    '1 <= n <= 100',
    'blocks[i] is either \'W\' or \'B\'',
    '1 <= k <= n',
  ],
  examples: [
    { input: 'blocks = "WBBWWBBWBW", k = 7', output: '3', explanation: 'One optimal window starts at index 3 with 3 white blocks needing recoloring.' },
    { input: 'blocks = "WBWBBBW", k = 2', output: '0', explanation: 'Blocks 4 and 5 are already "BB".' },
  ],
  hints: [
    'Use a sliding window of size k. Count white blocks in the window. The answer is the minimum such count.',
  ],
  functionName: 'minimumRecolors',
  params: ['blocks', 'k'],
  starterCode: {
    javascript: 'function minimumRecolors(blocks, k) {\n  \n}\n',
    python: 'def minimumRecolors(blocks, k):\n    pass\n',
  },
  visibleTests: [
    { args: ['WBBWWBBWBW', 7], expected: 3 },
    { args: ['WBWBBBW', 2], expected: 0 },
    { args: ['BBBBB', 3], expected: 0 },
  ],
  hiddenTests: [
    { args: ['W', 1], expected: 1 },
    { args: ['B', 1], expected: 0 },
    { args: ['WWWWW', 3], expected: 3 },
    { args: ['BWWB', 2], expected: 1 },
    { args: ['WBBB', 4], expected: 1 },
  ],
};
