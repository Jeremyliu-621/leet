import type { Problem } from '../types';

export const problem: Problem = {
  id: 'make-three-strings-equal',
  title: 'Make Three Strings Equal',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given three strings \`s1\`, \`s2\`, and \`s3\`.

In one operation, you can choose any **non-empty** string among the three and **delete its last character**.

Return the **minimum number of operations** needed to make all three strings equal. If it is impossible to make them equal, return \`-1\`.

**Note:** The resulting equal strings must be **non-empty**.`,
  constraints: [
    '`1 <= s1.length, s2.length, s3.length <= 100`',
    '`s1`, `s2`, `s3` consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's1 = "abc", s2 = "abb", s3 = "ab"',
      output: '2',
      explanation: 'The longest common prefix is "ab" (length 2). Delete the last character of s1 and s2 once each: 2 operations.',
    },
    {
      input: 's1 = "dac", s2 = "bac", s3 = "cac"',
      output: '-1',
      explanation: 'The first characters differ (d, b, c), so there is no common non-empty prefix. Return -1.',
    },
    {
      input: 's1 = "abc", s2 = "abc", s3 = "abc"',
      output: '0',
      explanation: 'All three strings are already equal.',
    },
  ],
  hints: [
    'The final equal string must be a prefix shared by all three. Find the length of the longest common prefix of s1, s2, and s3.',
    'If the longest common prefix has length 0, it is impossible (the result must be non-empty), so return -1.',
    'Otherwise, the answer is (s1.length - prefixLen) + (s2.length - prefixLen) + (s3.length - prefixLen), which equals the total characters to remove.',
  ],
  functionName: 'equalStrings',
  params: ['s1', 's2', 's3'],
  starterCode: {
    javascript: `function equalStrings(s1, s2, s3) {

}`,
    typescript: 'function equalStrings(s1: string, s2: string, s3: string): number {\n\n}',
    python: `def equalStrings(s1, s2, s3):
    pass`,
  },
  visibleTests: [
    { args: ['abc', 'abb', 'ab'], expected: 2 },
    { args: ['dac', 'bac', 'cac'], expected: -1 },
    { args: ['abc', 'abc', 'abc'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['a', 'a', 'a'], expected: 0 },
    { args: ['ab', 'ab', 'a'], expected: 2 },
    { args: ['abcde', 'abc', 'ab'], expected: 4 },
    { args: ['abcdef', 'abcde', 'abcd'], expected: 3 },
    { args: ['xyz', 'xy', 'x'], expected: 3 },
    { args: ['hello', 'world', 'help'], expected: -1 },
    { args: ['a', 'b', 'a'], expected: -1 },
  ],
};
