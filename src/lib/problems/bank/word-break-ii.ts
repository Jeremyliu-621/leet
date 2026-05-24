import type { Problem } from '../types';

export const problem: Problem = {
  id: 'word-break-ii',
  title: 'Word Break II',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'backtracking'],
  description: `Given a string \`s\` and a dictionary of strings \`wordDict\`, add spaces in \`s\` to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in **any order**.

The same word in the dictionary may be reused multiple times in the segmentation.`,
  constraints: [
    '`1 <= s.length <= 20`',
    '`1 <= wordDict.length <= 1000`',
    '`1 <= wordDict[i].length <= 10`',
    '`s` and `wordDict[i]` consist of only lowercase English letters',
    'All the strings of `wordDict` are unique',
  ],
  examples: [
    {
      input: 's = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]',
      output: '["cats and dog","cat sand dog"]',
    },
    {
      input: 's = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]',
      output: '["pine apple pen apple","pine applepen apple","pineapple pen apple"]',
    },
    {
      input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]',
      output: '[]',
    },
  ],
  hints: [
    'Use memoized backtracking: from each position, try all words that match the prefix. If you reach the end, you found a valid sentence.',
    'Memoize with a Map from start index to list of suffixes to avoid recomputation.',
  ],
  functionName: 'wordBreak',
  params: ['s', 'wordDict'],
  starterCode: {
    javascript: `function wordBreak(s, wordDict) {

}`,
    python: `def wordBreak(s, wordDict):
    pass`,
  },
  visibleTests: [
    { args: ['catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']], expected: ['cat sand dog', 'cats and dog'] },
    { args: ['pineapplepenapple', ['apple', 'pen', 'applepen', 'pine', 'pineapple']], expected: ['pine apple pen apple', 'pine applepen apple', 'pineapple pen apple'] },
    { args: ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat']], expected: [] },
  ],
  hiddenTests: [
    { args: ['a', ['a']], expected: ['a'] },
    { args: ['ab', ['a', 'b']], expected: ['a b'] },
    { args: ['aaa', ['a', 'aa']], expected: ['a a a', 'a aa', 'aa a'] },
  ],
};
