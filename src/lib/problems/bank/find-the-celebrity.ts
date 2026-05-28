import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-celebrity',
  title: 'Find the Celebrity',
  difficulty: 'medium',
  tags: ['arrays', 'graph'],
  description: `In a party of \`n\` people (labeled \`0\` to \`n-1\`), there may be a **celebrity**: a person who is **known by everyone else** but **knows nobody**.

You are given a square boolean matrix \`knows\` where \`knows[a][b] = 1\` means person \`a\` knows person \`b\`.

Return the label of the celebrity if one exists, or \`-1\` if no celebrity is found.

**Constraint:** The algorithm should run in O(n) time.`,
  constraints: [
    'n == knows.length == knows[i].length',
    '2 <= n <= 100',
    'knows[i][j] is 0 or 1',
    'knows[i][i] == 0',
  ],
  examples: [
    {
      input: 'knows = [[0,1,0],[0,0,0],[0,1,0]]',
      output: '1',
      explanation: 'Person 1 is known by 0 and 2, and knows nobody.',
    },
    {
      input: 'knows = [[0,0],[0,0]]',
      output: '-1',
      explanation: 'Nobody knows anybody, so there is no celebrity.',
    },
    {
      input: 'knows = [[0,0,1],[0,0,1],[0,0,0]]',
      output: '2',
      explanation: 'Person 2 is known by 0 and 1, and knows nobody.',
    },
  ],
  hints: [
    'Use a two-pointer / candidate-elimination approach: start with candidate = 0.',
    'For each person i from 1 to n-1: if candidate knows i, update candidate = i (because a celebrity cannot know anyone).',
    'After the loop, verify the final candidate by checking they know nobody and everyone knows them.',
    'This finds any celebrity (if one exists) in a single pass, then O(n) verification.',
  ],
  functionName: 'findCelebrity',
  params: ['knows'],
  starterCode: {
    javascript: `function findCelebrity(knows) {

}`,
    typescript: "function findCelebrity(knows: number[][]): number {\n\n}",

    python: `def findCelebrity(knows):
    pass`,
  },
  visibleTests: [
    { args: [[[0, 1, 0], [0, 0, 0], [0, 1, 0]]], expected: 1 },
    { args: [[[0, 0], [0, 0]]], expected: -1 },
    { args: [[[0, 0, 1], [0, 0, 1], [0, 0, 0]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[0, 1], [0, 0]]], expected: 1 },
    { args: [[[0, 1], [1, 0]]], expected: -1 },
    { args: [[[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 0]]], expected: 3 },
    { args: [[[0, 1, 0], [1, 0, 0], [0, 0, 0]]], expected: -1 },
  ],
};
