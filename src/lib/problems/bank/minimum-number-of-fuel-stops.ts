import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-fuel-stops',
  title: 'Minimum Number of Refueling Stops',
  difficulty: 'hard',
  tags: ['arrays', 'heap', 'dynamic-programming'],
  description: `A car travels from a starting position to a destination which is \`target\` miles east of the starting position.

There are gas stations along the way. The gas stations are represented as an array \`stations\` where \`stations[i] = [positioni, fueli]\` indicates that the \`i\`-th gas station is \`positioni\` miles east of the starting position and has \`fueli\` liters of gas.

The car starts with an infinite tank of gas, which initially has \`startFuel\` liters of gas. It uses one liter of gas per one mile that it drives. When the car reaches a gas station, it may stop and refuel, **adding all the gas from the station into its tank**.

Return *the minimum number of refueling stops the car must make in order to reach its destination*. If it cannot reach the destination, return \`-1\`.

Note that if the car reaches a gas station with 0 fuel left, it can still refuel there. If the car reaches the destination with 0 fuel left, it is still considered to have arrived.`,
  constraints: [
    '1 <= target, startFuel <= 10^9',
    '0 <= stations.length <= 500',
    '1 <= positioni < positioni+1 < target',
    '1 <= fueli < 10^9',
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
      explanation: 'We cannot reach position 10 to refuel.',
    },
    {
      input: 'target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]',
      output: '2',
      explanation: 'Stop at station 0 and station 2. Minimum 2 stops.',
    },
  ],
  hints: [
    'Level 1: Greedy with a max-heap. Drive as far as possible. When you run out of fuel (cannot reach the next station or target), retrospectively pick the best refueling stop you passed.',
    'Level 2: As you pass each station, push its fuel into a max-heap. When fuel runs out (current position > current fuel remaining), pop the largest fuel from the heap and add it. Increment stop count.',
    'Level 3: If the heap is empty when you need more fuel, return -1. Continue until current_fuel >= target. O(n log n) with a heap. Note: "current position" is tracked as current_fuel which decreases as you drive.',
  ],
  functionName: 'minRefuelStops',
  params: ['target', 'startFuel', 'stations'],
  starterCode: {
    javascript: `function minRefuelStops(target, startFuel, stations) {

}`,
    typescript: `function minRefuelStops(target: number, startFuel: number, stations: number[][]): number {

}`,
    python: `def minRefuelStops(target, startFuel, stations):
    pass`,
  },
  visibleTests: [
    { args: [1, 1, []], expected: 0 },
    { args: [100, 1, [[10, 100]]], expected: -1 },
    { args: [100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [100, 100, []], expected: 0 },
    { args: [100, 50, [[25, 25], [50, 50]]], expected: 1 },
    { args: [100, 10, [[25, 25]]], expected: -1 },
    { args: [100, 1, [[1, 1], [2, 1], [3, 1], [4, 97]]], expected: 4 },
    { args: [1000000000, 1, [[1, 1000000000]]], expected: 1 },
    { args: [10, 5, [[3, 3], [6, 4]]], expected: 2 },
  ],
};
