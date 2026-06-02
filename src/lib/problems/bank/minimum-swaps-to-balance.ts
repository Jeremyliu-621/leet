import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-swaps-to-balance',
  title: 'Minimum Swaps to Balance',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `You are given a **0-indexed** string \`s\` of even length \`n\`. The string consists of **exactly** \`n / 2\` opening brackets \`'['\` and \`n / 2\` closing brackets \`']'\`.

A string is called **balanced** if and only if:
- It is the empty string, or
- It can be written as \`AB\`, where both \`A\` and \`B\` are balanced strings, or
- It can be written as \`[C]\`, where \`C\` is a balanced string.

You may swap the brackets at **any** two indices **any** number of times.

Return *the **minimum** number of swaps to make* \`s\` *balanced*.`,
  constraints: [
    'n == s.length',
    '2 <= n <= 10^6',
    'n is even.',
    "s[i] is either '[' or ']'.",
    'The number of opening brackets equals n / 2, and the number of closing brackets equals n / 2.',
  ],
  examples: [
    {
      input: 's = "][[]"',
      output: '1',
      explanation: 'Swap index 0 and index 3 to get "[[]]".',
    },
    {
      input: 's = "]]][[[]"',
      output: '2',
      explanation: 'Two swaps needed to balance the string.',
    },
    {
      input: 's = "[]"',
      output: '0',
      explanation: 'Already balanced.',
    },
  ],
  hints: [
    "Level 1: Use a counter for unmatched opening brackets. Traverse the string: increment on '[', decrement on ']'. Whenever the counter goes negative, a swap is needed (one unmatched ']' must be swapped with a '[' from later).",
    "Level 2: After each swap, increment the counter by 1 and increment swaps. The counter goes from -1 back to +1 (the swapped bracket becomes '[' at the current position).",
    'Level 3: The answer equals ceil(max_deficit / 2) where max_deficit is the maximum negative running balance during the scan. O(n) time, O(1) space.',
  ],
  functionName: 'minSwaps',
  params: ['s'],
  starterCode: {
    javascript: `function minSwaps(s) {

}`,
    typescript: `function minSwaps(s: string): number {

}`,
    python: `def minSwaps(s):
    pass`,
  },
  visibleTests: [
    { args: ['][]['], expected: 1 },
    { args: [']]][[['], expected: 2 },
    { args: ['[]'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['[[]]'], expected: 0 },
    { args: [']][['], expected: 1 },
    { args: [']]]][[[['], expected: 2 },
    { args: ['[[][]]'], expected: 0 },
    { args: ['][][][]['], expected: 1 },
  ],
};
