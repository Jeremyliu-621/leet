import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-smallest-letter-greater-than-target',
  title: 'Find Smallest Letter Greater Than Target',
  difficulty: 'easy',
  tags: ['binary-search'],
  description: `You are given an array of characters \`letters\` that is sorted in **non-decreasing** order, and a character \`target\`. There are at least two different characters in \`letters\`.

Return the **smallest character** in \`letters\` that is **strictly greater** than \`target\`.

If no character is greater, wrap around and return the **first** character in \`letters\`.`,
  constraints: [
    '`2 <= letters.length <= 10^4`',
    '`letters[i]` is a lowercase English letter.',
    '`letters` is sorted in non-decreasing order.',
    '`letters` contains at least two distinct characters.',
    '`target` is a lowercase English letter.',
  ],
  examples: [
    {
      input: 'letters = ["c","f","j"], target = "a"',
      output: '"c"',
      explanation: '"c" is the smallest letter strictly greater than "a".',
    },
    {
      input: 'letters = ["c","f","j"], target = "c"',
      output: '"f"',
      explanation: '"f" is strictly greater than "c".',
    },
    {
      input: 'letters = ["c","f","j"], target = "j"',
      output: '"c"',
      explanation: 'No letter is greater than "j", so wrap around to "c".',
    },
  ],
  hints: [
    'Binary search for the leftmost position where letters[mid] > target.',
    'If no such position exists (all letters ≤ target), return letters[0] (wrap around).',
    `\`\`\`js
function nextGreatestLetter(letters, target) {
  for (const c of letters) if (c > target) return c;
  return letters[0]; // wrap around
}
// Binary search: lo=0,hi=letters.length; find first letters[mid]>target\`\`\``,
  ],
  functionName: 'nextGreatestLetter',
  params: ['letters', 'target'],
  starterCode: {
    javascript: `function nextGreatestLetter(letters, target) {
  for (const c of letters) if (c > target) return c;
  return letters[0];
}`,
    typescript: `function nextGreatestLetter(letters: string[], target: string): string {
  for (const c of letters) if (c > target) return c;
  return letters[0]!;
}`,
    python: `def nextGreatestLetter(letters, target):
    for c in letters:
        if c > target: return c
    return letters[0]`,
  },
  visibleTests: [
    { args: [['c', 'f', 'j'], 'a'], expected: 'c' },
    { args: [['c', 'f', 'j'], 'c'], expected: 'f' },
    { args: [['c', 'f', 'j'], 'j'], expected: 'c' },
  ],
  hiddenTests: [
    { args: [['c', 'f', 'j'], 'd'], expected: 'f' },
    { args: [['c', 'f', 'j'], 'g'], expected: 'j' },
    { args: [['a', 'b'], 'z'], expected: 'a' },
    { args: [['e', 'e', 'e', 'e', 'e', 'e', 'n', 'n', 'n', 'n'], 'e'], expected: 'n' },
  ],
};
