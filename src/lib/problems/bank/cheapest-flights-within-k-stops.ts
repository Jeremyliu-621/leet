import type { Problem } from '../types';

export const problem: Problem = {
  id: 'cheapest-flights-within-k-stops',
  title: 'Cheapest Flights Within K Stops',
  difficulty: 'medium',
  tags: ['graph'],
  description: `There are \`n\` cities connected by some number of flights. You are given an array \`flights\` where \`flights[i] = [fromi, toi, pricei]\`, and three integers \`src\`, \`dst\`, and \`k\`.\n\nReturn the **cheapest price** from \`src\` to \`dst\` with **at most \`k\` stops**. If there is no such route, return \`-1\`.`,
  constraints: [
    '1 <= n <= 100',
    '0 <= flights.length <= (n * (n - 1) / 2)',
    'flights[i].length == 3',
    '0 <= fromi, toi < n',
    'fromi != toi',
    '1 <= pricei <= 10^4',
    'There will not be any multiple flights between two cities.',
    '0 <= src, dst, k < n',
    'src != dst',
  ],
  examples: [
    {
      input: 'n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1',
      output: '700',
      explanation: 'The optimal path is 0 → 1 → 3 with cost 100 + 600 = 700, using 1 stop.',
    },
    {
      input: 'n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1',
      output: '200',
      explanation: 'The optimal path is 0 → 1 → 2 with cost 100 + 100 = 200, using 1 stop.',
    },
  ],
  hints: [
    'Use Bellman-Ford with at most k+1 relaxation rounds. Each round represents one more edge (stop) on the path.',
    'Initialize `prices[src] = 0`, all others `Infinity`. In each of `k+1` rounds, relax edges using the **previous round\'s** costs to avoid counting the same edge twice.',
    'Key: use a copy of the prices array before each round. After k+1 rounds, return `prices[dst]` or -1.',
  ],
  functionName: 'findCheapestPrice',
  params: ['n', 'flights', 'src', 'dst', 'k'],
  starterCode: {
    javascript: `function findCheapestPrice(n, flights, src, dst, k) {\n  // your code here\n}\n`,
    typescript: "function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {\n  // your code here\n}",

    python: `def findCheapestPrice(n, flights, src, dst, k):\n    # your code here\n    pass\n`,
  },
  visibleTests: [
    {
      args: [4, [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], 0, 3, 1],
      expected: 700,
    },
    {
      args: [3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1],
      expected: 200,
    },
    {
      args: [3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 0],
      expected: 500,
    },
  ],
  hiddenTests: [
    {
      args: [2, [[0,1,100]], 0, 1, 0],
      expected: 100,
    },
    {
      args: [2, [[0,1,100]], 0, 1, 1],
      expected: 100,
    },
    {
      args: [3, [[0,1,200],[0,2,100],[2,1,50]], 0, 1, 0],
      expected: 200,
    },
    {
      args: [3, [[0,1,200],[0,2,100],[2,1,50]], 0, 1, 1],
      expected: 150,
    },
    {
      args: [4, [[0,1,1],[0,2,5],[1,3,1],[2,3,1]], 0, 3, 1],
      expected: 2,
    },
    {
      args: [3, [[0,1,100],[1,2,100]], 0, 2, 0],
      expected: -1,
    },
  ],
};
