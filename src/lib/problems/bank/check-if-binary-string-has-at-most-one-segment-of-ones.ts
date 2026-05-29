import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-binary-string-has-at-most-one-segment-of-ones',
  title: 'Check if Binary String Has at Most One Segment of Ones',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a binary string \`s\` **without leading zeros**, return \`true\` if \`s\` contains **at most one contiguous segment of ones**. Otherwise, return \`false\`.`,
  constraints: [
    '1 <= s.length <= 100',
    "s[i] is either '0' or '1'",
    's[0] == \'1\'',
  ],
  examples: [
    {
      input: 's = "1001"',
      output: 'false',
      explanation: 'The 1s at the start and end form two separate segments.',
    },
    {
      input: 's = "110"',
      output: 'true',
      explanation: 'There is only one contiguous segment of 1s.',
    },
  ],
  hints: [
    'A string has more than one segment of 1s if and only if it contains "01" as a substring.',
    'After a 0 appears, any subsequent 1 would start a new segment.',
    'Since the string has no leading zeros (starts with 1), just check if "01" is a substring.',
  ],
  functionName: 'checkOnesSegment',
  params: ['s'],
  starterCode: {
    javascript: `function checkOnesSegment(s) {\n  \n}`,
    typescript: `function checkOnesSegment(s: string): boolean {\n  \n}`,
    python: `def checkOnesSegment(s):\n    `,
  },
  visibleTests: [
    { args: ['1001'], expected: false },
    { args: ['110'], expected: true },
    { args: ['1'], expected: true },
  ],
  hiddenTests: [
    { args: ['1001'], expected: false },
    { args: ['110'], expected: true },
    { args: ['1'], expected: true },
    { args: ['111'], expected: true },
    { args: ['10'], expected: true },
    { args: ['101'], expected: false },
    { args: ['1100'], expected: true },
    { args: ['11011'], expected: false },
  ],
};
