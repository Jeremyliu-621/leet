import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-buy-tickets',
  title: 'Minimum Time to Buy Tickets',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `There are \`n\` people in a queue buying movie tickets. You are given a **0-indexed** integer array \`tickets\` where the number of tickets the \`i\`-th person wants to buy is \`tickets[i]\`.

Each person takes exactly **1 second** to buy a ticket. A person can only buy **one ticket at a time**. After buying a ticket, if they still need more, they **rejoin the back of the queue**.

Return the **minimum number of seconds** needed to buy all tickets for the person originally at position \`k\` (0-indexed).`,
  constraints: [
    'n == tickets.length',
    '1 <= n <= 100',
    '1 <= tickets[i] <= 100',
    '0 <= k < n',
  ],
  examples: [
    {
      input: 'tickets = [2,3,2], k = 2',
      output: '6',
      explanation: 'The queue is [2,3,2]. After each second: [3,2,1] → [2,1,3] → [1,3,2] → [3,2,1]... After 6 seconds person k=2 finishes.',
    },
    {
      input: 'tickets = [5,1,1,1], k = 0',
      output: '8',
      explanation: 'Person at k=0 needs 5 tickets. Persons at 1,2,3 need 1 each and leave after 1,2,3 seconds respectively. Then person 0 finishes at second 8.',
    },
  ],
  hints: [
    'How many full rounds will person k go through? Exactly tickets[k] rounds.',
    'For person i <= k, they participate in all tickets[k] rounds (or fewer if tickets[i] < tickets[k]).',
    'For person i > k, they participate in at most tickets[k]-1 rounds (they pass after person k finishes).',
  ],
  functionName: 'timeRequiredToBuy',
  params: ['tickets', 'k'],
  starterCode: {
    javascript: 'function timeRequiredToBuy(tickets, k) {\n  \n}\n',
    python: 'def timeRequiredToBuy(tickets, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 3, 2], 2], expected: 6 },
    { args: [[5, 1, 1, 1], 0], expected: 8 },
    { args: [[1], 0], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1], 1], expected: 2 },
    { args: [[3, 3, 3], 0], expected: 7 },
    { args: [[3, 3, 3], 2], expected: 9 },
    { args: [[2, 2], 0], expected: 3 },
    { args: [[100, 1], 1], expected: 2 },
  ],
};
