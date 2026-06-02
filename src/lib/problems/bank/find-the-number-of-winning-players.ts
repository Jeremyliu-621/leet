import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-number-of-winning-players',
  title: 'Find the Number of Winning Players',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer \`n\` (the number of players, 0-indexed) and a 2D integer array \`pick\` where \`pick[i] = [x, y]\` means player \`x\` picked a ball of color \`y\`.

Player \`i\` wins if they have **strictly more than \`i\`** balls of a **single** color.

Return the number of players who win.`,
  constraints: [
    '1 <= n <= 10',
    '1 <= pick.length <= 100',
    'pick[i].length == 2',
    '0 <= pick[i][0] <= n - 1',
    '0 <= pick[i][1] <= 10',
  ],
  examples: [
    {
      input: 'n = 3, pick = [[0,0],[1,0],[1,0],[2,0],[2,0],[2,0]]',
      output: '3',
      explanation: 'Player 0 has 1 ball (>0 ✓), player 1 has 2 of color 0 (>1 ✓), player 2 has 3 of color 0 (>2 ✓).',
    },
    {
      input: 'n = 5, pick = [[1,1],[1,2],[1,3],[1,4]]',
      output: '0',
      explanation: 'Player 1 has 1 ball of each color, but needs >1 of any single color to win.',
    },
    {
      input: 'n = 2, pick = [[1,0],[1,0]]',
      output: '1',
      explanation: 'Player 1 has 2 balls of color 0, which is >1 ✓. Player 0 has no balls.',
    },
  ],
  hints: [
    'Build a count map: count[playerIdx][colorIdx] = how many balls of that color the player picked.',
    'Player i wins if any color count for player i is strictly greater than i.',
    'For each player, find the maximum single-color count and compare to the player index.',
  ],
  functionName: 'winningPlayerCount',
  params: ['n', 'pick'],
  starterCode: {
    javascript: `function winningPlayerCount(n, pick) {
  const count = Array.from({length: n}, () => new Map());
  for (const [x, y] of pick) count[x].set(y, (count[x].get(y) ?? 0) + 1);
  let wins = 0;
  for (let i = 0; i < n; i++) {
    if (Math.max(0, ...count[i].values()) > i) wins++;
  }
  return wins;
}`,
    typescript: `function winningPlayerCount(n: number, pick: number[][]): number {
  const count: Map<number, number>[] = Array.from({length: n}, () => new Map());
  for (const [x, y] of pick) count[x].set(y, (count[x].get(y) ?? 0) + 1);
  let wins = 0;
  for (let i = 0; i < n; i++) {
    if (Math.max(0, ...count[i].values()) > i) wins++;
  }
  return wins;
}`,
    python: `def winningPlayerCount(n, pick):
    from collections import defaultdict
    count = [defaultdict(int) for _ in range(n)]
    for x, y in pick: count[x][y] += 1
    return sum(1 for i in range(n) if (max(count[i].values(), default=0)) > i)`,
  },
  visibleTests: [
    { args: [3, [[0, 0], [1, 0], [1, 0], [2, 0], [2, 0], [2, 0]]], expected: 3 },
    { args: [5, [[1, 1], [1, 2], [1, 3], [1, 4]]], expected: 0 },
    { args: [2, [[1, 0], [1, 0]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, [[0, 0]]], expected: 1 },
    { args: [2, []], expected: 0 },
    { args: [3, [[0, 0], [0, 1], [1, 0], [1, 0], [2, 0], [2, 0], [2, 0]]], expected: 3 },
    { args: [4, [[3, 0], [3, 0], [3, 0], [3, 0]]], expected: 1 },
    { args: [3, [[2, 0], [2, 0]]], expected: 0 },
    { args: [3, [[0, 5], [1, 5], [1, 5], [2, 5], [2, 5]]], expected: 2 },
  ],
};
