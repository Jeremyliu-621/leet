import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-array-formation-through-concatenation',
  title: 'Check Array Formation Through Concatenation',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an array \`arr\` of distinct integers and an array of integer arrays \`pieces\`, where the integers in \`pieces\` are **distinct**. Your goal is to form \`arr\` by concatenating the arrays in \`pieces\` **in any order**. However, you are **not** allowed to reorder the integers within each individual \`pieces[i]\`.

Return \`true\` if it is possible to form the array \`arr\` from \`pieces\`. Otherwise, return \`false\`.`,
  constraints: [
    '`1 <= pieces.length <= arr.length <= 100`',
    '`1 <= pieces[i].length <= arr.length`',
    '`1 <= arr[i], pieces[i][j] <= 100`',
    'All integers in `arr` are **distinct**.',
    'All integers in `pieces` are **distinct** (no integer appears in more than one piece).',
  ],
  examples: [
    {
      input: 'arr = [85], pieces = [[85]]',
      output: 'true',
    },
    {
      input: 'arr = [15, 88], pieces = [[88], [15]]',
      output: 'true',
      explanation: 'Concatenate pieces in the order [[15], [88]] to get [15, 88].',
    },
    {
      input: 'arr = [49, 18, 16], pieces = [[16, 18, 49]]',
      output: 'false',
      explanation: 'The piece [16, 18, 49] cannot be reordered, and it does not match the required prefix 49 at index 0.',
    },
  ],
  hints: [
    'Build a map from each piece\'s first element to that piece. Then walk through `arr` and, at each position, look up which piece should start there.',
    'After finding a matching piece by its first element, verify that every element of the piece matches `arr` consecutively.',
    'If any element in `arr` is not the start of any piece, or if the subsequent elements don\'t match, return false.',
  ],
  functionName: 'canFormArray',
  params: ['arr', 'pieces'],
  starterCode: {
    javascript: `function canFormArray(arr, pieces) {

}
`,
    python: `def canFormArray(arr, pieces):
    pass
`,
  },
  visibleTests: [
    { args: [[85], [[85]]], expected: true },
    { args: [[15, 88], [[88], [15]]], expected: true },
    { args: [[49, 18, 16], [[16, 18, 49]]], expected: false },
  ],
  hiddenTests: [
    { args: [[91, 4, 64, 78], [[78], [4, 64], [91]]], expected: true },
    { args: [[1, 2, 3], [[2], [1, 3]]], expected: false },
    { args: [[1], [[1]]], expected: true },
    { args: [[1, 2], [[1, 2]]], expected: true },
    { args: [[3, 1, 2], [[1, 2], [3]]], expected: true },
  ],
};
