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
    'Track loss counts in a map. Initialize winners to 0 losses if not already there.',
    'Filter players into two lists based on their loss count.',
    `\`\`\`js
function findWinners(matches) {
  const losses = new Map();
  for (const [w,l] of matches) {
    if (!losses.has(w)) losses.set(w, 0);
    losses.set(l, (losses.get(l)||0)+1);
  }
  const zero=[], one=[];
  for (const [p,lc] of losses) {
    if (lc === 0) zero.push(p); else if (lc === 1) one.push(p);
  }
  return [zero.sort((a,b)=>a-b), one.sort((a,b)=>a-b)];
}\`\`\``,
  ],
  functionName: 'findWinners',
  params: ['matches'],
  starterCode: {
    javascript: 'function findWinners(matches) {\n\n}\n',
    typescript: "function findWinners(matches: number[][]): number[][] {\n\n}",

    python: 'def findWinners(matches):\n    pass\n',
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
  ],
};
