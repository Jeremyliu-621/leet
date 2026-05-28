import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-recolors-to-get-k-consecutive-black',
  title: 'Minimum Recolors to Get K Consecutive Black Blocks',
  difficulty: 'easy',
  tags: ['sliding-window', 'strings'],
  description: `You are given a **0-indexed** string \`blocks\` of length \`n\`, where \`blocks[i]\` is either \`'W'\` or \`'B'\`, representing white and black blocks respectively.

You are also given an integer \`k\`, which is the desired number of **consecutive** black blocks.

In one operation, you can **recolor** a white block such that it becomes a black block.

Return the **minimum** number of operations needed such that there is at least one occurrence of \`k\` consecutive black blocks.`,
  constraints: [
    '`n == blocks.length`',
    '`1 <= n <= 100`',
    '`blocks[i]` is either `\'W\'` or `\'B\'`.',
    '`1 <= k <= n`',
  ],
  examples: [
    {
      input: 'blocks = "WBBWWBBWBW", k = 7',
      output: '3',
      explanation: 'In the window "BBWWBBW", there are 4 black blocks. Recolor 3 white blocks.',
    },
    {
      input: 'blocks = "WBWBBBW", k = 2',
      output: '0',
      explanation: '"BB" already exists at positions 4-5.',
    },
  ],
  hints: [
    'Use a sliding window of size k. For each window, count white blocks (the number of recolors needed).',
    'Return the minimum count across all windows.',
    `\`\`\`js
function minimumRecolors(blocks, k) {
  let whites = 0;
  for (let i = 0; i < k; i++) if (blocks[i]==="W") whites++;
  let best = whites;
  for (let i = k; i < blocks.length; i++) {
    if (blocks[i]==="W") whites++;
    if (blocks[i-k]==="W") whites--;
    best = Math.min(best, whites);
  }
  return best;
}\`\`\``,
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
    { args: ['BWWWBB', 6], expected: 3 },
  ],
  hiddenTests: [
    { args: ['W', 1], expected: 1 },
    { args: ['B', 1], expected: 0 },
    { args: ['BBBBB', 3], expected: 0 },
    { args: ['WWWWW', 3], expected: 3 },
    { args: ['BWBWBWBW', 4], expected: 2 },
  ],
};
