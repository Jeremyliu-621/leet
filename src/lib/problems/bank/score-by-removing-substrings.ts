import type { Problem } from '../types';

export const problem: Problem = {
  id: 'score-by-removing-substrings',
  title: 'Score by Removing Substrings',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `You are given a string \`s\` and two integers \`x\` and \`y\`. You can perform two types of operations any number of times.

- Remove substring \`"ab"\` and gain \`x\` points.
- Remove substring \`"ba"\` and gain \`y\` points.

Return *the maximum points you can gain after applying the above operations on* \`s\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    '1 <= x, y <= 10^4',
    's consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "cdbcbbaaabab", x = 4, y = 5',
      output: '19',
      explanation: 'Remove "ba" (5 pts), then "ab" (4 pts), then "ba" (5 pts), then "ab" (4 pts) — but optimal is: remove "ba" twice first for 10, then "ab" twice for 8. Actually: "ba"->5, "ba"->5, "ab"->4, "ab"->4+1 wait. Greedy: prioritize higher-value pair first.',
    },
    {
      input: 's = "aabbaaxybbaabb", x = 5, y = 4',
      output: '20',
      explanation: 'Remove "ab" four times for 5*4=20 points.',
    },
  ],
  hints: [
    'Level 1: Greedy: always remove the higher-value pair first. Removing the lower-value pair first can only create more of the lower-value pair, not the higher-value one.',
    'Level 2: Use a stack-based approach. First pass: greedily remove all occurrences of the higher-value pair. Second pass: greedily remove all occurrences of the lower-value pair from the remaining string.',
    'Level 3: For each pass, iterate over characters using a stack. When top of stack + current char form the target pair, pop and add points. Otherwise push. O(n) total.',
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
  ],
  hiddenTests: [
    { args: ['ab', 1, 2], expected: 1 },
    { args: ['ba', 1, 2], expected: 2 },
    { args: ['aabb', 3, 2], expected: 6 },
    { args: ['abba', 5, 3], expected: 8 },
    { args: ['abab', 4, 2], expected: 8 },
    { args: ['bababa', 3, 4], expected: 12 },
    { args: ['aaaa', 5, 5], expected: 0 },
  ],
};
