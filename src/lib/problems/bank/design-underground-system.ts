import type { Problem } from '../types';

export const problem: Problem = {
  id: 'design-underground-system',
  title: 'Design Underground System',
  difficulty: 'medium',
  tags: ['hash-map'],
  description: `Design an underground system that tracks customer travel times between different stations.

Implement the \`undergroundSystem\` function that processes a list of operations:

- \`["checkIn", id, stationName, t]\` — a customer with \`id\` checks in at \`stationName\` at time \`t\`.
- \`["checkOut", id, stationName, t]\` — the customer with \`id\` checks out at \`stationName\` at time \`t\`.
- \`["getAverageTime", startStation, endStation]\` — returns the average travel time from \`startStation\` to \`endStation\` as a number.

Return an array of results, one for each \`getAverageTime\` call, in order.

A customer will not check in twice before checking out. Travel time is defined as \`checkOut.t - checkIn.t\`.`,
  constraints: [
    '1 <= id, t <= 10^6',
    '1 <= stationName.length <= 10',
    'All strings consist of uppercase and lowercase English letters and digits',
    'There will be at least one getAverageTime call',
    'All getAverageTime calls have at least one prior trip on that route',
  ],
  examples: [
    {
      input: 'ops = [["checkIn",45,"Leyton",3],["checkIn",32,"Paradise",8],["checkIn",27,"Leyton",10],["checkOut",45,"Waterloo",15],["checkOut",27,"Waterloo",20],["checkOut",32,"Cambridge",22],["getAverageTime","Paradise","Cambridge"],["getAverageTime","Leyton","Waterloo"]]',
      output: '[14.0, 11.0]',
      explanation: 'Route "Paradise"→"Cambridge": customer 32 took 22-8=14 minutes. Average = 14.0. Route "Leyton"→"Waterloo": customer 45 took 15-3=12 min, customer 27 took 20-10=10 min. Average = (12+10)/2 = 11.0.',
    },
  ],
  hints: [
    'Use two hash maps: one for active check-ins (id → [station, time]) and one for route statistics (route key → [totalTime, count]).',
    'On checkOut, look up the check-in info, compute travel time, and update the route stats.',
    'On getAverageTime, return totalTime / count for that route.',
  ],
  functionName: 'undergroundSystem',
  params: ['operations'],
  starterCode: {
    javascript: `function undergroundSystem(operations) {

}`,
    typescript: "function undergroundSystem(operations: ((string | number)[] | string[])[]): number[] {\n\n}",

    python: `def undergroundSystem(operations):
    pass`,
  },
  visibleTests: [
    {
      args: [[
        ['checkIn', 45, 'Leyton', 3],
        ['checkIn', 32, 'Paradise', 8],
        ['checkIn', 27, 'Leyton', 10],
        ['checkOut', 45, 'Waterloo', 15],
        ['checkOut', 27, 'Waterloo', 20],
        ['checkOut', 32, 'Cambridge', 22],
        ['getAverageTime', 'Paradise', 'Cambridge'],
        ['getAverageTime', 'Leyton', 'Waterloo'],
      ]],
      expected: [14.0, 11.0],
    },
  ],
  hiddenTests: [
    {
      args: [[
        ['checkIn', 10, 'Leyton', 3],
        ['checkOut', 10, 'Paradise', 8],
        ['getAverageTime', 'Leyton', 'Paradise'],
        ['checkIn', 5, 'Leyton', 10],
        ['checkOut', 5, 'Paradise', 16],
        ['getAverageTime', 'Leyton', 'Paradise'],
      ]],
      expected: [5.0, 5.5],
    },
    {
      args: [[
        ['checkIn', 1, 'A', 0],
        ['checkOut', 1, 'B', 15],
        ['checkIn', 2, 'A', 5],
        ['checkOut', 2, 'B', 25],
        ['getAverageTime', 'A', 'B'],
      ]],
      expected: [17.5],
    },
  ],
};
