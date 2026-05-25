import type { Problem } from '../types';

export const problem: Problem = {
  id: 'separate-black-and-white-balls',
  title: 'Separate Black and White Balls',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `There are \`n\` balls on a table, each ball has a color black or white.

You are given a **0-indexed** binary string \`s\` of length \`n\`, where \`1\` and \`0\` represent black and white balls, respectively.

In each step, you can choose two **adjacent** balls and swap them.

Return the **minimum** number of steps to group all the black balls to the right and all the white balls to the left.`,
  constraints: [
    '1 <= n <= 10^5',
    's[i] is either \'0\' or \'1\'.',
  ],
  examples: [
    {
      input: 's = "101"',
      output: '1',
      explanation: 'Swap s[0] and s[1], s = "011".',
    },
    {
      input: 's = "100"',
      output: '2',
      explanation: 'Swap s[0] and s[1], s = "010". Swap s[1] and s[2], s = "001".',
    },
  ],
  hints: [
    'Count how many white balls (\'0\') have been seen so far as you scan left to right.',
    'Each time you encounter a white ball at position i, it needs to pass all the black balls before it that haven\'t yet been passed — which equals (i - zerosCount).',
    'Accumulate that cost for every white ball.',
  ],
  functionName: 'minimumSteps',
  params: ['s'],
  starterCode: {
    javascript: 'function minimumSteps(s) {\n\n}\n',
    python: 'def minimumSteps(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['101'], expected: 1 },
    { args: ['100'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['0111'], expected: 0 },
    { args: ['1100'], expected: 4 },
    { args: ['110'], expected: 2 },
    { args: ['010'], expected: 1 },
  ],
};
