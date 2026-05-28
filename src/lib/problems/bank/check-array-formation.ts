import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-array-formation',
  title: 'Check Array Formation Through Concatenation',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an array of **distinct** integers \`arr\` and an array of integer arrays \`pieces\`, where the integers in \`pieces\` are **distinct**. Your goal is to form \`arr\` by concatenating the arrays in \`pieces\` **in any order**. However, you are **not** allowed to reorder the integers in each array \`pieces[i]\`.

Return \`true\` if it is possible to form the array \`arr\` from \`pieces\`. Otherwise, return \`false\`.`,
  constraints: [
    '1 <= pieces.length <= arr.length <= 100',
    'sum(pieces[i].length) == arr.length',
    '1 <= pieces[i].length <= arr.length',
    '1 <= arr[i], pieces[i][j] <= 100',
    'The integers in arr are distinct.',
    'The integers in pieces are distinct (i.e., If we flatten pieces in a 1D array, all integers are distinct).',
  ],
  examples: [
    {
      input: 'arr = [15,88], pieces = [[88],[15]]',
      output: 'true',
      explanation: 'Concatenate [15] then [88].',
    },
    {
      input: 'arr = [49,18,16], pieces = [[16,18,49]]',
      output: 'false',
      explanation: 'Even if we put the only piece in any order, it cannot equal arr.',
    },
    {
      input: 'arr = [91,4,64,78], pieces = [[78],[4,64],[91]]',
      output: 'true',
      explanation: 'Concatenate [91] then [4,64] then [78].',
    },
  ],
  hints: [
    'Build a map from each piece\'s first element to the full piece.',
    'Walk through arr: when you see arr[i], look up the piece starting with that value.',
    'Verify that the piece matches the next len(piece) elements of arr.',
  ],
  functionName: 'canFormArray',
  params: ['arr', 'pieces'],
  starterCode: {
    javascript: 'function canFormArray(arr, pieces) {\n\n}\n',
    typescript: "function canFormArray(arr: number[], pieces: number[][]): boolean {\n\n}",

    python: 'def canFormArray(arr, pieces):\n    pass\n',
  },
  visibleTests: [
    { args: [[15, 88], [[88], [15]]], expected: true },
    { args: [[49, 18, 16], [[16, 18, 49]]], expected: false },
    { args: [[91, 4, 64, 78], [[78], [4, 64], [91]]], expected: true },
  ],
  hiddenTests: [
    { args: [[1], [[1]]], expected: true },
    { args: [[1, 2, 3], [[1], [2], [3]]], expected: true },
    { args: [[1, 2, 3], [[1], [3, 2]]], expected: false },
    { args: [[1, 3, 5, 7], [[2, 4, 6, 8]]], expected: false },
  ],
};
