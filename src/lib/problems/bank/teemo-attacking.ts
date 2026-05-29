import type { Problem } from '../types';

export const problem: Problem = {
  id: 'teemo-attacking',
  title: 'Teemo Attacking',
  difficulty: 'easy',
  tags: ['simulation', 'arrays'],
  description: `Our hero Teemo is attacking an enemy Ashe with poison attacks. When Teemo attacks Ashe at time \`timeSeries[i]\`, Ashe is poisoned for \`duration\` seconds starting at \`timeSeries[i]\`. If Teemo attacks again before the poison expires, the timer resets to \`duration\` seconds from the new attack.

Return the **total number of seconds** that Ashe is poisoned.`,
  constraints: [
    '1 <= timeSeries.length <= 10^4',
    '0 <= timeSeries[i], duration <= 10^7',
    'timeSeries is sorted in non-decreasing order.',
  ],
  examples: [
    {
      input: 'timeSeries = [1,4], duration = 2',
      output: '4',
      explanation: 'Poisoned [1,2] and [4,5] = 4 seconds total.',
    },
    {
      input: 'timeSeries = [1,2], duration = 2',
      output: '3',
      explanation: 'Attack at 1 poisons [1,2]. Attack at 2 resets to [2,3]. Total = 3 seconds.',
    },
  ],
  hints: [
    'Process attacks in order. For each attack except the last, the poison lasts min(gap, duration) seconds where gap = timeSeries[i+1] - timeSeries[i].',
    'The last attack always contributes a full duration seconds.',
    'Sum up: for i in 0..n-2, add min(timeSeries[i+1] - timeSeries[i], duration); then add duration for the last attack.',
  ],
  functionName: 'findPoisonedDuration',
  params: ['timeSeries', 'duration'],
  starterCode: {
    javascript: `function findPoisonedDuration(timeSeries, duration) {

}`,
    typescript: `function findPoisonedDuration(timeSeries: number[], duration: number): number {

}`,
    python: `def findPoisonedDuration(timeSeries: list[int], duration: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[1, 4], 2], expected: 4 },
    { args: [[1, 2], 2], expected: 3 },
    { args: [[1], 5], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4], 1], expected: 4 },
    { args: [[0, 5, 10], 3], expected: 9 },
    { args: [[1, 3, 5, 7], 2], expected: 8 },
    { args: [[1, 2], 0], expected: 0 },
    { args: [[0], 10000000], expected: 10000000 },
    { args: [[1, 2, 3], 3], expected: 5 },
    { args: [[1, 100], 50], expected: 100 },
    { args: [[1, 51], 50], expected: 100 },
  ],
};
