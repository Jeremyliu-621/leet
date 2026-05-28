import type { Problem } from '../types';

export const problem: Problem = {
  id: 'calculate-delayed-arrival-time',
  title: 'Calculate Delayed Arrival Time',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given a positive integer \`arrivalTime\` denoting the arrival time of a train in hours, and another positive integer \`delayedTime\` denoting the amount of delay in hours.

Return the time when the train will arrive at the station.

Note that the time in this problem is in **24-hour format**.`,
  constraints: [
    '0 <= arrivalTime <= 23',
    '1 <= delayedTime <= 24',
  ],
  examples: [
    {
      input: 'arrivalTime = 15, delayedTime = 5',
      output: '20',
      explanation: '15 + 5 = 20. Arrival time is 20:00.',
    },
    {
      input: 'arrivalTime = 13, delayedTime = 11',
      output: '0',
      explanation: '13 + 11 = 24. 24 % 24 = 0. Arrival time is 0:00 (midnight).',
    },
  ],
  hints: [
    'Simply compute (arrivalTime + delayedTime) % 24.',
    'The modulo operation handles midnight wraparound: 24 % 24 = 0.',
    'No special casing needed. The formula works for all valid inputs, including when the sum is exactly 24.',
  ],
  functionName: 'findDelayedArrivalTime',
  params: ['arrivalTime', 'delayedTime'],
  starterCode: {
    javascript: `function findDelayedArrivalTime(arrivalTime, delayedTime) {

}`,
    typescript: "function findDelayedArrivalTime(arrivalTime: number, delayedTime: number): number {\n\n}",

    python: `def findDelayedArrivalTime(arrivalTime, delayedTime):
    pass`,
  },
  visibleTests: [
    { args: [15, 5], expected: 20 },
    { args: [13, 11], expected: 0 },
  ],
  hiddenTests: [
    { args: [23, 1], expected: 0 },
    { args: [0, 6], expected: 6 },
    { args: [20, 4], expected: 0 },
    { args: [1, 23], expected: 0 },
  ],
};
