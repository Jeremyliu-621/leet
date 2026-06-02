import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-window-containing-all-vowels',
  title: 'Minimum Window Containing All Vowels',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window', 'hash-map'],
  description: `Given a string \`s\` consisting of lowercase English letters, return the **length** of the shortest substring of \`s\` that contains all five vowels (\`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, \`'u'\`) **at least once**.

If no such substring exists, return \`-1\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of lowercase English letters only.',
  ],
  examples: [
    {
      input: 's = "baeioucdef"',
      output: '5',
      explanation: 'The substring "aeiou" (indices 1–5) contains all five vowels and has length 5. No shorter window exists.',
    },
    {
      input: 's = "oaueibaeiou"',
      output: '5',
      explanation: 'The substring "aeiou" starting at index 6 has all five vowels with length 5.',
    },
    {
      input: 's = "bcdfghj"',
      output: '-1',
      explanation: 'There are no vowels in the string, so it is impossible to form such a window.',
    },
  ],
  hints: [
    'Use a sliding-window approach with two pointers. Expand the right pointer to include characters, then shrink the left pointer whenever the window already contains all 5 vowels.',
    'Maintain a frequency map tracking how many of each vowel are currently in the window. The window is valid when all five vowels have a count of at least 1.',
    'When you find a valid window, record its length, then advance the left pointer (removing the leftmost vowel if applicable) to try finding a shorter valid window.',
  ],
  functionName: 'minWindowAllVowels',
  params: ['s'],
  starterCode: {
    javascript: `function minWindowAllVowels(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const freq = {};
  let have = 0, lo = 0, best = Infinity;
  for (let hi = 0; hi < s.length; hi++) {
    const c = s[hi];
    if (vowels.has(c)) { freq[c] = (freq[c] || 0) + 1; if (freq[c] === 1) have++; }
    while (have === 5) {
      best = Math.min(best, hi - lo + 1);
      const lc = s[lo++];
      if (vowels.has(lc)) { freq[lc]--; if (freq[lc] === 0) have--; }
    }
  }
  return best === Infinity ? -1 : best;
}`,
    typescript: `function minWindowAllVowels(s: string): number {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const freq: Record<string, number> = {};
  let have = 0, lo = 0, best = Infinity;
  for (let hi = 0; hi < s.length; hi++) {
    const c = s[hi]!;
    if (vowels.has(c)) { freq[c] = (freq[c] ?? 0) + 1; if (freq[c] === 1) have++; }
    while (have === 5) {
      best = Math.min(best, hi - lo + 1);
      const lc = s[lo++]!;
      if (vowels.has(lc)) { freq[lc]!--; if (freq[lc] === 0) have--; }
    }
  }
  return best === Infinity ? -1 : best;
}`,
    python: `def minWindowAllVowels(s):
    if hasattr(s, 'to_py'): s = s.to_py()
    vowels = set('aeiou')
    freq = {}; have = 0; lo = 0; best = float('inf')
    for hi, c in enumerate(s):
        if c in vowels:
            freq[c] = freq.get(c, 0) + 1
            if freq[c] == 1: have += 1
        while have == 5:
            best = min(best, hi - lo + 1)
            lc = s[lo]; lo += 1
            if lc in vowels:
                freq[lc] -= 1
                if freq[lc] == 0: have -= 1
    return -1 if best == float('inf') else best`,
  },
  visibleTests: [
    { args: ['baeioucdef'], expected: 5 },
    { args: ['oaueibaeiou'], expected: 5 },
    { args: ['bcdfghj'], expected: -1 },
  ],
  hiddenTests: [
    { args: ['aeiou'], expected: 5 },
    { args: ['aei'], expected: -1 },
    { args: ['baeioub'], expected: 5 },
    { args: ['aXeXiXoXu'], expected: 9 },
    { args: ['uuuuaeoiaaaaa'], expected: 5 },
    { args: ['aeiouaeiou'], expected: 5 },
    { args: ['ttaeioutt'], expected: 5 },
    { args: ['aeiboaeyui'], expected: 6 },
  ],
};
