import type { Problem } from '../types';

export const problem: Problem = {
  id: 'pass-the-pillow',
  title: 'Pass the Pillow',
  difficulty: 'easy',
  tags: ['math'],
  description: `There are \`n\` people standing in a line labeled from \`1\` to \`n\`. The first person in the line is holding a pillow initially. Every second, the person holding the pillow passes it to the next person in the line. Once the pillow reaches the end of the line, the direction reverses, and people continue passing the pillow in the opposite direction.

- For example, once the pillow reaches the \`n\`th person they pass it to the \`n-1\`th person, then to the \`n-2\`th person and so on.

Given the two positive integers \`n\` and \`time\`, return the index of the person holding the pillow after \`time\` seconds.`,
  constraints: [
    '2 <= n <= 1000',
    '1 <= time <= 1000',
  ],
  examples: [
    {
      input: 'n = 4, time = 5',
      output: '2',
      explanation:
        'At time 0: 1 holds pillow. Time 1: person 2. Time 2: person 3. Time 3: person 4. Time 4: person 3. Time 5: person 2.',
    },
    {
      input: 'n = 3, time = 2',
      output: '3',
      explanation:
        'At time 0: 1 holds pillow. Time 1: person 2. Time 2: person 3.',
    },
  ],
  hints: [
    'One full "round trip" takes 2*(n-1) seconds: going forward n-1 steps then back n-1 steps.',
    'Reduce time modulo 2*(n-1) to find the position within the current trip.',
    'If the remainder is <= n-1 you are in the forward pass (position = 1 + remainder). Otherwise you are in the backward pass (position = n - (remainder - (n-1))).',
  ],
  functionName: 'passThePillow',
  params: ['n', 'time'],
  starterCode: {
    javascript: 'function passThePillow(n, time) {\n  \n}\n',
    python: 'def passThePillow(n, time):\n    pass\n',
  },
  visibleTests: [
    { args: [4, 5], expected: 2 },
    { args: [3, 2], expected: 3 },
  ],
  hiddenTests: [
    { args: [2, 1], expected: 2 },
    { args: [2, 2], expected: 1 },
    { args: [3, 4], expected: 1 },
    { args: [3, 6], expected: 3 },
    { args: [5, 1], expected: 2 },
    { args: [5, 8], expected: 1 },
    { args: [1000, 1000], expected: 999 },
    { args: [4, 8], expected: 3 },
  ],
};
