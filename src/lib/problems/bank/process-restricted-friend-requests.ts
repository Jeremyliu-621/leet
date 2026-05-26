import type { Problem } from '../types';

export const problem: Problem = {
  id: 'process-restricted-friend-requests',
  title: 'Process Restricted Friend Requests',
  difficulty: 'medium',
  tags: ['union-find', 'graph'],
  description: `You are given an integer \`n\` indicating the number of people in a network. Each person is labeled from \`0\` to \`n - 1\`.

You are also given a **0-indexed** 2D integer array \`restrictions\`, where \`restrictions[k] = [x_k, y_k]\` means that person \`x_k\` and person \`y_k\` **cannot** become friends, either **directly** or **indirectly** through other people.

You are also given a **0-indexed** 2D integer array \`requests\`, where \`requests[j] = [u_j, v_j]\` is a friend request between person \`u_j\` and person \`v_j\`.

A friend request is **successful** if \`u_j\` and \`v_j\` can be **friends** (i.e., they will not violate any restriction). Each friend request is processed in the given order. A request between two friends is always a success.

Return a **boolean array** \`result\` where each \`result[j]\` is \`true\` if the \`j\`-th friend request is **successful** or \`false\` if it is not.

**Note:** If a request is unsuccessful, the corresponding pair do NOT become friends.`,
  constraints: [
    '2 <= n <= 1000',
    '0 <= restrictions.length <= 1000',
    'restrictions[i].length == 2',
    '0 <= x_i, y_i <= n - 1',
    'x_i != y_i',
    '1 <= requests.length <= 1000',
    'requests[j].length == 2',
    '0 <= u_j, v_j <= n - 1',
    'u_j != v_j',
  ],
  examples: [
    {
      input: 'n = 3, restrictions = [[0,1]], requests = [[0,2],[2,1]]',
      output: '[true,false]',
      explanation: 'Request [0,2]: merge groups {0} and {2}. No restriction violated. Success. Request [2,1]: would merge {0,2} and {1}. But restriction [0,1] says 0 and 1 cannot be in same group. Fail.',
    },
    {
      input: 'n = 3, restrictions = [[0,1]], requests = [[1,2],[0,2]]',
      output: '[true,false]',
      explanation: 'Request [1,2]: merge {1} and {2}. No violation. Success. Request [0,2]: would merge {0} and {1,2}. Restriction [0,1]: roots of 0 and 1 would be same. Fail.',
    },
    {
      input: 'n = 5, restrictions = [[0,1],[1,2],[2,3]], requests = [[0,4],[1,2],[3,1],[3,4]]',
      output: '[true,false,true,false]',
    },
  ],
  hints: [
    'Use Union-Find. For each request (u, v): find roots of u and v. Before merging, check all restrictions — if any restriction (x, y) has find(x) and find(y) in the same component after the proposed merge, reject.',
    'To check if merging u and v violates restrictions: let ru = find(u), rv = find(v). For each restriction (x, y): if (find(x) == ru and find(y) == rv) or (find(x) == rv and find(y) == ru), the merge would unite them → reject.',
    'If no restriction is violated, perform the union. Otherwise, do NOT union (request fails). Repeat for all requests.',
  ],
  functionName: 'friendRequests',
  params: ['n', 'restrictions', 'requests'],
  starterCode: {
    javascript: 'function friendRequests(n, restrictions, requests) {\n  \n}\n',
    python: 'def friendRequests(n, restrictions, requests):\n    pass\n',
  },
  visibleTests: [
    { args: [3, [[0,1]], [[0,2],[2,1]]], expected: [true, false] },
    { args: [3, [[0,1]], [[1,2],[0,2]]], expected: [true, false] },
    { args: [5, [[0,1],[1,2],[2,3]], [[0,4],[1,2],[3,1],[3,4]]], expected: [true,false,true,false] },
  ],
  hiddenTests: [
    { args: [2, [[0,1]], [[0,1]]], expected: [false] },
    { args: [2, [], [[0,1]]], expected: [true] },
    { args: [4, [[0,3]], [[0,1],[1,2],[2,3]]], expected: [true,true,false] },
    { args: [5, [[0,4]], [[0,1],[1,2],[2,3],[3,4]]], expected: [true,true,true,false] },
  ],
};
