import type { Problem } from '../types';

export const problem: Problem = {
  id: 'decode-string',
  title: 'Decode String',
  difficulty: 'medium',
  tags: ['stack', 'strings'],
  description: `Given an encoded string, return its decoded string.

The encoding rule is: \`k[encoded_string]\`, where the \`encoded_string\` inside the square brackets is being repeated exactly \`k\` times. Note that \`k\` is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that all the digits are only for those repeat numbers, \`k\`. For example, there will not be input like \`3a\` or \`2[4]\`.

The test cases are generated so that the length of the output will never exceed \`10^5\`.`,
  examples: [
    { input: 's = "3[a]2[bc]"', output: '"aaabcbc"' },
    { input: 's = "3[a2[c]]"', output: '"accaccacc"' },
    { input: 's = "2[abc]3[cd]ef"', output: '"abcabccdcdcdef"' },
  ],
  constraints: [
    '1 <= s.length <= 30',
    's consists of lowercase English letters, digits, and square brackets.',
    's is guaranteed to be a valid input.',
    'All integers are in range [1, 300].',
  ],
  functionName: 'decodeString',
  params: ['s'],
  starterCode: {
    javascript: 'function decodeString(s) {\n  // your code here\n}\n',
    python: 'def decodeString(s):\n    # your code here\n    pass\n',
  },
  hints: [
    'Use a stack. Push current string and repeat count when you see `[`, pop and repeat when you see `]`.',
    'Maintain a `currentStr` and `currentNum`. On digit, build currentNum. On letter, append to currentStr.',
    'On `[`: push (currentStr, currentNum) to stack, reset both. On `]`: pop (prevStr, k), set currentStr = prevStr + currentStr.repeat(k).',
  ],
  visibleTests: [
    { args: ['3[a]2[bc]'], expected: 'aaabcbc' },
    { args: ['3[a2[c]]'], expected: 'accaccacc' },
    { args: ['2[abc]3[cd]ef'], expected: 'abcabccdcdcdef' },
  ],
  hiddenTests: [
    { args: ['abc'], expected: 'abc' },
    { args: ['10[a]'], expected: 'aaaaaaaaaa' },
    { args: ['2[2[ab]]'], expected: 'abababab' },
    { args: ['1[b]'], expected: 'b' },
  ],
};
