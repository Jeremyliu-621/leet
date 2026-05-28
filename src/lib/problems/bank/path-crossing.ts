import type { Problem } from '../types';

export const problem: Problem = {
  id: 'path-crossing',
  title: 'Path Crossing',
  difficulty: 'easy',
  tags: ['hash-map'],
  description: `Given a string \`path\`, where \`path[i] = 'N'\`, \`'S'\`, \`'E'\` or \`'W'\`, each representing moving one unit north, south, east, or west, respectively. You start at the origin \`(0, 0)\`.

Return \`true\` if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return \`false\` otherwise.`,
  constraints: [
    '1 <= path.length <= 10^4',
    'path[i] is either \'N\', \'S\', \'E\', or \'W\'',
  ],
  examples: [
    { input: 'path = "NES"', output: 'false', explanation: 'The path visits: (0,0)→(0,1)→(1,1)→(1,0). No crossing.' },
    { input: 'path = "NESWW"', output: 'true', explanation: 'The path visits (0,0) twice.' },
  ],
  hints: [
    'Keep a set of all visited coordinates. Track (x, y) as you follow the path.',
    'After each step, check if the new (x, y) is already in the visited set. If so, return true.',
    'Include the starting point (0, 0) in the visited set before processing.',
  ],
  functionName: 'isPathCrossing',
  params: ['path'],
  starterCode: {
    javascript: 'function isPathCrossing(path) {\n  \n}\n',
    python: 'def isPathCrossing(path):\n    pass\n',
  },
  visibleTests: [
    { args: ['NES'], expected: false },
    { args: ['NESWW'], expected: true },
    { args: ['N'], expected: false },
  ],
  hiddenTests: [
    { args: ['NNSS'], expected: true },
    { args: ['NESW'], expected: true },
    { args: ['NSNS'], expected: true },
    { args: ['NNN'], expected: false },
  ],
};
