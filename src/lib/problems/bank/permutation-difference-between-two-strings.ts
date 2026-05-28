import type { Problem } from '../types';

export const problem: Problem = {
  id: 'permutation-difference-between-two-strings',
  title: 'Permutation Difference Between Two Strings',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given two strings \`s\` and \`t\` such that every character occurs **at most once** in \`s\` and \`t\` is a **permutation** of \`s\`.

The **permutation difference** between \`s\` and \`t\` is the sum of the **absolute differences** of the indices of each character in \`s\` and its position in \`t\`.

Return the **permutation difference** between \`s\` and \`t\`.`,
  constraints: [
    '1 <= s.length <= 26',
    's consists only of lowercase English letters.',
    'Each character occurs at most once in s.',
    't is a permutation of s.',
  ],
  examples: [
    {
      input: 's = "abc", t = "bac"',
      output: '2',
      explanation: 'a: |0−1|=1, b: |1−0|=1, c: |2−2|=0. Sum = 2.',
    },
    {
      input: 's = "abcd", t = "dabc"',
      output: '6',
      explanation: 'a: |0−1|=1, b: |1−2|=1, c: |2−3|=1, d: |3−0|=3. Sum = 6.',
    },
    {
      input: 's = "z", t = "z"',
      output: '0',
      explanation: 'Single character, already in same position.',
    },
  ],
  hints: [
    'Build a map from each character to its index in t. Then iterate over s and sum |i - map[s[i]]| for each position i.',
    'Since s.length ≤ 26 and all characters are distinct, a simple O(n) scan with a position map suffices.',
    'Edge case: when s === t every character is in the same position so the answer is 0. When s and t are reverses of each other the sum is maximized.',
  ],
  functionName: 'findPermutationDifference',
  params: ['s', 't'],
  starterCode: {
    javascript: `function findPermutationDifference(s, t) {\n\n}`,
    python: `def findPermutationDifference(s: str, t: str) -> int:\n    pass`,
  },
  visibleTests: [
    { args: ['abc', 'bac'], expected: 2 },
    { args: ['abcd', 'dabc'], expected: 6 },
    { args: ['z', 'z'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: 0 },
    { args: ['ab', 'ba'], expected: 2 },
    { args: ['abcde', 'edcba'], expected: 12 },
    { args: ['abcde', 'abcde'], expected: 0 },
    { args: ['abc', 'cab'], expected: 4 },
    { args: ['az', 'za'], expected: 2 },
  ],
};
