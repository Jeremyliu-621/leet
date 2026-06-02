import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-string-chain',
  title: 'Longest String Chain',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'hash-map'],
  description: `You are given an array of \`words\` where each word consists of lowercase English letters.

A word \`wordA\` is a **predecessor** of \`wordB\` if and only if we can insert **exactly one** letter anywhere in \`wordA\` **without changing the order** of the other characters to make it equal to \`wordB\`.

A **word chain** is a sequence of words \`[word1, word2, ..., wordk]\` with \`k >= 1\`, where \`word1\` is a predecessor of \`word2\`, \`word2\` is a predecessor of \`word3\`, and so on.

Return the **length** of the longest possible word chain with words chosen from the given list.`,
  constraints: [
    '1 <= words.length <= 1000',
    '1 <= words[i].length <= 16',
    'words[i] only consists of lowercase English letters',
  ],
  examples: [
    {
      input: 'words = ["a","b","ba","bca","bda","bdca"]',
      output: '4',
      explanation: 'One of the longest chains: "a" → "ba" → "bda" → "bdca".',
    },
    {
      input: 'words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]',
      output: '5',
      explanation: '"xb" → "xbc" → "cxbc" → "pcxbc" → "pcxbcf".',
    },
  ],
  hints: [
    'Sort words by length. A longer word can only be preceded by shorter words.',
    'Use a hash map: for each word, try removing each character to find potential predecessors.',
    'dp[word] = 1 + max(dp[predecessor]) for all valid predecessors.',
  ],
  functionName: 'longestStrChain',
  params: ['words'],
  starterCode: {
    javascript: `function longestStrChain(words) {
  words.sort((a, b) => a.length - b.length);
  const dp = new Map();
  let ans = 1;
  for (const word of words) {
    let best = 0;
    for (let i = 0; i < word.length; i++) {
      const prev = word.slice(0, i) + word.slice(i + 1);
      best = Math.max(best, dp.get(prev) || 0);
    }
    dp.set(word, best + 1);
    ans = Math.max(ans, best + 1);
  }
  return ans;
}`,
    typescript: `function longestStrChain(words: string[]): number {
  words.sort((a, b) => a.length - b.length);
  const dp = new Map<string, number>();
  let ans = 1;
  for (const word of words) {
    let best = 0;
    for (let i = 0; i < word.length; i++) {
      const prev = word.slice(0, i) + word.slice(i + 1);
      best = Math.max(best, dp.get(prev) ?? 0);
    }
    dp.set(word, best + 1);
    ans = Math.max(ans, best + 1);
  }
  return ans;
}`,
    python: `def longestStrChain(words):
    words.sort(key=len)
    dp = {}
    ans = 1
    for word in words:
        best = max((dp.get(word[:i] + word[i+1:], 0) for i in range(len(word))), default=0)
        dp[word] = best + 1
        ans = max(ans, best + 1)
    return ans`,
  },
  visibleTests: [
    { args: [['a', 'b', 'ba', 'bca', 'bda', 'bdca']], expected: 4 },
    { args: [['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc']], expected: 5 },
  ],
  hiddenTests: [
    { args: [['a']], expected: 1 },
    { args: [['ab', 'a']], expected: 2 },
    { args: [['a', 'ab', 'ac', 'abc']], expected: 3 },
    { args: [['abcd', 'dbqca']], expected: 1 },
    { args: [['a', 'ab', 'abc', 'abcd', 'abcde']], expected: 5 },
    { args: [['ksqvsyq', 'ks', 'kss', 'czvh', 'zczpzvdhx', 'ksqvsq', 'ksqvsqxy', 'kssq', 'ksqvsqxycy']], expected: 3 },
  ],
};
