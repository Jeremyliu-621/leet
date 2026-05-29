import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sequence-reconstruction',
  title: 'Sequence Reconstruction',
  difficulty: 'medium',
  tags: ['graph', 'arrays'],
  description: `You are given an integer array \`nums\` of length \`n\` which is a permutation of \`[1, 2, ..., n]\`.

You are also given a 2D integer array \`sequences\` where \`sequences[i]\` is a subsequence of \`nums\`.

Return \`true\` if and only if \`nums\` is the **only** shortest supersequence for all the sequences in \`sequences\`. A **supersequence** is a sequence that has every sequence in \`sequences\` as a subsequence.

Equivalently, return \`true\` if and only if \`nums\` is a topological ordering of every sequence in \`sequences\` and that ordering is **unique**.`,
  constraints: [
    '`n == nums.length`',
    '`1 <= n <= 10^4`',
    '`nums` is a permutation of all the integers in the range `[1, n]`.',
    '`1 <= sequences.length <= 10^4`',
    '`1 <= sequences[i].length <= 10^4`',
    '`1 <= sequences[i][j] <= n`',
    'All the arrays in `sequences` are **unique**.',
  ],
  examples: [
    {
      input: 'nums = [1,2,3], sequences = [[1,2],[1,3]]',
      output: 'false',
      explanation: 'There are two possible supersequences: [1,2,3] and [1,3,2]. The sequences [1,2] is a subsequence of both.',
    },
    {
      input: 'nums = [1,2,3], sequences = [[1,2],[1,3],[2,3]]',
      output: 'true',
      explanation: 'The sequences [1,2], [1,3], and [2,3] force the order 1→2→3. No other ordering is valid.',
    },
    {
      input: 'nums = [4,1,5,2,6,3], sequences = [[5,2,6,3],[4,1,5,2]]',
      output: 'true',
    },
  ],
  hints: [
    'Build a directed graph: for each consecutive pair (sequences[i][j-1], sequences[i][j]), add edge a→b.',
    'Perform topological sort (Kahn\'s algorithm). At each step there must be exactly one node with in-degree 0.',
    'If at any point more than one node has in-degree 0, the ordering is not unique — return false.',
    'After processing, check that all nodes from nums were visited (same length).',
  ],
  functionName: 'sequenceReconstruction',
  params: ['nums', 'sequences'],
  starterCode: {
    javascript: `function sequenceReconstruction(nums, sequences) {

}`,
    typescript: `function sequenceReconstruction(nums: number[], sequences: number[][]): boolean {

}`,
    python: `def sequenceReconstruction(nums, sequences):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3], [[1, 2], [1, 3]]], expected: false },
    { args: [[1, 2, 3], [[1, 2], [1, 3], [2, 3]]], expected: true },
    { args: [[4, 1, 5, 2, 6, 3], [[5, 2, 6, 3], [4, 1, 5, 2]]], expected: true },
  ],
  hiddenTests: [
    { args: [[1], [[1]]], expected: true },
    { args: [[1, 2], [[1, 2]]], expected: true },
    { args: [[1, 2], [[1], [2]]], expected: false },
    { args: [[1, 2, 3], [[1, 2, 3]]], expected: true },
    { args: [[1, 2, 3], [[2, 3]]], expected: false },
    { args: [[3, 1, 2], [[3, 1], [1, 2]]], expected: true },
    { args: [[1, 2, 3], [[1, 2], [2, 3], [1, 3]]], expected: true },
  ],
};
