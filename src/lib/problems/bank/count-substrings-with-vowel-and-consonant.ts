import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-substrings-with-vowel-and-consonant',
  title: 'Count Substrings With Vowel and Consonant',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `You are given a string \`word\` consisting of lowercase English letters.

Return the number of **substrings** of \`word\` that contain **at least one** vowel and **at least one** consonant.

> The vowels are \`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, and \`'u'\`. All other letters are consonants.`,
  constraints: [
    '1 <= word.length <= 10^5',
    'word consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word = "abc"',
      output: '2',
      explanation: '"ab" and "abc" each contain at least one vowel and one consonant. The single-char substrings and "bc" do not.',
    },
    {
      input: 'word = "aeiou"',
      output: '0',
      explanation: 'All characters are vowels, so no substring can contain a consonant.',
    },
    {
      input: 'word = "bcdf"',
      output: '0',
      explanation: 'All characters are consonants, so no substring can contain a vowel.',
    },
  ],
  hints: [
    'Level 1: Total substrings = n*(n+1)/2. Substrings with at least one vowel AND one consonant = total − (all-vowel substrings) − (all-consonant substrings).',
    'Level 2: Group consecutive characters into maximal runs of "all vowels" or "all consonants". A run of length L contributes L*(L+1)/2 all-one-type substrings.',
    'Level 3: Walk through the string maintaining the current run type and length. When the type changes, record the contribution of the finished run and start a new one. Subtract all runs from the total at the end.',
  ],
  functionName: 'countOfSubstrings',
  params: ['word'],
  starterCode: {
    javascript: `function countOfSubstrings(word) {
  const isVowel = c => 'aeiou'.includes(c);
  const n = word.length;
  const total = n * (n + 1) / 2;
  let mono = 0, run = 1;
  for (let i = 1; i <= n; i++) {
    if (i < n && isVowel(word[i]) === isVowel(word[i - 1])) { run++; }
    else { mono += run * (run + 1) / 2; run = 1; }
  }
  return total - mono;
}`,
    typescript: `function countOfSubstrings(word: string): number {
  const isVowel = (c: string) => 'aeiou'.includes(c);
  const n = word.length;
  const total = n * (n + 1) / 2;
  let mono = 0, run = 1;
  for (let i = 1; i <= n; i++) {
    if (i < n && isVowel(word[i]!) === isVowel(word[i - 1]!)) { run++; }
    else { mono += run * (run + 1) / 2; run = 1; }
  }
  return total - mono;
}`,
    python: `def countOfSubstrings(word):
    vowels = set('aeiou')
    n = len(word)
    total = n * (n + 1) // 2
    mono, run = 0, 1
    for i in range(1, n + 1):
        if i < n and (word[i] in vowels) == (word[i-1] in vowels):
            run += 1
        else:
            mono += run * (run + 1) // 2
            run = 1
    return total - mono`,
  },
  visibleTests: [
    { args: ['abc'], expected: 2 },
    { args: ['aeiou'], expected: 0 },
    { args: ['bcdf'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['aabb'], expected: 4 },
    { args: ['abcd'], expected: 3 },
    { args: ['unicorn'], expected: 20 },
    { args: ['a'], expected: 0 },
    { args: ['ab'], expected: 1 },
    { args: ['ba'], expected: 1 },
    { args: ['leetcode'], expected: 26 },
    { args: ['aaa'], expected: 0 },
    { args: ['bbb'], expected: 0 },
    { args: ['aba'], expected: 3 },
  ],
};
