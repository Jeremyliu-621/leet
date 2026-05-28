import type { Problem } from '../types';

export const problem: Problem = {
  id: 'robot-bounded-in-circle',
  title: 'Robot Bounded In Circle',
  difficulty: 'medium',
  tags: ['math'],
  description: `On an infinite plane, a robot initially stands at \`(0, 0)\` facing north. Note that:

- **North** is in the direction of the positive y-axis.
- **East** is in the direction of the positive x-axis.
- **South** is in the direction of the negative y-axis.
- **West** is in the direction of the negative x-axis.

The robot can receive one of three instructions:
- \`'G'\`: go straight 1 unit.
- \`'L'\`: turn 90 degrees to the left (counterclockwise).
- \`'R'\`: turn 90 degrees to the right (clockwise).

The robot performs the \`instructions\` given in order, and repeats them forever.

Return \`true\` if and only if there exists some circle that contains all the positions the robot visits (i.e., there is a bounded region).`,
  constraints: [
    '1 <= instructions.length <= 100',
    'instructions[i] is \'G\', \'L\' or \'R\'',
  ],
  examples: [
    {
      input: 'instructions = "GGLLGG"',
      output: 'true',
      explanation: 'The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0). It repeats this forever.',
    },
    {
      input: 'instructions = "GG"',
      output: 'false',
      explanation: 'The robot moves north forever.',
    },
    {
      input: 'instructions = "GL"',
      output: 'true',
      explanation: 'The robot moves from (0,0) → (0,1) → (-1,1) → (-1,0) → (0,0) after 4 cycles.',
    },
  ],
  hints: [
    'Simulate one full pass of the instructions.',
    'After one pass, the robot is bounded if it returned to (0,0) OR if it\'s no longer facing north.',
    'If the robot faces north and is not at the origin after one pass, it will drift away forever.',
    'If it faces south/east/west, after 2 or 4 cycles it returns to the origin.',
  ],
  functionName: 'isRobotBounded',
  params: ['instructions'],
  starterCode: {
    javascript: `function isRobotBounded(instructions) {

}`,
    typescript: "function isRobotBounded(instructions: string): boolean {\n\n}",

    python: `def isRobotBounded(instructions):
    pass`,
  },
  visibleTests: [
    { args: ['GGLLGG'], expected: true },
    { args: ['GG'], expected: false },
    { args: ['GL'], expected: true },
  ],
  hiddenTests: [
    { args: ['G'], expected: false },
    { args: ['L'], expected: true },
    { args: ['LLLL'], expected: true },
    { args: ['GLGLGLGL'], expected: true },
    { args: ['GLLG'], expected: true },
    { args: ['RGGL'], expected: false },
  ],
};
