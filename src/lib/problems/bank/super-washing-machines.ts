import type { Problem } from '../types';

export const problem: Problem = {
  id: 'super-washing-machines',
  title: 'Super Washing Machines',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `You have \`n\` super washing machines on a line. Initially, each washing machine has some dresses or is empty.

For each move, you can choose any \`m\` (1 ≤ m ≤ n) washing machines, and pass **one dress** from each chosen washing machine to one of its adjacent washing machines at the same time.

Given an integer array \`machines\` representing the number of dresses in each washing machine from left to right, return the **minimum number of moves** to make all washing machines equal. If it is not possible, return \`-1\`.`,
  constraints: [
    '`n == machines.length`',
    '`1 <= n <= 10^4`',
    '`0 <= machines[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'machines = [1,0,5]',
      output: '3',
      explanation: 'Target is 2. Move 1: [1,1,4]. Move 2: [2,1,3]. Move 3: [2,2,2].',
    },
    {
      input: 'machines = [0,3,0]',
      output: '2',
      explanation: 'Target is 1. Move 1: [1,2,0]. Move 2: [1,1,1].',
    },
    {
      input: 'machines = [0,2,0]',
      output: '-1',
      explanation: 'Sum is 2, not divisible by 3, so it is impossible.',
    },
  ],
  hints: [
    'If total dresses % n != 0, return -1.',
    'Let target = total / n. Consider the net flow across each boundary i→i+1: flow[i] = prefix_sum[i+1] - target*(i+1).',
    'The answer is the maximum over all machines of: max(|cumulativeFlow|, machines[i] - target).',
    'A machine with machines[i] > target must push excess dresses outward in both directions in the same step — it is the bottleneck when machines[i] - target is large.',
  ],
  functionName: 'findMinMoves',
  params: ['machines'],
  starterCode: {
    javascript: `/**
 * @param {number[]} machines
 * @return {number}
 */
function findMinMoves(machines) {

}`,
    python: `def findMinMoves(machines: list[int]) -> int:
    `,
  },
  visibleTests: [
    { args: [[1, 0, 5]], expected: 3 },
    { args: [[0, 3, 0]], expected: 2 },
    { args: [[0, 2, 0]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[3, 3, 3]], expected: 0 },
    { args: [[0, 0, 6]], expected: 4 },
    { args: [[1, 0, 0, 3]], expected: 2 },
    { args: [[0, 0, 11, 5]], expected: 8 },
  ],
};
