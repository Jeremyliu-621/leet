import type { Problem } from '../types';

export const problem: Problem = {
  id: 'average-waiting-time',
  title: 'Average Waiting Time',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `There is a restaurant with a single chef. You are given an array \`customers\`, where \`customers[i] = [arrivalᵢ, timeᵢ]\`:

- \`arrivalᵢ\` is the arrival time of the \`ith\` customer. The arrival times are sorted in **non-decreasing** order.
- \`timeᵢ\` is the time needed to prepare the order of the \`ith\` customer.

When a customer arrives, they give the chef their order, and the chef starts preparing it once the chef is idle. The customer **waits** until the chef finishes preparing their order.

Return the **average** waiting time of all customers. Solutions within \`10^-5\` from the actual answer are considered accepted.`,
  constraints: [
    '1 <= customers.length <= 10^5',
    '1 <= arrivalᵢ, timeᵢ <= 10^4',
    'arrivalᵢ <= arrivalᵢ₊₁',
  ],
  examples: [
    {
      input: 'customers = [[1,2],[2,5],[4,3]]',
      output: '5.00000',
      explanation: 'Customer 1 waits 2s. Customer 2 waits from 2 until chef finishes at 3+5=8, so 6s. Customer 3 waits from 4 until 8+3=11, so 7s. Average = (2+6+7)/3 = 5.',
    },
    {
      input: 'customers = [[5,2],[5,4],[10,3],[20,1]]',
      output: '3.25000',
    },
  ],
  hints: [
    'Track `currentTime` (when the chef finishes the current order). For each customer: `currentTime = max(currentTime, arrival) + duration`.',
    'The waiting time for customer `i` is `currentTime - arrival[i]`.',
    'Sum all waiting times and divide by the number of customers.',
  ],
  functionName: 'averageWaitingTime',
  params: ['customers'],
  starterCode: {
    javascript: 'function averageWaitingTime(customers) {\n\n}\n',
    typescript: "function averageWaitingTime(customers: number[][]): number {\n\n}",

    python: 'def averageWaitingTime(customers):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1,2],[2,5],[4,3]]], expected: 5.0 },
    { args: [[[5,2],[5,4],[10,3],[20,1]]], expected: 3.25 },
  ],
  hiddenTests: [
    { args: [[[1,1]]], expected: 1.0 },
    { args: [[[1,5],[4,1]]], expected: 4.0 },
    { args: [[[1,1],[2,1],[3,1]]], expected: 1.0 },
    { args: [[[1,3],[5,2]]], expected: 2.5 },
  ],
};
