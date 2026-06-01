import type { Problem } from '../types';

export const problem: Problem = {
  id: 'brick-wall',
  title: 'Brick Wall',
  difficulty: 'medium',
  tags: ['hash-map'],
  description: `There is a rectangular brick wall in front of you with \`n\` rows of bricks. The bricks have the same height but different widths. You want to draw a vertical line from the top to the bottom of the wall such that the line crosses the **fewest** bricks.

The line is not allowed to pass along one of the two vertical edges of the wall.

Given the 2D array \`wall\` where \`wall[i]\` is a list of brick widths in the i-th row from left to right, return the minimum number of crossed bricks after drawing such a vertical line.`,
  constraints: [
    'n == wall.length',
    '1 <= n <= 10^4',
    '1 <= wall[i].length <= 10^4',
    'sum(wall[i]) is the same for each row i',
    '1 <= wall[i][j] <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]',
      output: '2',
      explanation: 'A vertical line through position 4 crosses only 2 bricks.',
    },
    {
      input: 'wall = [[1],[1],[1]]',
      output: '3',
      explanation: 'Any vertical line must cross all 3 bricks.',
    },
  ],
  hints: [
    'The best line passes through as many edges (gaps between bricks) as possible.',
    'Count edge positions using a hash map: for each row, accumulate widths and record each intermediate sum (excluding the last).',
    'Answer = total rows − max edge count.',
  ],
  functionName: 'leastBricks',
  params: ['wall'],
  starterCode: {
    javascript: `function leastBricks(wall) {
  const edgeCounts = new Map();
  for (const row of wall) {
    let pos = 0;
    for (let i = 0; i < row.length - 1; i++) {
      pos += row[i];
      edgeCounts.set(pos, (edgeCounts.get(pos) ?? 0) + 1);
    }
  }
  const maxEdges = edgeCounts.size ? Math.max(...edgeCounts.values()) : 0;
  return wall.length - maxEdges;
}`,
    typescript: `function leastBricks(wall: number[][]): number {
  const edgeCounts = new Map<number, number>();
  for (const row of wall) {
    let pos = 0;
    for (let i = 0; i < row.length - 1; i++) {
      pos += row[i]!;
      edgeCounts.set(pos, (edgeCounts.get(pos) ?? 0) + 1);
    }
  }
  const maxEdges = edgeCounts.size ? Math.max(...edgeCounts.values()) : 0;
  return wall.length - maxEdges;
}`,
    python: `def leastBricks(wall):
    wall = [list(row.to_py()) if hasattr(row, 'to_py') else list(row) for row in (wall.to_py() if hasattr(wall, 'to_py') else wall)]
    from collections import defaultdict
    counts = defaultdict(int)
    for row in wall:
        pos = 0
        for w in row[:-1]:
            pos += w
            counts[pos] += 1
    max_edges = max(counts.values()) if counts else 0
    return len(wall) - max_edges`,
  },
  visibleTests: [
    {
      args: [[[1, 2, 2, 1], [3, 1, 2], [1, 3, 2], [2, 4], [3, 1, 2], [1, 3, 1, 1]]],
      expected: 2,
    },
    { args: [[[1], [1], [1]]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[[1, 2], [1, 2]]], expected: 0 },
    { args: [[[2], [2], [2]]], expected: 3 },
    { args: [[[1, 1], [1, 1]]], expected: 0 },
    { args: [[[3, 1], [2, 2]]], expected: 1 },
  ],
};
