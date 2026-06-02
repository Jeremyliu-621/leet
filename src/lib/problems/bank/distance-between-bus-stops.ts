import type { Problem } from '../types';

export const problem: Problem = {
  id: 'distance-between-bus-stops',
  title: 'Distance Between Bus Stops',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `A bus has \`n\` stops numbered from \`0\` to \`n - 1\` that form a circle. We know the distance between all pairs of neighboring stops where \`distance[i]\` is the distance between the stops number \`i\` and \`(i + 1) % n\`.

The bus goes along both directions — clockwise and counter-clockwise.

Return the shortest distance between the given \`source\` and \`destination\` stops.`,
  constraints: [
    '1 <= n <= 10^4',
    'distance.length == n',
    '0 <= distance[i] <= 10^4',
    '0 <= source, destination < n',
  ],
  examples: [
    {
      input: 'distance = [1,2,3,4], source = 0, destination = 1',
      output: '1',
      explanation: 'Clockwise: 1. Counter-clockwise: 2+3+4 = 9. Min = 1.',
    },
    {
      input: 'distance = [1,2,3,4], source = 0, destination = 2',
      output: '3',
      explanation: 'Clockwise (0→1→2): 1+2 = 3. Counter-clockwise (0→3→2): 4+3 = 7. Min = 3.',
    },
    {
      input: 'distance = [1,2,3,4], source = 0, destination = 3',
      output: '4',
      explanation: 'Clockwise: 1+2+3 = 6. Counter-clockwise: 4. Min = 4.',
    },
  ],
  hints: [
    'Compute the clockwise distance by summing distance[source], distance[source+1], ..., distance[destination-1] (modular indexing).',
    'The total perimeter is sum(distance). Counter-clockwise distance = total - clockwise.',
    'Return min(clockwise, counter-clockwise).',
  ],
  functionName: 'distanceBetweenBusStops',
  params: ['distance', 'source', 'destination'],
  starterCode: {
    javascript: `function distanceBetweenBusStops(distance, source, destination) {
  if (source > destination) [source, destination] = [destination, source];
  let cw = 0;
  for (let i = source; i < destination; i++) cw += distance[i];
  const total = distance.reduce((a, b) => a + b, 0);
  return Math.min(cw, total - cw);
}`,
    typescript: `function distanceBetweenBusStops(distance: number[], source: number, destination: number): number {
  if (source > destination) [source, destination] = [destination, source];
  let cw = 0;
  for (let i = source; i < destination; i++) cw += distance[i]!;
  const total = distance.reduce((a, b) => a + b, 0);
  return Math.min(cw, total - cw);
}`,
    python: `def distanceBetweenBusStops(distance: list[int], source: int, destination: int) -> int:
    if source > destination:
        source, destination = destination, source
    cw = sum(distance[source:destination])
    total = sum(distance)
    return min(cw, total - cw)`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4], 0, 1], expected: 1 },
    { args: [[1, 2, 3, 4], 0, 2], expected: 3 },
    { args: [[1, 2, 3, 4], 0, 3], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4], 1, 3], expected: 5 },
    { args: [[1, 2, 3, 4], 3, 0], expected: 4 },
    { args: [[5, 5, 5, 5], 0, 2], expected: 10 },
    { args: [[1], 0, 0], expected: 0 },
    { args: [[3, 6, 9], 0, 2], expected: 9 },
    { args: [[3, 6, 9], 2, 0], expected: 9 },
    { args: [[1, 2, 3, 4, 5], 1, 4], expected: 6 },
    { args: [[1, 2, 3, 4, 5], 4, 1], expected: 6 },
  ],
};
