import type { Problem } from '../types';

export const problem: Problem = {
  id: 'robot-return-to-origin',
  title: 'Robot Return to Origin',
  difficulty: 'easy',
  tags: ['strings'],
  description: `There is a robot starting at position \`(0, 0)\`, the origin. Given a string \`moves\` containing the robot's movements: \`'U'\` (up, y+1), \`'D'\` (down, y-1), \`'L'\` (left, x-1), \`'R'\` (right, x+1), return \`true\` if the robot returns to the origin after all moves, \`false\` otherwise.`,
  constraints: [
    '1 <= moves.length <= 2 * 10^4',
    "moves consists only of 'U', 'D', 'L', 'R'",
  ],
  examples: [
    {
      input: 'moves = "UD"',
      output: 'true',
      explanation: 'The robot moves up once then down once, returning to origin.',
    },
    {
      input: 'moves = "LL"',
      output: 'false',
      explanation: 'The robot moves left twice and ends at (-2, 0).',
    },
  ],
  hints: [
    "Count how many times the robot moves in each direction.",
    "The robot returns to origin iff count(U)==count(D) AND count(L)==count(R).",
    "One-liner: `return moves.split('').filter(c=>c==='U').length === moves.split('').filter(c=>c==='D').length && moves.split('').filter(c=>c==='L').length === moves.split('').filter(c=>c==='R').length;`",
  ],
  functionName: 'judgeCircle',
  params: ['moves'],
  starterCode: {
    javascript: `function judgeCircle(moves) {\n  // your code here\n}\n`,
    typescript: "function judgeCircle(moves: string): boolean {\n  // your code here\n}",

    python: `def judgeCircle(moves):\n    # your code here\n    pass\n`,
  },
  visibleTests: [
    { args: ['UD'], expected: true },
    { args: ['LL'], expected: false },
    { args: ['UDLR'], expected: true },
  ],
  hiddenTests: [
    { args: ['U'], expected: false },
    { args: ['UUDD'], expected: true },
    { args: ['LRRL'], expected: true },
    { args: ['UDLRLL'], expected: false },
    { args: ['UUUUUU'], expected: false },
    { args: ['UDUDLRLR'], expected: true },
  ],
};
