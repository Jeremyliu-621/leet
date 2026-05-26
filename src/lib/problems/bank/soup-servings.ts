import type { Problem } from '../types';

export const problem: Problem = {
  id: 'soup-servings',
  title: 'Soup Servings',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'math'],
  description: `There are two types of soup: **type A** and **type B**. Initially, we have \`n\` ml of each type of soup.

There are four kinds of operations (each chosen with equal probability 0.25):

1. Serve 100 ml of soup A and 0 ml of soup B.
2. Serve 75 ml of soup A and 25 ml of soup B.
3. Serve 50 ml of soup A and 50 ml of soup B.
4. Serve 25 ml of soup A and 75 ml of soup B.

When serving, if the remaining volume is not enough, serve as much as we can. We stop once we no longer have some quantity of both types of soup.

Return the probability that **soup A will be empty first**, plus **half the probability** that A and B become empty at the same time.

Answers within \`10^-5\` of the actual answer will be accepted.

**Key insight:** For large \`n\`, operations consume more A than B on average, so the probability approaches 1.0. Return \`1.0\` when \`n >= 4800\` to avoid TLE.`,
  constraints: [
    '`0 <= n <= 10^9`',
  ],
  examples: [
    {
      input: 'n = 50',
      output: '0.625',
      explanation: 'With 2 servings of 25 ml each: choosing operation 1 (100A, 0B) or 2 (75A, 25B) empties A first. Choosing 3 or 4 empties both simultaneously. Probability = 0.5 + 0.5*0.25 = 0.625.',
    },
    {
      input: 'n = 100',
      output: '0.71875',
    },
  ],
  hints: [
    'Scale down: all amounts are multiples of 25 ml. Divide n by 25 (ceiling) to get units. Operations become: (4,0), (3,1), (2,2), (1,3) in units.',
    'Use top-down memoized DP on (a, b) = remaining soup in 25 ml units. Base cases: a<=0 && b<=0 → 0.5; a<=0 → 1.0; b<=0 → 0.0.',
    'For large n (n >= 4800), return 1.0 early — the probability has converged to essentially 1.',
  ],
  functionName: 'soupServings',
  params: ['n'],
  starterCode: {
    javascript: `function soupServings(n) {

}`,
    python: `def soupServings(n):
    pass`,
  },
  visibleTests: [
    { args: [50], expected: 0.625 },
    { args: [100], expected: 0.71875 },
  ],
  hiddenTests: [
    { args: [0], expected: 0.5 },
    { args: [1], expected: 0.625 },
    { args: [25], expected: 0.625 },
    { args: [150], expected: 0.7578125 },
    { args: [200], expected: 0.796875 },
    { args: [4800], expected: 1.0 },
  ],
};
