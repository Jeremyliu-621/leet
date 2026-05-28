import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-beauty-of-all-substrings',
  title: 'Sum of Beauty of All Substrings',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `The **beauty** of a string is the difference in frequencies between the most frequent and least frequent characters.

- For example, the beauty of \`"abaacc"\` is \`3 - 1 = 2\`.

Given a string \`s\`, return *the sum of **beauty** of all of its substrings.*

**Approach:** For every substring s[i..j], build a frequency map and compute max_freq − min_freq. Sum over all i < j.`,
  constraints: [
    '1 <= s.length <= 500',
    's consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "aabcb"',
      output: '5',
      explanation: 'Substrings with non-zero beauty: "aab"→1, "aabc"→1, "aabcb"→1, "abcb"→1, "bcb"→1. Sum = 5.',
    },
    {
      input: 's = "aabcbaa"',
      output: '17',
      explanation: 'Sum of beauties of all substrings = 17.',
    },
  ],
  hints: [
    'Fix left index i, extend right index j one step at a time updating a frequency array.',
    'For each (i,j), max_freq − min_freq (only count chars with freq > 0) is the beauty.',
    '```js\nfunction beautySum(s) {\n  let ans = 0;\n  for (let i = 0; i < s.length; i++) {\n    const freq = new Array(26).fill(0);\n    for (let j = i; j < s.length; j++) {\n      freq[s.charCodeAt(j)-97]++;\n      const vals = freq.filter(v=>v>0);\n      ans += Math.max(...vals) - Math.min(...vals);\n    }\n  }\n  return ans;\n}\n```',
  ],
  functionName: 'beautySum',
  params: ['s'],
  starterCode: {
    javascript: `function beautySum(s) {
  // return sum of beauties of all substrings

}`,
    typescript: "function beautySum(s: string): number {\n  // return sum of beauties of all substrings\n\n}",

    python: `def beautySum(s: str) -> int:
    # return sum of beauties of all substrings
    pass
`,
  },
  visibleTests: [
    { args: ['aabcb'], expected: 5 },
    { args: ['aabcbaa'], expected: 17 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 0 },
    { args: ['aa'], expected: 0 },
    { args: ['ab'], expected: 0 },
    { args: ['aab'], expected: 1 },
    { args: ['abc'], expected: 0 },
    { args: ['aabc'], expected: 2 },
    { args: ['aabb'], expected: 2 },
  ],
};
