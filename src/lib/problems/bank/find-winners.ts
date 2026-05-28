import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-winners',
  title: 'Find Players With Zero or One Losses',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`matches\` where \`matches[i] = [winner_i, loser_i]\` indicates that the player \`winner_i\` defeated player \`loser_i\` in a match.

Return a list \`answer\` of size 2 where:
- \`answer[0]\` is a list of all players that have **not** lost any matches.
- \`answer[1]\` is a list of all players that have lost exactly **one** match.

The values in the two lists should be returned in **increasing** order.`,
  constraints: [
    '1 <= matches.length <= 10^5',
    'matches[i].length == 2',
    '1 <= winner_i, loser_i <= 10^5',
    'All matches[i] are unique.',
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
    'Track loss count per player. Include all players (both winners and losers) in the map. Return those with 0 losses and those with exactly 1 loss, sorted.',
    'Use a Map to count losses per player. Players with 0 losses are winners; players with exactly 1 loss are in the second group.',
    `\`\`\`js
const losses = new Map();
for (const [w,l] of matches) {
  if (!losses.has(w)) losses.set(w, 0);
  losses.set(l, (losses.get(l)||0)+1);
}
const w0=[], w1=[];
for (const [p,c] of losses) { if(c===0)w0.push(p); else if(c===1)w1.push(p); }
return [w0.sort((a,b)=>a-b), w1.sort((a,b)=>a-b)];\`\`\``
  ],
  functionName: 'findWinners',
  params: ['matches'],
  starterCode: {
    javascript: 'function findWinners(matches) {\n  \n}\n',
    python: 'def findWinners(matches):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]], expected: [[1,2,10],[4,5,7,8]] },
    { args: [[[2,3],[1,3],[5,4],[6,4]]], expected: [[1,2,5,6],[]] },
  ],
  hiddenTests: [
    { args: [[[1,2]]], expected: [[1],[2]] },
    { args: [[[1,2],[1,3],[2,3]]], expected: [[1],[2]] },
    { args: [[[1,2],[2,3],[3,1]]], expected: [[],[1,2,3]] },
    { args: [[[5,1],[3,1],[5,3]]], expected: [[5],[3]] },
  ],
};
