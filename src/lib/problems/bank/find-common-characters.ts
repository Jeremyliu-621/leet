import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-common-characters',
  title: 'Find Common Characters',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string array \`words\`, return *an array of all characters that show up in all strings within the* \`words\` *(including duplicates)*. You may return the answer in **any order**.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 100',
    'words[i] consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["bella","label","roller"]',
      output: '["e","l","l"]',
    },
    {
      input: 'words = ["cool","lock","cook"]',
      output: '["c","o"]',
    },
  ],
  hints: [
    'For each word, build a frequency array of 26 lowercase letters.',
    'Take the element-wise minimum across all frequency arrays.',
    'The minimum frequency of each letter is how many times it appears in all words.',
  ],
  functionName: 'commonChars',
  params: ['words'],
  starterCode: {
    javascript: `function commonChars(words) {
  const a = 'a'.charCodeAt(0);
  let minFreq = new Array(26).fill(Infinity);
  for (const word of words) {
    const freq = new Array(26).fill(0);
    for (const c of word) freq[c.charCodeAt(0) - a]++;
    minFreq = minFreq.map((v, i) => Math.min(v, freq[i]));
  }
  const result = [];
  for (let i = 0; i < 26; i++) for (let j = 0; j < minFreq[i]; j++) result.push(String.fromCharCode(a + i));
  return result;
}`,
    typescript: `function commonChars(words: string[]): string[] {
  const a = 'a'.charCodeAt(0);
  let minFreq: number[] = new Array(26).fill(Infinity);
  for (const word of words) {
    const freq: number[] = new Array(26).fill(0);
    for (const c of word) freq[c.charCodeAt(0) - a]!++;
    minFreq = minFreq.map((v, i) => Math.min(v, freq[i]!));
  }
  const result: string[] = [];
  for (let i = 0; i < 26; i++) for (let j = 0; j < minFreq[i]!; j++) result.push(String.fromCharCode(a + i));
  return result;
}`,
    python: `def commonChars(words):
    from collections import Counter
    min_freq = Counter(words[0])
    for w in words[1:]:
        c = Counter(w)
        min_freq &= c
    return list(min_freq.elements())`,
  },
  visibleTests: [
    { args: [['bella', 'label', 'roller']], expected: ['e', 'l', 'l'] },
    { args: [['cool', 'lock', 'cook']], expected: ['c', 'o'] },
  ],
  hiddenTests: [
    { args: [['a', 'b']], expected: [] },
    { args: [['abc', 'abc', 'abc']], expected: ['a', 'b', 'c'] },
    { args: [['aabb', 'bb', 'bb']], expected: ['b', 'b'] },
    { args: [['ab', 'ab', 'ab']], expected: ['a', 'b'] },
    { args: [['aabbc', 'abc', 'ac']], expected: ['a', 'c'] },
  ],
};
