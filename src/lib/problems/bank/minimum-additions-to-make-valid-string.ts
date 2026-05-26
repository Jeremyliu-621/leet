import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-additions-to-make-valid-string',
  title: 'Minimum Additions to Make Valid String',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `Given a string \`word\` consisting of letters \`'a'\`, \`'b'\`, and \`'c'\` only, return the **minimum** number of characters you need to insert so that \`word\` becomes a **valid string**.

A string is **valid** if it can be formed by concatenating the string \`"abc"\` one or more times. For example, \`"abc"\`, \`"abcabc"\`, and \`"abcabcabc"\` are valid, but \`"a"\`, \`"abcc"\`, and \`"abca"\` are not.

You can insert any character at any position.`,
  constraints: [
    '1 <= word.length <= 50',
    "word consists only of letters 'a', 'b', and 'c'",
  ],
  examples: [
    {
      input: 'word = "b"',
      output: '2',
      explanation: 'Insert "a" before and "c" after to get "abc". 2 insertions.',
    },
    {
      input: 'word = "aaa"',
      output: '6',
      explanation: 'Each "a" needs a "b" and "c" after it: "abc"+"abc"+"abc" → 6 insertions.',
    },
    {
      input: 'word = "abc"',
      output: '0',
      explanation: '"abc" is already valid.',
    },
  ],
  hints: [
    'Think greedily: try to form as many complete "abc" groups as possible.',
    'Walk through the string. For each group, try to consume an "a", then a "b", then a "c" if they are present in order. Count the group.',
    'The answer is (number_of_groups * 3) - word.length, since each group needs 3 characters total.',
  ],
  functionName: 'addMinimum',
  params: ['word'],
  starterCode: {
    javascript: 'function addMinimum(word) {\n  // your code here\n}\n',
    python: 'def addMinimum(word):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['b'], expected: 2 },
    { args: ['aaa'], expected: 6 },
    { args: ['abc'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['ab'], expected: 1 },
    { args: ['abab'], expected: 2 },
    { args: ['a'], expected: 2 },
    { args: ['c'], expected: 2 },
    { args: ['abcabc'], expected: 0 },
    { args: ['bc'], expected: 1 },
    { args: ['abcbc'], expected: 1 },
  ],
};
