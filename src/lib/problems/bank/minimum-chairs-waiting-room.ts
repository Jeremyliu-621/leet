import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-chairs-waiting-room',
  title: 'Minimum Number of Chairs in a Waiting Room',
  difficulty: 'easy',
  tags: ['simulation', 'strings'],
  description: `You are given a string \`s\` consisting of characters \`'E'\` and \`'L'\`:
- \`'E'\` means a person **enters** the waiting room.
- \`'L'\` means a person **leaves** the waiting room.

An initial count of people in the waiting room is 0.

Return the **minimum number of chairs** needed in the waiting room such that a chair is available for every person who enters.`,
  constraints: [
    '1 <= s.length <= 50',
    's consists only of \'E\' and \'L\'.',
    'The number of \'E\'s is greater than or equal to the number of \'L\'s.',
  ],
  examples: [
    {
      input: 's = "EEEEEEE"',
      output: '7',
      explanation: 'All 7 people enter and none leave, so 7 chairs are needed.',
    },
    {
      input: 's = "ELELEEL"',
      output: '2',
      explanation: 'Trace: E(1), L(0), E(1), L(0), E(1), E(2), L(1). Max occupancy = 2.',
    },
    {
      input: 's = "ELEELEELLL"',
      output: '3',
      explanation: 'Track current occupancy, record the maximum at any point.',
    },
  ],
  hints: [
    'Simulate: maintain a counter for current occupancy (increment on E, decrement on L).',
    'Track the maximum value the counter reaches during the simulation.',
    'The answer is the maximum occupancy ever reached.',
  ],
  functionName: 'minimumChairs',
  params: ['s'],
  starterCode: {
    javascript: 'function minimumChairs(s) {\n  // your code here\n}\n',
    python: 'def minimumChairs(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['EEEEEEE'], expected: 7 },
    { args: ['ELELEEL'], expected: 2 },
    { args: ['ELEELEELLL'], expected: 3 },
  ],
  hiddenTests: [
    { args: ['E'], expected: 1 },
    { args: ['EL'], expected: 1 },
    { args: ['EELL'], expected: 2 },
    { args: ['EEEEELLL'], expected: 5 },
    { args: ['ELELELEL'], expected: 1 },
    { args: ['EEELELL'], expected: 3 },
  ],
};
