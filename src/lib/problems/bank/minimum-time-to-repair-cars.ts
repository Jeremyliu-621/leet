import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-repair-cars',
  title: 'Minimum Time to Repair Cars',
  difficulty: 'medium',
  tags: ['binary-search', 'arrays'],
  description: `You are given an integer array \`ranks\` representing the ranks of some mechanics, and an integer \`cars\` representing the total number of cars to be repaired.

Each mechanic can repair multiple cars. A mechanic with rank \`r\` can repair \`n\` cars in \`r * n * n\` minutes. All mechanics work **simultaneously**.

Return *the minimum time* required to repair all \`cars\` cars.`,
  constraints: [
    '1 <= ranks.length <= 10^5',
    '1 <= ranks[i] <= 100',
    '1 <= cars <= 10^6',
  ],
  examples: [
    {
      input: 'ranks = [4,2,3,1], cars = 10',
      output: '16',
      explanation: 'At time t=16: mechanic with rank 4 repairs floor(sqrt(16/4))=2 cars; rank 2 repairs floor(sqrt(16/2))=2 cars; rank 3 repairs floor(sqrt(16/3))=2 cars; rank 1 repairs floor(sqrt(16/1))=4 cars. Total = 2+2+2+4 = 10 cars.',
    },
    {
      input: 'ranks = [5,1,8], cars = 6',
      output: '16',
      explanation: 'At time t=16: mechanic with rank 5 repairs floor(sqrt(16/5))=1 car; rank 1 repairs floor(sqrt(16/1))=4 cars; rank 8 repairs floor(sqrt(16/8))=1 car. Total = 1+4+1 = 6 cars.',
    },
  ],
  hints: [
    'Binary search on the answer: the minimum time t.',
    'For a given time t, a mechanic with rank r can repair floor(sqrt(t / r)) cars.',
    'Find the minimum t such that the total number of cars repaired across all mechanics is >= cars.',
  ],
  functionName: 'repairCars',
  params: ['ranks', 'cars'],
  starterCode: {
    javascript: `function repairCars(ranks, cars) {

}`,
    typescript: "function repairCars(ranks: number[], cars: number): number {\n\n}",

    python: `def repairCars(ranks: list[int], cars: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[4, 2, 3, 1], 10], expected: 16 },
    { args: [[5, 1, 8], 6], expected: 16 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1], 2], expected: 4 },
    { args: [[2, 3, 1], 6], expected: 9 },
    { args: [[100], 1], expected: 100 },
    { args: [[1, 1], 4], expected: 4 },
  ],
};
