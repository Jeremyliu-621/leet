import type { Problem } from '../types';

export const problem: Problem = {
  id: 'at-most-k-distinct',
  title: 'Longest Substring with At Most K Distinct Characters',
  difficulty: 'medium',
  tags: ['sliding-window', 'hash-map', 'strings'],
  description: `Given a string \`s\` and an integer \`k\`, return the length of the longest substring that contains **at most \`k\` distinct characters**.

Use a sliding window with a character-frequency map: expand the right boundary freely, and shrink the left boundary whenever the number of distinct characters exceeds \`k\`.

**Example:** \`s = "eceba", k = 2\` → \`3\` (the substring \`"ece"\` has 2 distinct chars).`,
  constraints: [
    '1 <= s.length <= 10^4',
    '0 <= k <= s.length',
    's consists of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "eceba", k = 2',
      output: '3',
      explanation: '"ece" is the longest with 2 distinct chars.',
    },
    {
      input: 's = "aa", k = 1',
      output: '2',
      explanation: 'The whole string has 1 distinct char.',
    },
    {
      input: 's = "aabbcc", k = 2',
      output: '4',
      explanation: '"aabb" or "bbcc".',
    },
  ],
  hints: [
    'Use a sliding window `[l, r]` and a map counting character frequencies inside the window. Expand `r`; whenever the map has more than `k` keys, advance `l` until the map is back to `k` keys.',
    'When you remove a character at `l`, decrement its count in the map. If the count hits 0, delete the key entirely — that\'s how you track the number of distinct characters.',
    '`const freq = new Map<string, number>(); let l = 0, best = 0; for (let r = 0; r < s.length; r++) { freq.set(s[r], (freq.get(s[r]) ?? 0) + 1); while (freq.size > k) { const lc = s[l++]; freq.set(lc, freq.get(lc)! - 1); if (freq.get(lc) === 0) freq.delete(lc); } best = Math.max(best, r - l + 1); } return best;`',
  ],
  functionName: 'atMostKDistinct',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function atMostKDistinct(s, k) {
  const freq = new Map();
  let l = 0, best = 0;
  for (let r = 0; r < s.length; r++) {
    freq.set(s[r], (freq.get(s[r]) ?? 0) + 1);
    while (freq.size > k) {
      const lc = s[l++];
      freq.set(lc, freq.get(lc) - 1);
      if (freq.get(lc) === 0) freq.delete(lc);
    }
    best = Math.max(best, r - l + 1);
  }
  return best;
}`,
    typescript: `function atMostKDistinct(s: string, k: number): number {
  const freq = new Map<string, number>();
  let l = 0, best = 0;
  for (let r = 0; r < s.length; r++) {
    freq.set(s[r]!, (freq.get(s[r]!) ?? 0) + 1);
    while (freq.size > k) {
      const lc = s[l++]!;
      freq.set(lc, freq.get(lc)! - 1);
      if (freq.get(lc) === 0) freq.delete(lc);
    }
    best = Math.max(best, r - l + 1);
  }
  return best;
}`,
    python: `def atMostKDistinct(s, k):
    if hasattr(s, 'to_py'): s = s.to_py()
    from collections import defaultdict
    freq = defaultdict(int)
    l = best = 0
    for r, c in enumerate(s):
        freq[c] += 1
        while len(freq) > k:
            freq[s[l]] -= 1
            if freq[s[l]] == 0: del freq[s[l]]
            l += 1
        best = max(best, r - l + 1)
    return best`,
  },
  visibleTests: [
    { args: ['eceba', 2], expected: 3 },
    { args: ['aa', 1], expected: 2 },
    { args: ['aabbcc', 2], expected: 4 },
    { args: ['aabbcc', 3], expected: 6 },
  ],
  hiddenTests: [
    { args: ['', 2], expected: 0 },
    { args: ['abc', 0], expected: 0 },
    { args: ['aaabbb', 1], expected: 3 },
    { args: ['abcadcacacaca', 3], expected: 11 },
  ],
};
