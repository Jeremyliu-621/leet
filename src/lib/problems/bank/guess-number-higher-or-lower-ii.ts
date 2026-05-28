import type { Problem } from '../types';

export const problem: Problem = {
  id: 'guess-number-higher-or-lower-ii',
  title: 'Guess Number Higher or Lower II',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `We are playing the Guessing Game. The game will work as follows:

1. I pick a number between \`1\` and \`n\`.
2. You guess a number.
3. If you guess right, **you win the game**.
4. If you guess wrong, I will tell you whether the number I picked is **higher** or **lower**, and you will continue guessing.
5. Every time you guess a wrong number \`x\`, you will pay \`x\` dollars. If you run out of money, **you lose the game**.

Given a particular \`n\`, return the **minimum amount of money you need to guarantee a win regardless of what number I pick**.`,
  constraints: ['1 <= n <= 200'],
  examples: [
    {
      input: 'n = 10',
      output: '16',
      explanation: 'The winning strategy is: guess 7, then depending on result, use binary-search-like guessing. The minimax cost is 16.',
    },
    {
      input: 'n = 1',
      output: '0',
      explanation: 'There is only one possible number, so you always guess correctly without paying.',
    },
  ],
  hints: [
    'Define dp[i][j] = minimum cost to guarantee a win in range [i, j].',
    'dp[i][j] = min over k in [i,j] of (k + max(dp[i][k-1], dp[k+1][j])).',
    'Base cases: dp[i][i] = 0 (only one choice, no cost needed).',
  ],
  functionName: 'getMoneyAmount',
  params: ['n'],
  starterCode: {
    javascript: 'function getMoneyAmount(n) {\n\n}\n',
    typescript: "function getMoneyAmount(n: number): number {\n\n}",

    python: 'def getMoneyAmount(n):\n    pass\n',
  },
  visibleTests: [
    { args: [10], expected: 16 },
    { args: [1], expected: 0 },
  ],
  hiddenTests: [
    { args: [2], expected: 1 },
    { args: [3], expected: 2 },
    { args: [4], expected: 4 },
    { args: [5], expected: 6 },
  ],
};
