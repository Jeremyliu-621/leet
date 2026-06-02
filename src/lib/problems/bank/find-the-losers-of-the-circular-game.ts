import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-losers-of-the-circular-game',
  title: 'Find the Losers of the Circular Game',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `There are \`n\` friends in a circle numbered \`1\` through \`n\`. Friend 1 starts with a ball and passes it in a series of rounds:

- Round 1: Friend 1 passes the ball **k** positions forward to friend \`(1 + k - 1) mod n + 1\`.
- Round 2: That friend passes it **2k** positions forward.
- Round i: The holder passes it **i × k** positions forward.

The game ends when any friend receives the ball for the **second** time.

Return the friends who **never** received the ball (in ascending order).`,
  constraints: [
    '1 <= n <= 50',
    '1 <= k <= n',
  ],
  examples: [
    {
      input: 'n = 5, k = 2',
      output: '[4,5]',
      explanation: 'Friend 1 → 3 → 2 → 3 (seen twice). Friends 4 and 5 never received the ball.',
    },
    {
      input: 'n = 4, k = 4',
      output: '[2,3,4]',
      explanation: 'Friend 1 passes 4 positions and reaches friend 1 again immediately. Only friend 1 received the ball.',
    },
    {
      input: 'n = 3, k = 1',
      output: '[3]',
      explanation: 'Friend 1 → 2 → 1 (seen twice). Friend 3 never received the ball.',
    },
  ],
  hints: [
    'Simulate the game. Track which friends have received the ball using a Set.',
    'Start at position 0 (friend 1). Each round i, advance by i*k steps modulo n.',
    'Stop when you revisit any position. Collect indices not in the visited Set and return them as 1-indexed.',
  ],
  functionName: 'circularGameLosers',
  params: ['n', 'k'],
  starterCode: {
    javascript: `function circularGameLosers(n, k) {
  const visited = new Set();
  let pos = 0, round = 1;
  visited.add(0);
  while (true) {
    pos = (pos + round * k) % n;
    if (visited.has(pos)) break;
    visited.add(pos);
    round++;
  }
  const result = [];
  for (let i = 0; i < n; i++) if (!visited.has(i)) result.push(i + 1);
  return result;
}`,
    typescript: `function circularGameLosers(n: number, k: number): number[] {
  const visited = new Set<number>();
  let pos = 0, round = 1;
  visited.add(0);
  while (true) {
    pos = (pos + round * k) % n;
    if (visited.has(pos)) break;
    visited.add(pos);
    round++;
  }
  const result: number[] = [];
  for (let i = 0; i < n; i++) if (!visited.has(i)) result.push(i + 1);
  return result;
}`,
    python: `def circularGameLosers(n, k):
    visited = {0}
    pos, round_ = 0, 1
    while True:
        pos = (pos + round_ * k) % n
        if pos in visited: break
        visited.add(pos); round_ += 1
    return [i + 1 for i in range(n) if i not in visited]`,
  },
  visibleTests: [
    { args: [5, 2], expected: [4, 5] },
    { args: [4, 4], expected: [2, 3, 4] },
    { args: [3, 1], expected: [3] },
  ],
  hiddenTests: [
    { args: [1, 1], expected: [] },
    { args: [2, 1], expected: [] },
    { args: [2, 2], expected: [2] },
    { args: [6, 3], expected: [2, 3, 5, 6] },
    { args: [10, 1], expected: [3, 5, 6, 8, 9, 10] },
    { args: [5, 5], expected: [2, 3, 4, 5] },
    { args: [7, 3], expected: [2, 6, 7] },
    { args: [8, 2], expected: [2, 4, 6, 8] },
  ],
};
