import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-divide-a-long-corridor',
  title: 'Number of Ways to Divide a Long Corridor',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming'],
  description: `Along a hallway, there are \`n\` sections of wall, each marked as either a seat (\`'S'\`) or plant (\`'P'\`). You want to install dividers so that **every section between two consecutive dividers contains exactly 2 seats**.

Return the number of ways to place the dividers, modulo \`10^9 + 7\`. If there is no valid placement, return \`0\`.

Dividers go **between** adjacent positions (in the gaps, not on top of sections). The two ends of the corridor are fixed walls and do not need dividers.

\`\`\`
Input:  corridor = "SSPPSPS"
Output: 3
\`\`\`
Seats are at positions 0, 1, 4, 6. Valid pairs: (0,1) and (4,6). The divider must go in one of 3 gaps between positions 1 and 4: after position 1, 2, or 3.`,
  constraints: [
    'n == corridor.length',
    '1 <= n <= 10^5',
    "corridor[i] is either 'S' or 'P'.",
  ],
  examples: [
    {
      input: 'corridor = "SSPPSPS"',
      output: '3',
      explanation:
        'Seats at indices 0,1,4,6. One divider must separate pair (0,1) from pair (4,6); it can go after index 1, 2, or 3 — giving 3 ways.',
    },
    {
      input: 'corridor = "PPSPSP"',
      output: '1',
      explanation: 'Only 2 seats (at indices 2 and 4), so just one section covering the entire corridor.',
    },
    {
      input: 'corridor = "S"',
      output: '0',
      explanation: 'Odd number of seats — no valid division exists.',
    },
  ],
  hints: [
    "Collect all seat indices into an array. If the count is odd or zero, return 0.",
    'Pair up seats: (seat[0], seat[1]), (seat[2], seat[3]), …. Between adjacent pairs — between seat[2k−1] and seat[2k] — a divider can go in any of the `seat[2k] − seat[2k−1]` gaps.',
    'Multiply all gap counts together modulo 10^9+7. Use BigInt to avoid overflow: `result = (result * BigInt(gap)) % BigInt(1e9+7)`, then convert back to a number at the end.',
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
    { args: ['P'], expected: 0 },
    { args: ['SS'], expected: 1 },
    { args: ['SP'], expected: 0 },
    { args: ['SSSSSS'], expected: 1 },
    { args: ['SSPSPS'], expected: 2 },
    { args: ['SSPSSPPSPS'], expected: 6 },
    { args: ['PPPPP'], expected: 0 },
    { args: ['SPPS'], expected: 1 },
    { args: ['SPPSSPP'], expected: 0 },
  ],
};
