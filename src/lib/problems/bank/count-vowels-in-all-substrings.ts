import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-vowels-in-all-substrings',
  title: 'Count Vowels in All Substrings',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `Given a string \`word\`, return the **sum of the number of vowels** (\`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, \`'u'\`) in every **substring** of \`word\`.

A **substring** is a contiguous (non-empty) sequence of characters within a string.

Note: Due to the large number of possible answers, return the answer modulo \`10^9 + 7\`.`,
  constraints: [
    '`1 <= word.length <= 10^5`',
    '`word` consists of lowercase English letters',
  ],
  examples: [
    {
      input: 'word = "aba"',
      output: '6',
      explanation: 'All substrings: "a"(1), "ab"(1), "aba"(2), "b"(0), "ba"(1), "a"(1). Total = 6.',
    },
    {
      input: 'word = "abc"',
      output: '3',
      explanation: '"a"(1), "ab"(1), "abc"(1), "b"(0), "bc"(0), "c"(0). Total = 3.',
    },
    {
      input: 'word = "ltcd"',
      output: '0',
      explanation: 'No vowels — all substrings contribute 0.',
    },
  ],
  hints: [
    'A character at index i appears in substrings starting at 0..i and ending at i..n-1.',
    'The number of substrings containing position i is (i+1) * (n-i).',
    'Sum (i+1)*(n-i) for every vowel position i.',
  ],
  functionName: 'countVowels',
  params: ['word'],
  starterCode: {
    javascript: `function countVowels(word) {
  const MOD = 1_000_000_007n;
  const n = word.length;
  const vowels = new Set('aeiou');
  let ans = 0n;
  for (let i = 0; i < n; i++) {
    if (vowels.has(word[i])) ans = (ans + BigInt(i + 1) * BigInt(n - i)) % MOD;
  }
  return Number(ans);
}`,
    typescript: `function countVowels(word: string): number {
  const MOD = 1_000_000_007n;
  const n = word.length;
  const vowels = new Set('aeiou');
  let ans = 0n;
  for (let i = 0; i < n; i++) {
    if (vowels.has(word[i]!)) ans = (ans + BigInt(i + 1) * BigInt(n - i)) % MOD;
  }
  return Number(ans);
}`,
    python: `def countVowels(word):
    MOD = 10**9 + 7
    n = len(word)
    vowels = set('aeiou')
    return sum((i + 1) * (n - i) for i in range(n) if word[i] in vowels) % MOD`,
  },
  visibleTests: [
    { args: ['aba'], expected: 6 },
    { args: ['abc'], expected: 3 },
    { args: ['ltcd'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aa'], expected: 4 },
    { args: ['aeiou'], expected: 35 },
    { args: ['bcdf'], expected: 0 },
    { args: ['aab'], expected: 7 },
    { args: ['ieaiio'], expected: 56 },
  ],
};
