import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-words-formed-by-characters',
  title: 'Find Words That Can Be Formed by Characters',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given an array of strings \`words\` and a string \`chars\`.

A string is **good** if it can be formed by characters from \`chars\` (each character can only be used once).

Return *the sum of lengths of all **good** strings in* \`words\`.`,
  constraints: [
    '1 <= words.length <= 1000',
    '1 <= words[i].length, chars.length <= 100',
    'words[i] and chars consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["cat","bt","hat","tree"], chars = "atach"',
      output: '6',
      explanation: '"cat" (3) and "hat" (3) can be formed. Total: 6.',
    },
    {
      input: 'words = ["hello","world","leetcode"], chars = "welldonehoneyr"',
      output: '10',
      explanation: '"hello" (5) and "world" (5) can be formed. Total: 10.',
    },
  ],
  hints: [
    'Build a frequency map of chars. For each word, check if the word\'s frequency map is covered by chars.',
    'A word is good if for every letter, its count in the word ≤ its count in chars.',
    `\`\`\`js
function countCharacters(words, chars) {
  const freq={};
  for(const c of chars) freq[c]=(freq[c]||0)+1;
  let total=0;
  for(const w of words){
    const wf={};
    let ok=true;
    for(const c of w){wf[c]=(wf[c]||0)+1;if((wf[c]||0)>(freq[c]||0)){ok=false;break;}}
    if(ok) total+=w.length;
  }
  return total;
}\`\`\``,
  ],
  functionName: 'countCharacters',
  params: ['words', 'chars'],
  starterCode: {
    javascript: `function countCharacters(words, chars) {
  const cc = {};
  for (const c of chars) cc[c] = (cc[c] || 0) + 1;
  let total = 0;
  for (const w of words) {
    const wc = {};
    let ok = true;
    for (const c of w) { wc[c] = (wc[c] || 0) + 1; if ((wc[c] || 0) > (cc[c] || 0)) { ok = false; break; } }
    if (ok) total += w.length;
  }
  return total;
}`,
    typescript: `function countCharacters(words: string[], chars: string): number {
  const cc: Record<string, number> = {};
  for (const c of chars) cc[c] = (cc[c] || 0) + 1;
  let total = 0;
  for (const w of words) {
    const wc: Record<string, number> = {};
    let ok = true;
    for (const c of w) { wc[c] = (wc[c] || 0) + 1; if (wc[c] > (cc[c] || 0)) { ok = false; break; } }
    if (ok) total += w.length;
  }
  return total;
}`,
    python: `def countCharacters(words, chars):
    from collections import Counter
    cc = Counter(chars)
    return sum(len(w) for w in words if not (Counter(w) - cc))`,
  },
  visibleTests: [
    { args: [['cat', 'bt', 'hat', 'tree'], 'atach'], expected: 6 },
    { args: [['hello', 'world', 'leetcode'], 'welldonehoneyr'], expected: 10 },
  ],
  hiddenTests: [
    { args: [['a'], 'b'], expected: 0 },
    { args: [['a'], 'a'], expected: 1 },
    { args: [['ab', 'cd'], 'abcd'], expected: 4 },
    { args: [['aa', 'ab'], 'a'], expected: 0 },
    { args: [['abc', 'de', 'fgh'], 'abcdefgh'], expected: 8 },
  ],
};
