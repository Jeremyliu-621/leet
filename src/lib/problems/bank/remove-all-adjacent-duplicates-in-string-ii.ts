import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-all-adjacent-duplicates-in-string-ii',
  title: 'Remove All Adjacent Duplicates in String II',
  difficulty: 'medium',
  tags: ['stack', 'strings'],
  description: `You are given a string \`s\` and an integer \`k\`. A **k duplicate removal** consists of choosing \`k\` adjacent and equal letters from \`s\` and removing them.

We repeatedly make **k duplicate removals** on \`s\` until we no longer can.

Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`2 <= k <= 10^4`',
    '`s` only contains lower case English letters.',
  ],
  examples: [
    {
      input: 's = "abcd", k = 2',
      output: '"abcd"',
      explanation: 'There are no adjacent duplicates of length 2 to remove.',
    },
    {
      input: 's = "deeedbbcccbdaa", k = 3',
      output: '"aa"',
      explanation: 'Stack trace: eee pops → d now has count 2; ccc pops → b now has count 3 → pops → d now has count 3 → pops; left with "aa".',
    },
    {
      input: 's = "pbbcggttciiippooaais", k = 2',
      output: '"ps"',
    },
  ],
  hints: [
    'Use a stack of `(character, count)` pairs. For each character, if it matches the stack top, increment the count; otherwise push a new pair.',
    'After incrementing, check if the count equals `k`. If so, pop the entry (those `k` characters are removed).',
    '```js\nfunction removeDuplicates(s, k) {\n  const stack = [];\n  for (const c of s) {\n    if (stack.length > 0 && stack[stack.length - 1][0] === c) {\n      stack[stack.length - 1][1]++;\n      if (stack[stack.length - 1][1] === k) stack.pop();\n    } else {\n      stack.push([c, 1]);\n    }\n  }\n  return stack.map(([c, n]) => c.repeat(n)).join(\'\');\n}\n```',
  ],
  functionName: 'removeDuplicates',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function removeDuplicates(s, k) {
  // Remove k consecutive duplicate characters repeatedly
}`,
    python: `def removeDuplicates(s: str, k: int) -> str:
    # Remove k consecutive duplicate characters repeatedly
    pass`,
  },
  visibleTests: [
    { args: ['abcd', 2], expected: 'abcd' },
    { args: ['deeedbbcccbdaa', 3], expected: 'aa' },
    { args: ['pbbcggttciiippooaais', 2], expected: 'ps' },
  ],
  hiddenTests: [
    { args: ['aa', 2], expected: '' },
    { args: ['aaa', 2], expected: 'a' },
    { args: ['aaaa', 4], expected: '' },
    { args: ['abba', 2], expected: '' },
    { args: ['abba', 3], expected: 'abba' },
    { args: ['abccba', 2], expected: '' },
    { args: ['yfttttfbbbbnnnnffbgffffgbbbbgssssgthyyyy', 4], expected: 'ybth' },
  ],
};
