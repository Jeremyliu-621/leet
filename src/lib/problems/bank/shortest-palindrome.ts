import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-palindrome',
  title: 'Shortest Palindrome',
  difficulty: 'hard',
  tags: ['strings', 'two-pointers'],
  description: `You are given a string \`s\`. You can convert it to a palindrome by adding characters **in front of it**.

Return the **shortest palindrome** you can find by performing this transformation.

**Example:** \`"aacecaaa"\` → prepend \`"a"\` → \`"aaacecaaa"\`.

**Key insight:** The longest palindromic prefix of \`s\` determines how many characters you need to prepend. If the longest palindrome starting at index 0 has length \`k\`, then the characters \`s[k..n-1]\` reversed must be prepended to the front.`,
  constraints: [
    '0 <= s.length <= 5 * 10^4',
    's consists of lowercase English letters only',
  ],
  examples: [
    {
      input: 's = "aacecaaa"',
      output: '"aaacecaaa"',
      explanation:
        'The longest palindromic prefix of "aacecaaa" is "aacecaa" (length 7). The remaining suffix is "a", reversed is "a". Prepend "a" → "aaacecaaa".',
    },
    {
      input: 's = "abcd"',
      output: '"dcbabcd"',
      explanation:
        'The longest palindromic prefix is just "a" (length 1). The suffix "bcd" reversed is "dcb". Prepend "dcb" → "dcbabcd".',
    },
    {
      input: 's = "race"',
      output: '"ecarace"',
      explanation:
        'The longest palindromic prefix is "r" (length 1). Prepend reversed suffix "eca" → "ecarace".',
    },
  ],
  hints: [
    'Find the longest palindromic prefix of s. One approach: try each prefix length from longest to shortest, checking if s.substring(0, len) is a palindrome. But this is O(n²) — acceptable for short strings.',
    'A faster O(n) approach uses KMP failure function on the concatenated string s + "#" + reversed(s). The failure function value at the last position gives the length of the longest palindromic prefix.',
    'Once you know the longest palindromic prefix has length k, the answer is reverse(s.substring(k)) + s.',
  ],
  functionName: 'shortestPalindrome',
  params: ['s'],
  starterCode: {
    javascript: `function shortestPalindrome(s) {
  // Find shortest palindrome by prepending characters to s
}`,
    python: `def shortestPalindrome(s: str) -> str:
    # Find shortest palindrome by prepending characters to s
    pass`,
  },
  visibleTests: [
    { args: ['aacecaaa'], expected: 'aaacecaaa' },
    { args: ['abcd'], expected: 'dcbabcd' },
    { args: ['race'], expected: 'ecarace' },
    { args: [''], expected: '' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['aa'], expected: 'aa' },
    { args: ['ab'], expected: 'bab' },
    { args: ['aba'], expected: 'aba' },
    { args: ['abac'], expected: 'cabac' },
    { args: ['aab'], expected: 'baab' },
    { args: ['abcba'], expected: 'abcba' },
    { args: ['abacaba'], expected: 'abacaba' },
  ],
};
