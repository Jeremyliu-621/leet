import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-swaps-string-balanced',
  title: 'Minimum Number of Swaps to Make the String Balanced',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a **0-indexed** string \`s\` of **even** length \`n\`. The string consists of exactly \`n / 2\` opening brackets \`'['\` and \`n / 2\` closing brackets \`']'\`.

A string is called **balanced** if and only if:

- It is the empty string, or
- It can be written as \`AB\`, where both \`A\` and \`B\` are balanced strings, or
- It can be written as \`[C]\`, where \`C\` is a balanced string.

You may swap the brackets at any two indices any number of times.

Return the **minimum** number of swaps to make \`s\` balanced.`,
  constraints: [
    'n == s.length',
    '2 <= n <= 10^6',
    'n is even',
    "s[i] is either '[' or ']'",
    "The number of '[' equals n / 2, and the number of ']' equals n / 2",
  ],
  examples: [
    {
      input: 's = "]["',
      output: '1',
      explanation: 'Swap index 0 and 1 to form "[]".',
    },
    {
      input: 's = "]]][[["',
      output: '2',
      explanation: 'Swap indices 0 and 5, then swap indices 1 and 4.',
    },
    {
      input: 's = "[]"',
      output: '0',
      explanation: 'Already balanced.',
    },
  ],
  hints: [
    "Level 1: Scan left to right tracking balance (+1 for '[', -1 for ']'). Every time balance goes negative we have an unmatched ']' — count it and reset balance to 0. The answer is ceil(mismatches / 2).",
    "Level 2: let bal=0, mis=0; for each char: bal += char==='[' ? 1 : -1; if(bal<0){mis++; bal=0;} return Math.ceil(mis/2).",
    "Level 3: let b=0,m=0;for(const c of s){b+=c==='['?1:-1;if(b<0){m++;b=0;}}return Math.ceil(m/2);",
  ],
  functionName: 'minSwaps',
  params: ['s'],
  starterCode: {
    javascript: 'function minSwaps(s) {\n  // your code here\n}\n',
    python: 'def minSwaps(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['][]['], expected: 1 },
    { args: [']]]][[[['], expected: 2 },
    { args: ['[]'], expected: 0 },
  ],
  hiddenTests: [
    { args: [']][['], expected: 1 },
    { args: [']]]]]][[[[[['], expected: 3 },
    { args: ['[][][][]'], expected: 0 },
    { args: [']]]]]]]][[[[[[[['], expected: 4 },
    { args: [']]][][[['], expected: 2 },
  ],
};
