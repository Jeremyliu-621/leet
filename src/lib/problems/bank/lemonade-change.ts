import type { Problem } from '../types';

export const problem: Problem = {
  id: 'lemonade-change',
  title: 'Lemonade Change',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `At a lemonade stand, each lemonade costs **$5**. Customers pay with \`$5\`, \`$10\`, or \`$20\` bills. You start with no change.

Given an integer array \`bills\` representing the order in which customers pay, return \`true\` if you can provide every customer with the correct change, or \`false\` otherwise.

**Example:**
\`\`\`
Input: bills = [5,5,5,10,20]
Output: true
\`\`\`
- Customer 1: pays $5, no change needed. five=1
- Customer 2: pays $5, no change. five=2
- Customer 3: pays $5, no change. five=3
- Customer 4: pays $10, give $5 change. five=2, ten=1
- Customer 5: pays $20, give $10+$5 change. five=1, ten=0`,
  constraints: [
    '1 <= bills.length <= 10^5',
    'bills[i] is 5, 10, or 20',
  ],
  examples: [
    {
      input: 'bills = [5,5,5,10,20]',
      output: 'true',
    },
    {
      input: 'bills = [5,5,10,10,20]',
      output: 'false',
      explanation: 'After first three customers you have two $5 and one $10. The fourth customer pays $10 — you need to give $5 change (OK). Fifth customer pays $20 — you need $15 change but only have $10+$5 → actually still OK. Wait: bills = [5,5,10,10,20]: after [5,5,10] you have five=1, ten=1. Fourth is $10: need $5 change, five=0, ten=2. Fifth is $20: need $15 change but have zero $5 → false.',
    },
  ],
  hints: [
    'Track counts of $5 and $10 bills (you never need to give $20 as change since lemonade costs $5).',
    'For $10 payment: give one $5 as change. For $20 payment: prefer to give one $10 + one $5 (saves $5 bills). If no $10, give three $5 bills.',
    'If at any point you cannot make change, return false.',
  ],
  functionName: 'lemonadeChange',
  params: ['bills'],
  starterCode: {
    javascript: `function lemonadeChange(bills) {
  // bills: number[] — each element is 5, 10, or 20
  // Return true if you can give correct change to every customer
}`,
    typescript: "function lemonadeChange(bills: number[]): boolean {\n  // bills: number[] — each element is 5, 10, or 20\n  // Return true if you can give correct change to every customer\n}",

    python: `def lemonadeChange(bills):
    # bills: list of int (5, 10, or 20)
    # Return True if you can give correct change to every customer
    pass`,
  },
  visibleTests: [
    { args: [[5, 5, 5, 10, 20]], expected: true },
    { args: [[5, 5, 10, 10, 20]], expected: false },
  ],
  hiddenTests: [
    { args: [[5]], expected: true },
    { args: [[10]], expected: false },
    { args: [[5, 5, 5, 5, 5]], expected: true },
    { args: [[5, 10]], expected: true },
    { args: [[5, 5, 10, 20]], expected: true },
    { args: [[5, 5, 5, 10, 5, 5, 10, 20, 20, 20]], expected: false },
    { args: [[5, 20]], expected: false },
  ],
};
