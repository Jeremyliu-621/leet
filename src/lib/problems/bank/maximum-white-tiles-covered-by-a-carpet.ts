import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-white-tiles-covered-by-a-carpet',
  title: 'Maximum White Tiles Covered by a Carpet',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a 2D integer array \`tiles\` where \`tiles[i] = [li, ri]\` represents that every tile \`j\` in the range \`li <= j <= ri\` is colored white.

You are also given an integer \`carpetLen\`, the length of a single carpet you can place **anywhere**.

Return the **maximum** number of white tiles covered by the carpet.`,
  constraints: [
    '1 <= tiles.length <= 5 * 10^4',
    'tiles[i].length == 2',
    '1 <= li <= ri <= 10^9',
    '1 <= carpetLen <= 10^9',
    'The tiles are non-overlapping.',
  ],
  examples: [
    {
      input: 'tiles = [[1,5],[10,11],[12,18],[20,25],[30,32]], carpetLen = 10',
      output: '9',
      explanation: 'Place the carpet at [10,19]. Tiles [10,11] give 2, [12,18] give 7, total = 9.',
    },
    {
      input: 'tiles = [[10,11],[1,1]], carpetLen = 2',
      output: '2',
      explanation: 'Place at [10,11], covering both tiles completely.',
    },
  ],
  hints: [
    'Sort tiles by left endpoint. The optimal carpet always starts at the left edge of some tile.',
    'Build a prefix sum array: prefix[i] = total white tiles in tiles[0..i-1].',
    'For carpet starting at tiles[i][0] with right edge = tiles[i][0] + carpetLen - 1: binary search for the rightmost tile j with tiles[j][0] <= rightEdge. Coverage = prefix[j] - prefix[i] + min(tiles[j][1], rightEdge) - tiles[j][0] + 1.',
  ],
  functionName: 'maximumWhiteTiles',
  params: ['tiles', 'carpetLen'],
  starterCode: {
    javascript: `function maximumWhiteTiles(tiles, carpetLen) {
  tiles.sort((a, b) => a[0] - b[0]);
  const n = tiles.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + tiles[i][1] - tiles[i][0] + 1;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const rightEdge = tiles[i][0] + carpetLen - 1;
    let lo = i, hi = n - 1, j = i;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (tiles[mid][0] <= rightEdge) { j = mid; lo = mid + 1; }
      else hi = mid - 1;
    }
    const covered = prefix[j] - prefix[i] + Math.min(tiles[j][1], rightEdge) - tiles[j][0] + 1;
    ans = Math.max(ans, covered);
  }
  return ans;
}`,
    typescript: `function maximumWhiteTiles(tiles: number[][], carpetLen: number): number {
  tiles.sort((a, b) => a[0]! - b[0]!);
  const n = tiles.length;
  const prefix = new Array<number>(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i]! + tiles[i]![1]! - tiles[i]![0]! + 1;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const rightEdge = tiles[i]![0]! + carpetLen - 1;
    let lo = i, hi = n - 1, j = i;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (tiles[mid]![0]! <= rightEdge) { j = mid; lo = mid + 1; }
      else hi = mid - 1;
    }
    const covered = prefix[j]! - prefix[i]! + Math.min(tiles[j]![1]!, rightEdge) - tiles[j]![0]! + 1;
    ans = Math.max(ans, covered);
  }
  return ans;
}`,
    python: `def maximumWhiteTiles(tiles: list[list[int]], carpetLen: int) -> int:
    if hasattr(tiles, 'to_py'): tiles = tiles.to_py()
    tiles = [list(t) for t in tiles]
    tiles.sort(key=lambda t: t[0])
    n = len(tiles)
    prefix = [0] * (n + 1)
    for i in range(n):
        prefix[i + 1] = prefix[i] + tiles[i][1] - tiles[i][0] + 1
    ans = 0
    for i in range(n):
        right_edge = tiles[i][0] + carpetLen - 1
        lo, hi, j = i, n - 1, i
        while lo <= hi:
            mid = (lo + hi) // 2
            if tiles[mid][0] <= right_edge:
                j = mid; lo = mid + 1
            else:
                hi = mid - 1
        covered = prefix[j] - prefix[i] + min(tiles[j][1], right_edge) - tiles[j][0] + 1
        ans = max(ans, covered)
    return ans`,
  },
  visibleTests: [
    { args: [[[1, 5], [10, 11], [12, 18], [20, 25], [30, 32]], 10], expected: 9 },
    { args: [[[10, 11], [1, 1]], 2], expected: 2 },
    { args: [[[1, 3], [5, 7], [9, 11]], 3], expected: 3 },
    { args: [[[1, 10]], 5], expected: 5 },
  ],
  hiddenTests: [
    { args: [[[1, 1]], 1], expected: 1 },
    { args: [[[1, 5]], 10], expected: 5 },
    { args: [[[1, 3], [5, 7]], 6], expected: 5 },
    { args: [[[1, 2], [4, 5], [7, 8]], 2], expected: 2 },
    { args: [[[1, 100]], 1], expected: 1 },
    { args: [[[1, 5], [7, 10], [12, 15]], 5], expected: 5 },
    { args: [[[2, 4], [6, 9], [11, 13]], 7], expected: 6 },
    { args: [[[1, 3], [5, 7], [9, 11], [13, 15]], 10], expected: 8 },
  ],
};
