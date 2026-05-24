import type { Problem } from '../types';

export const problem: Problem = {
  id: 'asteroid-collision',
  title: 'Asteroid Collision',
  difficulty: 'medium',
  tags: ['stack', 'arrays'],
  description: `Given an integer array \`asteroids\` representing asteroids in a row, simulate their collisions and return the final state.

- A **positive** value means the asteroid is moving **right**.
- A **negative** value means the asteroid is moving **left**.
- The absolute value represents the asteroid's size.

**Collision rules:**
- Two asteroids collide only when a right-moving asteroid is followed by a left-moving asteroid.
- The **smaller** asteroid (by absolute value) explodes.
- If both are the **same size**, both explode.
- Asteroids moving in the same direction never collide.`,
  constraints: [
    '1 <= asteroids.length <= 1000',
    '-1000 <= asteroids[i] <= 1000',
    'asteroids[i] != 0',
  ],
  examples: [
    {
      input: 'asteroids = [5,10,-5]',
      output: '[5,10]',
      explanation: '10 and -5 collide; 10 survives. 5 and 10 move right so they never collide.',
    },
    {
      input: 'asteroids = [8,-8]',
      output: '[]',
      explanation: '8 and -8 collide and both explode because they are equal in size.',
    },
    {
      input: 'asteroids = [10,2,-5]',
      output: '[10]',
      explanation: '2 and -5 collide; -5 wins (larger absolute value). Then 10 and -5 collide; 10 wins.',
    },
  ],
  hints: [
    'Think about which pairs of asteroids can collide: only a right-moving (+) immediately "followed" by a left-moving (-) in the stack. Asteroids moving the same direction pass through each other.',
    'Use a stack. Push positive asteroids immediately. For a negative asteroid, repeatedly compare it against the stack top (if the top is positive). Pop the top if it is smaller; stop if it is larger; pop both if equal.',
    '```js\nconst stack = [];\nfor (const a of asteroids) {\n  let survived = true;\n  while (survived && a < 0 && stack.length && stack[stack.length-1] > 0) {\n    const top = stack[stack.length-1];\n    if (top < -a) { stack.pop(); }\n    else if (top === -a) { stack.pop(); survived = false; }\n    else { survived = false; }\n  }\n  if (survived) stack.push(a);\n}\nreturn stack;\n```',
  ],
  functionName: 'asteroidCollision',
  params: ['asteroids'],
  starterCode: {
    javascript: 'function asteroidCollision(asteroids) {\n  // your code here\n}\n',
    python: 'def asteroidCollision(asteroids):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 10, -5]], expected: [5, 10] },
    { args: [[8, -8]], expected: [] },
    { args: [[10, 2, -5]], expected: [10] },
  ],
  hiddenTests: [
    { args: [[-2, -1, 1, 2]], expected: [-2, -1, 1, 2] },
    { args: [[1, -1]], expected: [] },
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
    { args: [[-1, -2, -3]], expected: [-1, -2, -3] },
    { args: [[10, -10, 10]], expected: [10] },
    { args: [[1, 1, -1, -1]], expected: [] },
    { args: [[-5, 5]], expected: [-5, 5] },
  ],
};
