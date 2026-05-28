import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-achievable-transfer-requests',
  title: 'Maximum Number of Achievable Transfer Requests',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `There are \`n\` buildings and \`requests[i] = [from_i, to_i]\` representing a transfer request. A set of requests is achievable if, for each building, the net change in occupants (transfers in minus transfers out) is zero. Return the maximum number of achievable requests.

**Bitmask enumeration:** Enumerate all \`2^m\` subsets of requests (\`m ≤ 16\`), check if net changes balance to zero for each building.`,
  constraints: [
    '1 <= n <= 20',
    '1 <= requests.length <= 16',
    '0 <= from_i, to_i < n',
  ],
  examples: [
    {
      input: 'n = 5, requests = [[0,1],[1,0],[0,1],[1,2],[2,0],[3,4]]',
      output: '5',
    },
    {
      input: 'n = 3, requests = [[0,0],[1,2],[2,1]]',
      output: '3',
    },
    {
      input: 'n = 4, requests = [[0,3],[3,1],[1,2],[2,0]]',
      output: '4',
    },
  ],
  hints: [
    'Enumerate all 2^m subsets of requests (m ≤ 16).',
    'For each subset, compute the net change for each building: balance[from] -= 1, balance[to] += 1.',
    'If all balances are zero, update the maximum count of selected requests.',
  ],
  functionName: 'maximumRequests',
  params: ['n', 'requests'],
  starterCode: {
    javascript: 'function maximumRequests(n, requests) {\n\n}\n',
    typescript: "function maximumRequests(n: number, requests: number[][]): number {\n\n}",

    python: 'def maximumRequests(n: int, requests: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [5, [[0, 1], [1, 0], [0, 1], [1, 2], [2, 0], [3, 4]]], expected: 5 },
    { args: [3, [[0, 0], [1, 2], [2, 1]]], expected: 3 },
    { args: [4, [[0, 3], [3, 1], [1, 2], [2, 0]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [1, [[0, 0]]], expected: 1 },
    { args: [2, [[0, 1], [1, 0], [0, 1]]], expected: 2 },
    { args: [3, [[0, 1], [1, 2], [2, 0], [0, 2]]], expected: 3 },
  ],
};
