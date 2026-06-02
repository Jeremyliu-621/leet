import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-manhattan-distance',
  title: 'Maximum Manhattan Distance',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a string \`s\` consisting of the characters \`'N'\`, \`'S'\`, \`'E'\`, and \`'W'\`, where each character represents a movement direction (North, South, East, West).

Starting from the origin \`(0, 0)\`, you move through these directions one step at a time. After each step, the current position is updated.

Return the **maximum Manhattan distance** from the origin that was reached at any point during the journey.

The **Manhattan distance** from the origin is \`|x| + |y|\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    "s[i] is either 'N', 'S', 'E', or 'W'.",
  ],
  examples: [
    {
      input: 's = "NESW"',
      output: '2',
      explanation: 'After N: (0,1) → dist=1. After E: (1,1) → dist=2. After S: (1,0) → dist=1. After W: (0,0) → dist=0. Maximum is 2.',
    },
    {
      input: 's = "NNN"',
      output: '3',
      explanation: 'After each N: (0,1)→1, (0,2)→2, (0,3)→3. Maximum is 3.',
    },
    {
      input: 's = "NSNS"',
      output: '1',
      explanation: 'Positions: (0,1), (0,0), (0,1), (0,0). Maximum Manhattan distance is 1.',
    },
  ],
  hints: [
    'Track the current (x, y) position step by step: N increases y, S decreases y, E increases x, W decreases x.',
    'After each move, compute |x| + |y| and update a running maximum.',
    'The answer is the maximum over all steps.',
  ],
  functionName: 'maxDistance',
  params: ['s'],
  starterCode: {
    javascript: `function maxDistance(s) {
  let x = 0, y = 0, best = 0;
  for (const c of s) {
    if (c === 'N') y++;
    else if (c === 'S') y--;
    else if (c === 'E') x++;
    else x--;
    const d = Math.abs(x) + Math.abs(y);
    if (d > best) best = d;
  }
  return best;
}`,
    typescript: `function maxDistance(s: string): number {
  let x = 0, y = 0, best = 0;
  for (const c of s) {
    if (c === 'N') y++;
    else if (c === 'S') y--;
    else if (c === 'E') x++;
    else x--;
    const d = Math.abs(x) + Math.abs(y);
    if (d > best) best = d;
  }
  return best;
}`,
    python: `def maxDistance(s):
    x = y = best = 0
    for c in s:
        if c == 'N': y += 1
        elif c == 'S': y -= 1
        elif c == 'E': x += 1
        else: x -= 1
        d = abs(x) + abs(y)
        if d > best: best = d
    return best`,
  },
  visibleTests: [
    { args: ['NESW'], expected: 2 },
    { args: ['NNN'], expected: 3 },
    { args: ['NSNS'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['N'], expected: 1 },
    { args: ['NNEE'], expected: 4 },
    { args: ['ENWS'], expected: 2 },
    { args: ['EEEEWWWW'], expected: 4 },
    { args: ['NESWNESW'], expected: 2 },
    { args: ['NNNEES'], expected: 5 },
  ],
};
