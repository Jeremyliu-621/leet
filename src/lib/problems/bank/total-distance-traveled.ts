import type { Problem } from '../types';

export const problem: Problem = {
  id: 'total-distance-traveled',
  title: 'Total Distance Traveled',
  difficulty: 'easy',
  tags: ['math'],
  description: `A truck has two fuel tanks. You are given two integers, \`mainTank\` representing the fuel present in the main tank in liters and \`additionalTank\` representing the fuel present in the additional tank in liters.

The truck has a mileage of \`10\` km per liter. Whenever 5 liters of fuel get used up in the main tank, if the additional tank has at least 1 liter of fuel, exactly 1 liter of fuel gets transferred from the additional tank to the main tank.

Return the maximum distance which can be traveled.

**Note:** Injection from the additional tank happens every 5 liters consumed from the main tank, so it starts at 5 liters, then at 10, and so on.`,
  constraints: [
    '1 <= mainTank, additionalTank <= 100',
  ],
  examples: [
    {
      input: 'mainTank = 5, additionalTank = 10',
      output: '60',
      explanation: '5L main used → 50 km. Transfer 1L from additional → 1L left. Drive 10 km more. Total = 60.',
    },
    {
      input: 'mainTank = 1, additionalTank = 2',
      output: '10',
      explanation: 'Only 1L in main, not enough to trigger transfer. Distance = 10.',
    },
  ],
  hints: [
    'Simulate: while mainTank >= 5, use 5L (travel 50km), transfer 1L from additional if available.',
    'After the loop, drive on remaining mainTank: distance += mainTank * 10.',
    'Track additionalTank decrements.',
  ],
  functionName: 'distanceTraveled',
  params: ['mainTank', 'additionalTank'],
  starterCode: {
    javascript: `function distanceTraveled(mainTank, additionalTank) {

}`,
    python: `def distanceTraveled(mainTank, additionalTank):
    pass`,
  },
  visibleTests: [
    { args: [5, 10], expected: 60 },
    { args: [1, 2], expected: 10 },
  ],
  hiddenTests: [
    { args: [3, 1], expected: 30 },
    { args: [10, 0], expected: 100 },
    { args: [10, 3], expected: 120 },
    { args: [20, 4], expected: 240 },
  ],
};
