import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-boxes',
  title: 'Remove Boxes',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given several boxes with different colors represented by different positive numbers.

You may experience several rounds to remove boxes until there are no boxes left. Each time you can choose some continuous boxes with the same color (i.e., composed of \`k\` boxes, \`k >= 1\`), remove them and get \`k * k\` points.

Return the **maximum points** you can get.`,
  constraints: [
    '1 <= boxes.length <= 100',
    '1 <= boxes[i] <= 100',
  ],
  examples: [
    {
      input: 'boxes = [1,3,2,2,2,3,4,3,1]',
      output: '23',
      explanation:
        '[1,3,2,2,2,3,4,3,1] → remove [2,2,2] (+9) → [1,3,3,4,3,1] → remove [3,3,3] (+9) → [1,4,1] → remove [1,1] (+4) → [4] → remove [4] (+1) = 23',
    },
    {
      input: 'boxes = [1,1,1]',
      output: '9',
    },
    {
      input: 'boxes = [1]',
      output: '1',
    },
  ],
  hints: [
    'Define `dp[l][r][k]` = max points obtainable from `boxes[l..r]` when there are `k` extra boxes equal to `boxes[l]` attached to the left of `boxes[l]`.',
    'Base: `dp[l][l][k] = (k+1)^2`. Transition: either remove `boxes[l]` along with the `k` attached boxes for `(k+1)^2 + dp[l+1][r][0]`, or find some `m` in `(l, r]` where `boxes[m] == boxes[l]` and split: `dp[l+1][m-1][0] + dp[m][r][k+1]`.',
    'Use memoization (top-down) to avoid recomputing states. The state space is O(n^3) and each state is O(n) to compute, giving O(n^4) total.',
  ],
  functionName: 'removeBoxes',
  params: ['boxes'],
  starterCode: {
    javascript: 'function removeBoxes(boxes) {\n  \n}\n',
    python: 'def removeBoxes(boxes):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 2, 2, 2, 3, 4, 3, 1]], expected: 23 },
    { args: [[1, 1, 1]], expected: 9 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 2 },
    { args: [[1, 1, 2, 1, 1]], expected: 17 },
    { args: [[2, 1, 2, 2, 1, 2]], expected: 18 },
    { args: [[1, 2, 3]], expected: 3 },
    { args: [[1, 1, 1, 1]], expected: 16 },
  ],
};
