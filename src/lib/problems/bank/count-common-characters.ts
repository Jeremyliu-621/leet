import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-common-characters',
  title: 'Find Common Characters',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Given a string array \`words\`, return an array of all characters that show up in **all** strings within the \`words\` array (including duplicates). You may return the answer in **any order**.

A character must appear in every string. If it appears multiple times in every string, include it that many times (use the minimum frequency across all strings).`,
  constraints: [
    '`1 <= words.length <= 100`',
    '`1 <= words[i].length <= 100`',
    '`words[i]` consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["bella","label","roller"]',
      output: '["e","l","l"]',
      explanation: '"e" appears at least once in all words; "l" appears at least twice in all words.',
    },
    {
      input: 'words = ["cool","lock","cook"]',
      output: '["c","o"]',
      explanation: '"c" and "o" each appear at least once in all three words.',
    },
    {
      input: 'words = ["a","b"]',
      output: '[]',
      explanation: 'No character appears in both "a" and "b".',
    },
  ],
  hints: [
    'For each character, find the minimum frequency it appears across all words.',
    'Build a frequency array for each word. Take element-wise minimum across all frequency arrays.',
    '```js\nfunction commonChars(words) {\n  const freq = w => { const f=new Array(26).fill(0); for(const c of w) f[c.charCodeAt(0)-97]++; return f; };\n  let min = freq(words[0]);\n  for (let i=1; i<words.length; i++) { const f=freq(words[i]); for(let j=0;j<26;j++) min[j]=Math.min(min[j],f[j]); }\n  const res=[];\n  for(let j=0;j<26;j++) for(let k=0;k<min[j];k++) res.push(String.fromCharCode(97+j));\n  return res;\n}\n```',
  ],
  functionName: 'commonChars',
  params: ['words'],
  starterCode: {
    javascript: `function commonChars(words) {
  const freq = w => { const f = new Array(26).fill(0); for (const c of w) f[c.charCodeAt(0)-97]++; return f; };
  let min = freq(words[0]);
  for (let i = 1; i < words.length; i++) {
    const f = freq(words[i]);
    for (let j = 0; j < 26; j++) min[j] = Math.min(min[j], f[j]);
  }
  const res = [];
  for (let j = 0; j < 26; j++) for (let k = 0; k < min[j]; k++) res.push(String.fromCharCode(97 + j));
  return res;
}`,
    typescript: `function commonChars(words: string[]): string[] {
  const freq = (w: string) => { const f = new Array(26).fill(0) as number[]; for (const c of w) f[c.charCodeAt(0)-97]!++; return f; };
  let min = freq(words[0]!);
  for (let i = 1; i < words.length; i++) {
    const f = freq(words[i]!);
    for (let j = 0; j < 26; j++) min[j] = Math.min(min[j]!, f[j]!);
  }
  const res: string[] = [];
  for (let j = 0; j < 26; j++) for (let k = 0; k < min[j]!; k++) res.push(String.fromCharCode(97 + j));
  return res;
}`,
    python: `def commonChars(words):
    from collections import Counter
    from functools import reduce
    min_freq = reduce(lambda a, b: {c: min(a.get(c,0), b.get(c,0)) for c in set(a)|set(b)},
                      [Counter(w) for w in words])
    return [c for c, cnt in min_freq.items() for _ in range(cnt)]`,
  },
  visibleTests: [
    { args: [['bella', 'label', 'roller']], expected: ['e', 'l', 'l'] },
    { args: [['cool', 'lock', 'cook']], expected: ['c', 'o'] },
    { args: [['a', 'b']], expected: [] },
  ],
  hiddenTests: [
    { args: [['abc', 'bcd', 'cde']], expected: ['c'] },
    { args: [['aaa', 'aaa', 'aaa']], expected: ['a', 'a', 'a'] },
    { args: [['ab', 'ab']], expected: ['a', 'b'] },
    { args: [['abcd', 'efgh']], expected: [] },
    { args: [['aa', 'bb']], expected: [] },
    { args: [['z']], expected: ['z'] },
    { args: [['ab', 'abc', 'abcd']], expected: ['a', 'b'] },
  ],
};
