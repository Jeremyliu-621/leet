import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-employees-invited-to-meeting',
  title: 'Maximum Employees to Be Invited to a Meeting',
  difficulty: 'hard',
  tags: ['graph'],
  description: `A company is organizing a meeting and has a list of \`n\` employees, numbered from \`0\` to \`n - 1\`. You are given a **0-indexed** integer array \`employees\` where \`employees[i]\` is the favorite person of the \`i\`-th employee.

The meeting will be held around a **round table**, and employees will sit in a circle. An employee will attend the meeting **only if** they can sit next to their favorite person.

Return the **maximum number** of employees that can be invited to the meeting.`,
  constraints: [
    '2 <= n <= 10^5',
    '0 <= employees[i] <= n - 1',
    'employees[i] != i',
  ],
  examples: [
    {
      input: 'employees = [2,2,1,2]',
      output: '3',
      explanation: 'Invite employees 1, 2, and 0. Employee 0 sits next to employee 2 (favorite). Employee 2 sits next to employee 1 (favorite). Employee 1 sits next to employee 2 (favorite). Employee 3 cannot join without displacing someone.',
    },
    {
      input: 'employees = [1,2,0]',
      output: '3',
      explanation: 'All three can be invited: 0→1→2→0 form a cycle of length 3. Every person sits next to their favorite.',
    },
    {
      input: 'employees = [3,0,1,4,1]',
      output: '4',
      explanation: 'Employees 1, 0, 3, 4 form a cycle of length 4. Employee 2 cannot be added.',
    },
  ],
  hints: [
    'Model as a functional graph: each node has exactly one outgoing edge (to their favorite). Cycles and chains into cycles determine the answer.',
    'Use topological sort (peel leaves) to find chain depths. Remaining nodes with non-zero in-degree are in cycles.',
    'For cycles of length ≥ 3: the whole cycle can sit together (max single cycle). For cycles of length 2 (mutual favorites): each pair + their incoming chains can sit together, and multiple such pairs can combine. The answer is max(biggest cycle ≥ 3, sum of all pair contributions).',
  ],
  functionName: 'maximumInvitations',
  params: ['employees'],
  starterCode: {
    javascript: `function maximumInvitations(employees) {
  const n = employees.length;
  const inDeg = new Array(n).fill(0);
  for (let i = 0; i < n; i++) inDeg[employees[i]]++;
  const depth = new Array(n).fill(1);
  const queue = [];
  for (let i = 0; i < n; i++) if (inDeg[i] === 0) queue.push(i);
  while (queue.length) {
    const v = queue.shift();
    const u = employees[v];
    depth[u] = Math.max(depth[u], depth[v] + 1);
    if (--inDeg[u] === 0) queue.push(u);
  }
  let maxCycle = 0, pairSum = 0;
  const visited = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (inDeg[i] === 0 || visited[i]) continue;
    let len = 0, cur = i;
    while (!visited[cur]) { visited[cur] = true; cur = employees[cur]; len++; }
    if (len === 2) pairSum += depth[i] + depth[employees[i]];
    else maxCycle = Math.max(maxCycle, len);
  }
  return Math.max(maxCycle, pairSum);
}`,
    typescript: `function maximumInvitations(employees: number[]): number {
  const n = employees.length;
  const inDeg = new Array(n).fill(0);
  for (let i = 0; i < n; i++) inDeg[employees[i]!]++;
  const depth = new Array(n).fill(1);
  const queue: number[] = [];
  for (let i = 0; i < n; i++) if (inDeg[i] === 0) queue.push(i);
  while (queue.length) {
    const v = queue.shift()!;
    const u = employees[v]!;
    depth[u] = Math.max(depth[u]!, depth[v]! + 1);
    if (--inDeg[u]! === 0) queue.push(u);
  }
  let maxCycle = 0, pairSum = 0;
  const visited = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (inDeg[i]! === 0 || visited[i]) continue;
    let len = 0, cur = i;
    while (!visited[cur]) { visited[cur] = true; cur = employees[cur]!; len++; }
    if (len === 2) pairSum += depth[i]! + depth[employees[i]!]!;
    else maxCycle = Math.max(maxCycle, len);
  }
  return Math.max(maxCycle, pairSum);
}`,
    python: `def maximumInvitations(employees):
    from collections import deque
    n = len(employees)
    in_deg = [0] * n
    for x in employees:
        in_deg[x] += 1
    depth = [1] * n
    q = deque(i for i in range(n) if in_deg[i] == 0)
    while q:
        v = q.popleft()
        u = employees[v]
        depth[u] = max(depth[u], depth[v] + 1)
        in_deg[u] -= 1
        if in_deg[u] == 0:
            q.append(u)
    max_cycle, pair_sum = 0, 0
    visited = [False] * n
    for i in range(n):
        if in_deg[i] == 0 or visited[i]:
            continue
        length, cur = 0, i
        while not visited[cur]:
            visited[cur] = True
            cur = employees[cur]
            length += 1
        if length == 2:
            pair_sum += depth[i] + depth[employees[i]]
        else:
            max_cycle = max(max_cycle, length)
    return max(max_cycle, pair_sum)`,
  },
  visibleTests: [
    { args: [[2, 2, 1, 2]], expected: 3 },
    { args: [[1, 2, 0]], expected: 3 },
    { args: [[3, 0, 1, 4, 1]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 0]], expected: 2 },
    { args: [[1, 0, 0]], expected: 3 },
    { args: [[1, 0, 3, 2]], expected: 4 },
    { args: [[2, 2, 1]], expected: 3 },
    { args: [[1, 0, 3, 2, 1]], expected: 5 },
    { args: [[1, 2, 0, 2]], expected: 3 },
    { args: [[1, 2, 0, 0]], expected: 3 },
    { args: [[1, 0, 4, 4, 3]], expected: 5 },
  ],
};
