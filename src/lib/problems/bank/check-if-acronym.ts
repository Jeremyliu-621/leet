import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-acronym',
  title: 'Check if the String Is an Acronym of Words',
  difficulty: 'easy',
  tags: ['strings', 'arrays'],
  description: `Given an array of strings \`words\` and a string \`s\`, return \`true\` if \`s\` is an **acronym** of \`words\`, and \`false\` otherwise.

The string \`s\` is considered an acronym of \`words\` if it can be formed by concatenating the **first** character of each string in \`words\` **in order**. For example, "ab" is an acronym of ["apple","banana"], but it is not an acronym of ["banana","apple"] or ["apple","banana","cherry"].`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 10',
    '1 <= s.length <= 100',
    'words[i] and s consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["alice","bob","charlie"], s = "abc"',
      output: 'true',
      explanation: 'First characters: a, b, c → "abc".',
    },
    {
      input: 'words = ["an","apple"], s = "a"',
      output: 'false',
      explanation: 'First characters: a, a → "aa" ≠ "a".',
    },
    {
      input: 'words = ["never","gonna","give","up","lose"], s = "nggu"',
      output: 'false',
    },
  ],
  hints: [
    'Level 1: Build the acronym from the first characters of each word.',
    'Level 2: Compare the constructed acronym with s.',
    'Level 3: return words.map(w=>w[0]).join("")===s;',
  ],
  functionName: 'isAcronym',
  params: ['words', 's'],
  starterCode: {
    javascript: 'function isAcronym(words, s) {\n  // your code here\n}\n',
    typescript: "function isAcronym(words: string[], s: string): boolean {\n  // your code here\n}",

    python: 'def isAcronym(words, s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [['alice', 'bob', 'charlie'], 'abc'], expected: true },
    { args: [['an', 'apple'], 'a'], expected: false },
    { args: [['never', 'gonna', 'give', 'up', 'lose'], 'nggu'], expected: false },
  ],
  hiddenTests: [
    { args: [['a'], 'a'], expected: true },
    { args: [['hello', 'world'], 'hw'], expected: true },
    { args: [['hello', 'world'], 'hx'], expected: false },
    { args: [['a', 'b', 'c'], 'abc'], expected: true },
    { args: [['one', 'two', 'three'], 'ott'], expected: true },
  ],
};
