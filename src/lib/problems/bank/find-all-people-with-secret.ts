import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-people-with-secret',
  title: 'Find All People With Secret',
  difficulty: 'hard',
  tags: ['graph'],
  description: `You are given an integer \`n\` indicating there are \`n\` people numbered from \`0\` to \`n - 1\`. You are also given a 0-indexed 2D integer array \`meetings\` where \`meetings[i] = [x_i, y_i, time_i]\` indicates that person \`x_i\` and person \`y_i\` have a meeting at \`time_i\`. A person may attend **multiple meetings** at the same time. Finally, you are given an integer \`firstPerson\`.

Person \`0\` has a **secret** and initially shares the secret with a person \`firstPerson\` at time \`0\`. This secret is then shared every time a meeting takes place with a person that has the secret. Formally, for every meeting, if a person \`x_i\` has the secret at \`time_i\`, then they will share the secret with person \`y_i\`, and vice versa.

Meetings are not necessarily in chronological order. Return a list of all the people that have the secret after **all** the meetings have taken place. You may return the answer in **any order**.`,
  constraints: [
    '2 <= n <= 10^5',
    '1 <= meetings.length <= 10^5',
    'meetings[i].length == 3',
    '0 <= x_i, y_i <= n - 1',
    'x_i != y_i',
    '1 <= time_i <= 10^5',
    '1 <= firstPerson <= n - 1',
  ],
  examples: [
    {
      input: 'n = 6, meetings = [[1,2,5],[2,3,8],[1,5,10]], firstPerson = 1',
      output: '[0,1,2,3,5]',
      explanation: 'Person 0 and 1 know at t=0. At t=5, person 2 learns. At t=8, person 3 learns. At t=10, person 5 learns.',
    },
    {
      input: 'n = 4, meetings = [[3,1,3],[1,2,2],[0,3,3]], firstPerson = 3',
      output: '[0,1,3]',
    },
    {
      input: 'n = 5, meetings = [[3,4,2],[1,2,1],[2,3,1]], firstPerson = 1',
      output: '[0,1,2,3,4]',
    },
  ],
  hints: [
    'Sort meetings by time. Process meetings in groups of equal timestamp.',
    'Use Union-Find: union all pairs meeting at the same time. After processing a time group, anyone not connected to person 0 forgets the secret (reset their parent).',
    'At the end, return all people whose root is the same as person 0.',
  ],
  functionName: 'findAllPeople',
  params: ['n', 'meetings', 'firstPerson'],
  starterCode: {
    javascript: 'function findAllPeople(n, meetings, firstPerson) {\n\n}\n',
    python: 'def findAllPeople(n, meetings, firstPerson):\n    pass\n',
  },
  visibleTests: [
    { args: [6, [[1,2,5],[2,3,8],[1,5,10]], 1], expected: [0,1,2,3,5] },
    { args: [4, [[3,1,3],[1,2,2],[0,3,3]], 3], expected: [0,1,3] },
    { args: [5, [[3,4,2],[1,2,1],[2,3,1]], 1], expected: [0,1,2,3,4] },
  ],
  hiddenTests: [
    { args: [2, [[0,1,1]], 1], expected: [0,1] },
    { args: [4, [[2,3,1]], 1], expected: [0,1] },
    { args: [4, [[2,3,1],[3,1,1],[2,1,1]], 2], expected: [0,1,2,3] },
    { args: [5, [[3,4,2]], 3], expected: [0,3,4] },
  ],
};
