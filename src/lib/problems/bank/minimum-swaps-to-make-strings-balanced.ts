import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-swaps-to-make-strings-balanced',
  title: 'Minimum Number of Swaps to Make the String Balanced',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `You are given a 0-indexed string \`s\` of even length \`n\`. The string consists of exactly \`n / 2\` opening brackets \`[\` and \`n / 2\` closing brackets \`]\`.

A string is called **balanced** if its brackets are properly matched (every \`[\` has a corresponding \`]\` that appears after it).

You may swap the characters at any two indices any number of times. Return the **minimum** number of swaps needed to make \`s\` balanced.

**Example 1:**

\`\`\`
Input: s = "]["
Output: 1
Explanation: Swap index 0 and index 1: "[]" — balanced.
\`\`\`

**Example 2:**

\`\`\`
Input: s = "]]][[["
Output: 2
Explanation: Two swaps are needed to fix all unmatched brackets.
\`\`\`

**Example 3:**

\`\`\`
Input: s = "[]"
Output: 0
\`\`\``,
  constraints: [
    'n == s.length',
    '2 <= n <= 10^6',
    'n is even',
    's[i] is either \'[\' or \']\'',
    's contains exactly n / 2 opening brackets and n / 2 closing brackets',
  ],
  examples: [
    { input: 's = "]["', output: '1' },
    { input: 's = "]]][[["', output: '2' },
    { input: 's = "[]"', output: '0' },
  ],
  hints: [
    'Scan left to right and track a running balance: increment it for `[` and decrement it for `]`. A negative balance means you have an unmatched `]`.',
    'Each time the balance goes negative you need a swap: one swap fixes the current unmatched `]` by pairing it with a later `[`. Increment the swap count and reset the balance to 1 (treating the `]` as if it were already swapped with a future `[`).',
    'You never need more swaps than the number of times the balance dips below zero. The total swap count equals the number of those dips.',
  ],
  functionName: 'minSwaps',
  params: ['s'],
  starterCode: {
    javascript: 'function minSwaps(s) {\n  \n}\n',
    python: 'def minSwaps(s):\n    ',
  },
  visibleTests: [
    { args: [']["'], expected: 1 },
    { args: [']]][[['], expected: 2 },
    { args: ['[]'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['[[][]]'], expected: 0 },
    { args: ['[][]'], expected: 0 },
    { args: [']][['], expected: 1 },
    { args: ['][][][]['], expected: 1 },
    { args: [']]]][[[['], expected: 2 },
    { args: ['[][][]'], expected: 0 },
    { args: ['[][][][]'], expected: 0 },
    { args: [']]]]]][[[[[['], expected: 3 },
  ],
};
