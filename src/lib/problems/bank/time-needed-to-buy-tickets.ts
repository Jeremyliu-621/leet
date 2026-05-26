import type { Problem } from '../types';

export const problem: Problem = {
  id: 'time-needed-to-buy-tickets',
  title: 'Time Needed to Buy Tickets',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `There are \`n\` people in a line queuing to buy tickets, where the \`0th\` person is at the **front** of the line and the \`(n - 1)th\` person is at the **back** of the line.

You are given a **0-indexed** integer array \`tickets\` of length \`n\` where the number of tickets that the \`ith\` person would like to buy is \`tickets[i]\`.

Each person takes **exactly 1 second** to buy a ticket. A person can only buy **1 ticket at a time** and has to go back to the **end** of the line (possibly in a new position) to buy more tickets. If a person does not have any tickets left to buy, they will **leave** the queue.

Return the **time taken** for the person at position \`k\` (**0-indexed**) to finish buying all their tickets.`,
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
      explanation: 'Person 2 needs 2 tickets. The queue processes: round 1 (3 people), round 2 (3 people again) — person 2 finishes at time 6.',
    },
    {
      input: 'tickets = [5,1,1,1], k = 0',
      output: '8',
    },
  ],
  hints: [
    'For each person at position i, they contribute min(tickets[i], tickets[k]) time if i <= k, and min(tickets[i], tickets[k] - 1) if i > k.',
    'For each person at position `i`, they buy tickets in rounds. Person `j` before `k` buys `min(tickets[j], tickets[k])` times; person `j` after `k` buys `min(tickets[j], tickets[k]-1)` times.',
    `\`\`\`js
let time = 0;
for (let i = 0; i < tickets.length; i++)
  time += i <= k ? Math.min(tickets[i], tickets[k]) : Math.min(tickets[i], tickets[k]-1);
return time;\`\`\``
  ],
  functionName: 'timeRequiredToBuy',
  params: ['tickets', 'k'],
  starterCode: {
    javascript: 'function timeRequiredToBuy(tickets, k) {\n\n}\n',
    python: 'def timeRequiredToBuy(tickets, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 3, 2], 2], expected: 6 },
    { args: [[5, 1, 1, 1], 0], expected: 8 },
  ],
  hiddenTests: [
    { args: [[1], 0], expected: 1 },
    { args: [[1, 2, 3], 1], expected: 4 },
    { args: [[3, 1, 2], 0], expected: 6 },
    { args: [[1, 1, 1], 2], expected: 3 },
  ],
};
