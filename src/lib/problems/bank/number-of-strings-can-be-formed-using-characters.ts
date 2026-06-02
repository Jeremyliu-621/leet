import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-strings-can-be-formed-using-characters',
  title: 'Find Words That Can Be Formed by Characters',
  difficulty: 'easy',
  tags: ['arrays', 'strings'],
  description: `You are given an array of strings \`words\` and a string \`chars\`.

A string is **good** if it can be formed by characters from \`chars\` (each character may only be used once).

Return the **sum of lengths** of all good strings in \`words\`.`,
  constraints: [
    '1 <= words.length <= 1000',
    '1 <= words[i].length <= 100',
    '1 <= chars.length <= 100',
    'words[i] and chars consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["cat","bt","hat","tree"], chars = "atach"',
      output: '6',
      explanation: '"cat" and "hat" can be formed using chars, lengths 3+3=6.',
    },
    {
      input: 'words = ["hello","world","leetcode"], chars = "welldonehoneyr"',
      output: '10',
      explanation: '"hello" and "world" can be formed, lengths 5+5=10.',
    },
  ],
  hints: [
    'Level 1: Count the frequency of each character in chars.',
    'Level 2: For each word, count its character frequencies and check that every character count in the word is ≤ its count in chars.',
    'Level 3: If the word passes, add its length to the answer.',
  ],
  functionName: 'countCharacters',
  params: ['words', 'chars'],
  starterCode: {
    javascript: `function countCharacters(words, chars) {
  const freq = {};
  for (const c of chars) freq[c] = (freq[c] || 0) + 1;
  let ans = 0;
  for (const word of words) {
    const wf = {};
    for (const c of word) wf[c] = (wf[c] || 0) + 1;
    let good = true;
    for (const c of Object.keys(wf)) {
      if ((freq[c] || 0) < wf[c]) { good = false; break; }
    }
    if (good) ans += word.length;
  }
  return ans;
}`,
    typescript: `function countCharacters(words: string[], chars: string): number {
  const freq: Record<string, number> = {};
  for (const c of chars) freq[c] = (freq[c] ?? 0) + 1;
  let ans = 0;
  for (const word of words) {
    const wf: Record<string, number> = {};
    for (const c of word) wf[c] = (wf[c] ?? 0) + 1;
    let good = true;
    for (const c of Object.keys(wf)) {
      if ((freq[c] ?? 0) < wf[c]!) { good = false; break; }
    }
    if (good) ans += word.length;
  }
  return ans;
}`,
    python: `def countCharacters(words, chars):
    words = [str(w) for w in (words.to_py() if hasattr(words, 'to_py') else words)]
    chars = str(chars)
    from collections import Counter
    char_freq = Counter(chars)
    ans = 0
    for word in words:
        wf = Counter(word)
        if all(wf[c] <= char_freq[c] for c in wf):
            ans += len(word)
    return ans`,
  },
  visibleTests: [
    { args: [['cat', 'bt', 'hat', 'tree'], 'atach'], expected: 6 },
    { args: [['hello', 'world', 'leetcode'], 'welldonehoneyr'], expected: 10 },
  ],
  hiddenTests: [
    { args: [['a', 'b'], 'a'], expected: 1 },
    { args: [['aa'], 'a'], expected: 0 },
    { args: [['abc', 'def'], 'abcdef'], expected: 6 },
    { args: [['ab', 'ba', 'abc'], 'abc'], expected: 7 },
    { args: [['z'], 'z'], expected: 1 },
    { args: [['zz'], 'z'], expected: 0 },
  ],
};
