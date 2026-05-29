import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-substring-with-maximum-cost',
  title: 'Find Substring With Maximum Cost',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given a string \`s\`, a string \`chars\` of **distinct** characters, and an integer array \`vals\` of the **same length** as \`chars\`.

The **cost of a substring** is the sum of costs of each character in the substring. The cost of a character is its corresponding value in \`vals\` if the character is in \`chars\`. Otherwise, the cost of the character is its position in the alphabet (i.e., \`'a'\` has cost 1, \`'b'\` has cost 2, ..., \`'z'\` has cost 26).

Return the **maximum** cost among all substrings of \`s\`. If all substrings have negative cost, return \`0\`.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`0 <= chars.length <= 26`',
    '`vals.length == chars.length`',
    '`-10^4 <= vals[i] <= 10^4`',
    '`s` and `chars` consist of lowercase English letters.',
    'All characters in `chars` are **distinct**.',
  ],
  examples: [
    {
      input: 's = "adaa", chars = "d", vals = [-1000]',
      output: '2',
      explanation: 'The value map is: a=1, d=-1000. The substring "aa" at the end has cost 1+1=2, which is the maximum.',
    },
    {
      input: 's = "abc", chars = "abc", vals = [-1,-1,-1]',
      output: '0',
      explanation: 'All characters have cost -1. No positive-cost substring exists, so the answer is 0.',
    },
  ],
  hints: [
    'Build a cost array for each character in s: use vals[i] if the character is in chars, otherwise use its alphabet position.',
    'Apply Kadane\'s algorithm, but floor the running sum at 0 (an empty substring has cost 0).',
    '```js\nfunction maximumCostSubstring(s, chars, vals) {\n  const costOf = new Map();\n  for (let i = 0; i < chars.length; i++) costOf.set(chars[i], vals[i]);\n  let cur = 0, ans = 0;\n  for (const ch of s) {\n    const c = costOf.has(ch) ? costOf.get(ch) : ch.charCodeAt(0) - 96;\n    cur = Math.max(0, cur + c);\n    ans = Math.max(ans, cur);\n  }\n  return ans;\n}\n```',
  ],
  functionName: 'maximumCostSubstring',
  params: ['s', 'chars', 'vals'],
  starterCode: {
    javascript: `function maximumCostSubstring(s, chars, vals) {

}`,
    typescript: `function maximumCostSubstring(s: string, chars: string, vals: number[]): number {

}`,
    python: `def maximumCostSubstring(s, chars, vals):
    pass`,
  },
  visibleTests: [
    { args: ['adaa', 'd', [-1000]], expected: 2 },
    { args: ['abc', 'abc', [-1, -1, -1]], expected: 0 },
  ],
  hiddenTests: [
    { args: ['abc', '', []], expected: 6 },
    { args: ['aaa', 'a', [5]], expected: 15 },
    { args: ['ba', '', []], expected: 3 },
    { args: ['dc', 'd', [-3]], expected: 3 },
    { args: ['z', '', []], expected: 26 },
    { args: ['zzz', 'z', [-5]], expected: 0 },
    { args: ['azb', 'z', [-100]], expected: 2 },
    { args: ['cbad', 'cbd', [10, -5, 20]], expected: 26 },
  ],
};
