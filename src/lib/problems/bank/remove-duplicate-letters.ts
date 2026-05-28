import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-duplicate-letters',
  title: 'Remove Duplicate Letters',
  difficulty: 'medium',
  tags: ['stack'],
  description: `Given a string \`s\`, remove duplicate letters so that every letter appears **once and only once**. You must make sure your result is the **smallest in lexicographical order** among all possible results.

**Approach:** Greedy monotone stack. Track the last occurrence of each character. For each character, pop characters from the stack that are greater than the current character **and will appear again later**. Mark characters in the stack with a visited set to avoid duplicates.`,
  constraints: [
    '1 <= s.length <= 10^4',
    's consists of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "bcabc"',
      output: '"abc"',
      explanation: 'Removing duplicates of b, c, a and choosing the smallest order gives "abc".',
    },
    {
      input: 's = "cbacdcbc"',
      output: '"acdb"',
    },
    {
      input: 's = "abcd"',
      output: '"abcd"',
      explanation: 'All characters are unique; return as-is.',
    },
  ],
  hints: [
    'Record `last[c]` = the last index where character `c` appears. Use a Set to track what\'s in the stack.',
    'For each character `c` at index `i`: if it\'s already in the stack, skip. Otherwise, pop characters from the stack that are greater than `c` AND appear again later (last[top] > i). Then push `c`.',
    '```js\nconst last = {};\nfor (let i = 0; i < s.length; i++) last[s[i]] = i;\nconst stack = [], inStack = new Set();\nfor (let i = 0; i < s.length; i++) {\n  const c = s[i];\n  if (inStack.has(c)) continue;\n  while (stack.length && stack[stack.length-1] > c && last[stack[stack.length-1]] > i)\n    inStack.delete(stack.pop());\n  stack.push(c); inStack.add(c);\n}\nreturn stack.join(\'\');\n```',
  ],
  functionName: 'removeDuplicateLetters',
  params: ['s'],
  starterCode: {
    javascript: `function removeDuplicateLetters(s) {
  // return smallest lexicographic string with each letter appearing once

}`,
    typescript: "function removeDuplicateLetters(s: string): string {\n  // return smallest lexicographic string with each letter appearing once\n\n}",

    python: `def removeDuplicateLetters(s: str) -> str:
    # return smallest lexicographic string with each letter appearing once
    pass
`,
  },
  visibleTests: [
    { args: ['bcabc'], expected: 'abc' },
    { args: ['cbacdcbc'], expected: 'acdb' },
    { args: ['abcd'], expected: 'abcd' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['aaa'], expected: 'a' },
    { args: ['abacb'], expected: 'abc' },
    { args: ['bbcaac'], expected: 'bac' },
    { args: ['edcba'], expected: 'edcba' },
    { args: ['zab'], expected: 'zab' },
  ],
};
