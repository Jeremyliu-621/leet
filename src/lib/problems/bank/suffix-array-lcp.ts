import type { Problem } from '../types';

export const problem: Problem = {
  id: 'suffix-array-lcp',
  title: 'Suffix Array and LCP Array',
  difficulty: 'hard',
  tags: ['strings', 'arrays'],
  description: `Given a string \`s\`, build the **suffix array** (SA) and **LCP array** and return them as \`[sa, lcp]\`.

The **suffix array** is an array of starting indices of all suffixes of \`s\`, sorted in lexicographic order.

The **LCP array** (built with Kasai's algorithm) has \`lcp[i]\` = length of the longest common prefix between the suffix starting at \`sa[i]\` and the suffix starting at \`sa[i-1]\` (for i ≥ 1). \`lcp[0] = 0\`.

**Building the suffix array (O(n log² n) prefix doubling):**
1. Rank each suffix by its first 1 character.
2. Sort pairs \`(rank[i], rank[i + 2^k])\` for increasing k. Reassign ranks based on sort order.
3. After k = log₂(n) rounds, ranks are unique → suffix array.

**Kasai's O(n) LCP construction:** Iterate suffixes in original order; use the invariant that if suffix at position i has LCP h with its SA predecessor, suffix at i+1 has LCP ≥ h−1.`,
  constraints: [
    '1 <= s.length <= 1000',
    's contains only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "banana"',
      output: '[[5,3,1,0,4,2],[0,1,3,0,0,2]]',
      explanation: 'Sorted suffixes: a(5), ana(3), anana(1), banana(0), na(4), nana(2). LCP: 0,1,3,0,0,2.',
    },
    {
      input: 's = "abab"',
      output: '[[2,0,3,1],[0,2,0,1]]',
      explanation: 'Sorted suffixes: ab(2), abab(0), b(3), bab(1). LCP: 0,2,0,1.',
    },
    {
      input: 's = "aaa"',
      output: '[[2,1,0],[0,1,2]]',
      explanation: 'Sorted suffixes: a(2), aa(1), aaa(0). LCP: 0,1,2.',
    },
  ],
  hints: [
    'Prefix doubling: initialize rank[i]=charCodeAt(i). Each round: sort (rank[i], rank[i+gap]) pairs; reassign rank 0..n-1 in sorted order (equal pairs get same rank). Stop when all ranks are distinct.',
    "Kasai's algorithm: compute inverse SA (rank in SA). For each i from 0 to n-1: if rank[i]==0 skip. Extend LCP from h=max(0, prev_h - 1) character by character. Store lcp[rank[i]] = h.",
    'Use the SA to sort suffixes, but note that when rank[i+gap] is out of bounds, treat it as -∞ (smallest possible). This ensures shorter suffixes sort before longer ones with the same prefix.',
  ],
  functionName: 'suffixArrayLCP',
  params: ['s'],
  starterCode: {
    javascript: `function suffixArrayLCP(s) {\n\n}`,
    typescript: `function suffixArrayLCP(s: string): [number[], number[]] {\n\n}`,
    python: `def suffixArrayLCP(s: str) -> list:\n    pass`,
  },
  visibleTests: [
    { args: ['banana'], expected: [[5, 3, 1, 0, 4, 2], [0, 1, 3, 0, 0, 2]] },
    { args: ['abab'], expected: [[2, 0, 3, 1], [0, 2, 0, 1]] },
    { args: ['aaa'], expected: [[2, 1, 0], [0, 1, 2]] },
    { args: ['aab'], expected: [[0, 1, 2], [0, 1, 0]] },
  ],
  hiddenTests: [
    { args: ['mississippi'], expected: [[10, 7, 4, 1, 0, 9, 8, 6, 3, 5, 2], [0, 1, 1, 4, 0, 0, 1, 0, 2, 1, 3]] },
    { args: ['abcabc'], expected: [[3, 0, 4, 1, 5, 2], [0, 3, 0, 2, 0, 1]] },
    { args: ['a'], expected: [[0], [0]] },
    { args: ['ab'], expected: [[0, 1], [0, 0]] },
    { args: ['ba'], expected: [[1, 0], [0, 0]] },
  ],
};
