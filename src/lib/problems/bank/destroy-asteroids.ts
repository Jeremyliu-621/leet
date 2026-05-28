import type { Problem } from '../types';

export const problem: Problem = {
  id: 'destroy-asteroids',
  title: 'Destroy Asteroids',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer \`mass\`, which represents the original mass of a planet. You are further given an integer array \`asteroids\`, where \`asteroids[i]\` is the mass of the \`i\`th asteroid.

You can arrange for the planet to collide with the asteroids in **any arbitrary order**. If the planet's mass is **greater than or equal to** the asteroid's mass, the planet **absorbs** the asteroid's mass and grows. Otherwise, the planet is destroyed.

Return \`true\` if **all** asteroids can be destroyed, \`false\` otherwise.`,
  constraints: [
    '1 <= mass <= 10^5',
    '1 <= asteroids.length <= 10^5',
    '1 <= asteroids[i] <= 10^5',
  ],
  examples: [
    {
      input: 'mass = 10, asteroids = [3,9,19,5,21]',
      output: 'true',
      explanation: 'Sort: [3,5,9,19,21]. Absorb in order: 10→13→18→27→46→67. All absorbed.',
    },
    {
      input: 'mass = 5, asteroids = [4,9,23,4]',
      output: 'false',
      explanation: 'Sort: [4,4,9,23]. 5→9→13→22, but 22<23 so planet is destroyed.',
    },
  ],
  hints: [
    'Sort the asteroids — you want to eat the smallest ones first to grow.',
    'Greedily absorb in increasing order; stop if you cannot absorb the next one.',
    `\`\`\`js
nums.sort((a,b)=>a-b);
for (const asteroid of nums) {
  if (mass < asteroid) return false;
  mass += asteroid;
}
return true;\`\`\``
  ],
  functionName: 'asteroidsDestroyed',
  params: ['mass', 'asteroids'],
  starterCode: {
    javascript: `function asteroidsDestroyed(mass, asteroids) {

}`,
    python: `def asteroidsDestroyed(mass, asteroids):
    pass`,
  },
  visibleTests: [
    { args: [10, [3, 9, 19, 5, 21]], expected: true },
    { args: [5, [4, 9, 23, 4]], expected: false },
  ],
  hiddenTests: [
    { args: [1, [1]], expected: true },
    { args: [1, [2]], expected: false },
    { args: [100000, [100000]], expected: true },
    { args: [1, [1, 1, 1, 1]], expected: true },
    { args: [10, [10, 10, 10]], expected: true },
  ],
};
