import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-chairs-in-a-waiting-room',
  title: 'Minimum Number of Chairs in a Waiting Room',
  difficulty: 'easy',
  tags: ['strings', 'simulation'],
  description: `You are given a string \`s\` consisting of the characters \`'E'\` and \`'L'\` where \`'E'\` denotes a person **entering** the waiting room and \`'L'\` denotes a person **leaving**.

Return the **minimum** number of chairs needed so that every person who enters the room can sit down.`,
  constraints: [
    '1 <= s.length <= 50',
    "s[i] is either 'E' or 'L'.",
  ],
  examples: [
    {
      input: 's = "EELL"',
      output: '2',
      explanation: 'E→1, E→2, L→1, L→0. Maximum concurrent occupancy is 2.',
    },
    {
      input: 's = "ELEL"',
      output: '1',
      explanation: 'E→1, L→0, E→1, L→0. At most 1 person is seated at a time.',
    },
    {
      input: 's = "EEELLL"',
      output: '3',
      explanation: 'E→1, E→2, E→3, L→2, L→1, L→0. Maximum concurrent occupancy is 3.',
    },
  ],
  hints: [
    'Simulate the waiting room: maintain a running count of people currently seated.',
    'Increment the count on \'E\' (enter), decrement on \'L\' (leave).',
    'The answer is the maximum count seen at any point during the simulation.',
  ],
  functionName: 'minimumChairs',
  params: ['s'],
  starterCode: {
    javascript: `function minimumChairs(s) {

}`,
    typescript: "function minimumChairs(s: string): number {\n\n}",

    python: `def minimumChairs(s):
    pass`,
  },
  visibleTests: [
    { args: ['EELL'], expected: 2 },
    { args: ['ELEL'], expected: 1 },
    { args: ['EEELLL'], expected: 3 },
  ],
  hiddenTests: [
    { args: ['EL'], expected: 1 },
    { args: ['ELEELL'], expected: 2 },
    { args: ['ELELEL'], expected: 1 },
    { args: ['EEEELLL'], expected: 4 },
    { args: ['ELEELEELLL'], expected: 3 },
    { args: ['EEEL'], expected: 3 },
  ],
};
