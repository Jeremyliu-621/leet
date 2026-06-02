import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-of-word-lengths',
  title: 'Maximum Product of Word Lengths',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given a string array \`words\`, return the **maximum** value of \`words[i].length * words[j].length\` where the two words **do not share common letters**. If no such pair exists, return \`0\`.`,
  constraints: [
    '2 <= words.length <= 1000',
    '1 <= words[i].length <= 1000',
    'words[i] consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["abcw","baz","foo","bar","xtfn","abcdef"]',
      output: '16',
      explanation: '"abcw" and "xtfn" share no common letters. 4 * 4 = 16.',
    },
    {
      input: 'words = ["a","ab","abc","d","cd","bcd","abcd"]',
      output: '4',
      explanation: '"ab" and "cd" share no letters. 2 * 2 = 4.',
    },
    {
      input: 'words = ["a","aa","aaa","aaaa"]',
      output: '0',
      explanation: 'Every pair shares the letter "a".',
    },
  ],
  hints: [
    'Represent each word as a bitmask of 26 bits, where bit `i` is set if the word contains letter `i`. Two words share no common letters iff `mask[i] & mask[j] === 0`.',
    'Precompute the bitmask for each word in O(n * L) time. Then check all pairs in O(n²) time.',
    '`const masks = words.map(w => [...w].reduce((m,c) => m | (1 << (c.charCodeAt(0) - 97)), 0)); let max = 0; for (let i=0; i<words.length; i++) for (let j=i+1; j<words.length; j++) if (!(masks[i] & masks[j])) max = Math.max(max, words[i].length * words[j].length); return max;`',
  ],
  functionName: 'maxProduct',
  params: ['words'],
  starterCode: {
    javascript: `function maxProduct(words) {
  const masks = words.map(w => [...w].reduce((m, c) => m | (1 << (c.charCodeAt(0) - 97)), 0));
  let max = 0;
  for (let i = 0; i < words.length; i++)
    for (let j = i + 1; j < words.length; j++)
      if (!(masks[i] & masks[j])) max = Math.max(max, words[i].length * words[j].length);
  return max;
}`,
    typescript: `function maxProduct(words: string[]): number {
  const masks = words.map(w => [...w].reduce((m, c) => m | (1 << (c.charCodeAt(0) - 97)), 0));
  let max = 0;
  for (let i = 0; i < words.length; i++)
    for (let j = i + 1; j < words.length; j++)
      if (!(masks[i]! & masks[j]!)) max = Math.max(max, words[i]!.length * words[j]!.length);
  return max;
}`,
    python: `def maxProduct(words):
    if hasattr(words, 'to_py'): words = words.to_py()
    words = [str(w.to_py() if hasattr(w, 'to_py') else w) for w in words]
    masks = [0] * len(words)
    for i, w in enumerate(words):
        for c in w: masks[i] |= 1 << (ord(c) - 97)
    best = 0
    for i in range(len(words)):
        for j in range(i + 1, len(words)):
            if not (masks[i] & masks[j]): best = max(best, len(words[i]) * len(words[j]))
    return best`,
  },
  visibleTests: [
    { args: [['abcw','baz','foo','bar','xtfn','abcdef']], expected: 16 },
    { args: [['a','ab','abc','d','cd','bcd','abcd']], expected: 4 },
    { args: [['a','aa','aaa','aaaa']], expected: 0 },
  ],
  hiddenTests: [
    { args: [['abc','xyz']], expected: 9 },
    { args: [['abc','ab','a','xyz']], expected: 9 },
    { args: [['a','b']], expected: 1 },
    { args: [['ab','cd','ef']], expected: 4 },
    { args: [['abc','bcd','cde']], expected: 0 },
  ],
};
