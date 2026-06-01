import type { Problem } from '../types';

export const problem: Problem = {
  id: 'take-k-characters-from-left-and-right',
  title: 'Take K of Each Character From Left and Right',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window', 'two-pointers'],
  description: `You are given a string \`s\` consisting of only the characters \`'a'\`, \`'b'\`, and \`'c'\`, and a non-negative integer \`k\`.

Each minute, you may take either the **leftmost** or **rightmost** character of \`s\`.

Return the **minimum number of minutes** needed so that you have taken **at least** \`k\` of each character \`'a'\`, \`'b'\`, and \`'c'\`, or return \`-1\` if it is impossible.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of only the letters a, b, and c.',
    '0 <= k <= s.length',
  ],
  examples: [
    {
      input: 's = "aabaaaacaabc", k = 2',
      output: '8',
      explanation: 'The optimal strategy leaves the middle "aaaa" (positions 3–6) untouched. You take 3 from the left and 5 from the right in 8 total moves.',
    },
    {
      input: 's = "abc", k = 1',
      output: '3',
      explanation: 'You must take all 3 characters — there is no way to leave any behind and still have 1 of each.',
    },
    {
      input: 's = "aabbcc", k = 1',
      output: '4',
      explanation: 'Leaving the middle "bb" or "bc" (length 2) gives the minimum 6−2=4 moves.',
    },
  ],
  hints: [
    'Level 1: First check feasibility: count occurrences of each character; if any count < k, return -1.',
    'Level 2: You take some prefix and some suffix of s, totalling T characters. Equivalently, you *leave* a contiguous middle substring of length n−T. Maximize the middle length to minimize T.',
    'Level 3: Use a sliding window on the middle substring. Maintain counts of characters *inside* the window. A window is valid if, for each of a, b, c, the inside count ≤ total_count − k (i.e., the outside still has ≥ k of that character). Maximize valid window length; answer = n − maxWindow.',
  ],
  functionName: 'takeCharacters',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function takeCharacters(s, k) {

}`,
    typescript: `function takeCharacters(s: string, k: number): number {

}`,
    python: `def takeCharacters(s, k):
    pass`,
  },
  visibleTests: [
    { args: ['aabaaaacaabc', 2], expected: 8 },
    { args: ['abc', 1], expected: 3 },
    { args: ['aabbcc', 1], expected: 4 },
  ],
  hiddenTests: [
    { args: ['abcabc', 2], expected: 6 },
    { args: ['aaaabc', 1], expected: 3 },
    { args: ['abc', 2], expected: -1 },
    { args: ['aabbccaabbcc', 2], expected: 6 },
    { args: ['a', 1], expected: -1 },
    { args: ['abcabcabc', 3], expected: 9 },
    { args: ['aaabbbccc', 2], expected: 7 },
    { args: ['abc', 0], expected: 0 },
  ],
};
