import type { Problem } from '../types';

export const problem: Problem = {
  id: 'splitting-a-string-into-descending-consecutive-values',
  title: 'Splitting a String Into Descending Consecutive Values',
  difficulty: 'medium',
  tags: ['backtracking', 'strings', 'math'],
  description: `You are given a string \`s\` that consists of only digits.

**Check** if we can split \`s\` into **two or more** non-empty substrings such that the **numerical values** of the substrings are in **descending order** and the **difference** between numerical values of every two **adjacent** substrings is equal to \`1\`.

Return \`true\` if it is possible to split \`s\` as described above, or \`false\` otherwise.

**Note:** A substring is a contiguous sequence of characters in a string. Substrings may contain leading zeros (e.g. \`"04"\` represents the number \`4\`).`,
  constraints: [
    '`1 <= s.length <= 20`',
  ],
  examples: [
    {
      input: 's = "1234"',
      output: 'false',
      explanation:
        'There is no valid way to split "1234" into descending consecutive values.',
    },
    {
      input: 's = "10009998"',
      output: 'true',
      explanation: 'Split as "100", "99", "98" — values 100, 99, 98 are descending with difference 1.',
    },
  ],
  hints: [
    'Use backtracking: try every possible first number (all prefixes of `s`), then greedily check that each subsequent segment equals the previous value minus 1.',
    'Be careful with large numbers — the string can represent a value that overflows a 32-bit integer, so use `BigInt` (JavaScript) or Python\'s arbitrary-precision integers.',
    '```js\nfunction splitString(s) {\n  function check(idx, prev, count) {\n    if (idx === s.length) return count >= 2;\n    let cur = 0n;\n    for (let i = idx; i < s.length; i++) {\n      cur = cur * 10n + BigInt(s[i]);\n      if (cur === prev - 1n && check(i + 1, cur, count + 1)) return true;\n      if (cur > prev) break;\n    }\n    return false;\n  }\n  let first = 0n;\n  for (let i = 0; i < s.length - 1; i++) {\n    first = first * 10n + BigInt(s[i]);\n    if (check(i + 1, first, 1)) return true;\n  }\n  return false;\n}\n```',
  ],
  functionName: 'splitString',
  params: ['s'],
  starterCode: {
    javascript: `function splitString(s) {

}`,
    python: `def splitString(s: str) -> bool:
    pass`,
  },
  visibleTests: [
    { args: ['1234'], expected: false },
    { args: ['10009998'], expected: true },
  ],
  hiddenTests: [
    { args: ['4321'], expected: true },
    { args: ['94'], expected: false },
    { args: ['050043'], expected: true },
    { args: ['9080706050403020100'], expected: true },
    { args: ['5432'], expected: true },
  ],
};
