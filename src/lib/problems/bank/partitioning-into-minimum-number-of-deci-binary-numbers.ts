import type { Problem } from '../types';

export const problem: Problem = {
  id: 'partitioning-into-minimum-number-of-deci-binary-numbers',
  title: 'Partitioning Into Minimum Number Of Deci-Binary Numbers',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `A decimal number is called **deci-binary** if each of its digits is either \`0\` or \`1\` without any leading zeros. For example, \`101\` and \`1100\` are deci-binary, while \`112\` and \`3001\` are not.

Given a string \`n\` that represents a positive decimal integer, return the **minimum** number of positive deci-binary numbers needed so that they sum to \`n\`.`,
  constraints: [
    '`1 <= n.length <= 10^5`',
    '`n` consists of only digits.',
    '`n` does not contain any leading zeros.',
  ],
  examples: [
    {
      input: 'n = "32"',
      output: '3',
      explanation: '10 + 11 + 11 = 32',
    },
    {
      input: 'n = "82734"',
      output: '8',
      explanation: 'The digit 8 requires at least 8 deci-binary numbers (each contributing a 1 in that position).',
    },
    {
      input: 'n = "27346209830709182346"',
      output: '9',
      explanation: 'The maximum digit 9 determines the minimum count.',
    },
  ],
  hints: [
    'Each deci-binary number contributes at most 1 to each digit position.',
    'The digit d at any position requires at least d deci-binary numbers.',
    'The answer is simply the maximum digit in the string n.',
  ],
  functionName: 'minPartitions',
  params: ['n'],
  starterCode: {
    javascript: `function minPartitions(n) {

}`,
    typescript: `function minPartitions(n: string): number {

}`,
    python: `def minPartitions(n):
    pass`,
  },
  visibleTests: [
    { args: ['32'], expected: 3 },
    { args: ['82734'], expected: 8 },
    { args: ['27346209830709182346'], expected: 9 },
  ],
  hiddenTests: [
    { args: ['1'], expected: 1 },
    { args: ['9'], expected: 9 },
    { args: ['10'], expected: 1 },
    { args: ['19'], expected: 9 },
    { args: ['111111111'], expected: 1 },
    { args: ['999999999'], expected: 9 },
    { args: ['123456789'], expected: 9 },
  ],
};
