import type { Problem } from '../types';

export const problem: Problem = {
  id: 'word-break-ii',
  title: 'All Valid Word Break Sentences',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'backtracking', 'strings'],
  description: `Given a string \`s\` and a dictionary of strings \`wordDict\`, insert spaces into \`s\` to construct sentences where every word is a valid dictionary word. Return **all** possible sentences in **sorted** order. The same word may be reused as many times as needed.

**Example:**
- \`s = "catsanddog"\`, \`wordDict = ["cat","cats","and","sand","dog"]\`
  → \`["cat sand dog", "cats and dog"]\`

> The result is returned **sorted lexicographically** so tests are deterministic.`,
  constraints: [
    '`1 <= s.length <= 20`',
    '`1 <= wordDict.length <= 1000`',
    '`1 <= wordDict[i].length <= 10`',
    '`s` and `wordDict[i]` consist of only lowercase English letters',
    'All strings in `wordDict` are unique',
  ],
  examples: [
    {
      input: 's = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]',
      output: '["cat sand dog","cats and dog"]',
      explanation: 'Two valid segmentations exist.',
    },
    {
      input: 's = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]',
      output: '["pine apple pen apple","pine applepen apple","pineapple pen apple"]',
      explanation: 'The word "apple" is reused multiple times.',
    },
    {
      input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]',
      output: '[]',
      explanation: 'No valid segmentation exists.',
    },
  ],
  hints: [
    'Use memoized DFS: at each index `i`, try every word in `wordDict` that matches `s.substring(i, i + word.length)`. If it matches, recurse from `i + word.length` and prepend the word to each returned completion.',
    'Cache results keyed by start index so repeated sub-problems are not recomputed. Return an empty array when no completion exists, or an array of sentence suffixes starting from that position.',
    'Base case: when `start === s.length`, return `[""]` (one empty completion). When building the sentence, join the current word with the suffix using a space, then trim. Finally, sort the full result array before returning.',
  ],
  functionName: 'wordBreak',
  params: ['s', 'wordDict'],
  starterCode: {
    javascript: `function wordBreak(s, wordDict) {
  const dict = Array.from(wordDict);
  // return sorted array of all valid sentences
}
`,
    typescript: `function wordBreak(s: string, wordDict: string[]): string[] {

}`,
    python: `def wordBreak(s, wordDict):
    wordDict = list(wordDict.to_py() if hasattr(wordDict, 'to_py') else wordDict)
    # return sorted list of all valid sentences
`,
  },
  visibleTests: [
    {
      args: ['catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']],
      expected: ['cat sand dog', 'cats and dog'],
    },
    {
      args: [
        'pineapplepenapple',
        ['apple', 'pen', 'applepen', 'pine', 'pineapple'],
      ],
      expected: [
        'pine apple pen apple',
        'pine applepen apple',
        'pineapple pen apple',
      ],
    },
    {
      args: ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat']],
      expected: [],
    },
  ],
  hiddenTests: [
    {
      args: ['a', ['a']],
      expected: ['a'],
    },
    {
      args: ['ab', ['a', 'b']],
      expected: ['a b'],
    },
    {
      args: ['aaa', ['a', 'aa']],
      expected: ['a a a', 'a aa', 'aa a'],
    },
    {
      args: ['aa', ['a', 'aa']],
      expected: ['a a', 'aa'],
    },
    {
      args: ['abcd', ['ab', 'cd', 'abc', 'd', 'a', 'bcd']],
      expected: ['a bcd', 'ab cd', 'abc d'],
    },
    {
      args: ['applepenapple', ['apple', 'pen']],
      expected: ['apple pen apple'],
    },
    {
      args: ['leetcode', ['leet', 'code']],
      expected: ['leet code'],
    },
    {
      args: ['leetcode', ['leet', 'co', 'de', 'code']],
      expected: ['leet co de', 'leet code'],
    },
    {
      args: ['aaaa', ['a', 'aa', 'aaa']],
      expected: ['a a a a', 'a a aa', 'a aa a', 'a aaa', 'aa a a', 'aa aa', 'aaa a'],
    },
    {
      args: ['noway', ['no', 'way', 'now', 'ay']],
      expected: ['no way', 'now ay'],
    },
  ],
};
