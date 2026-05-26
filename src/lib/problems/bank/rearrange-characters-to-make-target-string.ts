import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rearrange-characters-to-make-target-string',
  title: 'Rearrange Characters to Make Target String',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given two **0-indexed** strings \`s\` and \`target\`. You want to make some copies of \`target\` using the characters of \`s\`.

Return the **maximum** number of copies of \`target\` that can be formed by taking characters from \`s\` and rearranging them. Each character in \`s\` can only be used in one copy of \`target\`.`,
  constraints: [
    '1 <= s.length <= 100',
    '1 <= target.length <= 10',
    's and target consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "ilovecodingonleetcode", target = "code"',
      output: '2',
      explanation: '"code" appears twice: once for "code" and once using the second set of c,o,d,e from the string.',
    },
    {
      input: 's = "abcba", target = "abc"',
      output: '1',
      explanation: 'a:2, b:2, c:1 in s; target needs a:1, b:1, c:1. Min = 1.',
    },
    {
      input: 's = "abbaccaddaeea", target = "aaaaa"',
      output: '1',
      explanation: 's has 5 a\'s. target needs 5 a\'s. Result = 5/5 = 1.',
    },
  ],
  hints: [
    'Count the frequency of each character in both s and target.',
    'For each character in target, divide floor(count_in_s / count_in_target).',
    'The answer is the minimum of these quotients.',
  ],
  functionName: 'rearrangeCharacters',
  params: ['s', 'target'],
  starterCode: {
    javascript: 'function rearrangeCharacters(s, target) {\n  \n}\n',
    python: 'def rearrangeCharacters(s, target):\n    pass\n',
  },
  visibleTests: [
    { args: ['ilovecodingonleetcode', 'code'], expected: 2 },
    { args: ['abcba', 'abc'], expected: 1 },
    { args: ['abbaccaddaeea', 'aaaaa'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['a', 'b'], expected: 0 },
    { args: ['aaa', 'a'], expected: 3 },
    { args: ['xyz', 'xyz'], expected: 1 },
    { args: ['xyzxyz', 'xyz'], expected: 2 },
    { args: ['aabbaabb', 'ab'], expected: 4 },
  ],
};
