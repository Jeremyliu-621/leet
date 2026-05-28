import type { Problem } from '../types';

export const problem: Problem = {
  id: 'zuma-game',
  title: 'Zuma Game',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'backtracking'],
  description: `You have a board with colored balls: \`board\`, and \`hand\` balls you can insert anywhere. Insert a ball next to two or more of the same color to make a group of 3+ that vanishes (chaining is allowed). Return the minimum number of balls needed to clear the board, or \`-1\` if impossible.`,
  constraints: [
    '`1 <= board.length <= 16`',
    '`1 <= hand.length <= 5`',
    '`board` and `hand` consist of characters `\'R\'`, `\'Y\'`, `\'B\'`, `\'G\'`, `\'W\'`',
  ],
  examples: [
    {
      input: 'board = "WRRBBW", hand = "RB"',
      output: '-1',
      explanation: 'Cannot clear the board.',
    },
    {
      input: 'board = "WWRRBBWW", hand = "WRBRW"',
      output: '2',
      explanation: 'Insert R next to RR → clear. Insert B next to BB → clear. Remaining W\'s form 4 → clear.',
    },
    {
      input: 'board = "G", hand = "GGGGG"',
      output: '2',
      explanation: 'Insert 2 G\'s next to G → GGG vanishes.',
    },
  ],
  hints: [
    'Memoized backtracking: group the board into runs of same-color balls. For each group needing (3-count) balls to clear, try inserting from hand and recurse on the remaining board.',
    'After any insertion that completes a group of 3+, repeatedly collapse contiguous same-color groups of 3+ (clean step). Memoize on (board_state, hand_count).',
    'Scan each distinct run of the board. If hand has enough of that color to complete 3, use them, recurse on the collapsed remaining board, and track the minimum.',
  ],
  functionName: 'findMinStep',
  params: ['board', 'hand'],
  starterCode: {
    javascript: `function findMinStep(board, hand) {

}`,
    typescript: "function findMinStep(board: string, hand: string): number {\n\n}",

    python: `def findMinStep(board, hand):
    pass`,
  },
  visibleTests: [
    { args: ['WRRBBW', 'RB'], expected: -1 },
    { args: ['WWRRBBWW', 'WRBRW'], expected: 2 },
    { args: ['G', 'GGGGG'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['RBYYBBRRB', 'YRBGB'], expected: 3 },
    { args: ['RRWWRRBBRR', 'WB'], expected: -1 },
    { args: ['R', 'RRR'], expected: 2 },
    { args: ['RR', 'R'], expected: 1 },
  ],
};
