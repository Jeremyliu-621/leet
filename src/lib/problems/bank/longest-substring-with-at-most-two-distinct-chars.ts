import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-substring-with-at-most-two-distinct-chars',
  title: 'Longest Substring with At Most Two Distinct Characters',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window', 'hash-map'],
  description: `Given a string \`s\`, return the length of the **longest substring** that contains **at most two distinct characters**.

**Constraints:**
- \`0 ≤ s.length ≤ 5 × 10^4\`
- \`s\` consists of English letters.`,
  examples: [
    {
      input: 's = "eceba"',
      output: '3',
      explanation: 'The substring "ece" contains 2 distinct characters and has length 3.',
    },
    {
      input: 's = "ccaabbb"',
      output: '5',
      explanation: 'The substring "aabbb" contains 2 distinct characters and has length 5.',
    },
  ],
  constraints: ['Sliding window: expand right, shrink from left whenever distinct chars > 2.'],
  hints: [
    'Use a hash map to track character frequencies in the current window.',
    'Expand the right pointer one character at a time. When the window has > 2 distinct characters, advance the left pointer until it is valid again.',
    'Track the maximum window size throughout.',
  ],
  params: ['s'],
  starterCode: {
    javascript: `function lengthOfLongestSubstringTwoDistinct(s) {

}`,
    typescript: `function lengthOfLongestSubstringTwoDistinct(s: string): number {

}`,
    python: `def lengthOfLongestSubstringTwoDistinct(s: str) -> int:
    pass`,
  },
  functionName: 'lengthOfLongestSubstringTwoDistinct',
  visibleTests: [
    { args: ['eceba'], expected: 3 },
    { args: ['ccaabbb'], expected: 5 },
    { args: [''], expected: 0 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aaaa'], expected: 4 },
    { args: ['abc'], expected: 2 },
    { args: ['abcba'], expected: 3 },
    { args: ['abab'], expected: 4 },
    { args: ['aab'], expected: 3 },
    { args: ['aabbb'], expected: 5 },
  ],
};
