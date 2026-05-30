import type { Problem } from '../types';

export const problem: Problem = {
  id: 'height-checker',
  title: 'Height Checker',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in **non-decreasing** order by height. Let this ordering be represented by the integer array \`expected\` where \`expected[i]\` is the expected height of the \`i\`th student in line.

You are given an integer array \`heights\` representing the **current order** that the students are standing in. Each \`heights[i]\` is the height of the \`i\`th student in line (**0-indexed**).

Return the **number of indices** where \`heights[i] != expected[i]\`.`,
  constraints: [
    '`1 <= heights.length <= 100`',
    '`1 <= heights[i] <= 100`',
  ],
  examples: [
    {
      input: 'heights = [1,1,4,2,1,3]',
      output: '3',
      explanation: 'Expected: [1,1,1,2,3,4]. Current vs expected: 4≠1, 1≠3, 3≠4 → 3 mismatches.',
    },
    {
      input: 'heights = [5,1,2,3,4]',
      output: '5',
      explanation: 'Expected: [1,2,3,4,5]. All positions differ.',
    },
    {
      input: 'heights = [1,2,3,4,5]',
      output: '0',
      explanation: 'Already sorted. No mismatches.',
    },
  ],
  hints: [
    'The "expected" array is just the sorted version of heights.',
    'Sort a copy of the heights array to get the expected order.',
    'Count the number of positions where heights[i] differs from sorted[i].',
  ],
  functionName: 'heightChecker',
  params: ['heights'],
  starterCode: {
    javascript: `function heightChecker(heights) {

}`,
    typescript: `function heightChecker(heights: number[]): number {

}`,
    python: `def heightChecker(heights):
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 4, 2, 1, 3]], expected: 3 },
    { args: [[5, 1, 2, 3, 4]], expected: 5 },
    { args: [[1, 2, 3, 4, 5]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[2, 1]], expected: 2 },
    { args: [[3, 2, 1]], expected: 2 },
    { args: [[1, 1, 1]], expected: 0 },
    { args: [[4, 3, 2, 1]], expected: 4 },
    { args: [[1, 2, 2, 3, 3]], expected: 0 },
    { args: [[3, 1, 2, 3, 1]], expected: 2 },
  ],
};
