import type { Problem } from '../types';

export const problem: Problem = {
  id: 'car-pooling',
  title: 'Car Pooling',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `There is a car with \`capacity\` empty seats. The vehicle only drives east (i.e., it cannot turn around and drive west).

You are given the integer \`capacity\` and an array \`trips\` where \`trips[i] = [numPassengers_i, from_i, to_i]\` indicates that the \`i\`th trip has \`numPassengers_i\` passengers and the locations to pick them up and drop them off are \`from_i\` and \`to_i\` respectively. The locations are given as the number of kilometers due east from the car's initial location.

Return \`true\` if it is possible to pick up and drop off all passengers for all the given trips, or \`false\` otherwise.`,
  constraints: [
    '1 <= trips.length <= 1000',
    'trips[i].length == 3',
    '1 <= numPassengers_i <= 100',
    '0 <= from_i < to_i <= 1000',
    '1 <= capacity <= 10^5',
  ],
  examples: [
    {
      input: 'trips = [[2,1,5],[3,3,7]], capacity = 4',
      output: 'false',
    },
    {
      input: 'trips = [[2,1,5],[3,5,7]], capacity = 3',
      output: 'true',
    },
  ],
  hints: [
    'Level 1: Use a difference array of size 1001. For each trip, add numPassengers at the from location and subtract at the to location. Then scan the prefix sum — if it ever exceeds capacity, return false.',
    'Level 2: diff[from] += num; diff[to] -= num. Then compute prefix sum. If any prefix sum > capacity, return false.',
    'Level 3: const diff=new Array(1001).fill(0);for(const[n,f,t]of trips){diff[f]+=n;diff[t]-=n;}let cur=0;for(const d of diff){cur+=d;if(cur>capacity)return false;}return true;',
  ],
  functionName: 'carPooling',
  params: ['trips', 'capacity'],
  starterCode: {
    javascript: 'function carPooling(trips, capacity) {\n  // your code here\n}\n',
    python: 'def carPooling(trips, capacity):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[2, 1, 5], [3, 3, 7]], 4], expected: false },
    { args: [[[2, 1, 5], [3, 5, 7]], 3], expected: true },
  ],
  hiddenTests: [
    { args: [[[2, 1, 5], [3, 3, 7]], 5], expected: true },
    { args: [[[3, 2, 7], [3, 7, 9], [8, 3, 9]], 11], expected: true },
    { args: [[[9, 3, 4], [9, 1, 7], [6, 3, 7]], 14], expected: false },
    { args: [[[1, 0, 1]], 1], expected: true },
    { args: [[[2, 0, 3], [3, 2, 4]], 4], expected: false },
  ],
};
