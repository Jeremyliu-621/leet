import type { Problem } from '../types';

export const problem: Problem = {
  id: 'furthest-point-from-origin',
  title: 'Furthest Point From Origin',
  difficulty: 'easy',
  tags: ['simulation', 'math'],
  description: `You are given a string \`moves\` of length \`n\` consisting only of characters \`'L'\`, \`'R'\`, and \`'_'\`. The string represents your movement on a number line starting from the origin \`0\`.

In the \`i\`-th move, you can choose one of the following directions:
- move to the left if \`moves[i] = 'L'\` or \`moves[i] = '_'\`
- move to the right if \`moves[i] = 'R'\` or \`moves[i] = '_'\`

Return the **distance from the origin** of the **furthest** point you can get to after \`n\` moves.`,
  constraints: [
    '1 <= moves.length <= 50',
    "moves consists only of characters 'L', 'R' and '_'.",
  ],
  examples: [
    {
      input: 'moves = "L_RL__R"',
      output: '3',
      explanation:
        'L=2, R=2, _=3. The net fixed displacement is 0, and we can freely use all 3 underscores in either direction. Furthest = |2-2| + 3 = 3.',
    },
    {
      input: 'moves = "_______"',
      output: '7',
      explanation:
        'All 7 moves are free. Move all right (or all left) to reach distance 7.',
    },
    {
      input: 'moves = "LLRRR"',
      output: '1',
      explanation: 'L=2, R=3, _=0. Net displacement is |3-2|=1. No free moves.',
    },
  ],
  hints: [
    "Count 'L', 'R', and '_'. The locked moves give a net displacement of count('R') - count('L').",
    "Each '_' can freely extend in the dominant direction.",
    "return Math.abs((moves.match(/L/g)||[]).length - (moves.match(/R/g)||[]).length) + (moves.match(/_/g)||[]).length;",
  ],
  functionName: 'furthestDistanceFromOrigin',
  params: ['moves'],
  starterCode: {
    javascript: `function furthestDistanceFromOrigin(moves) {
  let l = 0, r = 0, free = 0;
  for (const m of moves) {
    if (m === 'L') l++;
    else if (m === 'R') r++;
    else free++;
  }
  return Math.abs(l - r) + free;
}`,
    typescript: `function furthestDistanceFromOrigin(moves: string): number {
  let l = 0, r = 0, free = 0;
  for (const m of moves) {
    if (m === 'L') l++;
    else if (m === 'R') r++;
    else free++;
  }
  return Math.abs(l - r) + free;
}`,
    python: `def furthestDistanceFromOrigin(moves):
    if hasattr(moves, 'to_py'): moves = moves.to_py()
    return abs(moves.count('L') - moves.count('R')) + moves.count('_')`,
  },
  visibleTests: [
    { args: ['L_RL__R'], expected: 3 },
    { args: ['_______'], expected: 7 },
    { args: ['LLRRR'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['L'], expected: 1 },
    { args: ['R'], expected: 1 },
    { args: ['_'], expected: 1 },
    { args: ['LR'], expected: 0 },
    { args: ['LR_'], expected: 1 },
    { args: ['LLLL'], expected: 4 },
    { args: ['RRRR'], expected: 4 },
    { args: ['LLRR'], expected: 0 },
    { args: ['__LLR'], expected: 3 },
  ],
};
