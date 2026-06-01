import type { Problem } from '../types';

export const problem: Problem = {
  id: 'extended-gcd',
  title: 'Extended Euclidean Algorithm',
  difficulty: 'medium',
  tags: ['math', 'arrays'],
  description: `The **Extended Euclidean Algorithm** computes integers \`x\` and \`y\` (Bézout coefficients) such that:

\`\`\`
a * x + b * y = gcd(a, b)
\`\`\`

Given a list of pairs \`[(a₁, b₁), (a₂, b₂), ...]\`, for each pair return an array \`[gcd, x, y]\` where:
- \`gcd\` is \`gcd(a, b)\` (always positive),
- \`x\` and \`y\` are integers satisfying \`a*x + b*y = gcd(a, b)\`,
- If multiple solutions exist, return the one with the **smallest non-negative** \`x\` (i.e. \`x = ((x % (b/gcd)) + (b/gcd)) % (b/gcd)\` for standard normalization), then compute \`y = (gcd - a*x) / b\`.

**Note:** For each pair, a unique canonical answer is expected. The test cases use a specific normalization — see hints.`,
  constraints: [
    '1 <= pairs.length <= 100',
    '1 <= a, b <= 10^9',
  ],
  examples: [
    {
      input: 'pairs = [[35, 15]]',
      output: '[[5, 1, -2]]',
      explanation: 'gcd(35,15)=5. 35*1 + 15*(-2) = 35 - 30 = 5. ✓',
    },
    {
      input: 'pairs = [[12, 8]]',
      output: '[[4, 1, -1]]',
      explanation: 'gcd(12,8)=4. 12*1 + 8*(-1) = 12 - 8 = 4. ✓',
    },
    {
      input: 'pairs = [[3, 5]]',
      output: '[[1, 2, -1]]',
      explanation: 'gcd(3,5)=1. 3*2 + 5*(-1) = 6 - 5 = 1. ✓',
    },
  ],
  hints: [
    'The recursive extended GCD: extgcd(a, b) returns (g, x, y) such that a*x + b*y = g. Base case: extgcd(a, 0) = (a, 1, 0). Recursive: (g, x1, y1) = extgcd(b, a%b); return (g, y1, x1 - (a/b)*y1).',
    'After computing the raw (g, x, y), normalize x to the smallest non-negative value: the period of x-solutions is b/g. So x = ((x % (b/g)) + (b/g)) % (b/g). Then y = (g - a*x) / b.',
    'Verification: always check a*x + b*y === g after normalization. Use integer arithmetic (Math.floor for the division in the recursive step).',
  ],
  functionName: 'extendedGcd',
  params: ['pairs'],
  starterCode: {
    javascript: `function extendedGcd(pairs) {\n\n}`,
    typescript: `function extendedGcd(pairs: [number, number][]): [number, number, number][] {\n\n}`,
    python: `def extendedGcd(pairs: list[list[int]]) -> list[list[int]]:\n    pass`,
  },
  visibleTests: [
    { args: [[[35, 15]]], expected: [[5, 1, -2]] },
    { args: [[[12, 8]]], expected: [[4, 1, -1]] },
    { args: [[[3, 5]]], expected: [[1, 2, -1]] },
  ],
  hiddenTests: [
    { args: [[[1, 1]]], expected: [[1, 0, 1]] },
    { args: [[[6, 4]]], expected: [[2, 1, -1]] },
    { args: [[[100, 75]]], expected: [[25, 1, -1]] },
    { args: [[[17, 13]]], expected: [[1, 10, -13]] },
    { args: [[[8, 5]]], expected: [[1, 2, -3]] },
    { args: [[[7, 3]]], expected: [[1, 1, -2]] },
  ],
};
