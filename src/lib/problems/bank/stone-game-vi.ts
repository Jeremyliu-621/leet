import type { Problem } from '../types';

export const problem: Problem = {
  id: 'stone-game-vi',
  title: 'Stone Game VI',
  difficulty: 'medium',
  tags: ['arrays', 'math', 'heap'],
  description: `Alice and Bob take turns playing a game, with **Alice starting first**. There are \`n\` stones. On each turn, the current player picks one stone:

- If Alice picks stone \`i\`, her score increases by \`aliceValues[i]\`.
- If Bob picks stone \`i\`, his score increases by \`bobValues[i]\`.

Both players play **optimally** to maximize their own score.

Return \`1\` if Alice wins, \`-1\` if Bob wins, or \`0\` if it's a tie.`,
  constraints: [
    'n == aliceValues.length == bobValues.length',
    '1 <= n <= 10^5',
    '0 <= aliceValues[i], bobValues[i] <= 100',
  ],
  examples: [
    {
      input: 'aliceValues = [1,3], bobValues = [2,1]',
      output: '1',
      explanation: 'Combined values: [3, 4]. Alice picks stone 1 (score +3). Bob picks stone 0 (score +2). 3 > 2, Alice wins.',
    },
    {
      input: 'aliceValues = [1,2], bobValues = [3,1]',
      output: '0',
      explanation: 'Combined: [4, 3]. Alice picks stone 0 (score +1). Bob picks stone 1 (score +1). Tie.',
    },
    {
      input: 'aliceValues = [2,4,3], bobValues = [1,6,7]',
      output: '-1',
      explanation: 'Combined: [3,10,10]. Optimal play leads to Bob winning.',
    },
  ],
  hints: [
    'When a player picks a stone, they gain its value AND deny the opponent that stone\'s value.',
    'Each stone\'s total impact is aliceValues[i] + bobValues[i]. Sort by this combined value descending.',
    'Alice picks on turns 0, 2, 4, ... and Bob on turns 1, 3, 5, ... Compare their totals.',
  ],
  functionName: 'stoneGameVI',
  params: ['aliceValues', 'bobValues'],
  starterCode: {
    javascript: `function stoneGameVI(aliceValues, bobValues) {

}`,
    typescript: "function stoneGameVI(aliceValues: number[], bobValues: number[]): number {\n\n}",

    python: `def stoneGameVI(aliceValues, bobValues):
    pass`,
  },
  visibleTests: [
    { args: [[1, 3], [2, 1]], expected: 1 },
    { args: [[1, 2], [3, 1]], expected: 0 },
    { args: [[2, 4, 3], [1, 6, 7]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 1 },
    { args: [[2], [1]], expected: 1 },
    { args: [[1], [2]], expected: 1 },
    { args: [[5, 5, 5], [5, 5, 5]], expected: 1 },
    { args: [[1, 2, 3], [4, 5, 6]], expected: -1 },
  ],
};
