import type { Problem } from '../types';

export const problem: Problem = {
  id: 'decode-string',
  title: 'Decode String',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `Given an encoded string, return its decoded string.

The encoding rule is: \`k[encoded_string]\`, where the \`encoded_string\` inside the square brackets is being repeated exactly \`k\` times. Note that \`k\` is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that all the digits in the input only represent the repetition count \`k\`. For example, there won't be input like \`"3a"\` or \`"2[4]"\`.`,
  constraints: [
    '1 <= s.length <= 30',
    's consists of lowercase English letters, digits, and square brackets \'[]\'.',
    's is guaranteed to be a valid input.',
    'All the integers in s are in the range [1, 300].',
  ],
  examples: [
    {
      input: 's = "3[a]2[bc]"',
      output: '"aaabcbc"',
      explanation: '"a" repeated 3 times → "aaa"; "bc" repeated 2 times → "bcbc".',
    },
    {
      input: 's = "3[a2[c]]"',
      output: '"accaccacc"',
      explanation: '"c" repeated 2 → "cc"; "a"+"cc"="acc" repeated 3 → "accaccacc".',
    },
    {
      input: 's = "2[abc]3[cd]ef"',
      output: '"abcabccdcdcdef"',
      explanation: '"abc"×2 + "cd"×3 + "ef".',
    },
  ],
  hints: [
    'Use a stack. When you see \'[\', push the current string and repeat count.',
    'When you see \']\', pop and build the repeated string.',
  ],
  functionName: 'decodeString',
  params: ['s'],
  starterCode: {
    javascript: `function decodeString(s) {

}`,
    python: `def decodeString(s):
    pass`,
  },
  visibleTests: [
    { args: ['3[a]2[bc]'], expected: 'aaabcbc' },
    { args: ['3[a2[c]]'], expected: 'accaccacc' },
    { args: ['2[abc]3[cd]ef'], expected: 'abcabccdcdcdef' },
  ],
  hiddenTests: [
    { args: ['10[a]'], expected: 'aaaaaaaaaa' },
    { args: ['2[2[a]]'], expected: 'aaaa' },
    { args: ['abc'], expected: 'abc' },
    { args: ['1[b]'], expected: 'b' },
  ],
};
