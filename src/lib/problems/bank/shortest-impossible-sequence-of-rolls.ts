import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-impossible-sequence-of-rolls',
  title: 'Shortest Impossible Sequence of Rolls',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`rolls\` of length \`n\` and an integer \`k\`. You roll a \`k\`-faced die numbered from \`1\` to \`k\`, \`n\` times, where the result of the \`i\`th roll is \`rolls[i]\`.

Return the length of the **shortest** sequence of rolls that **cannot** be taken from \`rolls\` as a subsequence.

A **subsequence** of an array is an ordered group of elements of the array that are chosen from it (possibly not contiguous).`,
  constraints: [
    '`n == rolls.length`',
    '`1 <= n <= 10^5`',
    '`1 <= rolls[i] <= k <= 10^5`',
  ],
  examples: [
    {
      input: 'rolls = [4,2,1,2,3,3,2,4,1], k = 4',
      output: '3',
      explanation: 'Two complete rounds of {1,2,3,4} exist, so all length-2 sequences appear. Length-3 sequence [4,4,4] cannot (only two 4s).',
    },
    {
      input: 'rolls = [1,1,2,2], k = 2',
      output: '2',
      explanation: 'One complete round of {1,2} is found (1 at idx 0, 2 at idx 2). Sequence [2,1] cannot be a subsequence (1 never follows 2). So the shortest impossible sequence has length 2.',
    },
  ],
  hints: [
    'The key insight: greedily count how many "complete rounds" of {1..k} appear in rolls.',
    'Scan left to right, tracking which values in {1..k} have been seen in the current round.',
    'When all k values are seen, a new round starts (clear the set). The answer is (rounds + 1).',
  ],
  functionName: 'shortestSequence',
  params: ['rolls', 'k'],
  starterCode: {
    javascript: `function shortestSequence(rolls, k) {

}`,
    typescript: `function shortestSequence(rolls: number[], k: number): number {

}`,
    python: `def shortestSequence(rolls, k):
    pass`,
  },
  visibleTests: [
    { args: [[4, 2, 1, 2, 3, 3, 2, 4, 1], 4], expected: 3 },
    { args: [[1, 1, 2, 2], 2], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4], 4], expected: 2 },
    { args: [[1, 2], 2], expected: 2 },
    { args: [[1, 1], 2], expected: 1 },
    { args: [[1, 2, 1, 2], 2], expected: 3 },
    { args: [[3, 3, 2, 3, 1], 3], expected: 2 },
  ],
};
