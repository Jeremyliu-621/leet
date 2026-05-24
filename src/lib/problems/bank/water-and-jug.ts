import type { Problem } from '../types';

export const problem: Problem = {
  id: 'water-and-jug',
  title: 'Water and Jug Problem',
  difficulty: 'medium',
  tags: ['math'],
  description: `You have two jugs with capacities \`jug1Capacity\` and \`jug2Capacity\` liters. There is an infinite amount of water supply available. Determine whether it is possible to measure exactly \`targetCapacity\` liters using these two jugs.

If \`targetCapacity\` liters of water are measurable, you must have \`targetCapacity\` liters of water contained **within one or both buckets** by the end.

Operations allowed:
- Fill any of the jugs completely with water.
- Empty any of the jugs.
- Pour water from one jug into the other until the other jug is completely full, or the first jug itself is empty.`,
  constraints: [
    '1 <= jug1Capacity, jug2Capacity, targetCapacity <= 10^6',
  ],
  examples: [
    {
      input: 'jug1Capacity = 3, jug2Capacity = 5, targetCapacity = 4',
      output: 'true',
    },
    {
      input: 'jug1Capacity = 2, jug2Capacity = 6, targetCapacity = 5',
      output: 'false',
    },
    {
      input: 'jug1Capacity = 1, jug2Capacity = 2, targetCapacity = 3',
      output: 'true',
    },
  ],
  hints: [
    'By Bézout\'s theorem, any amount that can be measured is a multiple of GCD(jug1Capacity, jug2Capacity).',
    'The target must be ≤ jug1Capacity + jug2Capacity (can\'t hold more than both jugs full).',
    'Return target % GCD(jug1, jug2) === 0 && target <= jug1 + jug2.',
  ],
  functionName: 'canMeasureWater',
  params: ['jug1Capacity', 'jug2Capacity', 'targetCapacity'],
  starterCode: {
    javascript: `function canMeasureWater(jug1Capacity, jug2Capacity, targetCapacity) {

}`,
    python: `def canMeasureWater(jug1Capacity, jug2Capacity, targetCapacity):
    pass`,
  },
  visibleTests: [
    { args: [3, 5, 4], expected: true },
    { args: [2, 6, 5], expected: false },
    { args: [1, 2, 3], expected: true },
  ],
  hiddenTests: [
    { args: [1, 1, 2], expected: true },
    { args: [1, 1, 3], expected: false },
    { args: [3, 5, 6], expected: true },
    { args: [4, 6, 8], expected: true },
    { args: [4, 6, 7], expected: false },
    { args: [3, 5, 0], expected: true },
  ],
};
