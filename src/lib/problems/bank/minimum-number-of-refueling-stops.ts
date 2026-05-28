import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-refueling-stops',
  title: 'Minimum Number of Refueling Stops',
  difficulty: 'hard',
  tags: ['heap', 'dynamic-programming', 'arrays'],
  description: `A car travels from a starting position to a destination which is \`target\` miles east of the starting position.

There are gas stations along the way. The gas stations are represented as an array \`stations\` where \`stations[i] = [positioni, fueli]\` indicates that the \`i\`-th gas station is \`positioni\` miles east of the starting position and has \`fueli\` liters of gas.

The car starts with an initial tank of \`startFuel\` liters of fuel. It uses one liter of gas per one mile that it drives. When the car reaches a gas station, it may stop and refuel, transferring all the gas from the station into the car.

Return the minimum number of refueling stops the car must make in order to reach its destination. If it cannot reach the destination, return \`-1\`.

Note that if the car reaches a gas station with \`0\` fuel left, it can still refuel there. If the car reaches the destination with \`0\` fuel left, it is still considered to have reached the destination.`,
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
      explanation: 'The car can reach the target with its starting fuel and no stops needed.',
    },
    {
      input: 'target = 100, startFuel = 1, stations = [[10,100]]',
      output: '-1',
      explanation: 'The car cannot reach the first station (position 10) with only 1 unit of fuel.',
    },
  ],
  hints: [
    'Use a greedy strategy: whenever the car cannot continue, retroactively pick the largest fuel tank encountered so far (using a max-heap). Each such retroactive pick counts as one stop.',
    'Maintain a max-heap of fuel amounts for all stations passed. When current fuel goes negative, pop the max fuel from the heap and add it — increment the stop count. If the heap is empty and fuel is still insufficient, return -1.',
    'Process stations in order. After each station is reached, push its fuel into the heap. At the end (reaching target), the number of pops is the minimum number of stops.',
  ],
  functionName: 'minRefuelStops',
  params: ['target', 'startFuel', 'stations'],
  starterCode: {
    javascript: 'function minRefuelStops(target, startFuel, stations) {\n  \n}\n',
    typescript: "function minRefuelStops(target: number, startFuel: number, stations: unknown[]): number {\n  \n}",

    python: 'def minRefuelStops(target, startFuel, stations):\n    pass\n',
  },
  visibleTests: [
    { args: [1, 1, []], expected: 0 },
    { args: [100, 1, [[10,100]]], expected: -1 },
  ],
  hiddenTests: [
    // Enough fuel to go directly, no stops
    { args: [100, 100, []], expected: 0 },
    // Must stop at each station: fuel just enough to reach each one
    // target=100, start=10, stations=[10,60],[20,30],[30,30],[60,40]
    // Verified above: 2 stops
    { args: [100, 10, [[10,60],[20,30],[30,30],[60,40]]], expected: 2 },
    // Must stop twice via greedy heap
    // target=10, start=3, stations=[1,1],[2,2],[5,100]: 2 stops
    { args: [10, 3, [[1,1],[2,2],[5,100]]], expected: 2 },
    // One stop at the single station is enough
    // target=5, start=2, stations=[2,3]: fuel at 0, refuel 3, reach 5. 1 stop.
    { args: [5, 2, [[2,3]]], expected: 1 },
    // Exactly enough fuel to reach target in 2 stops
    // target=200, start=50, stations=[25,25],[50,50],[75,75],[100,100]: 2 stops
    { args: [200, 50, [[25,25],[50,50],[75,75],[100,100]]], expected: 2 },
    // Single station, can't reach it
    { args: [1000, 50, [[100,200]]], expected: -1 },
  ],
};
