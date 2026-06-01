import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-of-substrings-containing-every-vowel-and-k-consonants-i',
  title: 'Count of Substrings Containing Every Vowel and K Consonants I',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `You are given a string \`word\` and a non-negative integer \`k\`.

Return the total number of substrings of \`word\` that contain every vowel (\`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, \`'u'\`) at least once and **exactly** \`k\` consonants.`,
  constraints: [
    '5 <= word.length <= 250',
    'word consists only of lowercase English letters',
    '0 <= k <= word.length - 5',
  ],
  examples: [
    {
      input: 'word = "aeiouabc", k = 1',
      output: '2',
      explanation: 'Substrings with all 5 vowels and exactly 1 consonant: "aeiouab" (indices 0–6) and "eiouab" (indices 1–6), each has all of a,e,i,o,u plus exactly one consonant b.',
    },
    {
      input: 'word = "aeiou", k = 0',
      output: '1',
      explanation: 'Only "aeiou" itself contains all vowels and 0 consonants.',
    },
    {
      input: 'word = "aeiouq", k = 1',
      output: '1',
      explanation: '"aeiouq" is the only substring with all 5 vowels and exactly 1 consonant.',
    },
  ],
  hints: [
    'Use the identity: exactly(k) = atLeast(k) − atLeast(k+1).',
    'For atLeast(k), use a two-pointer sliding window: expand the right pointer, shrink the left when consonants ≥ k and all 5 vowels are present. Each valid left position contributes (n − right) new substrings.',
    'Track vowel coverage with a frequency Map (delete when count reaches 0, so Map.size tells you how many distinct vowels are in the window).',
  ],
  functionName: 'countOfSubstrings',
  params: ['word', 'k'],
  starterCode: {
    javascript: `function countOfSubstrings(word, k) {
  const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);
  function atLeast(minK) {
    const vFreq = new Map();
    let cons = 0, l = 0, ans = 0;
    for (let r = 0; r < word.length; r++) {
      const c = word[r];
      if (VOWELS.has(c)) vFreq.set(c, (vFreq.get(c) ?? 0) + 1);
      else cons++;
      while (vFreq.size === 5 && cons >= minK) {
        const lc = word[l];
        if (VOWELS.has(lc)) {
          const f = vFreq.get(lc) - 1;
          if (f === 0) vFreq.delete(lc); else vFreq.set(lc, f);
        } else cons--;
        l++;
      }
      ans += l;
    }
    return ans;
  }
  return atLeast(k) - atLeast(k + 1);
}`,
    typescript: `function countOfSubstrings(word: string, k: number): number {
  const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);
  function atLeast(minK: number): number {
    const vFreq = new Map<string, number>();
    let cons = 0, l = 0, ans = 0;
    for (let r = 0; r < word.length; r++) {
      const c = word[r]!;
      if (VOWELS.has(c)) vFreq.set(c, (vFreq.get(c) ?? 0) + 1);
      else cons++;
      while (vFreq.size === 5 && cons >= minK) {
        const lc = word[l]!;
        if (VOWELS.has(lc)) {
          const f = vFreq.get(lc)! - 1;
          if (f === 0) vFreq.delete(lc); else vFreq.set(lc, f);
        } else cons--;
        l++;
      }
      ans += l;
    }
    return ans;
  }
  return atLeast(k) - atLeast(k + 1);
}`,
    python: `def countOfSubstrings(word, k):
    if hasattr(word, 'to_py'): word = word.to_py()
    VOWELS = set('aeiou')
    def at_least(min_k):
        v_freq, cons, l, ans = {}, 0, 0, 0
        for r, c in enumerate(word):
            if c in VOWELS:
                v_freq[c] = v_freq.get(c, 0) + 1
            else:
                cons += 1
            while len(v_freq) == 5 and cons >= min_k:
                lc = word[l]
                if lc in VOWELS:
                    v_freq[lc] -= 1
                    if v_freq[lc] == 0: del v_freq[lc]
                else:
                    cons -= 1
                l += 1
            ans += l
        return ans
    return at_least(k) - at_least(k + 1)`,
  },
  visibleTests: [
    { args: ['aeiouabc', 1], expected: 2 },
    { args: ['aeiou', 0], expected: 1 },
    { args: ['aeiouq', 1], expected: 1 },
  ],
  hiddenTests: [
    { args: ['aeiouabc', 2], expected: 2 },
    { args: ['aeiouaeioubc', 1], expected: 6 },
    { args: ['aeiouaeiou', 0], expected: 21 },
    { args: ['aeiouq', 0], expected: 1 },
    { args: ['aeiouabc', 0], expected: 3 },
  ],
};
