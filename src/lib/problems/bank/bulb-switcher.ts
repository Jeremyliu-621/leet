import type { Problem } from '../types';

export const problem: Problem = {
  id: 'bulb-switcher',
  title: 'Bulb Switcher',
  difficulty: 'medium',
  tags: ['math'],
  description: `There are \`n\` bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb, then you turn on every third bulb, and so on.

More formally, for the \`i\`-th round (1-indexed), you toggle every \`i\`-th bulb.

After \`n\` rounds, return the number of bulbs that are on.`,
  constraints: ['`0 <= n <= 10^9`'],
  examples: [
    {
      input: 'n = 3',
      output: '1',
      explanation: 'After 3 rounds only bulb 1 remains on.',
    },
    { input: 'n = 0', output: '0' },
    { input: 'n = 1', output: '1' },
  ],
  hints: [
    'A bulb ends up on only if it is toggled an odd number of times.',
    'Bulb i is toggled once for each divisor of i. Most numbers have an even number of divisors, except perfect squares.',
    'The answer is floor(sqrt(n)).',
  ],
  functionName: 'bulbSwitch',
  params: ['n'],
  starterCode: {
    javascript: `function bulbSwitch(n) {
  return Math.floor(Math.sqrt(n));
}`,
    typescript: `function bulbSwitch(n: number): number {
  return Math.floor(Math.sqrt(n));
}`,
    python: `def bulbSwitch(n):
    import math
    return int(math.isqrt(n))`,
  },
  visibleTests: [
    { args: [3], expected: 1 },
    { args: [0], expected: 0 },
    { args: [1], expected: 1 },
  ],
  hiddenTests: [
    { args: [4], expected: 2 },
    { args: [9], expected: 3 },
    { args: [100], expected: 10 },
    { args: [1000000000], expected: 31622 },
  ],
};
