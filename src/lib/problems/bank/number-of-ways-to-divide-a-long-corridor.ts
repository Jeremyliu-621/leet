import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-divide-a-long-corridor',
  title: 'Number of Ways to Divide a Long Corridor',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming'],
  description: `Along a long corridor, there are \`n\` rooms numbered \`0\` to \`n - 1\`. Each room is identified as either a **seat** (\`'S'\`) or a **plant** (\`'P'\`).

A corridor is divided into sections by placing dividers such that each section contains **exactly two seats**. Dividers can be placed at any gap between adjacent rooms.

Return the **number of ways** to place dividers, modulo \`10^9 + 7\`. If there is no valid way, return \`0\`.`,
  constraints: [
    '`n == corridor.length`',
    '`1 <= n <= 10^5`',
    "`corridor[i]` is either `'S'` or `'P'`",
  ],
  examples: [
    {
      input: "corridor = 'SSPPSPS'",
      output: '3',
      explanation: "Seat positions are 0, 1, 4, 6. Between the 2nd seat (index 1) and 3rd seat (index 4), a divider can go after index 1, 2, or 3 — giving 3 ways.",
    },
    {
      input: "corridor = 'PPSPSP'",
      output: '1',
      explanation: 'There are exactly 2 seats, so there is only 1 section and no dividers are needed (or one mandatory split). Only 1 valid arrangement.',
    },
    {
      input: "corridor = 'S'",
      output: '0',
      explanation: 'There is only one seat, so it is impossible to divide the corridor into sections of exactly two seats.',
    },
  ],
  hints: [
    'Count total seats. If the count is odd or zero, return 0.',
    'Collect the positions of all seats. Between the (2i)th seat and (2i+1)th seat (0-indexed pairs), the number of valid divider positions equals pos[2i+1] - pos[2i].',
    'Multiply all such gap counts together modulo 10^9 + 7 to get the answer.',
  ],
  functionName: 'numberOfWays',
  params: ['corridor'],
  starterCode: {
    javascript: `function numberOfWays(corridor) {

}`,
    python: `def numberOfWays(corridor):
    pass`,
  },
  visibleTests: [
    { args: ['SSPPSPS'], expected: 3 },
    { args: ['PPSPSP'], expected: 1 },
    { args: ['S'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['SS'], expected: 1 },
    { args: ['SSSSS'], expected: 0 },
    { args: ['SSPPSS'], expected: 3 },
    { args: ['SPSPSPS'], expected: 2 },
  ],
};
