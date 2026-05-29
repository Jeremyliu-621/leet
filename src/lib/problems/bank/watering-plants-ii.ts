import type { Problem } from '../types';

export const problem: Problem = {
  id: 'watering-plants-ii',
  title: 'Watering Plants II',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers', 'simulation'],
  description: `Alice and Bob want to water \`n\` plants in their garden. The plants are arranged in a row and are labeled from \`0\` to \`n - 1\` from left to right.

Alice waters plants from **left to right** starting at plant \`0\`. Bob waters plants from **right to left** starting at plant \`n - 1\`. Both fill their watering cans to \`capacityA\` and \`capacityB\` respectively before they start.

When Alice and Bob reach the **same plant**, the one with **more water** waters it. If they have the same amount, Alice waters it.

Return the **number of times** either person has to refill their watering can.`,
  constraints: [
    'n == plants.length',
    '1 <= n <= 10^5',
    '1 <= plants[i] <= 10^5',
    'max(plants[i]) <= capacityA, capacityB <= 10^9',
  ],
  examples: [
    {
      input: 'plants = [2,2,3,3], capacityA = 5, capacityB = 5',
      output: '1',
      explanation:
        'Alice waters plants 0, 1. At plant 2, she must refill (1 refill). Bob waters plant 3 then stops. Total: 1.',
    },
    {
      input: 'plants = [2,2,3,3], capacityA = 3, capacityB = 4',
      output: '2',
      explanation: 'Alice refills at plant 1; Bob refills at plant 2. Total: 2.',
    },
    {
      input: 'plants = [5], capacityA = 10, capacityB = 8',
      output: '0',
      explanation: 'Only one plant; Alice has more water so she waters it with no refill needed.',
    },
  ],
  hints: [
    'Use two pointers i = 0 and j = n-1 with wa = capacityA and wb = capacityB.',
    'While i < j: Alice waters plant i (refill if needed), Bob waters plant j (refill if needed).',
    'When i == j (middle plant): whoever has more water (Alice on tie) waters it; refill if needed.',
  ],
  functionName: 'minimumRefill',
  params: ['plants', 'capacityA', 'capacityB'],
  starterCode: {
    javascript: `function minimumRefill(plants, capacityA, capacityB) {
  // your code here
}`,
    typescript: `function minimumRefill(plants: number[], capacityA: number, capacityB: number): number {
  // your code here
}`,
    python: `def minimumRefill(plants, capacityA, capacityB):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [[2, 2, 3, 3], 5, 5], expected: 1 },
    { args: [[2, 2, 3, 3], 3, 4], expected: 2 },
    { args: [[5], 10, 8], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1, 1], 3, 3], expected: 0 },
    { args: [[7, 7, 7, 7], 7, 7], expected: 2 },
    { args: [[3, 3, 3, 3, 3, 3], 4, 4], expected: 4 },
    { args: [[1, 2, 3, 4, 5], 5, 5], expected: 2 },
    { args: [[10], 10, 10], expected: 0 },
    { args: [[1, 1, 1], 2, 2], expected: 0 },
  ],
};
