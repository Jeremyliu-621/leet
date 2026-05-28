import type { Problem } from '../types';

export const problem: Problem = {
  id: 'partition-labels',
  title: 'Partition Labels',
  difficulty: 'medium',
  tags: ['two-pointers'],
  description: `You are given a string \`s\` of lowercase English letters. Partition \`s\` into as many parts as possible so that each letter appears in **at most one part**. The parts must cover the entire string in order.

Return a list of integers representing the **size of each part**.

**Example:** \`"ababcbacadefegdehijhklij"\` → \`[9, 7, 8]\` because the first 9 characters (\`"ababcbaca"\`) contain all occurrences of a, b, and c; the next 7 (\`"defegde"\`) contain d, e, f, g; and the final 8 (\`"hijhklij"\`) contain h, i, j, k, l.`,
  constraints: [
    '1 <= s.length <= 500',
    's contains only lowercase English letters',
  ],
  examples: [
    {
      input: 's = "ababcbacadefegdehijhklij"',
      output: '[9,7,8]',
      explanation: 'Partitions are "ababcbaca", "defegde", "hijhklij". Each letter appears in exactly one part.',
    },
    {
      input: 's = "eccbbbbdec"',
      output: '[10]',
      explanation: 'All letters span the full string, so it cannot be split.',
    },
    {
      input: 's = "abc"',
      output: '[1,1,1]',
      explanation: 'Each character is unique and can form its own part.',
    },
  ],
  hints: [
    'For each character, record the index of its last occurrence in the string. A partition can only end once we have passed the last occurrence of every character seen so far inside the current partition.',
    'Do a single left-to-right scan. Keep track of the farthest last-occurrence index among all characters seen so far (call it `end`). When the current index equals `end`, you have found a complete partition — record its size and start a new one.',
    '`const last = {}; for (let i = 0; i < s.length; i++) last[s[i]] = i; const parts = []; let start = 0, end = 0; for (let i = 0; i < s.length; i++) { end = Math.max(end, last[s[i]]); if (i === end) { parts.push(end - start + 1); start = i + 1; } } return parts;`',
  ],
  functionName: 'partitionLabels',
  params: ['s'],
  starterCode: {
    javascript: 'function partitionLabels(s) {\n  // your code here\n}\n',
    typescript: "function partitionLabels(s: string): number[] {\n  // your code here\n}",

    python: 'def partitionLabels(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['ababcbacadefegdehijhklij'], expected: [9, 7, 8] },
    { args: ['eccbbbbdec'], expected: [10] },
    { args: ['abc'], expected: [1, 1, 1] },
  ],
  hiddenTests: [
    { args: ['aab'], expected: [2, 1] },
    { args: ['a'], expected: [1] },
    { args: ['abcabc'], expected: [6] },
    { args: ['caedbdedda'], expected: [1, 9] },
    { args: ['abacbc'], expected: [6] },
  ],
};
