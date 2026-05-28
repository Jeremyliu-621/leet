import type { Problem } from '../types';

export const problem: Problem = {
  id: 'unique-binary-search-trees',
  title: 'Unique Binary Search Trees',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'math'],
  description: `Given an integer \`n\`, return the number of structurally unique BSTs (binary search trees) which have exactly \`n\` nodes of unique values from \`1\` to \`n\`.`,
  constraints: [
    '`1 <= n <= 19`',
  ],
  examples: [
    {
      input: 'n = 3',
      output: '5',
      explanation: 'With values 1, 2, 3 there are 5 structurally unique BSTs.',
    },
    {
      input: 'n = 1',
      output: '1',
    },
  ],
  hints: [
    'Let G(n) be the number of unique BSTs with n nodes. G(0) = 1, G(1) = 1.',
    'For each value i from 1 to n as root: left subtree has i-1 nodes, right has n-i nodes.',
    'G(n) = sum over i of G(i-1) * G(n-i). This is the nth Catalan number.',
  ],
  functionName: 'numTrees',
  params: ['n'],
  starterCode: {
    javascript: 'function numTrees(n) {\n  \n}\n',
    python: 'def numTrees(n):\n    pass\n',
  },
  visibleTests: [
    { args: [3], expected: 5 },
    { args: [1], expected: 1 },
    { args: [4], expected: 14 },
  ],
  hiddenTests: [
    { args: [2], expected: 2 },
    { args: [5], expected: 42 },
    { args: [10], expected: 16796 },
    { args: [19], expected: 1767263190 },
  ],
};
