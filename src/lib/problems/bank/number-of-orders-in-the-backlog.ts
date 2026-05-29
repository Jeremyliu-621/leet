import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-orders-in-the-backlog',
  title: 'Number of Orders in the Backlog',
  difficulty: 'medium',
  tags: ['heap', 'simulation'],
  description: `You are given a 2D integer array \`orders\`, where \`orders[i] = [price, amount, orderType]\`.

- \`orderType == 0\`: a **buy** order — willing to buy \`amount\` units at any price **≤ price**.
- \`orderType == 1\`: a **sell** order — willing to sell \`amount\` units at any price **≥ price**.

When a new order arrives it is matched greedily:
- A buy order matches with the **cheapest** available sell orders whose price ≤ the buy price.
- A sell order matches with the **most expensive** available buy orders whose price ≥ the sell price.

Matched units are consumed from both orders. Any remaining amount stays in the backlog.

Return the **total number of unmatched orders** in the backlog after processing all orders, modulo \`10^9 + 7\`.`,
  constraints: [
    '1 ≤ orders.length ≤ 10^5',
    'orders[i].length == 3',
    '1 ≤ price, amount ≤ 10^9',
    'orderType is 0 or 1',
  ],
  examples: [
    {
      input: 'orders = [[10,5,0],[15,2,1],[25,1,1],[30,4,0]]',
      output: '6',
      explanation: 'After all orders the buy backlog has 5 units at price 10 and 1 unit at price 30. Total = 6.',
    },
    {
      input: 'orders = [[7,1000000000,1],[15,3,0],[5,999999995,0],[5,1,1]]',
      output: '999999984',
    },
  ],
  hints: [
    'To efficiently find the cheapest unmatched sell or the most expensive unmatched buy, use a min-heap for sell orders (keyed by price) and a max-heap for buy orders (keyed by price).',
    'For each buy order, pop from the sell min-heap while the top price ≤ buy price and amount remains; for each sell order, pop from the buy max-heap while the top price ≥ sell price and amount remains.',
    'Push any leftover amount back onto the appropriate heap. After all orders, sum all remaining amounts mod 10^9 + 7.',
  ],
  functionName: 'getNumberOfBacklogOrders',
  params: ['orders'],
  starterCode: {
    javascript: `function getNumberOfBacklogOrders(orders) {\n\n}`,
    python: `def getNumberOfBacklogOrders(orders) -> int:\n    pass`,
    typescript: `function getNumberOfBacklogOrders(orders: number[][]): number {\n\n}`,
  },
  visibleTests: [
    { args: [[[10, 5, 0], [15, 2, 1], [25, 1, 1], [30, 4, 0]]], expected: 6 },
    { args: [[[7, 1000000000, 1], [15, 3, 0], [5, 999999995, 0], [5, 1, 1]]], expected: 999999984 },
    { args: [[[1, 1, 0]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1, 1, 1]]], expected: 1 },
    { args: [[[5, 3, 0], [5, 3, 1]]], expected: 0 },
    { args: [[[5, 3, 0], [6, 3, 1]]], expected: 6 },
    { args: [[[1, 1, 0], [2, 1, 0], [1, 1, 1]]], expected: 1 },
    { args: [[[3, 10, 0], [5, 3, 1], [2, 4, 0], [1, 6, 1]]], expected: 11 },
    { args: [[[10, 2, 1], [10, 2, 0]]], expected: 0 },
    { args: [[[5, 3, 0], [4, 1, 1], [3, 2, 0]]], expected: 4 },
  ],
};
