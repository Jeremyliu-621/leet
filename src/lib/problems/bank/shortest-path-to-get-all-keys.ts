import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-path-to-get-all-keys',
  title: 'Shortest Path to Get All Keys',
  difficulty: 'hard',
  tags: ['graph'],
  description: `You are given an \`m x n\` grid \`grid\` where:

- \`'@'\` is your starting position
- \`'a'-'f'\` are keys you need to collect
- \`'A'-'F'\` are locks (you can pass through only if you have the matching lowercase key)
- \`'#'\` is a wall
- \`'.'\` is an empty cell

Return the **minimum number of moves** to acquire all keys. If it is impossible, return \`-1\`.

**BFS with bitmask state:** State = (row, col, keys\_collected). Use BFS for minimum moves. Keys are encoded as a bitmask — bit \`i\` is set if you've collected key number \`i\`. Stop when \`keys\_bitmask\` equals \`(1 << num\_keys) - 1\`.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 30',
    'grid[i][j] is either an English letter, \'@\', \'#\', or \'.\'',
    'There is exactly one \'@\' in the grid',
    'The number of keys is in the range [1, 6]',
  ],
  examples: [
    {
      input: 'grid = ["@.a..","###.#","b.A.B"]',
      output: '8',
      explanation: 'Collect key a (3 moves), use it to pass lock A, collect key b (via B), unlock B, return.',
    },
    {
      input: 'grid = ["@.a.#","#####","b.A.B"]',
      output: '-1',
      explanation: 'Cannot reach row 2 (blocked by walls), so key b is unreachable.',
    },
  ],
  hints: [
    'Model the state as (row, col, keys_bitmask). BFS from the starting position with an initial state of (start_r, start_c, 0).',
    'When you step onto a key, add it to the bitmask. When you step onto a lock, only proceed if you have the corresponding key (bit is set).',
    'The BFS terminates when keys_bitmask == (1 << num_keys) - 1 (all keys collected). Use a visited set of (r, c, bitmask) to avoid revisiting states.',
  ],
  functionName: 'shortestPathAllKeys',
  params: ['grid'],
  starterCode: {
    javascript: 'function shortestPathAllKeys(grid) {\n\n}\n',
    python: 'def shortestPathAllKeys(grid: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [['@.a..','###.#','b.A.B']], expected: 8 },
    { args: [['@.a.#','#####','b.A.B']], expected: -1 },
  ],
  hiddenTests: [
    { args: [['@']], expected: 0 },
    { args: [['@a']], expected: 1 },
    { args: [['@.','a.']], expected: 1 },
    { args: [['@..aA','..B#.','....b']], expected: 6 },
  ],
};
