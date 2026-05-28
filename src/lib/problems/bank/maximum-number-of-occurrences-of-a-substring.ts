import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-occurrences-of-a-substring',
  title: 'Maximum Number of Occurrences of a Substring',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `Given a string \`s\`, return the **maximum number of occurrences** of **any** substring under the following rules:

- The number of **unique characters** in the substring must be less than or equal to \`maxLetters\`.
- The **substring size** must be between \`minSize\` and \`maxSize\` inclusive.

**Key insight:** If a length-L substring occurs k times, its length-(L-1) prefix occurs at least k times. So the optimal answer always uses substrings of length exactly \`minSize\` — only check those.`,
  constraints: [
    '1 <= s.length <= 10^5',
    '1 <= maxLetters <= 26',
    '1 <= minSize <= maxSize <= min(26, s.length)',
    's consists of lowercase English letters only',
  ],
  examples: [
    {
      input: 's = "aababcaab", maxLetters = 2, minSize = 3, maxSize = 4',
      output: '2',
      explanation: '"aab" has 2 unique chars and appears twice.',
    },
    {
      input: 's = "aaaa", maxLetters = 1, minSize = 3, maxSize = 3',
      output: '2',
      explanation: '"aaa" appears twice (at positions 0 and 1).',
    },
    {
      input: 's = "aabcabcab", maxLetters = 2, minSize = 2, maxSize = 3',
      output: '3',
      explanation: '"ab" has 2 unique chars and appears 3 times.',
    },
  ],
  hints: [
    'Key observation: if a substring of length k appears m times, its length (k-1) prefix appears at least m times too. So checking only minSize is optimal.',
    'Slide a window of size `minSize` over `s`. For each window, if distinct chars ≤ maxLetters, increment its count. Track the max count seen.',
    '```js\nconst count = new Map();\nlet res = 0;\nfor (let i = 0; i <= s.length - minSize; i++) {\n  const sub = s.substring(i, i + minSize);\n  if (new Set(sub).size <= maxLetters) {\n    const c = (count.get(sub) ?? 0) + 1;\n    count.set(sub, c);\n    res = Math.max(res, c);\n  }\n}\nreturn res;\n```',
  ],
  functionName: 'maxFreq',
  params: ['s', 'maxLetters', 'minSize', 'maxSize'],
  starterCode: {
    javascript: `function maxFreq(s, maxLetters, minSize, maxSize) {
  // return max occurrences of any valid substring

}`,
    typescript: "function maxFreq(s: string, maxLetters: number, minSize: number, maxSize: number): number {\n  // return max occurrences of any valid substring\n\n}",

    python: `def maxFreq(s: str, maxLetters: int, minSize: int, maxSize: int) -> int:
    # return max occurrences of any valid substring
    pass
`,
  },
  visibleTests: [
    { args: ['aababcaab', 2, 3, 4], expected: 2 },
    { args: ['aaaa', 1, 3, 3], expected: 2 },
    { args: ['aabcabcab', 2, 2, 3], expected: 3 },
  ],
  hiddenTests: [
    { args: ['abcde', 2, 3, 5], expected: 0 },
    { args: ['a', 1, 1, 3], expected: 1 },
    { args: ['aaaaa', 1, 2, 4], expected: 4 },
    { args: ['abab', 2, 2, 3], expected: 2 },
    { args: ['aab', 1, 1, 2], expected: 2 },
  ],
};
