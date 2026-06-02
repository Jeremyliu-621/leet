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
    javascript: `function maxHeight(cuboids) {
  for (const c of cuboids) c.sort((a, b) => a - b);
  cuboids.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] !== b[1] ? a[1] - b[1] : a[2] - b[2]);
  const n = cuboids.length;
  const dp = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    dp[i] = cuboids[i][2];
    for (let j = 0; j < i; j++) {
      if (cuboids[j][0] <= cuboids[i][0] && cuboids[j][1] <= cuboids[i][1] && cuboids[j][2] <= cuboids[i][2])
        dp[i] = Math.max(dp[i], dp[j] + cuboids[i][2]);
    }
  }
  return Math.max(...dp);
}`,
    typescript: `function maxHeight(cuboids: number[][]): number {
  for (const c of cuboids) c.sort((a, b) => a - b);
  cuboids.sort((a, b) => a[0]! !== b[0]! ? a[0]! - b[0]! : a[1]! !== b[1]! ? a[1]! - b[1]! : a[2]! - b[2]!);
  const n = cuboids.length;
  const dp = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    dp[i] = cuboids[i]![2]!;
    for (let j = 0; j < i; j++) {
      if (cuboids[j]![0]! <= cuboids[i]![0]! && cuboids[j]![1]! <= cuboids[i]![1]! && cuboids[j]![2]! <= cuboids[i]![2]!)
        dp[i] = Math.max(dp[i], dp[j] + cuboids[i]![2]!);
    }
  }
  return Math.max(...dp);
}`,
    python: `def maxHeight(cuboids):
    if hasattr(cuboids, 'to_py'): cuboids = cuboids.to_py()
    cuboids = [sorted(r.to_py() if hasattr(r, 'to_py') else list(r)) for r in cuboids]
    cuboids.sort()
    n = len(cuboids)
    dp = [0] * n
    for i in range(n):
        dp[i] = cuboids[i][2]
        for j in range(i):
            if all(cuboids[j][d] <= cuboids[i][d] for d in range(3)):
                dp[i] = max(dp[i], dp[j] + cuboids[i][2])
    return max(dp)`,
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
