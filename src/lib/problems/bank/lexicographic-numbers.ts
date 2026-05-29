import type { Problem } from '../types';

export const problem: Problem = {
  id: 'lexicographic-numbers',
  title: 'Lexicographic Numbers',
  difficulty: 'medium',
  tags: ['math', 'trie'],
  description: `Given an integer \`n\`, return all the numbers in the range \`[1, n]\` sorted in **lexicographic order**.

You must write an algorithm that runs in **O(n)** time and uses **O(1)** extra space (excluding the output array).`,
  constraints: ['1 <= n <= 5 * 10^4'],
  examples: [
    {
      input: 'n = 13',
      output: '[1,10,11,12,13,2,3,4,5,6,7,8,9]',
      explanation: 'Sorted lexicographically: 1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9.',
    },
    {
      input: 'n = 2',
      output: '[1,2]',
      explanation: '1 and 2 are already in lexicographic order.',
    },
  ],
  hints: [
    'Think of the numbers as nodes in a trie. Traverse the trie in pre-order (DFS): visit a node, then its children 0-9.',
    'Start at curr = 1. Try to go deeper (curr * 10). If curr * 10 > n, increment curr. If curr % 10 == 9 or curr + 1 > n, go up (curr /= 10, then curr++).',
    'Repeat until you have collected n numbers.',
  ],
  functionName: 'lexicalOrder',
  params: ['n'],
  starterCode: {
    javascript: 'function lexicalOrder(n) {\n  \n}\n',
    typescript: 'function lexicalOrder(n: number): number[] {\n  \n}\n',
    python: 'def lexicalOrder(n):\n    pass\n',
  },
  visibleTests: [
    { args: [13], expected: [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9] },
    { args: [2], expected: [1, 2] },
  ],
  hiddenTests: [
    { args: [1], expected: [1] },
    { args: [10], expected: [1, 10, 2, 3, 4, 5, 6, 7, 8, 9] },
    { args: [20], expected: [1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2, 20, 3, 4, 5, 6, 7, 8, 9] },
    { args: [5], expected: [1, 2, 3, 4, 5] },
    { args: [100], expected: [1,10,100,11,12,13,14,15,16,17,18,19,2,20,21,22,23,24,25,26,27,28,29,3,30,31,32,33,34,35,36,37,38,39,4,40,41,42,43,44,45,46,47,48,49,5,50,51,52,53,54,55,56,57,58,59,6,60,61,62,63,64,65,66,67,68,69,7,70,71,72,73,74,75,76,77,78,79,8,80,81,82,83,84,85,86,87,88,89,9,90,91,92,93,94,95,96,97,98,99] },
  ],
};
