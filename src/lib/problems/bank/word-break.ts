import type { Problem } from '../types';

export const problem: Problem = {
  id: 'word-break',
  title: 'Word Break',
  difficulty: 'hard',
  tags: ['strings', 'hash-map', 'dynamic-programming'],
  description: `Given a string \`s\` and a list of dictionary words \`wordDict\`, return \`true\` if \`s\` can be segmented into a space-separated sequence of one or more dictionary words.

The same word from the dictionary may be reused multiple times in the segmentation.

**Example:** \`s = "leetcode"\`, \`wordDict = ["leet","code"]\` → \`true\` because \`"leetcode"\` = \`"leet" + "code"\`.`,
  constraints: [
    '1 <= s.length <= 300',
    '1 <= wordDict.length <= 1000',
    '1 <= wordDict[i].length <= 20',
    's and wordDict[i] consist of lowercase English letters',
    'All words in wordDict are unique',
  ],
  examples: [
    {
      input: 's = "leetcode", wordDict = ["leet","code"]',
      output: 'true',
      explanation: '"leetcode" can be segmented as "leet code".',
    },
    {
      input: 's = "applepenapple", wordDict = ["apple","pen"]',
      output: 'true',
      explanation: '"applepenapple" = "apple" + "pen" + "apple". Words can be reused.',
    },
    {
      input: 's = "catsandog", wordDict = ["cats","dog","sand","an","cat"]',
      output: 'false',
      explanation: 'No valid segmentation exists for "catsandog".',
    },
  ],
  hints: [
    'Use dynamic programming. Let dp[i] = true if s[0..i-1] can be segmented using the dictionary. Build up from dp[0] = true (empty string).',
    'For each position i from 1 to s.length, check every position j < i. If dp[j] is true and s[j..i-1] is a word in the dictionary, set dp[i] = true. Use a Set for O(1) dictionary lookups.',
    '`const wordSet = new Set(wordDict);\nconst dp = new Array(s.length + 1).fill(false);\ndp[0] = true;\nfor (let i = 1; i <= s.length; i++) {\n  for (let j = 0; j < i; j++) {\n    if (dp[j] && wordSet.has(s.slice(j, i))) {\n      dp[i] = true;\n      break;\n    }\n  }\n}\nreturn dp[s.length];`',
  ],
  functionName: 'wordBreak',
  params: ['s', 'wordDict'],
  starterCode: {
    javascript: 'function wordBreak(s, wordDict) {\n  // your code here\n}\n',
    typescript: "function wordBreak(s: string, wordDict: string[]): boolean {\n  // your code here\n}",

    python: 'def wordBreak(s, wordDict):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['leetcode', ['leet', 'code']], expected: true },
    { args: ['applepenapple', ['apple', 'pen']], expected: true },
    { args: ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat']], expected: false },
  ],
  hiddenTests: [
    { args: ['a', ['a']], expected: true },
    { args: ['ab', ['a', 'b']], expected: true },
    { args: ['cars', ['car', 'ca', 'rs']], expected: true },
    { args: ['aaaaaaa', ['aaaa', 'aaa']], expected: true },
    { args: ['goalspecial', ['go', 'goal', 'goals', 'special']], expected: true },
  ],
};
