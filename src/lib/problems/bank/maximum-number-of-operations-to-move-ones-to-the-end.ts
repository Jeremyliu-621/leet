import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-operations-to-move-ones-to-the-end',
  title: 'Maximum Number of Operations to Move Ones to the End',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You are given a binary string \`s\`.

You can perform the following operation **any number of times**:
- Choose **any** index \`i\` such that \`s[i] == '1'\` and \`s[i+1] == '0'\`, then **swap** \`s[i]\` and \`s[i+1]\`.

Return the **maximum** number of operations that can be performed.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's[i] is either \'0\' or \'1\'.',
  ],
  examples: [
    {
      input: 's = "1001101"',
      output: '5',
      explanation: 'Each \'1\' contributes one operation per \'0\' to its right. 1 at pos 0: 3 zeros (pos 1,2,5). 1 at pos 3: 1 zero (pos 5). 1 at pos 4: 1 zero (pos 5). Total = 5.',
    },
    {
      input: 's = "00111"',
      output: '0',
      explanation: 'No 1 has a 0 immediately to its right, so no operations.',
    },
  ],
  hints: [
    'For each \'1\' in the string, count how many \'0\'s appear after it (to its right). Each such 0 requires one operation for that 1 to pass.',
    'Count total zeros to the right of each 1. This equals total operations.',
    'Equivalently: as you scan left to right, maintain a count of 1s seen so far. When you see a 0, add the number of 1s seen so far to the answer.',
  ],
  functionName: 'maxOperations',
  params: ['s'],
  starterCode: {
    javascript: 'function maxOperations(s) {\n  \n}\n',
    typescript: 'function maxOperations(s: string): number {\n  \n}\n',
    python: 'def maxOperations(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['1001101'], expected: 5 },
    { args: ['00111'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['1'], expected: 0 },
    { args: ['10'], expected: 1 },
    { args: ['01'], expected: 0 },
    { args: ['1100'], expected: 4 },
    { args: ['1010'], expected: 3 },
    { args: ['111000'], expected: 9 },
  ],
};
