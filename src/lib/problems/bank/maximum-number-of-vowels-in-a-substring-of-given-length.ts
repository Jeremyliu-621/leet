import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-vowels-in-a-substring-of-given-length',
  title: 'Maximum Number of Vowels in a Substring of Given Length',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `Given a string \`s\` and an integer \`k\`, return the **maximum** number of vowel letters in any substring of \`s\` with length \`k\`.

**Vowel letters** in English are \`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, and \`'u'\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    '1 <= k <= s.length',
    's consists of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "abciiidef", k = 3',
      output: '3',
      explanation: 'The substring "iii" contains 3 vowels.',
    },
    {
      input: 's = "aeiou", k = 2',
      output: '2',
      explanation: 'Any substring of length 2 contains 2 vowels.',
    },
    {
      input: 's = "leetcode", k = 3',
      output: '2',
      explanation: '"lee", "eet", "ode" each have at most 2 vowels.',
    },
  ],
  hints: [
    'Keep a sliding window of size k. Track the vowel count in the window.',
    'When sliding right, add 1 if the incoming char is a vowel; subtract 1 if the outgoing char (at index i-k) is a vowel.',
    'Track the running maximum.',
  ],
  functionName: 'maxVowels',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function maxVowels(s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;
  for (let i = 0; i < k; i++) if (vowels.has(s[i])) count++;
  let best = count;
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) count++;
    if (vowels.has(s[i - k])) count--;
    if (count > best) best = count;
  }
  return best;
}`,
    typescript: `function maxVowels(s: string, k: number): number {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;
  for (let i = 0; i < k; i++) if (vowels.has(s[i]!)) count++;
  let best = count;
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i]!)) count++;
    if (vowels.has(s[i - k]!)) count--;
    if (count > best) best = count;
  }
  return best;
}`,
    python: `def maxVowels(s, k):
    vowels = set('aeiou')
    count = sum(1 for c in s[:k] if c in vowels)
    best = count
    for i in range(k, len(s)):
        if s[i] in vowels: count += 1
        if s[i - k] in vowels: count -= 1
        if count > best: best = count
    return best`,
  },
  visibleTests: [
    { args: ['abciiidef', 3], expected: 3 },
    { args: ['aeiou', 2], expected: 2 },
    { args: ['leetcode', 3], expected: 2 },
  ],
  hiddenTests: [
    { args: ['rhythms', 4], expected: 0 },
    { args: ['tryhard', 4], expected: 1 },
    { args: ['a', 1], expected: 1 },
    { args: ['zzzz', 2], expected: 0 },
    { args: ['weallloveyou', 7], expected: 4 },
    { args: ['aeiouaeiou', 5], expected: 5 },
    { args: ['bcdfghjkl', 3], expected: 0 },
  ],
};
