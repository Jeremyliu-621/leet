import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-recolors-to-get-k-consecutive-black-blocks',
  title: 'Minimum Recolors to Get K Consecutive Black Blocks',
  difficulty: 'easy',
  tags: ['strings', 'sliding-window'],
  description: `You are given a **0-indexed** string \`blocks\` of length \`n\`, where \`blocks[i]\` is either \`'W'\` or \`'B'\`, representing the color of the \`i\`-th block. The characters \`'W'\` and \`'B'\` denote **white** and **black** blocks, respectively.

You are also given an integer \`k\`, which is the desired number of **consecutive** black blocks.

In one operation, you can **recolor** a white block such that it becomes a black block.

Return the **minimum** number of operations needed such that there is at least one occurrence of \`k\` consecutive black blocks.`,
  constraints: [
    'n == blocks.length',
    '1 <= n <= 100',
    'blocks[i] is either \'W\' or \'B\'.',
    '1 <= k <= n',
  ],
  examples: [
    {
      input: 'blocks = "WBBWWBBWBW", k = 7',
      output: '3',
      explanation: 'Minimum white blocks in any window of size 7 is 3.',
    },
    {
      input: 'blocks = "WBWBBBW", k = 2',
      output: '0',
      explanation: 'There are already 2 consecutive B\'s at indices 4-5. 0 operations needed.',
    },
  ],
  hints: [
    'Use a sliding window of size k. Count white blocks in the window. The answer is the minimum count across all windows.',
    'Initialize the window count for the first k characters. Then slide: add the new right character and remove the old left character.',
    'You need at least `min(whites in window)` recolors. Track the minimum across all windows of size k.',
  ],
  functionName: 'minimumRecolors',
  params: ['blocks', 'k'],
  starterCode: {
    javascript: `function minimumRecolors(blocks, k) {

}`,
    typescript: "function minimumRecolors(blocks: string, k: number): number {\n\n}",

    python: `def minimumRecolors(blocks, k):
    pass`,
  },
  visibleTests: [
    { args: ['WBBWWBBWBW', 7], expected: 3 },
    { args: ['WBWBBBW', 2], expected: 0 },
  ],
  hiddenTests: [
    { args: ['B', 1], expected: 0 },
    { args: ['W', 1], expected: 1 },
    { args: ['BWWB', 2], expected: 1 },
    { args: ['WWWW', 2], expected: 2 },
  ],
};
