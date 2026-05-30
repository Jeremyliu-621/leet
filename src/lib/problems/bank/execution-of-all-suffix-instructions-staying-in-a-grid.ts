import type { Problem } from '../types';

export const problem: Problem = {
  id: 'execution-of-all-suffix-instructions-staying-in-a-grid',
  title: 'Execution of All Suffix Instructions Staying in a Grid',
  difficulty: 'medium',
  tags: ['strings', 'simulation'],
  description: `There is an \`n x n\` grid, with the top-left cell at \`(0, 0)\` and the bottom-right cell at \`(n - 1, n - 1)\`. You are given the integer \`n\` and a **0-indexed** string \`s\` consisting of characters \`'L'\`, \`'R'\`, \`'U'\`, and \`'D'\`, each representing a move in the grid.

You are also given a **0-indexed** array \`startPos\` where \`startPos = [startRow, startCol]\` represents your initial position in the grid.

When executing the \`i\`th instruction starting from position \`startPos\`, you follow the instructions from index \`i\` to the end. Return an array \`answer\` of length \`m\` where \`answer[i]\` is the number of instructions you can execute if you **begin executing** from the \`i\`th instruction in \`s\`.`,
  constraints: [
    '`m == s.length`',
    '`1 <= n, m <= 500`',
    '`startPos.length == 2`',
    '`0 <= startPos[0], startPos[1] < n`',
    '`s` consists of `\'L\'`, `\'R\'`, `\'U\'`, and `\'D\'`.',
  ],
  examples: [
    {
      input: 'n = 3, startPos = [0,1], s = "RRDDLU"',
      output: '[1,5,4,3,1,0]',
      explanation: 'Starting from \'R\' (i=0): (0,1)→R→(0,2)→R out-of-bounds (col 3). 1 instruction.',
    },
    {
      input: 'n = 2, startPos = [1,1], s = "LDUDR"',
      output: '[1,0,2,0,0]',
      explanation: 'Starting from \'L\' (i=0): (1,1)→L→(1,0)→D out-of-bounds (row 2). 1 instruction.',
    },
  ],
  hints: [
    'For each starting index i, simulate executing s[i..m-1] from startPos.',
    'Stop as soon as a move takes you outside the grid (row < 0, row >= n, col < 0, col >= n).',
    'This O(m²) simulation is feasible for m ≤ 500.',
  ],
  functionName: 'executeInstructions',
  params: ['n', 'startPos', 's'],
  starterCode: {
    javascript: `function executeInstructions(n, startPos, s) {

}`,
    typescript: `function executeInstructions(n: number, startPos: number[], s: string): number[] {

}`,
    python: `def executeInstructions(n, startPos, s):
    pass`,
  },
  visibleTests: [
    { args: [3, [0, 1], 'RRDDLU'], expected: [1, 5, 4, 3, 1, 0] },
    { args: [2, [1, 1], 'LDUDR'], expected: [1, 0, 2, 0, 0] },
  ],
  hiddenTests: [
    { args: [1, [0, 0], 'LRUD'], expected: [0, 0, 0, 0] },
    { args: [3, [1, 1], 'DD'], expected: [1, 1] },
    { args: [5, [2, 2], 'LLLLL'], expected: [2, 2, 2, 2, 1] },
    { args: [3, [0, 0], 'RR'], expected: [2, 1] },
    { args: [4, [2, 2], 'UDLR'], expected: [4, 3, 2, 1] },
  ],
};
