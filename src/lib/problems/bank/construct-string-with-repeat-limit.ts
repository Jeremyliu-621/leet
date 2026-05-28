import type { Problem } from '../types';

export const problem: Problem = {
  id: 'construct-string-with-repeat-limit',
  title: 'Construct String With Repeat Limit',
  difficulty: 'medium',
  tags: ['strings'],
  description: `You are given a string \`s\` and an integer \`repeatLimit\`. Construct the **lexicographically largest** string \`repeatLimitedString\` using the characters of \`s\` such that no letter appears more than \`repeatLimit\` times **in a row**. You do not have to use all characters from \`s\`.

Return \`repeatLimitedString\`.

**Approach:** Count character frequencies. Greedily pick the largest available character up to \`repeatLimit\` times; if still remaining, insert the next-largest character once as a separator, then repeat.`,
  constraints: [
    '1 <= repeatLimit <= s.length <= 10^5',
    "s consists of lowercase English letters.",
  ],
  examples: [
    {
      input: 's = "cczazcc", repeatLimit = 3',
      output: '"zzcccac"',
      explanation: 'Use z twice (limit 3, only 2 z), then c three times, then a, then c twice.',
    },
    {
      input: 's = "aababab", repeatLimit = 2',
      output: '"bbabaa"',
      explanation: 'bb then a then b would give bba but we need to keep going...',
    },
    {
      input: 's = "aaaa", repeatLimit = 2',
      output: '"aa"',
      explanation: 'Can only use a twice in a row and no other character to separate.',
    },
  ],
  hints: [
    'Count frequencies of all 26 letters. Start from the largest letter.',
    'Greedily take min(count, repeatLimit) of the current largest letter. If any remains, take 1 of the next-largest letter as a separator, then go back to the largest.',
    '```js\nconst freq = new Array(26).fill(0);\nfor (const c of s) freq[c.charCodeAt(0) - 97]++;\nconst res = [];\nlet i = 25;\nwhile (i >= 0) {\n  if (freq[i] === 0) { i--; continue; }\n  const take = Math.min(freq[i], repeatLimit);\n  res.push(String.fromCharCode(97 + i).repeat(take));\n  freq[i] -= take;\n  if (freq[i] > 0) {\n    let j = i - 1;\n    while (j >= 0 && freq[j] === 0) j--;\n    if (j < 0) break;\n    res.push(String.fromCharCode(97 + j));\n    freq[j]--;\n  }\n}\nreturn res.join("");\n```',
  ],
  functionName: 'repeatLimitedString',
  params: ['s', 'repeatLimit'],
  starterCode: {
    javascript: `function repeatLimitedString(s, repeatLimit) {
  // return lexicographically largest string with no letter repeating > repeatLimit times consecutively

}`,
    typescript: "function repeatLimitedString(s: string, repeatLimit: number): string {\n  // return lexicographically largest string with no letter repeating > repeatLimit times consecutively\n\n}",

    python: `def repeatLimitedString(s: str, repeatLimit: int) -> str:
    # return lexicographically largest string with no letter repeating > repeatLimit times consecutively
    pass
`,
  },
  visibleTests: [
    { args: ['cczazcc', 3], expected: 'zzcccac' },
    { args: ['aababab', 2], expected: 'bbabaa' },
    { args: ['aaaa', 2], expected: 'aa' },
  ],
  hiddenTests: [
    { args: ['a', 1], expected: 'a' },
    { args: ['zz', 1], expected: 'z' },
    { args: ['zz', 2], expected: 'zz' },
    { args: ['ba', 1], expected: 'ba' },
    { args: ['bbb', 2], expected: 'bb' },
    { args: ['aab', 2], expected: 'baa' },
    { args: ['zzz', 2], expected: 'zz' },
  ],
};
