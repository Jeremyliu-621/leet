import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-height-by-stacking-cuboids',
  title: 'Maximum Height by Stacking Cuboids',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `Given \`n\` cuboids where \`cuboids[i] = [widthi, lengthi, heighti]\`. You can place cuboid \`i\` on top of cuboid \`j\` if \`widthj <= widthi\`, \`lengthj <= lengthi\`, and \`heightj <= heighti\`.

You can **rearrange** the dimensions of a cuboid. Return the **maximum height** of the stacked cuboids.

**Key insight:** Sort each cuboid's dimensions in non-decreasing order. Then sorting all cuboids enables a **longest increasing subsequence**-style DP where all three dimensions are compared simultaneously.`,
  constraints: [
    'n == cuboids.length',
    '1 <= n <= 100',
    '1 <= widthi, lengthi, heighti <= 100',
  ],
  examples: [
    {
      input: 'cuboids = [[50,45,20],[95,37,53],[45,23,12]]',
      output: '190',
      explanation: 'Stack all three: heights 20+53+117=190 after optimal rotation.',
    },
    {
      input: 'cuboids = [[38,25,45],[76,35,3]]',
      output: '76',
      explanation: 'Second cuboid alone gives height 76.',
    },
    {
      input: 'cuboids = [[7,11,17],[7,17,11],[11,7,17],[11,17,7],[17,7,11],[17,11,7]]',
      output: '102',
    },
  ],
  hints: [
    'Sort each cuboid dimensions in non-decreasing order so the largest dimension is always the "height".',
    'Sort all cuboids. Now dp[i] = max height with cuboid i on top.',
    'dp[i] = cuboid[i][2] + max(dp[j]) for all j < i where cuboid[j] fits under cuboid[i] in all 3 dimensions.',
  ],
  functionName: 'maxHeight',
  params: ['cuboids'],
  starterCode: {
    javascript: 'function maxHeight(cuboids) {\n\n}\n',
    typescript: "function maxHeight(cuboids: number[][]): number {\n\n}",

    python: 'def maxHeight(cuboids: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[[50,45,20],[95,37,53],[45,23,12]]], expected: 190 },
    { args: [[[38,25,45],[76,35,3]]], expected: 76 },
    { args: [[[7,11,17],[7,17,11],[11,7,17],[11,17,7],[17,7,11],[17,11,7]]], expected: 102 },
  ],
  hiddenTests: [
    { args: [[[1,1,1]]], expected: 1 },
    { args: [[[1,2,3],[2,3,4]]], expected: 7 },
    { args: [[[1,1,1],[2,2,2],[3,3,3]]], expected: 6 },
    { args: [[[5,1,1],[1,5,1],[1,1,5]]], expected: 15 },
  ],
};
