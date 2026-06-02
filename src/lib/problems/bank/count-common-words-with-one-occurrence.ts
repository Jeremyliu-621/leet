import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-common-words-with-one-occurrence',
  title: 'Count Common Words With One Occurrence',
  difficulty: 'easy',
  tags: ['hash-map', 'strings'],
  description: `Given two string arrays \`words1\` and \`words2\`, return the number of strings that appear **exactly once** in each of the two arrays.`,
  constraints: [
    '1 <= words1.length, words2.length <= 1000',
    '1 <= words1[i].length, words2[j].length <= 30',
    'words1[i] and words2[j] consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]',
      output: '2',
      explanation: '"leetcode" appears exactly once in both arrays. "amazing" appears exactly once in both arrays. "is" appears twice in words1. So the answer is 2.',
    },
    {
      input: 'words1 = ["b","bb","bbb"], words2 = ["a","b"]',
      output: '1',
    },
    {
      input: 'words1 = ["a","ab"], words2 = ["a","a","a","ab"]',
      output: '1',
    },
  ],
  hints: [
    'Count the frequency of each word in both arrays using hash maps.',
    'Iterate over words in one map and check if the word has frequency 1 in both maps.',
    'A word counts if count1[word] === 1 AND count2[word] === 1.',
  ],
  functionName: 'countWords',
  params: ['words1', 'words2'],
  starterCode: {
    javascript: `function countWords(words1, words2) {
  const freq1 = new Map(), freq2 = new Map();
  for (const w of words1) freq1.set(w, (freq1.get(w) || 0) + 1);
  for (const w of words2) freq2.set(w, (freq2.get(w) || 0) + 1);
  let count = 0;
  for (const [w, c] of freq1) if (c === 1 && freq2.get(w) === 1) count++;
  return count;
}`,
    typescript: `function countWords(words1: string[], words2: string[]): number {
  const freq1 = new Map<string, number>(), freq2 = new Map<string, number>();
  for (const w of words1) freq1.set(w, (freq1.get(w) ?? 0) + 1);
  for (const w of words2) freq2.set(w, (freq2.get(w) ?? 0) + 1);
  let count = 0;
  for (const [w, c] of freq1) if (c === 1 && freq2.get(w) === 1) count++;
  return count;
}`,
    python: `def countWords(words1: list, words2: list) -> int:
    from collections import Counter
    c1, c2 = Counter(words1), Counter(words2)
    return sum(1 for w in c1 if c1[w] == 1 and c2[w] == 1)`,
  },
  visibleTests: [
    { args: [["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"]], expected: 2 },
    { args: [["b","bb","bbb"], ["a","b"]], expected: 1 },
    { args: [["a","ab"], ["a","a","a","ab"]], expected: 1 },
  ],
  hiddenTests: [
    { args: [["a"], ["a"]], expected: 1 },
    { args: [["a","a"], ["a"]], expected: 0 },
    { args: [["x","y","z"], ["z","y","x"]], expected: 3 },
    { args: [["foo","bar"], ["baz","qux"]], expected: 0 },
  ],
};
