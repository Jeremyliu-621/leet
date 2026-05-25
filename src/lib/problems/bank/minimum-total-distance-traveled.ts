import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-total-distance-traveled',
  title: 'Minimum Total Distance Traveled',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `There are \`n\` robots on a number line. \`robot[i]\` is the position of robot \`i\` and \`factory[j] = [position_j, limit_j]\` means factory \`j\` can repair at most \`limit_j\` robots.

Each robot must be assigned to exactly one factory. The distance traveled by robot \`i\` assigned to factory \`j\` is \`|robot[i] - position_j|\`. Return the minimum total distance.

**DP:** Sort both arrays. Since positions are sorted, optimal assignments are non-crossing. Flatten factories (each slot is one unit of capacity). \`dp[i][j]\` = min cost assigning robots \`0..i-1\` to the first \`j\` factory slots. Transition: skip slot \`j\` (\`dp[i][j-1]\`) or assign robot \`i\` to slot \`j\` (\`dp[i-1][j-1] + |robot[i-1] - flat[j-1]|\`).`,
  constraints: [
    '1 <= robot.length, factory.length <= 100',
    '-10^9 <= robot[i] <= 10^9',
    '0 <= limit_j <= robot.length',
    'The total repair limit of all factories >= robot.length.',
  ],
  examples: [
    {
      input: 'robot = [0,4,6], factory = [[-2,2],[2,2]]',
      output: '8',
      explanation: 'Assign 0→-2 (cost 2), 4→2 (cost 2), 6→2 (cost 4). Total=8.',
    },
    {
      input: 'robot = [-1,1], factory = [[-2,1],[2,1]]',
      output: '2',
      explanation: 'Assign -1→-2 (cost 1), 1→2 (cost 1). Total=2.',
    },
  ],
  hints: [
    'Sort both robot[] and factory[] by position. Non-crossing assignments are always optimal.',
    'Flatten factory: factory at pos with limit l becomes l individual slots at the same pos.',
    'dp[i][j] = min cost for first i robots using first j slots. Answer is dp[n][m].',
  ],
  functionName: 'minimumTotalDistance',
  params: ['robot', 'factory'],
  starterCode: {
    javascript: 'function minimumTotalDistance(robot, factory) {\n\n}\n',
    python: 'def minimumTotalDistance(robot: list, factory: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[0, 4, 6], [[-2, 2], [2, 2]]], expected: 8 },
    { args: [[-1, 1], [[-2, 1], [2, 1]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[0], [[5, 1]]], expected: 5 },
    { args: [[2, 3, 6], [[0, 1], [3, 1], [10, 1]]], expected: 6 },
    { args: [[1, 2, 3, 4, 5], [[3, 3], [6, 3]]], expected: 6 },
    { args: [[2, 3, 9, 11, 5], [[-1, 3], [10, 3]]], expected: 14 },
  ],
};
