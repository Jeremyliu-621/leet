import type { Problem } from '../types';

export const problem: Problem = {
  id: 'online-election',
  title: 'Online Election',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `You are given two integer arrays \`persons\` and \`times\`. In the election, the \`i\`-th vote was cast for \`persons[i]\` at time \`times[i]\`.

For each query at time \`t\`, find the person that was **leading the election at time t** (the person with the most votes at or before time t). If there is a tie, the **most recent voter** wins.

Return an array of answers where \`answers[j]\` is the leader at time \`queries[j]\`.

**Preprocessing:** Build a \`leaders\` array where \`leaders[i]\` is the leader after the \`i\`-th vote. For each query, binary-search \`times\` to find the largest index ≤ t, then look up \`leaders\`.`,
  constraints: [
    '1 <= persons.length <= 5000',
    'times.length == persons.length',
    '0 <= persons[i] < persons.length',
    'times is strictly increasing',
    'times[persons.length - 1] <= 10^9',
    '0 <= queries[j] <= 10^9',
    'queries[j] is at or after the first vote time',
  ],
  examples: [
    {
      input: 'persons = [0,1,1,0,0,1,0], times = [0,5,10,15,20,25,30], queries = [3,12,25,15,24,8]',
      output: '[0,1,1,0,0,1]',
      explanation: 'At time 3: only person 0 has voted (1 vote), leader = 0. At time 12: votes are 0→1, 1→2, leader = 1.',
    },
  ],
  hints: [
    'Pre-compute the leader after each vote. Maintain a vote count map. After each vote, if the new vote ties or exceeds the current leader, update the leader (ties go to the most recent voter, which is automatic if you update on tie).',
    'Store the leaders array parallel to times. For each query, binary-search times to find the rightmost time ≤ query time.',
    'Return leaders[bisect_right(times, t) - 1] for each query.',
  ],
  functionName: 'topVotedCandidate',
  params: ['persons', 'times', 'queries'],
  starterCode: {
    javascript:
      'function topVotedCandidate(persons, times, queries) {\n\n}\n',
    python:
      'def topVotedCandidate(persons: list, times: list, queries: list) -> list:\n    pass\n',
  },
  visibleTests: [
    {
      args: [[0,1,1,0,0,1,0], [0,5,10,15,20,25,30], [3,12,25,15,24,8]],
      expected: [0,1,1,0,0,1],
    },
  ],
  hiddenTests: [
    { args: [[0], [0], [0]], expected: [0] },
    { args: [[0,0,0,1,1], [0,1,2,3,4], [0,1,2,3,4]], expected: [0,0,0,0,0] },
    { args: [[0,1,0,1,1], [0,1,2,3,4], [0,2,4]], expected: [0,0,1] },
    { args: [[1,0,0,1,1,0,0], [0,5,10,15,20,25,30], [5,10,20]], expected: [0,0,1] },
  ],
};
