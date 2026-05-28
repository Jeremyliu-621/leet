import type { Problem } from '../types';

export const problem: Problem = {
  id: 'gas-station',
  title: 'Gas Station',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `There are \`n\` gas stations along a circular route. You are given two integer arrays \`gas\` and \`cost\` where:
- \`gas[i]\` is the amount of gas at station \`i\`
- \`cost[i]\` is the cost to travel from station \`i\` to station \`i + 1\`

You begin the journey with an empty tank at one of the gas stations. Given that you can only travel in one direction, return the **starting station index** if you can complete the circuit once, or return \`-1\` if it is not possible.

If a solution exists, it is **guaranteed to be unique**.`,
  constraints: [
    'n == gas.length == cost.length',
    '1 <= n <= 10^5',
    '0 <= gas[i], cost[i] <= 10^4',
  ],
  examples: [
    {
      input: 'gas = [1,2,3,4,5], cost = [3,4,5,1,2]',
      output: '3',
      explanation: 'Start at station 3 (gas=4). Travel to 4 (cost 1, gain 3): tank=4+5-2=7. Travel back to 3: 7-3=4, 4+1-3=2, 2+2-4=0. ✓',
    },
    {
      input: 'gas = [2,3,4], cost = [3,4,3]',
      output: '-1',
    },
  ],
  hints: [
    'If total gas < total cost, the journey is impossible (return -1).',
    'Greedily track the starting station. If cumulative tank goes negative, restart from the next station.',
    'This works because: if you can\'t reach station k from station i, you can\'t reach it from any station between i and k either.',
  ],
  functionName: 'canCompleteCircuit',
  params: ['gas', 'cost'],
  starterCode: {
    javascript: `function canCompleteCircuit(gas, cost) {
  // Return start index or -1 if impossible
}`,
    python: `def canCompleteCircuit(gas, cost):
    # Return start index or -1 if impossible
    pass`,
  },
  visibleTests: [
    { args: [[1,2,3,4,5], [3,4,5,1,2]], expected: 3 },
    { args: [[2,3,4], [3,4,3]], expected: -1 },
    { args: [[5,1,2,3,4], [4,4,1,5,1]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 0 },
    { args: [[3,1,1], [1,2,2]], expected: 0 },
    { args: [[2,3,4], [3,4,2]], expected: 2 },
    { args: [[1,2], [2,1]], expected: 1 },
  ],
};
