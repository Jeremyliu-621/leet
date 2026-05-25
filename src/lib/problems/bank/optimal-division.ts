import type { Problem } from '../types';

export const problem: Problem = {
  id: 'optimal-division',
  title: 'Optimal Division',
  difficulty: 'medium',
  tags: ['math'],
  description: `You are given an integer array \`nums\`. The adjacent integers in \`nums\` will perform the float division.

Return the addition of parentheses in \`nums\` such that the value of this expression is **maximized**. Return the expression as a string.

**Key insight:** For n > 2, the maximum is always \`nums[0] / (nums[1] / nums[2] / ... / nums[n-1])\` = \`nums[0] * nums[2] * ... * nums[n-1] / nums[1]\`. So always put \`nums[1]\` through \`nums[n-1]\` in the denominator: \`"a/(b/c/d/...)" = "a/(b/c/d/...)"\`.`,
  constraints: [
    '1 <= nums.length <= 10',
    '2 <= nums[i] <= 1000',
    'There is only one optimal division for the given input.',
  ],
  examples: [
    {
      input: 'nums = [1000,100,10,2]',
      output: '"1000/(100/10/2)"',
      explanation: '1000/(100/10/2) = 1000/5 = 200. Without extra parentheses: 1000/100/10/2 = 0.5.',
    },
    {
      input: 'nums = [2,3,4]',
      output: '"2/(3/4)"',
      explanation: '2/(3/4) = 8/3 ≈ 2.667 vs 2/3/4 ≈ 0.167.',
    },
    {
      input: 'nums = [2]',
      output: '"2"',
      explanation: 'Only one number, no division.',
    },
  ],
  hints: [
    'For n == 1: return `nums[0].toString()`.',
    'For n == 2: return `"nums[0]/nums[1]"` (no parentheses change anything).',
    'For n >= 3: always return `"nums[0]/(nums[1]/nums[2]/.../nums[n-1])"`. This maximizes by making the divisor as small as possible.',
    '```js\nif (nums.length === 1) return `${nums[0]}`;\nif (nums.length === 2) return `${nums[0]}/${nums[1]}`;\nreturn `${nums[0]}/(${nums.slice(1).join("/")})`;\n```',
  ],
  functionName: 'optimalDivision',
  params: ['nums'],
  starterCode: {
    javascript: `function optimalDivision(nums) {
  // return string expression maximizing value

}`,
    python: `def optimalDivision(nums: list) -> str:
    # return string expression maximizing value
    pass
`,
  },
  visibleTests: [
    { args: [[1000, 100, 10, 2]], expected: '1000/(100/10/2)' },
    { args: [[2, 3, 4]], expected: '2/(3/4)' },
    { args: [[2]], expected: '2' },
  ],
  hiddenTests: [
    { args: [[2, 3]], expected: '2/3' },
    { args: [[100, 10, 5]], expected: '100/(10/5)' },
    { args: [[2, 3, 4, 5]], expected: '2/(3/4/5)' },
    { args: [[10, 5, 2, 3]], expected: '10/(5/2/3)' },
    { args: [[1000, 2]], expected: '1000/2' },
    { args: [[5, 2, 3, 4]], expected: '5/(2/3/4)' },
  ],
};
