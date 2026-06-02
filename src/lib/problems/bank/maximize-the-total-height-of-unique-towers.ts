import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-the-total-height-of-unique-towers',
  title: 'Maximize the Total Height of Unique Towers',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You have \`n\` towers, each of which is to be built. The height of the \`i\`th tower can be any positive integer from \`1\` to \`maximumHeight[i]\`.

All towers must have **distinct** heights.

Return the **maximum possible total sum** of the tower heights. If it is impossible to build all towers with unique heights, return \`-1\`.`,
  constraints: [
    '1 <= n == maximumHeight.length <= 10^5',
    '1 <= maximumHeight[i] <= 10^9',
  ],
  examples: [
    {
      input: 'maximumHeight = [2,3,4,3]',
      output: '10',
      explanation: 'Assign heights [1,2,3,4] → wait that\'s 10 but 4 > maximumHeight[0]=2. Actually assign [2,3,4,1] — but we need distinct. Optimal: sort desc [4,3,3,2], assign 4,3,2,1 = 10.',
    },
    {
      input: 'maximumHeight = [15,10]',
      output: '25',
      explanation: 'Assign heights [10,15]. Total = 25.',
    },
    {
      input: 'maximumHeight = [2,2,1]',
      output: '-1',
      explanation: 'Impossible to assign 3 distinct heights all within [1,2], [1,2], [1,1].',
    },
  ],
  hints: [
    'Level 1: Sort towers by their maximum height in descending order. Greedily assign the largest possible height to each tower.',
    'Level 2: After sorting descending, the first tower gets its maximum height. For each subsequent tower, its height is min(maximumHeight[i], prev_height - 1) to ensure it is strictly less than the previous assigned height.',
    'Level 3: If at any point the computed height drops to ≤ 0, return -1 (impossible). Otherwise sum all assigned heights. The sum is maximized because each assignment is as large as possible given the constraints.',
  ],
  functionName: 'maximumTotalSum',
  params: ['maximumHeight'],
  starterCode: {
    javascript: `function maximumTotalSum(maximumHeight) {

}`,
    typescript: `function maximumTotalSum(maximumHeight: number[]): number {

}`,
    python: `def maximumTotalSum(maximumHeight: list[int]) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[2,3,4,3]], expected: 10 },
    { args: [[15,10]], expected: 25 },
    { args: [[2,2,1]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1,2,3]], expected: 6 },
    { args: [[5,1,2]], expected: 8 },
    { args: [[3,3,3]], expected: 6 },
    { args: [[1,1]], expected: -1 },
    { args: [[10,9,8,7]], expected: 34 },
    { args: [[5,5,5,5,5]], expected: 15 },
  ],
};
