import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-deletions-to-make-string-k-special',
  title: 'Minimum Deletions to Make String K-Special',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`word\` and an integer \`k\`.

A string is called **k-special** if for every pair of characters \`a\` and \`b\` present in the string, \`|freq(a) - freq(b)| <= k\`.

Return the **minimum** number of characters you need to delete from \`word\` to make it k-special.`,
  constraints: [
    '1 <= word.length <= 10^5',
    '0 <= k <= 10^5',
    'word consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word = "aabbc", k = 0',
      output: '1',
      explanation: 'Delete one \'c\'. Remaining "aabb" has freq(a)=2, freq(b)=2 → |2-2|=0 ≤ k.',
    },
    {
      input: 'word = "dabdcbdcdcd", k = 2',
      output: '2',
      explanation: 'Delete 2 characters to balance the frequencies within a range of 2.',
    },
    {
      input: 'word = "aaabc", k = 2',
      output: '0',
      explanation: 'Frequencies: a=3, b=1, c=1. max-min = 3-1 = 2 ≤ k. Already k-special.',
    },
  ],
  hints: [
    'Count character frequencies, sort them. For each possible minimum frequency threshold (one of the sorted values), count: (1) deletions to remove all characters below threshold, (2) deletions to trim characters above threshold+k.',
    'Try each sorted frequency as the new minimum allowed frequency. Characters with frequency below this threshold must be entirely deleted; characters with frequency above threshold+k must be trimmed.',
    '`const f=freq.filter(x=>x>0).sort((a,b)=>a-b); let mn=Infinity,ps=0; for(let i=0;i<f.length;i++){let d=ps;for(let j=i;j<f.length;j++)d+=Math.max(0,f[j]-f[i]-k);mn=Math.min(mn,d);ps+=f[i];} return mn;`',
  ],
  functionName: 'minimumDeletions',
  params: ['word', 'k'],
  starterCode: {
    javascript: `function minimumDeletions(word, k) {
  const cnt = new Array(26).fill(0);
  for (const c of word) cnt[c.charCodeAt(0) - 97]++;
  const f = cnt.filter(x => x > 0).sort((a, b) => a - b);
  let mn = Infinity, ps = 0;
  for (let i = 0; i < f.length; i++) {
    let d = ps;
    for (let j = i; j < f.length; j++) d += Math.max(0, f[j] - f[i] - k);
    mn = Math.min(mn, d);
    ps += f[i];
  }
  return mn;
}`,
    typescript: `function minimumDeletions(word: string, k: number): number {
  const cnt = new Array<number>(26).fill(0);
  for (const c of word) cnt[c.charCodeAt(0) - 97]!++;
  const f = cnt.filter(x => x > 0).sort((a, b) => a - b);
  let mn = Infinity, ps = 0;
  for (let i = 0; i < f.length; i++) {
    let d = ps;
    for (let j = i; j < f.length; j++) d += Math.max(0, f[j]! - f[i]! - k);
    mn = Math.min(mn, d);
    ps += f[i]!;
  }
  return mn;
}`,
    python: `def minimumDeletions(word: str, k: int) -> int:
    from collections import Counter
    f = sorted(Counter(word).values())
    mn = float('inf'); ps = 0
    for i in range(len(f)):
        d = ps + sum(max(0, f[j] - f[i] - k) for j in range(i, len(f)))
        mn = min(mn, d); ps += f[i]
    return mn`,
  },
  visibleTests: [
    { args: ['aabbc', 0], expected: 1 },
    { args: ['dabdcbdcdcd', 2], expected: 2 },
    { args: ['aaabc', 2], expected: 0 },
  ],
  hiddenTests: [
    { args: ['a', 0], expected: 0 },
    { args: ['aaaa', 0], expected: 0 },
    { args: ['aaabb', 0], expected: 1 },
    { args: ['abcde', 0], expected: 0 },
    { args: ['aabbccdd', 1], expected: 0 },
    { args: ['aabbcc', 0], expected: 0 },
    { args: ['aaabbc', 1], expected: 1 },
  ],
};
