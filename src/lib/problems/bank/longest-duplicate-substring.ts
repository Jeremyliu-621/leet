import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-duplicate-substring',
  title: 'Longest Duplicate Substring',
  difficulty: 'hard',
  tags: ['strings', 'binary-search', 'sliding-window'],
  description: `Given a string \`s\`, consider all **duplicated substrings**: substrings of \`s\` that occur **two or more times**. The occurrences may overlap.

Return **any** duplicated substring that has the longest possible length. If \`s\` does not have a duplicated substring, return \`""\`.

A **substring** is a contiguous sequence of characters within a string.`,
  constraints: [
    '2 <= s.length <= 3 * 10^4',
    's consists of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "banana"',
      output: '"ana"',
      explanation:
        '"ana" appears at indices 1 and 3. "an" also appears twice, but "ana" is longer.',
    },
    {
      input: 's = "abcd"',
      output: '""',
      explanation: 'No substring of length ≥ 2 appears more than once.',
    },
    {
      input: 's = "aaaa"',
      output: '"aaa"',
      explanation: '"aaa" appears at index 0 and index 1 (overlapping is allowed).',
    },
  ],
  hints: [
    'Binary search on the answer length. If a duplicate substring of length k exists, then one of length k-1 also exists — monotone property, so binary search works.',
    'For a fixed length k, use Rabin-Karp rolling hash to check if any substring of length k appears twice. Maintain a hash set of seen hashes. If a hash collision occurs, verify character-by-character to avoid false positives.',
    'Choose a large prime base and modulus for the rolling hash to reduce false positive collisions. Roll the hash by removing the leading character and adding the trailing character in O(1).',
  ],
  functionName: 'longestDupSubstring',
  params: ['s'],
  starterCode: {
    javascript: `function longestDupSubstring(s) {
  // Return the longest substring that appears at least twice
}`,
    python: `def longestDupSubstring(s: str) -> str:
    # Return the longest substring that appears at least twice
    pass`,
  },
  visibleTests: [
    { args: ['banana'], expected: 'ana' },
    { args: ['abcd'], expected: '' },
    { args: ['aaaa'], expected: 'aaa' },
  ],
  hiddenTests: [
    { args: ['aa'], expected: 'a' },
    { args: ['abcabc'], expected: 'abc' },
    { args: ['abcabcabc'], expected: 'abcabc' },
    { args: ['abcdefgh'], expected: '' },
    { args: ['aababaa'], expected: 'aba' },
    { args: ['abab'], expected: 'ab' },
  ],
};
