import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-substrings-that-can-be-rearranged-to-contain-a-string-i',
  title: 'Count Substrings That Can Be Rearranged to Contain a String I',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window', 'hash-map'],
  description: `You are given two strings \`word1\` and \`word2\`.

A string \`x\` is called **valid** if \`x\` can be rearranged to have \`word2\` as a prefix. In other words, \`x\` is valid if **for every character** \`c\`, the frequency of \`c\` in \`x\` is **at least** the frequency of \`c\` in \`word2\`.

Return the **total number of valid substrings** of \`word1\`.

Since the answer may be very large, return it **modulo \`10^9 + 7\`**.`,
  constraints: [
    '1 <= word1.length <= 10^5',
    '1 <= word2.length <= word1.length',
    'word1 and word2 consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word1 = "bcca", word2 = "abc"',
      output: '1',
      explanation: 'Substrings of "bcca" that contain at least one "a", one "b", and one "c": only "bcca" (length 4). Answer: 1.',
    },
    {
      input: 'word1 = "abcabc", word2 = "abc"',
      output: '10',
      explanation: 'Valid substrings (must contain ≥1 a, ≥1 b, ≥1 c): "abc"(0,2), "abca"(0,3), "abcab"(0,4), "abcabc"(0,5), "bca"(1,3), "bcab"(1,4), "bcabc"(1,5), "cab"(2,4), "cabc"(2,5), "abc"(3,5). Count: 10.',
    },
    {
      input: 'word1 = "abcabc", word2 = "a"',
      output: '15',
      explanation: 'Any substring containing at least one "a". "a" appears at positions 0 and 3. Substrings NOT containing "a" must lie entirely in [1,2]="bc" or [4,5]="bc" — that is 3+3=6 substrings. Total substrings = 21, so answer = 21-6=15.',
    },
  ],
  hints: [
    'For each right pointer, find the rightmost left pointer such that word1[left..right] is still valid (has enough of every char in word2). Any substring starting at positions 0..left and ending at right is also valid.',
    'Use a sliding window: maintain a frequency table and a "deficit" count (number of distinct chars where current window has too few).',
    'Shrink the window from the left only when it is SAFE (removing the leftmost char still leaves the window valid — i.e., the char being removed has strictly more than needed, or is not needed at all). After shrinking, if deficit==0, count += (left_index + 1).',
    'The sum can exceed int32 range, so accumulate modulo 10^9+7.',
  ],
  functionName: 'validSubstringCount',
  params: ['word1', 'word2'],
  starterCode: {
    javascript: `function validSubstringCount(word1, word2) {

}`,
    typescript: `function validSubstringCount(word1: string, word2: string): number {

}`,
    python: `def validSubstringCount(word1: str, word2: str) -> int:
    pass`,
  },
  visibleTests: [
    { args: ['bcca', 'abc'], expected: 1 },
    { args: ['abcabc', 'abc'], expected: 10 },
    { args: ['abcabc', 'a'], expected: 15 },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: 1 },
    { args: ['aa', 'a'], expected: 3 },
    { args: ['aab', 'a'], expected: 5 },
    { args: ['abc', 'abc'], expected: 1 },
    { args: ['abcdef', 'fed'], expected: 4 },
    { args: ['aaaaaa', 'a'], expected: 21 },
    { args: ['abba', 'ab'], expected: 5 },
    { args: ['aaabbb', 'ab'], expected: 9 },
    { args: ['zxyabc', 'abc'], expected: 4 },
    { args: ['a', 'b'], expected: 0 },
  ],
};
