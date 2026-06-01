import type { Problem } from '../types';

export const problem: Problem = {
  id: 'best-sightseeing-pair',
  title: 'Best Sightseeing Pair',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an integer array \`values\` where \`values[i]\` represents the value of the \`i\`th sightseeing spot. Two spots \`i\` and \`j\` (with \`i < j\`) form a sightseeing pair with score \`values[i] + values[j] + i - j\`.

Return the maximum score of a sightseeing pair.`,
  constraints: [
    '`2 <= values.length <= 5 * 10^4`',
    '`1 <= values[i] <= 1000`',
  ],
  examples: [
    {
      input: 'values = [8,1,5,2,6]',
      output: '11',
      explanation: 'i=0, j=2: values[0]+values[2]+0-2 = 8+5-2 = 11.',
    },
    {
      input: 'values = [1,2]',
      output: '2',
      explanation: 'i=0, j=1: 1+2+0-1 = 2.',
    },
  ],
  hints: [
    'Rewrite the score as (values[i]+i) + (values[j]-j). For each j, maximize over all i < j.',
    'Maintain a running maximum of (values[i]+i) as you scan left to right. At each j, the best score is max_i + (values[j]-j).',
    'Single-pass O(n): update max_i = max(max_i, values[j]+j) after computing the score for j.',
  ],
  functionName: 'maxScoreSightseeingPair',
  params: ['values'],
  starterCode: {
    javascript: `function maxScoreSightseeingPair(values) {
  let best = 0, maxI = values[0];
  for (let j = 1; j < values.length; j++) {
    best = Math.max(best, maxI + values[j] - j);
    maxI = Math.max(maxI, values[j] + j);
  }
  return best;
}`,
    typescript: `function maxScoreSightseeingPair(values: number[]): number {
  let best = 0, maxI = values[0]!;
  for (let j = 1; j < values.length; j++) {
    best = Math.max(best, maxI + values[j]! - j);
    maxI = Math.max(maxI, values[j]! + j);
  }
  return best;
}`,
    python: `def maxScoreSightseeingPair(values):
    values = list(values.to_py()) if hasattr(values, 'to_py') else list(values)
    best = 0
    max_i = values[0]
    for j in range(1, len(values)):
        best = max(best, max_i + values[j] - j)
        max_i = max(max_i, values[j] + j)
    return best`,
  },
  visibleTests: [
    { args: [[8,1,5,2,6]], expected: 11 },
    { args: [[1,2]], expected: 2 },
    { args: [[5,3,2,1]], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1,3,5]], expected: 7 },
    { args: [[2,4,3,1]], expected: 6 },
    { args: [[10,4,8,7]], expected: 16 },
    { args: [[3,3,3,3]], expected: 5 },
  ],
};
