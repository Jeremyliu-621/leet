import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-words-consisting-only-of-one-distinct-letter',
  title: 'Count Words Consisting Only of One Distinct Letter',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given a **0-indexed** string array \`words\`, where \`words[i]\` consists of lowercase English letters.

Return *the number of words in* \`words\` *where all characters are the same*.

A word has all same characters if it consists of only one distinct letter.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 10',
    'words[i] consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["aaa","bbb","ccc","ddd","eee","aab"]',
      output: '5',
      explanation: '"aaa", "bbb", "ccc", "ddd", "eee" all consist of one distinct letter. "aab" does not.',
    },
    {
      input: 'words = ["zzz","zz","z"]',
      output: '3',
      explanation: 'All words consist of only the letter "z".',
    },
  ],
  hints: [
    'Level 1: For each word, check if all characters equal the first character. If so, count it.',
    'Level 2: Use Set or a simple loop: new Set(word).size === 1 in JS, or len(set(word)) == 1 in Python.',
    'Level 3: O(sum of word lengths). Single pass over the words array.',
  ],
  functionName: 'countWords',
  params: ['words'],
  starterCode: {
    javascript: `function countWords(words) {
  return words.filter(w => new Set(w).size === 1).length;
}`,
    typescript: `function countWords(words: string[]): number {
  return words.filter(w => new Set(w).size === 1).length;
}`,
    python: `def countWords(words):
    return sum(1 for w in words if len(set(w)) == 1)`,
  },
  visibleTests: [
    { args: [['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'aab']], expected: 5 },
    { args: [['zzz', 'zz', 'z']], expected: 3 },
  ],
  hiddenTests: [
    { args: [['a']], expected: 1 },
    { args: [['ab']], expected: 0 },
    { args: [['aa', 'bb', 'cc']], expected: 3 },
    { args: [['abc', 'aaa', 'bba', 'bbb']], expected: 2 },
    { args: [['x', 'xx', 'xxx', 'xxa']], expected: 3 },
    { args: [['a', 'b', 'ab', 'ba']], expected: 2 },
  ],
};
