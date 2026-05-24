import type { Problem } from '../types';

export const problem: Problem = {
  id: 'decode-string',
  title: 'Decode Repeated String',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `Given an encoded string, decode it according to the following rule:

\`k[encoded_string]\` means the \`encoded_string\` inside the brackets is repeated exactly \`k\` times.

You may assume the input is always valid — there are no extra spaces, and brackets are always properly matched. Numbers only appear before \`[\`.

Nested encodings are allowed: \`"3[a2[c]]"\` → \`"accaccacc"\`.`,
  constraints: [
    '1 <= s.length <= 300',
    's consists of digits, lowercase letters, "[", and "]".',
    's is always a valid encoded string.',
    'k is a positive integer (1 <= k <= 300).',
  ],
  examples: [
    {
      input: 's = "3[a]2[bc]"',
      output: '"aaabcbc"',
      explanation: '"3[a]" decodes to "aaa", "2[bc]" decodes to "bcbc".',
    },
    {
      input: 's = "3[a2[c]]"',
      output: '"accaccacc"',
      explanation: '"2[c]" decodes to "cc", then "3[acc]" decodes to "accaccacc".',
    },
    {
      input: 's = "2[abc]3[cd]ef"',
      output: '"abcabccdcdcdef"',
      explanation: '"2[abc]" → "abcabc", "3[cd]" → "cdcdcd", appended with "ef".',
    },
  ],
  hints: [
    'Level 1: Use a stack to handle nesting. When you see a number, remember it. When you see "[", push the current accumulated string and the repeat count onto the stack. When you see "]", pop and repeat.',
    'Level 2: Maintain a `currentStr` and `currentNum` as you scan. On "[": push `(currentStr, currentNum)` and reset both. On "]": pop `(prevStr, k)` and set `currentStr = prevStr + currentStr.repeat(k)`. On digit: build up `currentNum`. On letter: append to `currentStr`.',
    'Level 3: `let cur = ""; let num = 0; const stack = []; for (const ch of s) { if (ch >= "0" && ch <= "9") { num = num * 10 + Number(ch); } else if (ch === "[") { stack.push([cur, num]); cur = ""; num = 0; } else if (ch === "]") { const [prev, k] = stack.pop(); cur = prev + cur.repeat(k); } else { cur += ch; } } return cur;`',
  ],
  functionName: 'decodeString',
  params: ['s'],
  starterCode: {
    javascript: 'function decodeString(s) {\n  // your code here\n}\n',
    python: 'def decodeString(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['3[a]2[bc]'], expected: 'aaabcbc' },
    { args: ['3[a2[c]]'], expected: 'accaccacc' },
    { args: ['2[abc]3[cd]ef'], expected: 'abcabccdcdcdef' },
  ],
  hiddenTests: [
    { args: ['1[a]'], expected: 'a' },
    { args: ['2[ab]'], expected: 'abab' },
    { args: ['10[a]'], expected: 'aaaaaaaaaa' },
    { args: ['2[3[a]]'], expected: 'aaaaaa' },
    { args: ['3[2[a]b]'], expected: 'aabaabaab' },
  ],
};
