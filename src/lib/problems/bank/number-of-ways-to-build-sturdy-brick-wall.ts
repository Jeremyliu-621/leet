import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-build-sturdy-brick-wall',
  title: 'Number of Ways to Build Sturdy Brick Wall',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'bit-manipulation'],
  description: `You are given integers \`height\` and \`width\`, and an array \`bricks\` of brick widths. You want to build a wall of \`height\` rows and \`width\` units wide. Each row must be filled entirely by bricks from \`bricks\` (you may reuse any brick as many times as needed), with bricks laid end-to-end left to right summing to exactly \`width\`.

A wall is **sturdy** if no two adjacent rows share an **internal crack** position. An internal crack occurs where two bricks meet (i.e., at positions 1, 2, ..., width-1 within the row).

Return the number of ways to build a sturdy wall of \`height\` rows, modulo \`10^9 + 7\`.

Two walls are considered **different** if they differ in any row.`,
  constraints: [
    '1 <= height <= 100',
    '1 <= width <= 10',
    '1 <= bricks.length <= 10',
    '1 <= bricks[i] <= 10',
    'All values in bricks are unique',
  ],
  examples: [
    {
      input: 'height = 2, width = 3, bricks = [1, 2]',
      output: '2',
      explanation:
        'Valid single rows for width=3: [1,1,1] with cracks {1,2}, [1,2] with cracks {1}, [2,1] with cracks {2}. Row [1,2] and row [2,1] share no cracks, so they can be adjacent. Row [1,1,1] shares a crack with both others. So the only compatible 2-row walls are ([1,2],[2,1]) and ([2,1],[1,2]) — 2 ways.',
    },
    {
      input: 'height = 1, width = 1, bricks = [1]',
      output: '1',
      explanation: 'Only one way: a single row of one brick.',
    },
  ],
  hints: [
    'Level 1: First enumerate all valid row configurations — sequences of bricks that sum to width. Represent each configuration by its set of internal crack positions (not including 0 and width). Then count sequences of height rows where no two adjacent rows share a crack.',
    'Level 2: Build a compatibility graph: row i is compatible with row j if their crack-position sets are disjoint. Then use DP: dp[i] = number of walls where the current top row uses pattern i. For each new row j, dp_new[j] = sum of dp[i] for all i compatible with j.',
    'Level 3: With width <= 10, crack positions can be encoded as a bitmask (bits 1..width-1). Two rows are incompatible iff (mask1 & mask2) != 0. This allows fast compatibility checks. There are at most 2^(width-1) possible row masks, so the DP is efficient.',
  ],
  functionName: 'buildWall',
  params: ['height', 'width', 'bricks'],
  starterCode: {
    javascript: `function buildWall(height, width, bricks) {
  // return the number of ways to build a sturdy wall modulo 10^9 + 7
}`,
    typescript: `function buildWall(height: number, width: number, bricks: number[]): number {
  // return the number of ways to build a sturdy wall modulo 10^9 + 7
}`,
    python: `def buildWall(height: int, width: int, bricks: list[int]) -> int:
    # return the number of ways to build a sturdy wall modulo 10**9 + 7
    pass`,
  },
  visibleTests: [
    { args: [2, 3, [1, 2]], expected: 2 },
    { args: [1, 1, [1]], expected: 1 },
    { args: [3, 5, [1, 2, 3]], expected: 78 },
  ],
  hiddenTests: [
    { args: [3, 3, [1, 2]], expected: 2 },
    { args: [5, 3, [1, 2]], expected: 2 },
    { args: [2, 6, [2, 3]], expected: 2 },
    { args: [2, 5, [1, 2]], expected: 2 },
    { args: [4, 6, [1, 2, 3]], expected: 634 },
    { args: [2, 7, [1, 2, 3]], expected: 80 },
    { args: [1, 3, [1, 2]], expected: 3 },
  ],
};
