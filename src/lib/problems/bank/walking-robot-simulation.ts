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
    javascript: `function robotSim(commands, obstacles) {
  const obs = new Set(obstacles.map(o => o[0]+','+o[1]));
  const dirs = [[0,1],[1,0],[0,-1],[-1,0]];
  let x = 0, y = 0, d = 0, best = 0;
  for (const cmd of commands) {
    if (cmd === -2) d = (d + 3) % 4;
    else if (cmd === -1) d = (d + 1) % 4;
    else { for (let s = 0; s < cmd; s++) {
      const nx = x + dirs[d][0], ny = y + dirs[d][1];
      if (obs.has(nx+','+ny)) break;
      x = nx; y = ny; best = Math.max(best, x*x+y*y);
    }}
  }
  return best;
}`,
    typescript: `function robotSim(commands: number[], obstacles: unknown[]): number {
  const obs = new Set((obstacles as number[][]).map(o => o[0]+','+o[1]));
  const dirs: [number,number][] = [[0,1],[1,0],[0,-1],[-1,0]];
  let x = 0, y = 0, d = 0, best = 0;
  for (const cmd of commands) {
    if (cmd === -2) d = (d + 3) % 4;
    else if (cmd === -1) d = (d + 1) % 4;
    else { for (let s = 0; s < cmd; s++) {
      const nx = x + dirs[d]![0]!, ny = y + dirs[d]![1]!;
      if (obs.has(nx+','+ny)) break;
      x = nx; y = ny; best = Math.max(best, x*x+y*y);
    }}
  }
  return best;
}`,
    python: `def robotSim(commands, obstacles):
    if hasattr(commands, 'to_py'): commands = commands.to_py()
    commands = [int(x) for x in commands]
    if hasattr(obstacles, 'to_py'): obstacles = obstacles.to_py()
    obs = set()
    for o in obstacles:
        if hasattr(o, 'to_py'): o = o.to_py()
        obs.add((int(o[0]), int(o[1])))
    dirs = [(0,1),(1,0),(0,-1),(-1,0)]
    x = y = d = 0; best = 0
    for cmd in commands:
        if cmd == -2: d = (d+3)%4
        elif cmd == -1: d = (d+1)%4
        else:
            for _ in range(cmd):
                nx, ny = x+dirs[d][0], y+dirs[d][1]
                if (nx, ny) in obs: break
                x, y = nx, ny; best = max(best, x*x+y*y)
    return best`,
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
