import type { Problem } from '../types';

export const problem: Problem = {
  id: 'get-maximum-in-generated-array',
  title: 'Get Maximum in Generated Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given an integer \`n\`. A **0-indexed** integer array \`nums\` of length \`n + 1\` is generated in the following way:

- \`nums[0] = 0\`
- \`nums[1] = 1\`
- \`nums[2 * i] = nums[i]\` when \`2 <= 2 * i <= n\`
- \`nums[2 * i + 1] = nums[i] + nums[i + 1]\` when \`2 <= 2 * i + 1 <= n\`

Return *the **maximum** integer in the array* \`nums\`​​​.`,
  constraints: [
    '0 <= n <= 100',
  ],
  examples: [
    {
      input: 'n = 7',
      output: '3',
      explanation: 'nums = [0,1,1,2,1,3,2,3]. Maximum is 3.',
    },
    {
      input: 'n = 2',
      output: '1',
      explanation: 'nums = [0,1,1]. Maximum is 1.',
    },
    {
      input: 'n = 3',
      output: '2',
      explanation: 'nums = [0,1,1,2]. Maximum is 2.',
    },
  ],
  hints: [
    'Generate the array following the rules.',
    'Handle n=0 (return 0) and n=1 (return 1) as base cases.',
    'Return the maximum of the generated array.',
  ],
  functionName: 'getMaximumGenerated',
  params: ['n'],
  starterCode: {
    javascript: `function getMaximumGenerated(n) {

}`,
    typescript: "function getMaximumGenerated(n: number): number {\n\n}",

    python: `def getMaximumGenerated(n):
    pass`,
  },
  visibleTests: [
    { args: [7], expected: 3 },
    { args: [2], expected: 1 },
    { args: [3], expected: 2 },
  ],
  hiddenTests: [
    { args: [0], expected: 0 },
    { args: [1], expected: 1 },
    { args: [5], expected: 3 },
    { args: [10], expected: 4 },
    { args: [15], expected: 5 },
  ],
};
