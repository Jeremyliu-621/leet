import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-white-tiles-after-covering-with-carpets',
  title: 'Minimum White Tiles After Covering With Carpets',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `You are given a **0-indexed binary string** \`floor\`, which represents the colors of tiles on a floor:
- \`floor[i] = '0'\` denotes a **black** tile.
- \`floor[i] = '1'\` denotes a **white** tile.

You are also given \`numCarpets\` and \`carpetLen\`. You have \`numCarpets\` **black** carpets, each of length \`carpetLen\` tiles. Cover the tiles with the given carpets such that the number of **white** tiles still visible is **minimized**. Carpets may overlap each other.

Return the **minimum** number of white tiles still visible.`,
  constraints: [
    '`1 <= carpetLen <= floor.length <= 1000`',
    '`1 <= numCarpets <= 1000`',
    '`floor[i]` is either `\'0\'` or `\'1\'`',
  ],
  examples: [
    {
      input: 'floor = "10110101", numCarpets = 2, carpetLen = 2',
      output: '2',
      explanation: 'Place carpets at [0,1] and [4,5]: cover positions 0-1 (1 white) and 4-5 (1 white). 2 white tiles at positions 2 and 7 remain uncovered.',
    },
    {
      input: 'floor = "11111", numCarpets = 2, carpetLen = 3',
      output: '0',
      explanation: 'Place carpets at [0,2] and [2,4] to cover all 5 white tiles.',
    },
    {
      input: 'floor = "10", numCarpets = 1, carpetLen = 1',
      output: '0',
      explanation: 'Place the carpet on position 0, covering the single white tile.',
    },
  ],
  hints: [
    'Define dp[j][i] as the minimum white tiles in floor[0..i-1] using at most j carpets. The answer is dp[numCarpets][n].',
    'For dp[j][i], either: (a) don\'t end a carpet at position i-1: dp[j][i] = dp[j][i-1] + (floor[i-1] === \'1\' ? 1 : 0); or (b) end a carpet at position i-1 covering [i-carpetLen, i-1]: dp[j][i] = dp[j-1][max(0, i-carpetLen)]. Take the min of the two options.',
    '```js\nfunction minimumWhiteTiles(floor, numCarpets, carpetLen) {\n  const n = floor.length;\n  const dp = Array.from({length: numCarpets + 1}, () => new Array(n + 1).fill(0));\n  for (let i = 1; i <= n; i++) dp[0][i] = dp[0][i-1] + (floor[i-1] === \'1\' ? 1 : 0);\n  for (let j = 1; j <= numCarpets; j++) {\n    for (let i = 1; i <= n; i++) {\n      dp[j][i] = Math.min(\n        dp[j][i-1] + (floor[i-1] === \'1\' ? 1 : 0),\n        dp[j-1][Math.max(0, i - carpetLen)]\n      );\n    }\n  }\n  return dp[numCarpets][n];\n}\n```',
  ],
  functionName: 'minimumWhiteTiles',
  params: ['floor', 'numCarpets', 'carpetLen'],
  starterCode: {
    javascript: `function minimumWhiteTiles(floor, numCarpets, carpetLen) {

}`,
    typescript: `function minimumWhiteTiles(floor: string, numCarpets: number, carpetLen: number): number {

}`,
    python: `def minimumWhiteTiles(floor: str, numCarpets: int, carpetLen: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: ['10110101', 2, 2], expected: 2 },
    { args: ['11111', 2, 3], expected: 0 },
    { args: ['10', 1, 1], expected: 0 },
  ],
  hiddenTests: [
    { args: ['0', 1, 1], expected: 0 },
    { args: ['1', 0, 1], expected: 1 },
    { args: ['111111', 2, 2], expected: 2 },
    { args: ['01101001', 1, 3], expected: 2 },
  ],
};
