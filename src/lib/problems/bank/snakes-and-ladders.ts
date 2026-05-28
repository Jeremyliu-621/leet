import type { Problem } from '../types';

export const problem: Problem = {
  id: 'snakes-and-ladders',
  title: 'Snakes and Ladders',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given an \`n x n\` integer matrix \`board\` where cells are numbered from \`1\` to \`n²\` starting from the **bottom-left** in a Boustrophedon style:

- Row 0 from bottom (board[n-1]): squares 1 to n, left to right.
- Row 1 from bottom (board[n-2]): squares n+1 to 2n, right to left.
- And so on, alternating direction each row.

Starting at square \`1\`, on each move you can advance to any square \`s+1\` through \`s+6\` (simulating a die roll). If the destination square has a snake or ladder (\`board[r][c] != -1\`), you must move to \`board[r][c]\` instead.

Return the **minimum number of moves** to reach square \`n²\`. Return \`-1\` if it is not possible.`,
  constraints: [
    'n == board.length == board[i].length',
    '2 <= n <= 20',
    'board[i][j] is -1 or a value in the range [1, n²]',
    '1 is not a destination of any snake or ladder',
    'The destination of a snake or ladder is not another snake or ladder',
  ],
  examples: [
    {
      input:
        'board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]',
      output: '4',
      explanation:
        'Move 1: roll 1 to reach square 2, which has a ladder to 15. Move 2: roll 2 from 15 to reach 17, which has a snake to 13. Wait — shortest path: 1→2(ladder→15)→17(snake→13)→14(ladder→35)→36. That is 4 moves.',
    },
    {
      input: 'board = [[-1,-1],[-1,-1]]',
      output: '1',
      explanation: 'From square 1, roll 3 to reach square 4 = n² in 1 move.',
    },
  ],
  hints: [
    'Model this as a shortest-path problem. Nodes are squares 1..n². BFS finds the minimum number of moves.',
    'The tricky part is converting square numbers to board coordinates. For square `num` (1-indexed), compute the row from the bottom and then the column, accounting for alternating direction.',
    'BFS from square 1. For each square, try all 6 dice rolls. Convert the destination to board coordinates, check for a snake/ladder, and add unvisited squares to the queue.',
  ],
  functionName: 'snakesAndLadders',
  params: ['board'],
  starterCode: {
    javascript: `function snakesAndLadders(board) {\n\n}`,
    python: `def snakesAndLadders(board):\n    pass`,
  },
  visibleTests: [
    {
      args: [
        [
          [-1, -1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1, -1],
          [-1, 35, -1, -1, 13, -1],
          [-1, -1, -1, -1, -1, -1],
          [-1, 15, -1, -1, -1, -1],
        ],
      ],
      expected: 4,
    },
    {
      args: [[[-1, -1], [-1, -1]]],
      expected: 1,
    },
  ],
  hiddenTests: [
    {
      args: [[[-1, 4], [-1, -1]]],
      expected: 1,
    },
    {
      args: [
        [
          [-1, -1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1, -1],
          [-1, -1, -1, -1, -1, -1],
          [-1, 35, -1, -1, 13, -1],
          [-1, -1, -1, -1, -1, -1],
          [-1, 15, -1, -1, -1, -1],
        ],
      ],
      expected: 4,
    },
  ],
};
