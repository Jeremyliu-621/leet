import type { Problem } from '../types';

export const problem: Problem = {
  id: 'destroying-asteroids',
  title: 'Destroying Asteroids',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer \`mass\` (the initial mass of a planet) and an array \`asteroids\` of asteroid masses.

The planet can **absorb** an asteroid if the planet's mass is **greater than or equal to** the asteroid's mass. When absorbed, the asteroid's mass is added to the planet. You can choose the **order** in which to encounter the asteroids.

Return \`true\` if the planet can absorb **all** asteroids, otherwise \`false\`.

**Key insight:** Sort the asteroids in ascending order. Greedily absorb the smallest asteroid first — if you can't absorb the smallest remaining, you can't absorb any larger one either.`,
  constraints: [
    '1 <= mass <= 10^5',
    '1 <= asteroids.length <= 10^5',
    '1 <= asteroids[i] <= 10^5',
  ],
  examples: [
    {
      input: 'mass = 10, asteroids = [3, 9, 19, 5, 21]',
      output: 'true',
      explanation: 'Sorted: [3,5,9,19,21]. mass: 10→13→18→27→46→67. All absorbed.',
    },
    {
      input: 'mass = 5, asteroids = [4, 9, 23, 4]',
      output: 'false',
      explanation: 'Sorted: [4,4,9,23]. mass: 5→9→13→22. 22 < 23, cannot absorb.',
    },
    {
      input: 'mass = 1, asteroids = [2]',
      output: 'false',
      explanation: '1 < 2, cannot absorb the single asteroid.',
    },
  ],
  hints: [
    'The order you encounter asteroids matters. Optimal strategy: always absorb the smallest available asteroid first.',
    'Sort asteroids. Greedily absorb in order. If mass < asteroid[i], return false immediately.',
    'Each absorbed asteroid adds to your mass, enabling future absorptions.',
  ],
  functionName: 'asteroidsDestroyed',
  params: ['mass', 'asteroids'],
  starterCode: {
    javascript: `function asteroidsDestroyed(mass, asteroids) {
  // Return true if the planet can absorb all asteroids
}`,
    python: `def asteroidsDestroyed(mass: int, asteroids: list[int]) -> bool:
    # Return true if the planet can absorb all asteroids
    pass`,
  },
  visibleTests: [
    { args: [10, [3, 9, 19, 5, 21]], expected: true },
    { args: [5, [4, 9, 23, 4]], expected: false },
    { args: [1, [2]], expected: false },
    { args: [100, [1, 2, 3]], expected: true },
  ],
  hiddenTests: [
    { args: [1, [1]], expected: true },
    { args: [10, [10, 10, 10]], expected: true },
    { args: [5, [5, 5, 5, 5]], expected: true },
    { args: [3, [1, 2, 3, 4]], expected: true },
    { args: [1, [100000]], expected: false },
    { args: [100000, [99999, 1, 1]], expected: true },
    { args: [2, [1, 3]], expected: true },
  ],
};
