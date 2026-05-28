import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-extra-characters-in-a-string',
  title: 'Minimum Extra Characters in a String',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given a 0-indexed string \`s\` and a dictionary of words \`dictionary\`. You have to break \`s\` into one or more non-overlapping substrings such that each substring is present in \`dictionary\`. There may be some extra characters in \`s\` which are not present in any substring.

Return the **minimum** number of extra characters left over if you break up \`s\` optimally.`,
  constraints: [
    '`1 <= s.length <= 50`',
    '`1 <= dictionary.length <= 50`',
    '`1 <= dictionary[i].length <= 50`',
    '`dictionary[i]` and `s` consist of only lowercase English letters.',
    '`dictionary` contains distinct words.',
  ],
  examples: [
    {
      input: 's = "leetscode", dictionary = ["leet","code","leetcode"]',
      output: '1',
      explanation: 'We can break s into "leet" + "s" + "code" with 1 extra character "s", or "leetscode" where "leetscode" is not in the dictionary leaving 9 characters. The optimal is 1.',
    },
    {
      input: 's = "sayhelloworld", dictionary = ["hello","world"]',
      output: '3',
      explanation: 'We can break s into "say" + "hello" + "world" with 3 extra characters "s", "a", "y".',
    },
  ],
  hints: [
    'Use dynamic programming where `dp[i]` = minimum extra characters using the first `i` characters of `s`.',
    'At each position `j`, try all starting positions `i`. If `s[i..j-1]` is in the dictionary, then `dp[j] = min(dp[j], dp[i])`.',
    'Also consider skipping the current character: `dp[j] = min(dp[j], dp[j-1] + 1)`.',
    'Store the dictionary in a Set for O(1) lookups.',
  ],
  functionName: 'minExtraChar',
  params: ['s', 'dictionary'],
  starterCode: {
    javascript: `function minExtraChar(s, dictionary) {

}`,
    typescript: "function minExtraChar(s: string, dictionary: string[]): number {\n\n}",

    python: `def minExtraChar(s: str, dictionary: list[str]) -> int:
    pass`,
  },
  visibleTests: [
    { args: ['leetscode', ['leet', 'code', 'leetcode']], expected: 1 },
    { args: ['sayhelloworld', ['hello', 'world']], expected: 3 },
  ],
  hiddenTests: [
    { args: ['a', ['a']], expected: 0 },
    { args: ['a', ['b']], expected: 1 },
    { args: ['abc', ['bc']], expected: 1 },
    { args: ['abcdef', ['abc', 'def']], expected: 0 },
    { args: ['', ['ab']], expected: 0 },
  ],
};
