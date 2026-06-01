import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-employees-to-be-invited',
  title: 'Maximum Employees to Be Invited to a Meeting',
  difficulty: 'hard',
  tags: ['graph'],
  description: `A company is organizing a meeting and has a list of \`n\` employees, waiting to be invited. They have arranged a **circular** table with \`n\` seats.

The employees are numbered from \`0\` to \`n - 1\`. Each employee has a **favorite** person, given by the array \`favorite\` where \`favorite[i]\` denotes the favorite person of the \`i\`-th employee. The invitation is extended to a set of employees only if each invited employee can sit next to their favorite person at the table.

Return the **maximum** number of employees that can be invited to the meeting.`,
  constraints: [
    'n == favorite.length',
    '2 <= n <= 10^5',
    '0 <= favorite[i] <= n - 1',
    'favorite[i] != i',
  ],
  examples: [
    {
      input: 'favorite = [2,2,1,2]',
      output: '3',
      explanation: 'Invite employees 1, 2, 3. Employee 1\'s favorite is 2, employee 2\'s favorite is 1, employee 3\'s favorite is 2. Seat them at the table: 3, 1, 2. Length-2 cycle 1↔2 extended by chain [3→2].',
    },
    {
      input: 'favorite = [1,2,0]',
      output: '3',
      explanation: 'Employees form a length-3 cycle: 0→1→2→0. All three can be invited.',
    },
  ],
  hints: [
    'Model the favorites as a functional graph where each node has out-degree 1.',
    'Cycles of length ≥ 3 can fill a table on their own — track the largest such cycle.',
    'For cycles of length 2 (mutual pairs), add the longest incoming chain to each member. All such extended pairs can share one table — sum their contributions.',
    'Answer = max(longest cycle ≥ 3, sum of all extended 2-cycles).',
  ],
  functionName: 'maximumInvitations',
  params: ['favorite'],
  starterCode: {
    javascript: 'function maximumInvitations(favorite) {\n  \n}\n',
    typescript: 'function maximumInvitations(favorite: number[]): number {\n  \n}',
    python: 'def maximumInvitations(favorite):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 2, 1, 2]], expected: 3 },
    { args: [[1, 2, 0]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[3, 0, 1, 4, 1]], expected: 4 },
    { args: [[1, 0]], expected: 2 },
    { args: [[1, 0, 3, 2]], expected: 4 },
    { args: [[2, 0, 1]], expected: 3 },
  ],
};
