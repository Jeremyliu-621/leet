import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-leaderboard',
  title: 'Design a Leaderboard',
  difficulty: 'medium',
  tags: ['design', 'hash-map', 'arrays'],
  description: `Design a leaderboard class with the following operations:

- \`addScore(playerId, score)\`: Update the leaderboard by adding \`score\` to the given player's total score. If the player does not exist, add them with the given \`score\`.
- \`top(K)\`: Return the **sum** of the scores of the top \`K\` players.
- \`reset(playerId)\`: Reset the score of the player with the given ID to \`0\`. The player will remain on the leaderboard with a score of 0.

Implement the \`leaderboard(ops, params)\` function that accepts an array of operation names \`ops\` and an array of parameter arrays \`params\`, and returns an array of results where non-returning operations return \`null\`.`,
  constraints: [
    '`1 <= playerId, K <= 10000`',
    '`1 <= score <= 100`',
    'At most `1000` calls will be made across all functions.',
    'It is guaranteed that `reset` and `top` are only called for players who have already been added.',
  ],
  examples: [
    {
      input: `ops = ["Leaderboard","addScore","addScore","addScore","addScore","addScore","top","reset","reset","addScore","top"]
params = [[],[1,73],[2,56],[3,39],[4,51],[5,4],[1],[1],[2],[2,51],[3]]`,
      output: '[null,null,null,null,null,null,73,null,null,null,141]',
      explanation: 'top(1) returns 73 (player 1 has the highest score). After reset(1) and reset(2) both score 0, addScore(2,51) brings player 2 to 51. top(3) sums scores 51+51+39 = 141.',
    },
  ],
  hints: [
    'Use a hash map mapping `playerId → totalScore`. `addScore` accumulates (not replaces) the score.',
    'For `top(K)`, collect all scores, sort them in descending order, and sum the first `K`.',
    '`reset` sets the player\'s score to `0` in the map; the player is not removed from the leaderboard.',
  ],
  functionName: 'leaderboard',
  params: ['ops', 'params'],
  starterCode: {
    javascript: `function leaderboard(ops, params) {

}`,
    python: `def leaderboard(ops, params):
    pass`,
  },
  visibleTests: [
    {
      args: [
        ['Leaderboard','addScore','addScore','addScore','addScore','addScore','top','reset','reset','addScore','top'],
        [[],[1,73],[2,56],[3,39],[4,51],[5,4],[1],[1],[2],[2,51],[3]],
      ],
      expected: [null,null,null,null,null,null,73,null,null,null,141],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['Leaderboard','addScore','addScore','addScore','top','addScore','top'],
        [[],[1,10],[2,20],[3,30],[2],[1,15],[3]],
      ],
      expected: [null,null,null,null,50,null,75],
    },
    {
      args: [
        ['Leaderboard','addScore','addScore','top','reset','top'],
        [[],[1,5],[2,10],[1],[1],[1]],
      ],
      expected: [null,null,null,10,null,10],
    },
    {
      args: [
        ['Leaderboard','addScore','addScore','addScore','top'],
        [[],[1,100],[1,50],[2,80],[2]],
      ],
      expected: [null,null,null,null,230],
    },
    {
      args: [
        ['Leaderboard','addScore','reset','addScore','top'],
        [[],[1,50],[1],[1,30],[1]],
      ],
      expected: [null,null,null,null,30],
    },
    {
      args: [
        ['Leaderboard','addScore','addScore','addScore','addScore','addScore','top'],
        [[],[1,10],[2,20],[3,30],[4,40],[5,50],[3]],
      ],
      expected: [null,null,null,null,null,null,120],
    },
    {
      args: [
        ['Leaderboard','addScore','addScore','reset','addScore','addScore','top'],
        [[],[1,100],[2,90],[2],[2,60],[3,80],[2]],
      ],
      expected: [null,null,null,null,null,null,180],
    },
  ],
};
