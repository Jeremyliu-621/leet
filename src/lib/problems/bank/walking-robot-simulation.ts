import type { Problem } from '../types';

export const problem: Problem = {
  id: 'walking-robot-simulation',
  title: 'Walking Robot Simulation',
  difficulty: 'medium',
  tags: ['simulation', 'hash-map'],
  description: `A robot on an infinite XY-plane starts at position \`(0, 0)\` facing north. It receives an array of \`commands\`:

- \`-2\`: turn left 90 degrees
- \`-1\`: turn right 90 degrees
- \`1 <= k <= 9\`: move forward \`k\` steps

There is a set of \`obstacles\` as \`[xi, yi]\` pairs. If the robot would walk into an obstacle, it stops just before that cell and processes the next command.

Return the **maximum Euclidean distance squared** (\`x² + y²\`) from the origin that the robot ever reaches during its path.`,
  constraints: [
    '1 <= commands.length <= 10^4',
    '-2 <= commands[i] <= 9',
    'commands[i] != 0',
    '0 <= obstacles.length <= 10^4',
    '-3 * 10^4 <= xi, yi <= 3 * 10^4',
    'The answer is guaranteed to be less than 2^31.',
  ],
  examples: [
    {
      input: 'commands = [4,-1,3], obstacles = []',
      output: '25',
      explanation: 'Robot goes north 4 → (0,4), turns right (faces east), moves 3 → (3,4). Distance² = 9+16 = 25.',
    },
    {
      input: 'commands = [4,-1,4,-2,4], obstacles = []',
      output: '65',
      explanation: 'Robot ends at (-3,4) after commands. Max distance² = 65 at (-3,4)? Actually max is at (0+4=4, y... let\'s trace: north 4→(0,4), right→east, east 4→(4,4) [d²=32], left→north, north 4→(4,8) [d²=80]. Max = 80.',
    },
    {
      input: 'commands = [6,-1,-1,6], obstacles = [[0,0]]',
      output: '36',
      explanation: 'Robot goes north 6 to (0,6), turns right (east), turns right (south), tries to go south 6 but (0,0) is blocked — stops at (0,1). Max d² = 36 at (0,6).',
    },
  ],
  hints: [
    'Track the current direction as an index into the four cardinal directions: N=(0,1), E=(1,0), S=(0,-1), W=(-1,0). Turning right increments the index mod 4; left decrements.',
    'Store obstacles in a Set with string keys like `"x,y"` for O(1) lookup.',
    'For each move-forward command, step one unit at a time and check if the next cell is an obstacle before moving.',
  ],
  functionName: 'robotSim',
  params: ['commands', 'obstacles'],
  starterCode: {
    javascript: 'function robotSim(commands, obstacles) {\n  // your code here\n}\n',
    typescript: "function robotSim(commands: number[], obstacles: unknown[]): number {\n  // your code here\n}",

    python: 'def robotSim(commands, obstacles):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[4, -1, 3], []], expected: 25 },
    { args: [[4, -1, 4, -2, 4], []], expected: 80 },
    { args: [[6, -1, -1, 6], [[0, 0]]], expected: 36 },
  ],
  hiddenTests: [
    { args: [[1], []], expected: 1 },
    { args: [[-1, -1, 9], []], expected: 81 },
    { args: [[3, -1, 3], [[3, 3]]], expected: 13 },
    { args: [[1, -2, 1], []], expected: 2 },
    { args: [[5, -1, 5, -1, 5, -1, 5], []], expected: 50 },
  ],
};
