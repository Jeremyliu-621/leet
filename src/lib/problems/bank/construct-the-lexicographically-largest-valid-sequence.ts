import type { Problem } from '../types';

export const problem: Problem = {
  id: 'construct-the-lexicographically-largest-valid-sequence',
  title: 'Construct the Lexicographically Largest Valid Sequence',
  difficulty: 'medium',
  tags: ['backtracking', 'arrays'],
  description: `Given an integer \`n\`, find a sequence that satisfies all of the following:

- The integer \`1\` occurs once in the sequence.
- Each integer between \`2\` and \`n\` occurs twice in the sequence.
- For every integer \`i\` between \`2\` and \`n\`, the **distance** between the two occurrences of \`i\` is exactly \`i\`.

The distance between two numbers on the sequence, \`a[i]\` and \`a[j]\`, is the absolute difference of their indices, \`|j - i|\`.

Return the **lexicographically largest** sequence. It is guaranteed that, under the given constraints, there is always a solution.`,
  constraints: ['1 <= n <= 20'],
  examples: [
    {
      input: 'n = 3',
      output: '[3,1,2,3,2]',
      explanation:
        '[2,3,2,1,3] is also a valid sequence, but [3,1,2,3,2] is the lexicographically largest.',
    },
    {
      input: 'n = 4',
      output: '[4,2,3,2,4,3,1]',
    },
    {
      input: 'n = 5',
      output: '[5,3,1,4,3,5,2,4,2]',
    },
  ],
  hints: [
    'Use backtracking — fill positions left to right, and at each empty slot try placing numbers from n down to 1 (greedy for lexicographic max).',
    "For each candidate number num > 1, it can be placed at index idx if idx + num < 2n-1 and result[idx + num] is empty. Place it at both idx and idx + num, then recurse.",
    'For num == 1, place it at the current position and recurse. If no placement leads to a solution, backtrack.',
  ],
  functionName: 'constructDistancedSequence',
  params: ['n'],
  starterCode: {
    javascript: 'function constructDistancedSequence(n) {\n\n}\n',
    typescript: 'function constructDistancedSequence(n: number): number[] {\n\n}\n',
    python: 'def constructDistancedSequence(n):\n    pass\n',
  },
  visibleTests: [
    { args: [3], expected: [3, 1, 2, 3, 2] },
    { args: [4], expected: [4, 2, 3, 2, 4, 3, 1] },
    { args: [5], expected: [5, 3, 1, 4, 3, 5, 2, 4, 2] },
  ],
  hiddenTests: [
    { args: [1], expected: [1] },
    { args: [2], expected: [2, 1, 2] },
    { args: [6], expected: [6, 4, 2, 5, 2, 4, 6, 3, 5, 1, 3] },
    { args: [7], expected: [7, 5, 3, 6, 4, 3, 5, 7, 4, 6, 2, 1, 2] },
  ],
};
