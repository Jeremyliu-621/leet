import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-extra-white-tiles-after-placing-carpets',
  title: 'Minimum Extra White Tiles After Placing Carpets',
  difficulty: 'hard',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given a **0-indexed binary** string \`floor\` of length \`n\`, where \`floor[i]\` is \`'1'\` if the \`i\`-th tile is **white** and \`'0'\` if it is already **covered**.

You are also given \`numCarpets\` carpets, each of length \`carpetLen\`. You may place each carpet at any position, and carpets may overlap.

Return the **minimum number of white tiles still visible** after optimally placing all carpets.`,
  constraints: [
    '1 <= numCarpets <= floor.length',
    '1 <= carpetLen <= floor.length',
    'floor.length == n',
    '1 <= n <= 1000',
    'floor[i] is either \'0\' or \'1\'.',
  ],
  examples: [
    {
      input: 'floor = "10110101", numCarpets = 2, carpetLen = 2',
      output: '2',
      explanation: 'Placing carpets at positions [2,3] and [5,6] covers 3 white tiles. The remaining whites at position 0 and 7 are uncovered (2 total).',
    },
    {
      input: 'floor = "11111", numCarpets = 2, carpetLen = 3',
      output: '0',
      explanation: 'Two overlapping carpets of length 3 can cover all 5 white tiles (e.g., positions [0,2] and [2,4]).',
    },
    {
      input: 'floor = "10110", numCarpets = 1, carpetLen = 2',
      output: '1',
      explanation: 'Placing the carpet at [2,3] covers both whites there. Only the white at position 0 remains.',
    },
  ],
  hints: [
    'Level 1: Define dp[i][j] = minimum extra white tiles in floor[0..i−1] using j carpets. For each tile i, either don\'t place a carpet ending there, or place one.',
    'Level 2: Transition: dp[i][j] = min(dp[i−1][j] + (floor[i−1]==\"1\" ? 1 : 0), dp[max(0, i−carpetLen)][j−1]).',
    'Level 3: The second option "places a carpet ending at tile i" and uses dp with j−1 carpets for everything before the carpet. Initialize dp[0][j] = 0 for all j. Compute row by row (outer loop over j from 1 to numCarpets, inner loop over i).',
  ],
  functionName: 'minimumWhiteTiles',
  params: ['floor', 'numCarpets', 'carpetLen'],
  starterCode: {
    javascript: `function minimumWhiteTiles(floor, numCarpets, carpetLen) {
  const n = floor.length;
  const dp = Array.from({length: n + 1}, () => new Array(numCarpets + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= numCarpets; j++) {
      dp[i][j] = dp[i-1][j] + (floor[i-1] === '1' ? 1 : 0);
      if (j > 0) dp[i][j] = Math.min(dp[i][j], dp[Math.max(0, i - carpetLen)][j-1]);
    }
  }
  return dp[n][numCarpets];
}`,
    typescript: `function minimumWhiteTiles(floor: string, numCarpets: number, carpetLen: number): number {
  const n = floor.length;
  const dp: number[][] = Array.from({length: n + 1}, () => new Array(numCarpets + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= numCarpets; j++) {
      dp[i]![j] = dp[i-1]![j]! + (floor[i-1] === '1' ? 1 : 0);
      if (j > 0) dp[i]![j] = Math.min(dp[i]![j]!, dp[Math.max(0, i - carpetLen)]![j-1]!);
    }
  }
  return dp[n]![numCarpets]!;
}`,
    python: `def minimumWhiteTiles(floor, numCarpets, carpetLen):
    n = len(floor)
    dp = [[0] * (numCarpets + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for j in range(numCarpets + 1):
            dp[i][j] = dp[i-1][j] + (1 if floor[i-1] == '1' else 0)
            if j > 0: dp[i][j] = min(dp[i][j], dp[max(0, i - carpetLen)][j-1])
    return dp[n][numCarpets]`,
  },
  visibleTests: [
    { args: ['10110101', 2, 2], expected: 2 },
    { args: ['11111', 2, 3], expected: 0 },
    { args: ['10110', 1, 2], expected: 1 },
  ],
  hiddenTests: [
    { args: ['0', 1, 1], expected: 0 },
    { args: ['1', 1, 1], expected: 0 },
    { args: ['1', 0, 1], expected: 1 },
    { args: ['10110', 2, 2], expected: 0 },
    { args: ['11011', 1, 2], expected: 2 },
    { args: ['111', 1, 1], expected: 2 },
    { args: ['111', 0, 1], expected: 3 },
    { args: ['10101010', 3, 1], expected: 1 },
    { args: ['000000', 2, 3], expected: 0 },
  ],
};
