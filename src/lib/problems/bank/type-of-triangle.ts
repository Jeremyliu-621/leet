import type { Problem } from '../types';

export const problem: Problem = {
  id: 'type-of-triangle',
  title: 'Type of Triangle',
  difficulty: 'easy',
  tags: ['math', 'arrays'],
  description: `You are given a **0-indexed** integer array \`nums\` of size 3 which can form the sides of a triangle.

- A triangle is **valid** if the sum of any two sides is **strictly greater** than the third side.
- An **equilateral** triangle has all three sides equal.
- An **isosceles** triangle has exactly two sides equal.
- A **scalene** triangle has all three sides different.

Return a string describing the type of triangle that can be formed with the given array, or \`"none"\` if it cannot form a triangle.

**Approach:** Sort the array. Check triangle inequality (a+b > c is sufficient after sorting). Then classify by number of equal sides.`,
  constraints: [
    'nums.length == 3',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [3,3,3]',
      output: '"equilateral"',
      explanation: 'All sides equal → equilateral.',
    },
    {
      input: 'nums = [3,4,5]',
      output: '"scalene"',
      explanation: '3+4>5, valid triangle, all sides different → scalene.',
    },
  ],
  hints: [
    'Sort the array first. The triangle inequality only needs a[0]+a[1]>a[2] after sorting.',
    'Check equality of sides: all equal = equilateral, exactly two equal = isosceles, else scalene.',
    '```js\nfunction triangleType(nums) {\n  const a = [...nums].sort((x, y) => x - y);\n  if (a[0] + a[1] <= a[2]) return "none";\n  if (a[0] === a[2]) return "equilateral";\n  if (a[0] === a[1] || a[1] === a[2]) return "isosceles";\n  return "scalene";\n}\n```',
  ],
  functionName: 'triangleType',
  params: ['nums'],
  starterCode: {
    javascript: `function triangleType(nums) {
  // return "equilateral", "isosceles", "scalene", or "none"

}`,
    typescript: "function triangleType(nums: number[]): string {\n  // return \"equilateral\", \"isosceles\", \"scalene\", or \"none\"\n\n}",

    python: `def triangleType(nums: list) -> str:
    # return "equilateral", "isosceles", "scalene", or "none"
    pass
`,
  },
  visibleTests: [
    { args: [[3, 3, 3]], expected: 'equilateral' },
    { args: [[3, 4, 5]], expected: 'scalene' },
  ],
  hiddenTests: [
    { args: [[5, 5, 3]], expected: 'isosceles' },
    { args: [[1, 2, 3]], expected: 'none' },
    { args: [[1, 1, 1]], expected: 'equilateral' },
    { args: [[5, 3, 5]], expected: 'isosceles' },
    { args: [[3, 3, 5]], expected: 'isosceles' },
    { args: [[1, 1, 2]], expected: 'none' },
    { args: [[7, 10, 5]], expected: 'scalene' },
  ],
};
