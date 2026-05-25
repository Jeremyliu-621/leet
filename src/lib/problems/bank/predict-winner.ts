import type { Problem } from '../types';

export const problem: Problem = {
  id: 'predict-winner',
  title: 'Predict the Winner',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `You are given an integer array \`nums\`. Two players are playing a game with this array: player 1 and player 2.

Player 1 and player 2 take turns, with player 1 starting first. On each turn, the current player takes either the leftmost or rightmost element from \`nums\`, removing it. After all elements are taken, the player with the **greater** score wins. If the scores are equal, player 1 also wins.

Return \`true\` if player 1 can win, \`false\` otherwise. **Both players play optimally.**

**Approach:** \`dp[i][j]\` = maximum score **advantage** (current player's score minus opponent's score) over the subarray \`nums[i..j]\`. At each step the current player picks \`nums[i]\` or \`nums[j]\`, then the roles flip, so the opponent's advantage becomes negative. Answer: \`dp[0][n-1] >= 0\`.`,
  constraints: [
    '1 <= nums.length <= 20',
    '0 <= nums[i] <= 10^7',
  ],
  examples: [
    {
      input: 'nums = [1,5,2]',
      output: 'false',
      explanation: 'Player 1 can pick 1 or 2. Best: 1→[5,2], player 2 picks 5→[2], player 1 picks 2. Scores: 1+2=3 vs 5. Player 2 wins.',
    },
    {
      input: 'nums = [1,5,233,7]',
      output: 'true',
      explanation: 'Player 1 picks 1, then 233. Scores: 234 vs 12. Player 1 wins.',
    },
    {
      input: 'nums = [1,2]',
      output: 'true',
      explanation: 'Player 1 picks 2, player 2 picks 1. Player 1 wins.',
    },
  ],
  hints: [
    'Define `dp[i][j]` as the advantage (current player minus opponent) from the subarray `nums[i..j]`.',
    'Base: `dp[i][i] = nums[i]`. Transition: `dp[i][j] = max(nums[i] - dp[i+1][j], nums[j] - dp[i][j-1])`.',
    'Player 1 wins iff `dp[0][n-1] >= 0`.',
    '```js\nconst n = nums.length;\nconst dp = Array.from({length: n}, (_, i) => [...nums]);\nfor (let len = 2; len <= n; len++) {\n  for (let i = 0; i <= n - len; i++) {\n    const j = i + len - 1;\n    dp[i][j] = Math.max(nums[i] - dp[i+1][j], nums[j] - dp[i][j-1]);\n  }\n}\nreturn dp[0][n-1] >= 0;\n```',
  ],
  functionName: 'predictTheWinner',
  params: ['nums'],
  starterCode: {
    javascript: `function predictTheWinner(nums) {
  // return true if player 1 can win or tie

}`,
    python: `def predictTheWinner(nums: list) -> bool:
    # return true if player 1 can win or tie
    pass
`,
  },
  visibleTests: [
    { args: [[1, 5, 2]], expected: false },
    { args: [[1, 5, 233, 7]], expected: true },
    { args: [[1, 2]], expected: true },
  ],
  hiddenTests: [
    { args: [[1]], expected: true },
    { args: [[1, 1]], expected: true },
    { args: [[1, 2, 3]], expected: true },
    { args: [[1, 2, 3, 4]], expected: true },
    { args: [[1, 2, 4, 1]], expected: true },
    { args: [[3, 7, 2, 3]], expected: true },
    { args: [[0, 0]], expected: true },
  ],
};
