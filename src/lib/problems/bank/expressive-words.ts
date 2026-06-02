import type { Problem } from '../types';

export const problem: Problem = {
  id: 'expressive-words',
  title: 'Expressive Words',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `Sometimes people repeat letters to represent extra feeling. For example, "heeellooo" may represent "hello" with the 'e' extended 3 times and the 'o' extended 3 times.

Formally, a word \`w\` is **stretchy** relative to string \`s\` if you can expand each consecutive run of letters in \`w\` so that:
- The corresponding run in \`s\` has the same character.
- Either the run lengths are equal, **or** the run length in \`s\` is at least 3 and is greater than the run length in \`w\`.

Given a string \`s\` and a list of query strings \`words\`, return the number of words that are **stretchy**.`,
  constraints: [
    '`1 <= s.length, words.length <= 100`',
    '`1 <= words[i].length <= 100`',
    '`s` and `words[i]` consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "heeellooo", words = ["hello","hi","helo"]',
      output: '1',
      explanation: '"hello" is stretchy: e (s-run=3≥3>1) and o (s-run=3≥3>1). "helo" fails at l (s-run=2<3 and 2≠1).',
    },
    {
      input: 's = "zzzzzyyyyy", words = ["zzyy","zy","zyy"]',
      output: '3',
      explanation: 'All three words are stretchy since both z (×5) and y (×5) runs qualify.',
    },
  ],
  hints: [
    'Run-length encode both s and the word into (char, count) pairs.',
    'The two encoded sequences must have the same length and the same character at each position.',
    'A run matches if: counts are equal, OR the s-count >= 3 and s-count > word-count.',
  ],
  functionName: 'expressiveWords',
  params: ['s', 'words'],
  starterCode: {
    javascript: `function expressiveWords(s, words) {
  function rle(str) {
    const res = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (j < str.length && str[j] === str[i]) j++;
      res.push([str[i], j - i]);
      i = j;
    }
    return res;
  }
  function stretchy(word) {
    const ws = rle(s), ww = rle(word);
    if (ws.length !== ww.length) return false;
    for (let i = 0; i < ws.length; i++) {
      const [sc, sn] = ws[i], [wc, wn] = ww[i];
      if (sc !== wc) return false;
      if (sn < wn) return false;
      if (sn < 3 && sn !== wn) return false;
    }
    return true;
  }
  return words.filter(stretchy).length;
}`,
    typescript: `function expressiveWords(s: string, words: string[]): number {
  function rle(str: string): [string, number][] {
    const res: [string, number][] = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (j < str.length && str[j] === str[i]) j++;
      res.push([str[i]!, j - i]);
      i = j;
    }
    return res;
  }
  function stretchy(word: string): boolean {
    const ws = rle(s), ww = rle(word);
    if (ws.length !== ww.length) return false;
    for (let i = 0; i < ws.length; i++) {
      const [sc, sn] = ws[i]!, [wc, wn] = ww[i]!;
      if (sc !== wc) return false;
      if (sn < wn) return false;
      if (sn < 3 && sn !== wn) return false;
    }
    return true;
  }
  return words.filter(stretchy).length;
}`,
    python: `def expressiveWords(s, words):
    def rle(t):
        res, i = [], 0
        while i < len(t):
            j = i
            while j < len(t) and t[j] == t[i]: j += 1
            res.append((t[i], j - i)); i = j
        return res
    def stretchy(word):
        ws, ww = rle(s), rle(word)
        if len(ws) != len(ww): return False
        for (sc, sn), (wc, wn) in zip(ws, ww):
            if sc != wc or sn < wn: return False
            if sn < 3 and sn != wn: return False
        return True
    return sum(stretchy(w) for w in words)`,
  },
  visibleTests: [
    { args: ['heeellooo', ['hello', 'hi', 'helo']], expected: 1 },
    { args: ['zzzzzyyyyy', ['zzyy', 'zy', 'zyy']], expected: 3 },
  ],
  hiddenTests: [
    { args: ['aaa', ['a', 'aa', 'aaa', 'aaaa']], expected: 3 },
    { args: ['hello', ['hello', 'helo', 'hell', 'hellllo']], expected: 1 },
    { args: ['ab', ['ab', 'aab', 'abb']], expected: 1 },
    { args: ['aaabbc', ['abc', 'aabbc', 'aaabbc', 'aabbbc']], expected: 2 },
    { args: ['abc', ['abc', 'abbc', 'abcc']], expected: 1 },
  ],
};
