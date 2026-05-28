import type { Problem } from '../types';

export const problem: Problem = {
  id: 'open-lock',
  title: 'Open the Lock',
  difficulty: 'medium',
  tags: ['graph', 'arrays'],
  description: `You have a lock with 4 circular wheels, each showing digits \`0–9\`. The initial state is \`"0000"\`. Each move, you can turn any wheel one slot forward or backward (cyclically: \`'9'\` wraps to \`'0'\` and vice versa).

Given a list of \`deadends\` (states where the lock is stuck) and a \`target\` state, return the **minimum number of turns** to reach the target from \`"0000"\`, or \`-1\` if it is impossible.

If \`"0000"\` itself is in deadends, return \`-1\`.`,
  constraints: [
    '1 <= deadends.length <= 500',
    'deadends[i].length == 4',
    'target.length == 4',
    'target will not be in the range of deadends.',
    'target != "0000"',
  ],
  examples: [
    {
      input: 'deadends = ["0201","0101","0102","1212","2002"], target = "0202"',
      output: '6',
      explanation: 'Path: 0000→0100→0200→0201→0202? No, 0201 is a deadend. Optimal: 0000→0100→0200→0202 is 3 but 0201 blocks. 0000→0100→0101 blocked. Path via 9999...',
    },
    {
      input: 'deadends = ["8888"], target = "0009"',
      output: '1',
      explanation: 'Turn the last wheel backward once: 0000→0009.',
    },
    {
      input: 'deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"',
      output: '-1',
      explanation: 'All neighbors of 8888 are deadends; it cannot be reached.',
    },
  ],
  hints: [
    'Use BFS from "0000". Each state has 8 neighbors (4 wheels × 2 directions).',
    'Mark deadends and visited states. Return the BFS level when target is reached.',
    'Each digit d can go to (d+1)%10 or (d+9)%10 in one move.',
  ],
  functionName: 'openLock',
  params: ['deadends', 'target'],
  starterCode: {
    javascript: `function openLock(deadends, target) {
  // deadends: string[], target: string
  // Return minimum turns to reach target from "0000", or -1 if impossible
}`,
    typescript: "function openLock(deadends: string[], target: string): number {\n  // deadends: string[], target: string\n  // Return minimum turns to reach target from \"0000\", or -1 if impossible\n}",

    python: `def openLock(deadends, target: str) -> int:
    # Your code here
    pass`,
  },
  visibleTests: [
    { args: [['0201', '0101', '0102', '1212', '2002'], '0202'], expected: 6 },
    { args: [['8888'], '0009'], expected: 1 },
    { args: [['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'], '8888'], expected: -1 },
  ],
  hiddenTests: [
    { args: [['0000'], '8888'], expected: -1 },
    { args: [['1111'], '0001'], expected: 1 },
    { args: [['0001'], '0002'], expected: 4 },
    { args: [['9999'], '5555'], expected: 20 },
    { args: [['1234'], '2345'], expected: 14 },
    { args: [['0100', '0010', '0001', '1000'], '5555'], expected: 20 },
  ],
};
