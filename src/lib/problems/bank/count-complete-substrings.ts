import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-complete-substrings',
  title: 'Count Complete Substrings',
  difficulty: 'hard',
  tags: ['strings', 'sliding-window', 'hash-map'],
  description: `Given a string \`word\` and an integer \`k\`, count substrings of \`word\` that are **complete**.

A substring is **complete** if:
1. Every character in the substring appears **exactly \`k\` times**.
2. For every pair of adjacent characters in the substring, the absolute difference of their alphabetical positions is at most 2 (i.e., \`|ord(s[i]) - ord(s[i+1])| <= 2\`).

Return the **total count** of complete substrings.`,
  constraints: [
    '1 <= word.length <= 10^5',
    '1 <= k <= word.length',
    'word consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word = "igigee", k = 2',
      output: '3',
      explanation:
        'The complete substrings are "igig" (i:2,g:2, all adjacent diffs ≤2), "ee" (e:2), and "igigee" (i:2,g:2,e:2). Count = 3.',
    },
    {
      input: 'word = "aaabbbccc", k = 3',
      output: '6',
      explanation:
        'Complete substrings: "aaa", "bbb", "ccc" (each 1 char ×3), "aaabbb", "bbbccc" (each 2 chars ×3), "aaabbbccc" (3 chars ×3). Count = 6.',
    },
  ],
  hints: [
    'The adjacency condition means substrings can only span characters where each consecutive pair differs by at most 2. Split the original string into maximal segments where adjacent characters all differ by ≤ 2.',
    'Within each valid segment, for a fixed alphabet size t (1 to 26), a complete substring of type-t must have length exactly t×k and contain exactly t distinct characters each appearing exactly k times. Use a fixed-size sliding window of length t×k.',
    `For each window of size t×k, maintain a frequency map and count of characters that have exactly k occurrences. When that count equals t, you have found a complete substring.
\`\`\`js
function countCompleteSubstrings(word, k) {
  let total = 0;
  const n = word.length;
  function countSeg(seg) {
    for (let t = 1; t <= 26; t++) {
      const len = t * k;
      if (len > seg.length) break;
      const freq = new Array(26).fill(0);
      let exactK = 0;
      for (let j = 0; j < seg.length; j++) {
        const c = seg.charCodeAt(j) - 97;
        freq[c]++;
        if (freq[c] === k) exactK++;
        else if (freq[c] === k + 1) exactK--;
        if (j >= len) {
          const old = seg.charCodeAt(j - len) - 97;
          if (freq[old] === k) exactK--;
          else if (freq[old] === k + 1) exactK++;
          freq[old]--;
        }
        if (j >= len - 1 && exactK === t) total++;
      }
    }
  }
  let start = 0;
  for (let i = 1; i <= n; i++) {
    if (i === n || Math.abs(word.charCodeAt(i) - word.charCodeAt(i - 1)) > 2) {
      countSeg(word.slice(start, i));
      start = i;
    }
  }
  return total;
}
\`\`\``,
  ],
  functionName: 'countCompleteSubstrings',
  params: ['word', 'k'],
  starterCode: {
    javascript: `function countCompleteSubstrings(word, k) {
  // your code here
}`,
    typescript: `function countCompleteSubstrings(word: string, k: number): number {
  // your code here
}`,
    python: `def countCompleteSubstrings(word, k):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: ['igigee', 2], expected: 3 },
    { args: ['aaabbbccc', 3], expected: 6 },
    { args: ['aabb', 2], expected: 3 },
  ],
  hiddenTests: [
    { args: ['aaa', 1], expected: 3 },
    { args: ['aaa', 2], expected: 2 },
    { args: ['aaa', 3], expected: 1 },
    { args: ['aa', 1], expected: 2 },
    { args: ['aa', 2], expected: 1 },
    { args: ['ab', 1], expected: 3 },
    { args: ['abc', 1], expected: 6 },
    { args: ['abcd', 1], expected: 10 },
  ],
};
