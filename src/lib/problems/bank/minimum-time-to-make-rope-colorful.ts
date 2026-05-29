import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-make-rope-colorful',
  title: 'Minimum Time to Make Rope Colorful',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Alice has \`n\` balloons arranged on a rope. You are given a **0-indexed** string \`colors\` where \`colors[i]\` is the color of the \`i\`th balloon. Alice wants the rope to be **colorful**. She does not want **two consecutive balloons** to be of the same color, so she asks Bob for help. Bob can **remove** some balloons from the rope to make it colorful. You are given a **0-indexed** integer array \`neededTime\` where \`neededTime[i]\` is the time (in seconds) that Bob needs to remove the \`i\`th balloon from the rope.

Return the **minimum time** Bob needs to make the rope colorful.`,
  constraints: [
    '`n == colors.length == neededTime.length`',
    '`1 <= n <= 10^5`',
    '`1 <= neededTime[i] <= 10^4`',
    '`colors` consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 'colors = "abaac", neededTime = [1,2,3,4,5]',
      output: '3',
      explanation: 'The "aa" group costs [3,4]. Remove the balloon costing 3; total cost = 3.',
    },
    {
      input: 'colors = "abc", neededTime = [1,2,3]',
      output: '0',
      explanation: 'No adjacent duplicates; no removals needed.',
    },
  ],
  hints: [
    'Within each run of consecutive same-color balloons, keep the most expensive one and remove the rest.',
    'The cost for each group is (sum of group) − (max in group).',
    'Use a two-pointer or single-pass scan to group consecutive identical characters.',
  ],
  functionName: 'minCost',
  params: ['colors', 'neededTime'],
  starterCode: {
    javascript: `function minCost(colors, neededTime) {

}`,
    typescript: `function minCost(colors: string, neededTime: number[]): number {

}`,
    python: `def minCost(colors, neededTime):
    pass`,
  },
  visibleTests: [
    { args: ['abaac', [1, 2, 3, 4, 5]], expected: 3 },
    { args: ['abc', [1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: ['aa', [1, 2]], expected: 1 },
    { args: ['aaabbbccc', [1, 2, 3, 1, 2, 3, 1, 2, 3]], expected: 9 },
    { args: ['aaaa', [1, 1, 1, 1]], expected: 3 },
    { args: ['abaab', [1, 2, 1, 1, 1]], expected: 1 },
    { args: ['a', [5]], expected: 0 },
  ],
};
