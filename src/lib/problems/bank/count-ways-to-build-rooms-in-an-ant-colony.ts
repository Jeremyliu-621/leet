import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-ways-to-build-rooms-in-an-ant-colony',
  title: 'Count Ways to Build Rooms in an Ant Colony',
  difficulty: 'hard',
  tags: ['tree', 'dynamic-programming', 'math'],
  description: `You are an ant tasked with adding \`n\` new rooms numbered \`0\` to \`n-1\` to your colony. You are given the expansion plan as a **0-indexed** integer array of length \`n\`, \`prevRoom\`, where \`prevRoom[i]\` indicates that you must build room \`prevRoom[i]\` before building room \`i\`, and these two rooms must be **directly** connected. Room \`0\` is already built, so \`prevRoom[0] = -1\`. The expansion plan is given as a tree rooted at room \`0\`.

Return the number of **different orders** you can build all the rooms in. Since the answer may be large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '`n == prevRoom.length`',
    '`2 <= n <= 10^5`',
    '`prevRoom[0] == -1`',
    '`0 <= prevRoom[i] < i` for all `1 <= i < n`',
  ],
  examples: [
    {
      input: 'prevRoom = [-1,0,1]',
      output: '1',
      explanation: 'Only one valid order: build rooms 0→1→2.',
    },
    {
      input: 'prevRoom = [-1,0,0,1,2]',
      output: '6',
      explanation: 'Room 0 first. Then choose among subtrees of 1,2. Subtree of 1 has room 3; subtree of 2 has room 4. The number of interleavings of [1,3] and [2,4] subject to topological order is multinomial: 4!/(2!*2!)=6.',
    },
  ],
  hints: [
    'Let size[v] = number of nodes in the subtree of v (including v itself). The answer is n! / product(size[v]) for all v.',
    'This comes from the formula for counting topological sorts of a forest: multinomial coefficient.',
    'Compute size[] via DFS post-order. Then compute the answer as n! * modular inverse of each size[v], all mod 10^9+7.',
    'Use Fermat\'s little theorem for modular inverse: inv(x) = x^(MOD-2) mod MOD.',
  ],
  functionName: 'waysToBuildRooms',
  params: ['prevRoom'],
  starterCode: {
    javascript: `function waysToBuildRooms(prevRoom) {

}`,
    typescript: "function waysToBuildRooms(prevRoom: number[]): number {\n\n}",

    python: `def waysToBuildRooms(prevRoom):
    pass`,
  },
  visibleTests: [
    { args: [[-1, 0, 1]], expected: 1 },
    { args: [[-1, 0, 0, 1, 2]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[-1, 0]], expected: 1 },
    { args: [[-1, 0, 0]], expected: 2 },
    { args: [[-1, 0, 0, 0]], expected: 6 },
    { args: [[-1, 0, 1, 2]], expected: 1 },
    { args: [[-1, 0, 0, 1, 1]], expected: 8 },
  ],
};
