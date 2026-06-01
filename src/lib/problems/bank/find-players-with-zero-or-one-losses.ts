import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-players-with-zero-or-one-losses',
  title: 'Find Players With Zero or One Losses',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`matches\` where \`matches[i] = [winner_i, loser_i]\` indicates that the player \`winner_i\` defeated player \`loser_i\` in a match.

Return a list \`answer\` of size 2 where:
- \`answer[0]\` is a list of all players that have **not lost any** match.
- \`answer[1]\` is a list of all players that have lost exactly **one** match.

The values in the two lists should be returned in **increasing** order.`,
  constraints: [
    '1 <= matches.length <= 10^5',
    'matches[i].length == 2',
    '1 <= winner_i, loser_i <= 10^5',
    'winner_i != loser_i',
    'All matches are unique.',
  ],
  examples: [
    {
      input: 'matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]',
      output: '[[1,2,10],[4,5,7,8]]',
    },
    {
      input: 'matches = [[2,3],[1,3],[5,4],[6,4]]',
      output: '[[1,2,5,6],[]]',
    },
  ],
  hints: [
    'Level 1: Track loss counts in a Map. Initialize each winner to 0 losses if not already present, so you know all players.',
    'Level 2: After processing all matches, iterate the map and bucket players by loss count (0 vs 1).',
    'Level 3: Sort both result arrays numerically before returning. Players with 2+ losses are excluded from both lists.',
  ],
  functionName: 'findWinners',
  params: ['matches'],
  starterCode: {
    javascript: `function findWinners(matches) {
  const losses = new Map();
  for (const [w, l] of matches) {
    if (!losses.has(w)) losses.set(w, 0);
    losses.set(l, (losses.get(l) || 0) + 1);
  }
  const zero = [], one = [];
  for (const [player, lossCount] of losses) {
    if (lossCount === 0) zero.push(player);
    else if (lossCount === 1) one.push(player);
  }
  return [zero.sort((a, b) => a - b), one.sort((a, b) => a - b)];
}`,
    typescript: `function findWinners(matches: number[][]): number[][] {
  const losses = new Map<number, number>();
  for (const [w, l] of matches) {
    if (!losses.has(w)) losses.set(w, 0);
    losses.set(l, (losses.get(l) ?? 0) + 1);
  }
  const zero: number[] = [], one: number[] = [];
  for (const [player, lossCount] of losses) {
    if (lossCount === 0) zero.push(player);
    else if (lossCount === 1) one.push(player);
  }
  return [zero.sort((a, b) => a - b), one.sort((a, b) => a - b)];
}`,
    python: `def findWinners(matches):
    losses = {}
    for w, l in matches:
        if w not in losses:
            losses[w] = 0
        losses[l] = losses.get(l, 0) + 1
    zero = sorted(p for p, lc in losses.items() if lc == 0)
    one = sorted(p for p, lc in losses.items() if lc == 1)
    return [zero, one]`,
  },
  visibleTests: [
    {
      args: [[[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]],
      expected: [[1,2,10],[4,5,7,8]],
    },
    {
      args: [[[2,3],[1,3],[5,4],[6,4]]],
      expected: [[1,2,5,6],[]],
    },
  ],
  hiddenTests: [
    { args: [[[1,2]]], expected: [[1],[2]] },
    { args: [[[1,2],[2,3]]], expected: [[1],[2,3]] },
    { args: [[[1,2],[1,3],[2,3]]], expected: [[1],[2]] },
    { args: [[[1,2],[2,3],[3,1]]], expected: [[],[1,2,3]] },
    { args: [[[3,1],[2,1],[3,2]]], expected: [[3],[2]] },
    { args: [[[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]], expected: [[1,2,10],[4,5,7,8]] },
  ],
};
