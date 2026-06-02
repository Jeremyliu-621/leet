import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-white-tiles-covered-by-carpet',
  title: 'Maximum White Tiles Covered by Carpet',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a 2D integer array \`tiles\` where \`tiles[i] = [li, ri]\` represents that every tile \`j\` in the range \`li <= j <= ri\` is a white tile. The tiles are **non-overlapping**.

You are also given an integer \`carpetLen\`, the length of a carpet.

Return the **maximum** number of white tiles that can be covered by placing the carpet at any integer position.

**Example 1:**
\`\`\`
Input: tiles = [[1,5],[10,11],[12,18],[20,25],[30,32]], carpetLen = 10
Output: 9
\`\`\`

**Example 2:**
\`\`\`
Input: tiles = [[10,11],[1,1]], carpetLen = 2
Output: 2
\`\`\`

**Constraints:**
- \`1 <= tiles.length <= 5 × 10^4\`
- \`tiles[i].length == 2\`
- \`1 <= li <= ri <= 10^9\`
- \`1 <= carpetLen <= 10^9\`
- Tiles are non-overlapping.`,
  constraints: [
    '1 <= tiles.length <= 5 * 10^4',
    '1 <= li <= ri <= 10^9',
    '1 <= carpetLen <= 10^9',
    'Tiles are non-overlapping.',
  ],
  examples: [
    { input: 'tiles = [[1,5],[10,11],[12,18],[20,25],[30,32]], carpetLen = 10', output: '9' },
    { input: 'tiles = [[10,11],[1,1]], carpetLen = 2', output: '2' },
  ],
  hints: [
    'Sort tiles by left endpoint. The optimal carpet placement starts at the left endpoint of some tile segment.',
    'Build prefix sums of tile lengths. For each tile i as the carpet start, binary search for the rightmost tile j whose left endpoint ≤ carpetStart + carpetLen - 1.',
    'Covered tiles = prefix[j] - prefix[i] (full tiles before j) + min(carpetEnd - tiles[j].left + 1, tiles[j].length) (partial last tile).',
  ],
  functionName: 'maximumWhiteTiles',
  params: ['tiles', 'carpetLen'],
  starterCode: {
    javascript: `function maximumWhiteTiles(tiles, carpetLen) {
  tiles.sort((a, b) => a[0] - b[0]);
  const n = tiles.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i+1] = prefix[i] + tiles[i][1] - tiles[i][0] + 1;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const end = tiles[i][0] + carpetLen - 1;
    let lo = i, hi = n - 1, j = i;
    while (lo <= hi) { const mid = (lo+hi)>>1; if (tiles[mid][0] <= end) { j = mid; lo = mid+1; } else hi = mid-1; }
    ans = Math.max(ans, (prefix[j] - prefix[i]) + Math.min(tiles[j][1] - tiles[j][0] + 1, end - tiles[j][0] + 1));
  }
  return ans;
}`,
    typescript: `function maximumWhiteTiles(tiles: number[][], carpetLen: number): number {
  tiles.sort((a, b) => a[0]! - b[0]!);
  const n = tiles.length;
  const prefix = new Array(n + 1).fill(0) as number[];
  for (let i = 0; i < n; i++) prefix[i+1] = prefix[i]! + tiles[i]![1]! - tiles[i]![0]! + 1;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const end = tiles[i]![0]! + carpetLen - 1;
    let lo = i, hi = n - 1, j = i;
    while (lo <= hi) { const mid = (lo+hi)>>1; if (tiles[mid]![0]! <= end) { j = mid; lo = mid+1; } else hi = mid-1; }
    ans = Math.max(ans, (prefix[j]! - prefix[i]!) + Math.min(tiles[j]![1]! - tiles[j]![0]! + 1, end - tiles[j]![0]! + 1));
  }
  return ans;
}`,
    python: `def maximumWhiteTiles(tiles, carpetLen):
    if hasattr(tiles, 'to_py'): tiles = tiles.to_py()
    if hasattr(carpetLen, 'to_py'): carpetLen = carpetLen.to_py()
    tiles = sorted([int(l), int(r)] for l, r in ([t.to_py() if hasattr(t,'to_py') else t for t in tiles]))
    carpetLen = int(carpetLen); n = len(tiles)
    prefix = [0] * (n + 1)
    for i in range(n): prefix[i+1] = prefix[i] + tiles[i][1] - tiles[i][0] + 1
    import bisect
    ans = 0
    for i in range(n):
        end = tiles[i][0] + carpetLen - 1
        j = bisect.bisect_right(tiles, [end, float('inf')]) - 1
        if j < i: continue
        ans = max(ans, (prefix[j]-prefix[i]) + min(tiles[j][1]-tiles[j][0]+1, end-tiles[j][0]+1))
    return ans`,
  },
  visibleTests: [
    { args: [[[1, 5], [10, 11], [12, 18], [20, 25], [30, 32]], 10], expected: 9 },
    { args: [[[10, 11], [1, 1]], 2], expected: 2 },
    { args: [[[1, 10]], 5], expected: 5 },
  ],
  hiddenTests: [
    { args: [[[1, 2], [4, 5], [7, 8]], 5], expected: 4 },
    { args: [[[1, 100]], 50], expected: 50 },
    { args: [[[1, 1], [3, 3], [5, 5]], 1], expected: 1 },
    { args: [[[1, 5], [7, 10]], 4], expected: 4 },
  ],
};
