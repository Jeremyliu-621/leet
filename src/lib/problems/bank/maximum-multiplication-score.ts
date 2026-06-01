import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-multiplication-score',
  title: 'Maximum Multiplication Score',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given two integer arrays \`a\` and \`b\` of sizes \`n\` and \`4\` respectively.

You need to choose 4 indices \`i0, i1, i2, i3\` from array \`a\` such that \`i0 < i1 < i2 < i3\`.

Your score is defined as: \`a[i0] * b[0] + a[i1] * b[1] + a[i2] * b[2] + a[i3] * b[3]\`.

Return the **maximum** score you can achieve.`,
  constraints: [
    '4 <= a.length <= 10^5',
    'b.length == 4',
    '-10^5 <= a[i], b[i] <= 10^5',
  ],
  examples: [
    {
      input: 'a = [3,1,5,1,6], b = [2,3,4,5]',
      output: '59',
      explanation:
        'Choose indices 0,1,2,4: 3*2+1*3+5*4+6*5=6+3+20+30=59.',
    },
    {
      input: 'a = [1,2,3,4], b = [1,1,1,1]',
      output: '10',
      explanation:
        'Only one way to pick 4 indices from 4 elements: 1+2+3+4=10.',
    },
    {
      input: 'a = [-1,-2,-3,-4,-5], b = [1,2,3,4]',
      output: '-30',
      explanation:
        'Best is to skip -5: (-1)*1+(-2)*2+(-3)*3+(-4)*4=-1-4-9-16=-30.',
    },
  ],
  hints: [
    'Level 1: Think of this as picking 4 elements from a in order to match with b[0..3]. This is a subsequence selection problem.',
    'Level 2: Use DP with 4 states dp[0..4], where dp[j] = max score choosing j elements from a so far.',
    'Level 3: For each element a[i], update j from 4 down to 1: dp[j] = max(dp[j], dp[j-1] + a[i]*b[j-1]). Start with dp[0]=0, dp[1..4]=-Infinity.',
  ],
  functionName: 'maxScore',
  params: ['a', 'b'],
  starterCode: {
    javascript: `function maxScore(a, b) {
  const dp = [0, -Infinity, -Infinity, -Infinity, -Infinity];
  for (const x of a) {
    for (let j = 4; j >= 1; j--) {
      if (dp[j - 1] !== -Infinity) {
        dp[j] = Math.max(dp[j], dp[j - 1] + x * b[j - 1]);
      }
    }
  }
  return dp[4];
}`,
    typescript: `function maxScore(a: number[], b: number[]): number {
  const dp: number[] = [0, -Infinity, -Infinity, -Infinity, -Infinity];
  for (const x of a) {
    for (let j = 4; j >= 1; j--) {
      if (dp[j - 1] !== -Infinity) {
        dp[j] = Math.max(dp[j]!, dp[j - 1]! + x * b[j - 1]!);
      }
    }
  }
  return dp[4]!;
}`,
    python: `def maxScore(a, b):
    dp = [0] + [float('-inf')] * 4
    for x in a:
        for j in range(4, 0, -1):
            if dp[j - 1] != float('-inf'):
                dp[j] = max(dp[j], dp[j - 1] + x * b[j - 1])
    return dp[4]`,
  },
  visibleTests: [
    { args: [[3, 1, 5, 1, 6], [2, 3, 4, 5]], expected: 59 },
    { args: [[1, 2, 3, 4], [1, 1, 1, 1]], expected: 10 },
    { args: [[-1, -2, -3, -4, -5], [1, 2, 3, 4]], expected: -30 },
  ],
  hiddenTests: [
    { args: [[5, 1, 2, 3, 4], [1, -1, 1, -1]], expected: 3 },
    { args: [[1, 2, 3, 4, 5], [1, 2, 3, 4]], expected: 40 },
    { args: [[1, 1, 1, 1], [1, 1, 1, 1]], expected: 4 },
    { args: [[-10, 1, 1, 1, 1], [1, 1, 1, 1]], expected: 4 },
    { args: [[1, 2, 3, 4, 5, 6], [2, -1, 4, -3]], expected: 4 },
    { args: [[0, 0, 0, 0], [1, 2, 3, 4]], expected: 0 },
    { args: [[1, 1, 1, 1, 1], [-1, -2, -3, -4]], expected: -10 },
    { args: [[10, 1, 2, 3, 4], [-1, -2, -3, -4]], expected: -30 },
  ],
};
