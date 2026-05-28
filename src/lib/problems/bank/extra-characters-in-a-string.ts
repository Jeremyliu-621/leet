import type { Problem } from '../types';

export const problem: Problem = {
  id: 'extra-characters-in-a-string',
  title: 'Extra Characters in a String',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'strings'],
  description: `You are given a **0-indexed** string \`s\` and a dictionary of words \`dictionary\`. You have to break \`s\` into one or more **non-overlapping** substrings such that each substring is present in \`dictionary\`. There may be some **extra** characters in \`s\` which are not present in any substring.

Return the **minimum** number of extra characters left over if you break up \`s\` optimally.`,
  constraints: [
    '1 <= s.length <= 50',
    '1 <= dictionary.length <= 50',
    '1 <= dictionary[i].length <= 50',
    's and dictionary[i] consist only of lowercase English letters.',
    'dictionary contains distinct words.',
  ],
  examples: [
    {
      input: 's = "leetscode", dictionary = ["leet","code","leetcode"]',
      output: '1',
      explanation: 's = "leet" + s + "code" using dictionary words "leet" and "code", leaving "s" (index 4) as the 1 extra character.',
    },
    {
      input: 's = "sayhelloworld", dictionary = ["hello","world"]',
      output: '3',
      explanation: '"say" are 3 extra characters; "hello" + "world" covers the rest.',
    },
  ],
  hints: [
    'Define dp[i] = minimum extra characters in s[0..i-1].',
    'dp[0] = 0. For each position i, either s[i-1] is extra (dp[i] = dp[i-1] + 1), or some word in the dictionary matches s[j..i-1] and dp[i] = dp[j].',
    'Iterate j from 0 to i-1 and check if dictionary has s.substring(j, i). Take the minimum.',
  ],
  functionName: 'minExtraChar',
  params: ['s', 'dictionary'],
  starterCode: {
    javascript: 'function minExtraChar(s, dictionary) {\n  \n}\n',
    typescript: "function minExtraChar(s: string, dictionary: string[]): number {\n  \n}",

    python: 'def minExtraChar(s, dictionary):\n    pass\n',
  },
  visibleTests: [
    { args: ['leetscode', ['leet', 'code', 'leetcode']], expected: 1 },
    { args: ['sayhelloworld', ['hello', 'world']], expected: 3 },
    { args: ['abc', ['a', 'b', 'c']], expected: 0 },
  ],
  hiddenTests: [
    { args: ['a', ['a']], expected: 0 },
    { args: ['a', ['b']], expected: 1 },
    { args: ['abcd', ['ab', 'cd']], expected: 0 },
    { args: ['abcde', ['ab', 'cd']], expected: 1 },
    { args: ['aaaa', ['a', 'aa', 'aaa']], expected: 0 },
  ],
};
