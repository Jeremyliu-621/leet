import type { Problem } from '../types';

export const problem: Problem = {
  id: 'champagne-tower',
  title: 'Champagne Tower',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `We stack glasses in a pyramid, where the **first** row has \`1\` glass, the **second** row has \`2\` glasses, and so on until the 100th row with 100 glasses.

We pour some number of cups of champagne into the **top** glass. When a glass overflows, half of the excess goes to the glass immediately to its lower-left and half goes to the glass immediately to its lower-right.

Given \`poured\` cups poured at the top, and the 0-indexed \`query_row\` and \`query_glass\` (both 0-indexed), return how full the glass is. Values should be between 0 and 1, inclusive.`,
  constraints: [
    '0 <= poured <= 10^9',
    '0 <= query_glass <= query_row < 100',
  ],
  examples: [
    {
      input: 'poured = 1, query_row = 1, query_glass = 1',
      output: '0.0',
      explanation: 'We poured 1 cup into the top glass. Since there is only 1 glass (row 0), nothing overflows. The glass at row 1, position 1 is empty.',
    },
    {
      input: 'poured = 2, query_row = 1, query_glass = 1',
      output: '0.5',
      explanation: 'We poured 2 cups. The top glass fills (1 cup) and overflows 1 cup — 0.5 to the left and 0.5 to the right. Glass (1,1) gets 0.5.',
    },
    {
      input: 'poured = 100000009, query_row = 33, query_glass = 17',
      output: '1.0',
    },
  ],
  hints: [
    'Level 1: Simulate the flow: build a 2D array where `tower[r][g]` tracks the amount in each glass. Start with `poured` in `tower[0][0]`. For each glass, if it overflows, distribute excess equally to (r+1, g) and (r+1, g+1).',
    'Level 2: Process rows from top to bottom. For each glass at (r, g), if `tower[r][g] > 1`, compute excess = `tower[r][g] - 1`, set `tower[r][g] = 1`, then add `excess/2` to both neighbors in the next row.',
    'Level 3: `const tower = Array.from({length:101},()=>new Array(101).fill(0)); tower[0][0]=poured; for(let r=0;r<=query_row;r++) for(let g=0;g<=r;g++) if(tower[r][g]>1){const e=(tower[r][g]-1)/2;tower[r][g]=1;tower[r+1][g]+=e;tower[r+1][g+1]+=e;} return Math.min(1,tower[query_row][query_glass]);`',
  ],
  functionName: 'champagneTower',
  params: ['poured', 'query_row', 'query_glass'],
  starterCode: {
    javascript: 'function champagneTower(poured, query_row, query_glass) {\n  // your code here\n}\n',
    typescript: "function champagneTower(poured: number, query_row: number, query_glass: number): number {\n  // your code here\n}",

    python: 'def champagneTower(poured, query_row, query_glass):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [1, 1, 1], expected: 0.0 },
    { args: [2, 1, 1], expected: 0.5 },
    { args: [100000009, 33, 17], expected: 1.0 },
  ],
  hiddenTests: [
    { args: [0, 0, 0], expected: 0.0 },
    { args: [1, 0, 0], expected: 1.0 },
    { args: [2, 0, 0], expected: 1.0 },
    { args: [3, 1, 0], expected: 1.0 },
    { args: [3, 1, 1], expected: 1.0 },
    { args: [4, 2, 0], expected: 0.25 },
    { args: [4, 2, 1], expected: 0.5 },
  ],
};
