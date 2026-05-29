import type { Problem } from '../types';

export const problem: Problem = {
  id: 'snake-in-matrix',
  title: 'Snake in Matrix',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `There is a snake in an \`n x n\` matrix \`grid\` and can move in four directions. Each cell in the \`grid\` is identified by the position: \`grid[i][j] = (i * n) + j\`.

The snake starts at cell 0 and follows a sequence of commands.

Given two integers \`n\` and \`commands\`, where \`commands[i]\` is either \`"UP"\`, \`"RIGHT"\`, \`"DOWN"\`, or \`"LEFT"\`, return the position of the final cell where the snake ends up.

- \`"UP"\` means row decreases by 1.
- \`"RIGHT"\` means col increases by 1.
- \`"DOWN"\` means row increases by 1.
- \`"LEFT"\` means col decreases by 1.

You can assume all commands are valid (the snake never moves outside the grid).`,
  constraints: [
    '2 <= n <= 10',
    '1 <= commands.length <= 100',
    'commands[i] is either "UP", "RIGHT", "DOWN", or "LEFT".',
    'The snake will not move outside of the boundaries.',
  ],
  examples: [
    {
      input: 'n = 2, commands = ["RIGHT","DOWN"]',
      output: '3',
      explanation: 'Start at (0,0)=0. "RIGHT" → (0,1)=1. "DOWN" → (1,1)=3.',
    },
    {
      input: 'n = 3, commands = ["DOWN","RIGHT","UP"]',
      output: '1',
      explanation: 'Start at (0,0)=0. "DOWN" → (1,0)=3. "RIGHT" → (1,1)=4. "UP" → (0,1)=1.',
    },
  ],
  hints: [
    'Track row and col separately.',
    'Apply each command to update the position.',
    'Return row * n + col at the end.',
  ],
  functionName: 'finalPositionOfSnake',
  params: ['n', 'commands'],
  starterCode: {
    javascript: `function finalPositionOfSnake(n, commands) {\n  \n}`,
    typescript: `function finalPositionOfSnake(n: number, commands: string[]): number {\n  \n}`,
    python: `def finalPositionOfSnake(n, commands):\n    `,
  },
  visibleTests: [
    { args: [2, ['RIGHT', 'DOWN']], expected: 3 },
    { args: [3, ['DOWN', 'RIGHT', 'UP']], expected: 1 },
    { args: [4, ['RIGHT', 'RIGHT', 'DOWN']], expected: 6 },
  ],
  hiddenTests: [
    { args: [2, ['RIGHT', 'DOWN']], expected: 3 },
    { args: [3, ['DOWN', 'RIGHT', 'UP']], expected: 1 },
    { args: [4, ['RIGHT', 'RIGHT', 'DOWN']], expected: 6 },
    { args: [5, ['DOWN', 'DOWN', 'RIGHT', 'RIGHT']], expected: 12 },
    { args: [3, ['RIGHT', 'RIGHT']], expected: 2 },
    { args: [2, ['DOWN']], expected: 2 },
    { args: [3, ['DOWN', 'DOWN', 'RIGHT', 'RIGHT', 'UP', 'UP']], expected: 2 },
    { args: [10, ['RIGHT', 'DOWN', 'LEFT', 'UP']], expected: 0 },
  ],
};
