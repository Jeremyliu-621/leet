import type { Problem } from '../types';

export const problem: Problem = {
  id: 'stone-game-v',
  title: 'Stone Game V',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `There are several stones **arranged in a row**, and each stone has an associated value which is an integer given in the array \`stoneValue\`.

In each round of the game, Alice divides the row into **two non-empty rows** (not necessarily equal in length). Bob decides which half has the **larger sum** and that half is removed. If the two halves have equal sums, Bob removes the row that has **more** stones. Alice's score increases by the sum of the chosen (remaining) row.

Game ends when there is only **one** stone remaining. Return Alice's **maximum score**.

**Interval DP:** \`dp[i][j]\` = max score Alice can achieve on stones \`[i..j]\`. For each split point \`m\`, compare left and right sums. Alice keeps the smaller half (opponent removes the larger). If equal sums, Alice can choose which to keep.`,
  constraints: [
    '1 <= stoneValue.length <= 500',
    '1 <= stoneValue[i] <= 1000',
  ],
  examples: [
    {
      input: 'stoneValue = [6,2,3,4,5,5]',
      output: '18',
      explanation: 'Alice splits [6,2,3,4,5,5] → left [6,2,3]=11, right [4,5,5]=14. Right is bigger so Bob removes right. Alice scores 11. Continue on [6,2,3]…',
    },
    {
      input: 'stoneValue = [7,7,7,7,7,7,7]',
      output: '28',
    },
    {
      input: 'stoneValue = [4]',
      output: '0',
    },
  ],
  hints: [
    'Define dp[i][j] = max Alice score on subarray stoneValue[i..j].',
    'For each split m from i to j-1: compute leftSum = sum(i..m), rightSum = sum(m+1..j).',
    'If leftSum < rightSum: Alice keeps left, scores leftSum + dp[i][m]. If leftSum > rightSum: scores rightSum + dp[m+1][j]. If equal: take the max of both options.',
  ],
  functionName: 'stoneGameV',
  params: ['stoneValue'],
  starterCode: {
    javascript: 'function stoneGameV(stoneValue) {\n\n}\n',
    typescript: "function stoneGameV(stoneValue: number[]): number {\n\n}",

    python: 'def stoneGameV(stoneValue: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[6,2,3,4,5,5]], expected: 18 },
    { args: [[7,7,7,7,7,7,7]], expected: 28 },
    { args: [[4]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1,2]], expected: 1 },
    { args: [[5,5]], expected: 5 },
    { args: [[1,2,3]], expected: 4 },
    { args: [[3,2,1,4]], expected: 7 },
  ],
};
