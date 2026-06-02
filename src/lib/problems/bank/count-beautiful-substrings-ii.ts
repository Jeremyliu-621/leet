import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-beautiful-substrings-ii',
  title: 'Count Beautiful Substrings II',
  difficulty: 'hard',
  tags: ['strings', 'hash-map', 'math'],
  description: `You are given a string \`s\` and a positive integer \`k\`.

Let \`vowels\` and \`consonants\` be the number of vowels and consonants in a substring of \`s\` respectively.

A substring is **beautiful** if:
- \`vowels == consonants\`
- \`(vowels * consonants) % k == 0\`

Return the number of **non-empty beautiful substrings** in the given string \`s\`.

**Vowels** in English are: a, e, i, o, u.`,
  constraints: [
    '`1 <= s.length <= 5 * 10^4`',
    '`1 <= k <= 1000`',
    '`s` consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "baeyh", k = 2',
      output: '2',
      explanation: 'The two beautiful substrings are "baey" (b,a,e,y → vowels=2, consonants=2, 2×2=4, 4%2=0 ✓) and "aeyh" (a,e,y,h → vowels=2, consonants=2, 4%2=0 ✓). Length-2 substrings like "ba" have 1×1=1 which is not divisible by 2.',
    },
    {
      input: 's = "abba", k = 1',
      output: '3',
      explanation: '"ab" v=1,c=1, 1%1=0 ✓. "bb" v=0,c=2 ✗. "ba" v=1,c=1, 1%1=0 ✓. "abba" v=2,c=2, 4%1=0 ✓. Count=3.',
    },
  ],
  hints: [
    'For a substring to have vowels==consonants, its length must be even (2L where L is the count of each). The product vowels*consonants = L*L = L². For L²%k==0, we need k to divide L².',
    'Use a prefix-sum approach: let prefix[i] = vowels - consonants in s[0..i-1]. For substrings s[j..i-1] to have equal vowels and consonants, we need prefix[i] == prefix[j]. Also the length (i-j) must satisfy (len/2)² % k == 0.',
    'For a substring of length 2L to be beautiful, k must divide L². Factor k into k = p*q² where p is squarefree. Then L must be divisible by lcm(p,q)/... Equivalently: find the smallest L such that L² % k == 0 by iterating L from 1. Then L must be a multiple of that smallest valid L. Group prefix sums by (prefix_value, (index % required_period)) and count pairs.',
  ],
  functionName: 'beautifulSubstrings',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function beautifulSubstrings(s, k) {
  // Find smallest L with L*L % k == 0; period = 2*L
  let L = 1;
  while ((L * L) % k !== 0) L++;
  const period = 2 * L;
  const vowels = new Set('aeiou');
  const map = new Map();
  map.set('0,0', 1);
  let score = 0, count = 0;
  for (let i = 0; i < s.length; i++) {
    score += vowels.has(s[i]) ? 1 : -1;
    const key = score + ',' + ((i + 1) % period);
    count += map.get(key) || 0;
    map.set(key, (map.get(key) || 0) + 1);
  }
  return count;
}`,
    typescript: `function beautifulSubstrings(s: string, k: number): number {
  let L = 1;
  while ((L * L) % k !== 0) L++;
  const period = 2 * L;
  const vowels = new Set('aeiou');
  const map = new Map<string, number>();
  map.set('0,0', 1);
  let score = 0, count = 0;
  for (let i = 0; i < s.length; i++) {
    score += vowels.has(s[i]!) ? 1 : -1;
    const key = score + ',' + ((i + 1) % period);
    count += map.get(key) ?? 0;
    map.set(key, (map.get(key) ?? 0) + 1);
  }
  return count;
}`,
    python: `def beautifulSubstrings(s, k):
    L = 1
    while (L * L) % k != 0:
        L += 1
    period = 2 * L
    vowels = set('aeiou')
    freq = {(0, 0): 1}
    score = count = 0
    for i, c in enumerate(s):
        score += 1 if c in vowels else -1
        key = (score, (i + 1) % period)
        count += freq.get(key, 0)
        freq[key] = freq.get(key, 0) + 1
    return count`,
  },
  visibleTests: [
    { args: ['baeyh', 2], expected: 2 },
    { args: ['abba', 1], expected: 3 },
    { args: ['bcdf', 1], expected: 0 },
  ],
  hiddenTests: [
    { args: ['a', 1], expected: 0 },
    { args: ['ae', 1], expected: 0 },
    { args: ['aeiou', 1], expected: 0 },
    { args: ['aebc', 1], expected: 2 },
    { args: ['aebbc', 1], expected: 2 },
    { args: ['aaebbc', 2], expected: 1 },
  ],
};
