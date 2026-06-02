import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-product-after-cutting-rope',
  title: 'Max Product After Cutting Rope',
  difficulty: 'medium',
  tags: ['math', 'dynamic-programming'],
  description: `Given a rope of length \`n\`, cut it into **at least two** integer-length pieces and return the **maximum product** of the piece lengths.

You must make at least one cut, so you cannot keep the rope whole.

**Example:** For \`n = 10\`, cut into pieces \`3, 3, 4\` → product = 3 × 3 × 4 = **36**.`,
  constraints: [
    '2 <= n <= 58',
  ],
  examples: [
    {
      input: 'n = 2',
      output: '1',
      explanation: 'Only one way to cut: two pieces of length 1. Product = 1 × 1 = 1.',
    },
    {
      input: 'n = 10',
      output: '36',
      explanation: 'Cut into 3, 3, 4. Product = 3 × 3 × 4 = 36.',
    },
    {
      input: 'n = 4',
      output: '4',
      explanation: 'Cut into 2, 2. Product = 2 × 2 = 4.',
    },
  ],
  hints: [
    'Think about what piece lengths maximize the product. Small pieces (1s) waste rope. Which single length gives the best "value per unit"?',
    'The number 3 gives the best value per unit length (3/3 > 2/2 > 4/4). Use as many 3s as possible. If the remainder is 1, trade one 3 for two 2s (2+2 > 3+1 in product terms).',
    'Code skeleton:\n```js\nfunction cuttingRope(n) {\n  if (n === 2) return 1;\n  if (n === 3) return 2;\n  let product = 1;\n  while (n > 4) { product *= 3; n -= 3; }\n  return product * n;\n}\n```',
  ],
  functionName: 'cuttingRope',
  params: ['n'],
  starterCode: {
    javascript: `function cuttingRope(n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  let product = 1;
  while (n > 4) { product *= 3; n -= 3; }
  return product * n;
}`,
    typescript: `function cuttingRope(n: number): number {
  if (n === 2) return 1;
  if (n === 3) return 2;
  let product = 1;
  while (n > 4) { product *= 3; n -= 3; }
  return product * n;
}`,
    python: `def cuttingRope(n):
    if n == 2: return 1
    if n == 3: return 2
    product = 1
    while n > 4: product *= 3; n -= 3
    return product * n`,
  },
  visibleTests: [
    { args: [2], expected: 1 },
    { args: [10], expected: 36 },
    { args: [4], expected: 4 },
  ],
  hiddenTests: [
    { args: [3], expected: 2 },
    { args: [5], expected: 6 },
    { args: [6], expected: 9 },
    { args: [7], expected: 12 },
    { args: [8], expected: 18 },
    { args: [9], expected: 27 },
    { args: [11], expected: 54 },
    { args: [12], expected: 81 },
    { args: [20], expected: 1458 },
    { args: [58], expected: 1549681956 },
  ],
};
