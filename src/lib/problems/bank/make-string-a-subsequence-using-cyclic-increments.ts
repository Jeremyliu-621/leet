import type { Problem } from '../types';

export const problem: Problem = {
  id: 'make-string-a-subsequence-using-cyclic-increments',
  title: 'Make String a Subsequence Using Cyclic Increments',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `Given two strings \`str1\` and \`str2\`, you can choose **at most one** index in \`str1\` and **increment** its character by one (cyclically: \`'z'\` becomes \`'a'\`).

Wait — the actual operation is: choose any **subset of indices** in \`str1\` and cyclically increment the character at each chosen index by 1 once. Return \`true\` if you can make \`str2\` a **subsequence** of the resulting \`str1\`.

**Key observation:** Each character in \`str1\` can match a character in \`str2\` if it is equal to it, OR if incrementing it by one (cyclically) makes it equal.`,
  constraints: [
    '1 <= str1.length <= 10^5',
    '1 <= str2.length <= 10^5',
    'str1 and str2 consist of only lowercase English letters.',
  ],
  examples: [
    {
      input: 'str1 = "abc", str2 = "ad"',
      output: 'true',
      explanation: 'Increment \'b\' to \'c\'? No. Match \'a\'→\'a\', then \'b\' can increment to \'c\'? No. Actually \'c\'→\'d\' would work: match \'a\'→\'a\', then increment \'c\' to \'d\'. Output: true.',
    },
    {
      input: 'str1 = "zc", str2 = "ad"',
      output: 'true',
      explanation: '\'z\' can increment to \'a\' (cyclic). \'c\' can increment to \'d\'.',
    },
    {
      input: 'str1 = "ab", str2 = "d"',
      output: 'false',
      explanation: 'Neither \'a\' nor \'b\' can become \'d\' with a single cyclic increment.',
    },
  ],
  hints: [
    'Use two pointers: pointer i for str1, pointer j for str2.',
    'At each step, check if str1[i] can match str2[j]: either they are equal, or (str1[i] + 1) % 26 == str2[j] - \'a\' (cyclically).',
    'If a match is found, advance j. Always advance i. Return true if j reaches str2.length.',
  ],
  starterCode: {
    javascript: `function canMakeSubsequence(str1, str2) {
  // str1, str2: strings of lowercase letters
  // Return true if str2 can become a subsequence of str1
  // after cyclically incrementing some characters of str1
}`,
    python: `def canMakeSubsequence(str1: str, str2: str) -> bool:
    # Your code here
    pass`,
  },
  functionName: 'canMakeSubsequence',
  params: ['str1', 'str2'],
  visibleTests: [
    { args: ['abc', 'ad'], expected: true },
    { args: ['zc', 'ad'], expected: true },
    { args: ['ab', 'd'], expected: false },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: true },
    { args: ['a', 'b'], expected: true },
    { args: ['a', 'c'], expected: false },
    { args: ['z', 'a'], expected: true },
    { args: ['z', 'b'], expected: false },
    { args: ['abcde', 'bdf'], expected: true },
    { args: ['aaaa', 'bb'], expected: true },
    { args: ['abc', 'ace'], expected: false },
    { args: ['xyz', 'yza'], expected: true },
  ],
};
