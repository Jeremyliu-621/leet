import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-score-removing-substrings',
  title: 'Maximize Score After Removing Substrings',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `You are given a string \`s\` and two integers \`x\` and \`y\`. You can perform two types of operations any number of times in any order:

- Remove substring **"ab"** and gain \`x\` points.
- Remove substring **"ba"** and gain \`y\` points.

Return the **maximum** number of points you can gain after applying the above operations on \`s\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    '1 <= x, y <= 10^4',
    's consists of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "cdbcbbaaabab", x = 4, y = 5',
      output: '19',
      explanation:
        'Remove the "ba" underlined in "cdbcbb**aa**abab" to get "cdbcbbaaab" then remove "ab" to get "cdbcbbaa" (total 4+5 from first, then more). Optimal: first do all "ba" removals (score y=5 each), then "ab" (score x=4 each).',
    },
    {
      input: 's = "aabbaaxybbaabb", x = 5, y = 4',
      output: '20',
      explanation:
        'Remove "ab" (score 5) before "ba" (score 4) since x > y. Process "aabbaaxybbaabb" greedily.',
    },
    {
      input: 's = "abba", x = 3, y = 5',
      output: '8',
      explanation:
        'y > x so remove "ba" first. "a**bb**a" → remove "ba" from "ab**ba**" to get "ab" (5 pts), then remove "ab" (3 pts). Total = 8.',
    },
  ],
  hints: [
    'Level 1: Greedy: always perform the higher-value operation first. If x >= y, remove all "ab" occurrences first, then remove all "ba" from the remaining string.',
    'Level 2: Use a stack to efficiently remove all occurrences of a target pattern (e.g., "ab") in one pass: push characters one by one; when the top of stack plus the current character form the target, pop and add to score.',
    'Level 3: Write a helper removeAll(s, pair, pts) that uses a stack to greedily remove all occurrences of pair and return the modified string + accumulated score. Call it twice: first for the higher-value pair, then for the lower-value pair.',
  ],
  functionName: 'maximumGain',
  params: ['s', 'x', 'y'],
  starterCode: {
    javascript: `function maximumGain(s, x, y) {

}`,
    typescript: `function maximumGain(s: string, x: number, y: number): number {

}`,
    python: `def maximumGain(s, x, y):
    pass`,
  },
  visibleTests: [
    { args: ['cdbcbbaaabab', 4, 5], expected: 19 },
    { args: ['aabbaaxybbaabb', 5, 4], expected: 20 },
    { args: ['abba', 3, 5], expected: 8 },
  ],
  hiddenTests: [
    { args: ['ab', 5, 4], expected: 5 },
    { args: ['ba', 5, 4], expected: 4 },
    { args: ['aabb', 5, 4], expected: 10 },
    { args: ['abab', 3, 5], expected: 8 },
    { args: ['abab', 5, 3], expected: 10 },
    { args: ['aaabbb', 4, 2], expected: 12 },
    { args: ['xyz', 10, 10], expected: 0 },
    { args: ['baba', 3, 5], expected: 10 },
    { args: ['aababab', 4, 5], expected: 14 },
  ],
};
