import type { Problem } from '../types';

export const problem: Problem = {
  id: 'solving-questions-with-brainpower',
  title: 'Solving Questions With Brainpower',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given a **0-indexed** 2D integer array \`questions\` where \`questions[i] = [points_i, brainpower_i]\`.

You must process the questions in order and for each question decide whether to **solve** or **skip** it:

- If you solve question \`i\`, you earn \`points_i\` points and are **forced to skip** the next \`brainpower_i\` questions (i.e., you cannot solve questions \`i+1\` through \`i+brainpower_i\`).
- If you skip question \`i\`, you move directly to question \`i+1\`.

Return the **maximum points** you can earn.`,
  constraints: [
    '1 <= questions.length <= 10^5',
    'questions[i].length == 2',
    '1 <= points_i, brainpower_i <= 10^5',
  ],
  examples: [
    {
      input: 'questions = [[3,2],[4,3],[4,4],[2,5]]',
      output: '5',
      explanation: 'Solve question 0 (3 points), skip 1 and 2, solve question 3 (2 points) = 5. Or solve question 1 (4 points), skip 2 and 3 = 4. Maximum is 5.',
    },
    {
      input: 'questions = [[1,1],[2,2],[3,3],[4,4],[5,5]]',
      output: '7',
      explanation: 'Solve questions 1 and 4: 2 + 5 = 7.',
    },
  ],
  hints: [
    'Define dp[i] = max points from questions[i..n-1]. Process from right to left.',
    'For each question i, you either skip it (dp[i] = dp[i+1]) or solve it (dp[i] = points[i] + dp[i + brainpower[i] + 1]).',
    'Take the max of both choices. Base case: dp[n] = 0.',
  ],
  functionName: 'mostPoints',
  params: ['questions'],
  starterCode: {
    javascript: 'function mostPoints(questions) {\n  \n}\n',
    typescript: 'function mostPoints(questions: number[][]): number {\n  \n}\n',
    python: 'def mostPoints(questions):\n    pass\n',
  },
  visibleTests: [
    { args: [[[3, 2], [4, 3], [4, 4], [2, 5]]], expected: 5 },
    { args: [[[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[[1, 1]]], expected: 1 },
    { args: [[[10, 100]]], expected: 10 },
    { args: [[[1, 2], [2, 1], [3, 0]]], expected: 3 },
    { args: [[[1, 1], [2, 1], [3, 1], [4, 1]]], expected: 6 },
    { args: [[[50000, 0], [50001, 0]]], expected: 100001 },
    { args: [[[3, 2], [4, 3], [4, 4], [2, 5]]], expected: 5 },
  ],
};
