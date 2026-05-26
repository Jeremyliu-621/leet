import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-transformed-array',
  title: 'Sort Transformed Array',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers', 'math'],
  description: `Given a **sorted** integer array \`nums\` and three integers \`a\`, \`b\`, and \`c\`, apply the quadratic function \`f(x) = a * x² + b * x + c\` to each element in \`nums\` and return the resulting values in **non-decreasing** order.`,
  constraints: [
    '1 <= nums.length <= 200',
    '-100 <= nums[i] <= 100 (sorted in ascending order)',
    '-100 <= a, b, c <= 100',
  ],
  examples: [
    {
      input: 'nums = [-4,-2,2,4], a = 1, b = 3, c = 5',
      output: '[3,9,15,33]',
      explanation: 'f(-4)=9, f(-2)=3, f(2)=15, f(4)=33. Sorted: [3,9,15,33].',
    },
    {
      input: 'nums = [-4,-2,2,4], a = -1, b = 3, c = 5',
      output: '[-23,-5,1,7]',
      explanation: 'f(-4)=-23, f(-2)=-5, f(2)=7, f(4)=1. Sorted: [-23,-5,1,7].',
    },
    {
      input: 'nums = [1], a = 0, b = 0, c = 5',
      output: '[5]',
      explanation: 'f(1) = 0 + 0 + 5 = 5.',
    },
  ],
  hints: [
    'When a > 0, the parabola opens upward — the largest values are at the two extremes (smallest and largest x). Use two pointers and fill the result array from right to left.',
    'When a < 0, the parabola opens downward — the smallest values are at the extremes. Fill from left to right, always taking the smaller of the two end values.',
    'When a = 0, the transformation is linear. The array stays sorted (b >= 0) or reverses (b < 0). The two-pointer approach with a >= 0 branch handles a = 0 correctly.',
  ],
  functionName: 'sortTransformed',
  params: ['nums', 'a', 'b', 'c'],
  starterCode: {
    javascript: `function sortTransformed(nums, a, b, c) {
  const f = x => a * x * x + b * x + c;
  // Two pointers. If a >= 0, extremes are largest → fill right to left.
  // If a < 0, extremes are smallest → fill left to right.
}`,
    python: `def sortTransformed(nums, a, b, c):
    f = lambda x: a * x * x + b * x + c
    # Two pointers. If a >= 0, extremes are largest → fill right to left.
    # If a < 0, extremes are smallest → fill left to right.
    pass`,
  },
  visibleTests: [
    { args: [[-4, -2, 2, 4], 1, 3, 5], expected: [3, 9, 15, 33] },
    { args: [[-4, -2, 2, 4], -1, 3, 5], expected: [-23, -5, 1, 7] },
    { args: [[1], 0, 0, 5], expected: [5] },
  ],
  hiddenTests: [
    { args: [[-3, -1, 2, 4], 0, 2, 1], expected: [-5, -1, 5, 9] },
    { args: [[-2, 0, 2], 1, 0, 0], expected: [0, 4, 4] },
    { args: [[-1, 0, 1], -1, 0, 1], expected: [0, 0, 1] },
    { args: [[0, 1, 2], 0, -1, 3], expected: [1, 2, 3] },
    { args: [[-2, -1, 0, 1, 2], 2, 0, -1], expected: [-1, 1, 1, 7, 7] },
  ],
};
