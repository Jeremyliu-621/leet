import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-all-adjacent-duplicates-in-string',
  title: 'Remove All Adjacent Duplicates In String',
  difficulty: 'easy',
  tags: ['strings', 'stack'],
  description: `You are given a string \`s\` consisting of lowercase English letters. A **duplicate removal** consists of choosing two **adjacent** and **equal** letters and removing them.

We repeatedly make duplicate removals on \`s\` until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is **unique**.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abbaca"',
      output: '"ca"',
      explanation: '"abbaca" → "aaca" (remove "bb") → "ca" (remove "aa"). Final: "ca".',
    },
    {
      input: 's = "azxxzy"',
      output: '"ay"',
      explanation: '"azxxzy" → "azzy" (remove "xx") → "ay" (remove "zz"). Final: "ay".',
    },
  ],
  hints: [
    'Use a stack. For each character, if the stack top equals it, pop; otherwise push.',
    'After processing all characters, the remaining stack contents (joined) form the result.',
    'This is a classic stack problem. Time complexity is O(n). Consider: what characters remain after all cancellations?',
  ],
  functionName: 'removeDuplicates',
  params: ['s'],
  starterCode: {
    javascript: `function removeDuplicates(s) {

}`,
    typescript: "function removeDuplicates(s: string): string {\n\n}",

    python: `def removeDuplicates(s):
    pass`,
  },
  visibleTests: [
    { args: ['abbaca'], expected: 'ca' },
    { args: ['azxxzy'], expected: 'ay' },
  ],
  hiddenTests: [
    { args: ['aa'], expected: '' },
    { args: ['abc'], expected: 'abc' },
    { args: ['aabbcc'], expected: '' },
    { args: ['abba'], expected: '' },
  ],
};
