import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-groups-entering-a-competition',
  title: 'Maximum Number of Groups Entering a Competition',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a positive integer array \`grades\` of length \`n\`. You want to organize \`k\` groups such that:
- The \`i\`th group has exactly \`i\` students (i.e., groups have sizes 1, 2, 3, …, k).
- The total score of the \`i\`th group is **strictly greater** than the total score of the \`(i − 1)\`th group.
- A student can only be in **one** group.

Return the **maximum** number of groups you can create.`,
  constraints: [
    '`1 <= grades.length <= 10^5`',
    '`1 <= grades[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'grades = [10,6,12,7,3,5]',
      output: '3',
      explanation: 'Groups of sizes 1, 2, 3 = 6 students total = length of grades.',
    },
    {
      input: 'grades = [8,8]',
      output: '1',
      explanation: 'Only one group of size 1 fits without violating the strict-greater rule.',
    },
  ],
  hints: [
    'Sort grades in ascending order. Greedily assign smallest-grade students to smaller groups.',
    'Since any assignment with sizes 1,2,...,k works when sorted, you just need to find the max k with 1+2+...+k ≤ n.',
    'Solve k*(k+1)/2 ≤ n for the largest integer k.',
  ],
  functionName: 'maximumGroups',
  params: ['grades'],
  starterCode: {
    javascript: `function maximumGroups(grades) {
  const n = grades.length;
  return Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);
}`,
    typescript: `function maximumGroups(grades: number[]): number {
  const n = grades.length;
  return Math.floor((-1 + Math.sqrt(1 + 8 * n)) / 2);
}`,
    python: `def maximumGroups(grades):
    import math
    n = len(grades)
    return int((-1 + math.sqrt(1 + 8 * n)) / 2)`,
  },
  visibleTests: [
    { args: [[10, 6, 12, 7, 3, 5]], expected: 3 },
    { args: [[8, 8]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 2 },
    { args: [new Array(10).fill(1)], expected: 4 },
    { args: [[1, 2, 3, 4]], expected: 2 },
    { args: [new Array(15).fill(5)], expected: 5 },
  ],
};
