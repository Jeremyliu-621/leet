import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-refueling-stops',
  title: 'Minimum Number of Refueling Stops',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'heap'],
  description: `A car travels from a starting position to a destination which is \`target\` miles east of the starting position.

There are gas stations along the way. The gas station at position \`stations[i][0]\` has \`stations[i][1]\` liters of gas.

The car starts with an infinite tank of gas, which initially has \`startFuel\` liters of fuel in it. It uses one liter of gas per mile.

Return the minimum number of refueling stops the car must make in order to reach its destination. If it cannot reach the destination, return \`-1\`.`,
  constraints: [
    '1 <= target, startFuel <= 10^9',
    '0 <= stations.length <= 500',
    '1 <= stations[i][0] < stations[i+1][0] < target',
    '1 <= stations[i][1] <= 10^9',
  ],
  examples: [
    {
      input: 'target = 1, startFuel = 1, stations = []',
      output: '0',
      explanation: 'We can reach the target without refueling.',
    },
    {
      input: 'target = 100, startFuel = 1, stations = [[10,100]]',
      output: '-1',
      explanation: 'We cannot reach the target (or even the first station).',
    },
    {
      input: 'target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]',
      output: '2',
      explanation: 'We start with 10 liters. Drive to 10, refuel (60L). Drive to 60, refuel (40L). Drive to 100.',
    },
  ],
  hints: [
    'Greedy + max-heap: drive as far as possible. When you run out of fuel, greedily pick the largest refueling stop you have passed.',
    'Push each station you pass into a max-heap (by fuel amount). When stuck, pop the largest station and add its fuel. Increment the stop count.',
    'Alternatively, use DP: dp[j] = farthest distance reachable with exactly j refueling stops.',
  ],
  functionName: 'minRefuelStops',
  params: ['target', 'startFuel', 'stations'],
  starterCode: {
    javascript: 'function minRefuelStops(target, startFuel, stations) {\n\n}\n',
    typescript: "function minRefuelStops(target: number, startFuel: number, stations: unknown[]): number {\n\n}",

    python: 'def minRefuelStops(target, startFuel, stations):\n    pass\n',
  },
  visibleTests: [
    { args: [1, 1, []], expected: 0 },
    { args: [100, 1, [[10, 100]]], expected: -1 },
    { args: [100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [100, 100, []], expected: 0 },
    { args: [100, 10, [[10, 50], [60, 40]]], expected: 2 },
    { args: [1000, 200, [[200, 400], [600, 400]]], expected: 2 },
  ],
};
