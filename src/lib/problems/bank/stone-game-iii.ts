import type { Problem } from '../types';

export const problem: Problem = {
  id: 'stone-game-iii',
  title: 'Stone Game III',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `Alice and Bob continue their games with piles of stones. There are several stones **arranged in a row**, and each stone has an associated value which is an integer given in the array \`stoneValue\`.

Alice and Bob take turns, with **Alice starting first**. On each player's turn, that player can take **1, 2, or 3 stones** from the **first** remaining stones in the row.

The score of each player is the sum of the values of the stones taken. The score of each player is **0** initially.

The objective of the game is to end with the highest score, and the winner is the player with the highest score and there could be a tie. The game continues until all the stones have been taken.

Assume Alice and Bob **play optimally**.

Return \`"Alice"\` if Alice will win, \`"Bob"\` if Bob will win, or \`"Tie"\` if they end with the same score.`,
  constraints: [
    '`1 <= stoneValue.length <= 5 * 10^4`',
    '`-1000 <= stoneValue[i] <= 1000`',
  ],
  examples: [
    {
      input: 'stoneValue = [1,2,3,7]',
      output: '"Bob"',
      explanation:
        'Alice will always lose. Her best move is to take three piles and the score becomes 6. Now the score of Bob is 7 and Bob wins.',
    },
    {
      input: 'stoneValue = [1,2,3,-9]',
      output: '"Alice"',
      explanation:
        'Alice must choose all the first three piles, giving score 6. Bob takes -9. Alice wins 6 to -9.',
    },
    {
      input: 'stoneValue = [1,2,3,6]',
      output: '"Tie"',
    },
  ],
  hints: [
    'Define dp[i] = maximum score difference (current player − opponent) starting from index i.',
    'dp[i] = max over k=1,2,3 of: sum(stoneValue[i..i+k-1]) − dp[i+k]  (subtract because it\'s the opponent\'s turn next).',
    'Compute dp right-to-left. Alice wins if dp[0] > 0, Bob wins if dp[0] < 0, else Tie.',
  ],
  functionName: 'stoneGameIII',
  params: ['stoneValue'],
  starterCode: {
    javascript: 'function stoneGameIII(stoneValue) {\n  \n}\n',
    typescript: "function stoneGameIII(stoneValue: number[]): string {\n  \n}",

    python: 'def stoneGameIII(stoneValue):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 7]], expected: 'Bob' },
    { args: [[1, 2, 3, -9]], expected: 'Alice' },
    { args: [[1, 2, 3, 6]], expected: 'Tie' },
  ],
  hiddenTests: [
    { args: [[1]], expected: 'Alice' },
    { args: [[-1]], expected: 'Bob' },
    { args: [[-1, -2, -3]], expected: 'Tie' },
    { args: [[7, 7, 7, 7, 7, 7, 7]], expected: 'Alice' },
    { args: [[-1, -2, -3, -4, -5, -6, -7]], expected: 'Tie' },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: 'Alice' },
  ],
};
