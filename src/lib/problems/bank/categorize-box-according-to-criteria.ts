import type { Problem } from '../types';

export const problem: Problem = {
  id: 'categorize-box-according-to-criteria',
  title: 'Categorize Box According to Criteria',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given four integers \`length\`, \`width\`, \`height\`, and \`mass\`, representing the dimensions and mass of a box, return a string representing the **category** of the box.

- The box is **"Bulk"** if any dimension is ≥ \`10^4\` **or** its volume is ≥ \`10^9\`.
- The box is **"Heavy"** if its mass is ≥ \`100\`.
- The box is **"Both"** if both criteria apply.
- The box is **"Neither"** if neither applies.`,
  constraints: [
    '1 <= length, width, height <= 10^5',
    '1 <= mass <= 10^3',
  ],
  examples: [
    {
      input: 'length = 1000, width = 35, height = 700, mass = 300',
      output: '"Heavy"',
      explanation: 'Volume = 1000×35×700 = 24,500,000 < 10^9 and no dim ≥ 10^4. Mass=300 ≥ 100. Result: "Heavy".',
    },
    {
      input: 'length = 200, width = 50, height = 800, mass = 50',
      output: '"Neither"',
      explanation: 'Volume = 8,000,000 < 10^9, no dim ≥ 10^4, mass < 100. Result: "Neither".',
    },
  ],
  hints: [
    'Compute isBulk = any dim ≥ 10^4 or volume ≥ 10^9. Compute isHeavy = mass ≥ 100. Combine to pick the category.',
    'Four cases: both → "Both", only bulk → "Bulk", only heavy → "Heavy", neither → "Neither".',
    'Watch out for integer overflow when computing volume: 10^5 × 10^5 × 10^5 = 10^15, which overflows 32-bit integers. Use BigInt or check ≥ 10^9 with regular JS numbers (safe up to 2^53).',
  ],
  functionName: 'categorizeBox',
  params: ['length', 'width', 'height', 'mass'],
  starterCode: {
    javascript: `function categorizeBox(length, width, height, mass) {

}`,
    python: `def categorizeBox(length, width, height, mass):
    pass`,
  },
  visibleTests: [
    { args: [1000, 35, 700, 300], expected: 'Heavy' },
    { args: [200, 50, 800, 50], expected: 'Neither' },
  ],
  hiddenTests: [
    { args: [2, 2, 2, 50], expected: 'Neither' },
    { args: [10000, 5, 5, 5], expected: 'Bulk' },
    { args: [10000, 5, 5, 100], expected: 'Both' },
    { args: [1, 1, 1, 100], expected: 'Heavy' },
  ],
};
