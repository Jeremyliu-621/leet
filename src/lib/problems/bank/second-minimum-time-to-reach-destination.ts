import type { Problem } from '../types';

export const problem: Problem = {
  id: 'second-minimum-time-to-reach-destination',
  title: 'Second Minimum Time to Reach Destination',
  difficulty: 'medium',
  tags: ['graph'],
  description: `A city is connected by \`n\` bidirectional edges. Each node is labeled from \`1\` to \`n\`.

Traffic lights at each intersection change every \`change\` seconds: green for seconds [0, change), red for [change, 2*change), green for [2*change, 3*change), etc.

You **must wait** at a node if you arrive during a **red** light phase. You may leave when the next green phase begins. You can always start leaving from a node during a green phase.

It takes \`time\` seconds to travel any edge. You start at node \`1\` at second \`0\`.

Return the **second minimum time** to reach node \`n\` (there must be a path, and the second minimum must be strictly greater than the minimum).

**Note:** The second minimum time is guaranteed to exist.`,
  constraints: [
    '2 <= n <= 10^4',
    'n - 1 <= edges.length <= min(n*(n-1)/2, 10^4)',
    'edges[i].length == 2, edges[i][0] != edges[i][1]',
    'No duplicate edges.',
    '1 <= time, change <= 10^3',
  ],
  examples: [
    {
      input: 'n = 5, edges = [[1,2],[1,3],[1,4],[3,4],[4,5]], time = 3, change = 5',
      output: '13',
      explanation: 'Minimum path: 1→4→5 in 6 seconds. Second minimum: 1→3→4→5. At node 4, we arrive at t=6. Red phase is [5,10), so wait until t=10, then leave. Arrive at 5 at t=13.',
    },
    {
      input: 'n = 2, edges = [[1,2]], time = 3, change = 2',
      output: '11',
      explanation: 'Min path: 1→2 takes 3s. To get second minimum, go back and forth: 1→2→1→2. Each edge takes 3s; add waits at red lights. Total = 11.',
    },
  ],
  functionName: 'secondMinimum',
  params: ['n', 'edges', 'time', 'change'],
  starterCode: {
    javascript: `function secondMinimum(n, edges, time, change) {
  // Build adjacency list, then BFS tracking the two smallest arrival times
  // at each node. Apply traffic-light waits at each departure.

}`,
    typescript: "function secondMinimum(n: number, edges: number[][], time: number, change: number): number {\n  // Build adjacency list, then BFS tracking the two smallest arrival times\n  // at each node. Apply traffic-light waits at each departure.\n\n}",

    python: `def secondMinimum(n: int, edges: list, time: int, change: int) -> int:
    # Build adjacency list, then BFS tracking the two smallest arrival times
    # at each node. Apply traffic-light waits at each departure.
    pass
`,
  },
  visibleTests: [
    { args: [5, [[1,2],[1,3],[1,4],[3,4],[4,5]], 3, 5], expected: 13 },
    { args: [2, [[1,2]], 3, 2], expected: 11 },
  ],
  hiddenTests: [
    { args: [2, [[1,2]], 1, 1], expected: 5 },
    { args: [3, [[1,2],[2,3]], 2, 4], expected: 12 },
    { args: [4, [[1,2],[1,3],[2,4],[3,4]], 3, 5], expected: 16 },
    { args: [3, [[1,2],[1,3],[2,3]], 1, 10], expected: 2 },
  ],
  hints: [
    'Use BFS tracking, for each node, the two smallest times at which you can arrive there (dist1 and dist2). A node can be reached with a second-minimum time if you revisit it through a longer path.',
    'When leaving a node at time `t`, if you\'re in a red phase (Math.floor(t/change) is odd), wait until the next green: `t = (Math.floor(t/change)+1) * change`. Then travel: `t += time`.',
    'Keep a queue of (node, arrival_time). For each node, only enqueue a state if it\'s the first or second distinct arrival time. Once you reach node n for the second time, return that time.',
  ],
};
