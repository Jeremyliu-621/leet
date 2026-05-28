import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-lines-to-write-string',
  title: 'Number of Lines To Write String',
  difficulty: 'easy',
  tags: ['strings', 'arrays'],
  description: `You are given a string \`s\` of lowercase English letters and an array \`widths\` denoting **how many pixels wide** each lowercase English letter is. Specifically, \`widths[0]\` is the width of \`'a'\`, \`widths[1]\` is the width of \`'b'\`, and so on.

You are trying to write \`s\` across several lines, where **each line is maximum** \`100\` **pixels wide**. Starting from the beginning of \`s\`, write as many letters on the first line such that the total width does not exceed \`100\` pixels. Then, from where you stopped in \`s\`, continue writing as many letters as you can on the second line. Continue this process until you have written all of \`s\`.

Return *an array* \`result\` *of length* \`2\` *where*:
- \`result[0]\` *is the total number of lines.*
- \`result[1]\` *is the width of the last line in pixels.*`,
  constraints: [
    'widths.length == 26',
    '2 <= widths[i] <= 10',
    '1 <= s.length <= 1000',
    's contains only lowercase English letters.',
  ],
  examples: [
    {
      input: 'widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "abcdefghijklmnopqrstuvwxyz"',
      output: '[3,60]',
      explanation: 'All letters are 10 pixels wide. First two lines 100 pixels wide (10 letters each), last line 60 pixels (6 letters).',
    },
    {
      input: 'widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "bbbcccdddaaa"',
      output: '[2,4]',
      explanation: '\'b\',\'c\',\'d\' each 10 pixels wide; \'a\' is 4 pixels wide.',
    },
  ],
  hints: [
    'Track the current line\'s pixel width.',
    'For each character, if adding its width would exceed 100, start a new line.',
    'Return [lines, currentWidth] at the end.',
  ],
  functionName: 'numberOfLines',
  params: ['widths', 's'],
  starterCode: {
    javascript: 'function numberOfLines(widths, s) {\n\n}\n',
    typescript: "function numberOfLines(widths: number[], s: string): number[] {\n\n}",

    python: 'def numberOfLines(widths, s):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 'abcdefghijklmnopqrstuvwxyz'],
      expected: [3, 60],
    },
    {
      args: [[4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 'bbbcccdddaaa'],
      expected: [2, 4],
    },
  ],
  hiddenTests: [
    { args: [[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 'a'], expected: [1, 10] },
    { args: [[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], 'aaaa'], expected: [1, 8] },
    { args: [[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 'aaaaaaaaaa'], expected: [1, 100] },
    { args: [[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], 'aaaaaaaaaab'], expected: [2, 10] },
  ],
};
