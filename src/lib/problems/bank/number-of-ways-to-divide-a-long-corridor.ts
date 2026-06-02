import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-divide-a-long-corridor',
  title: 'Number of Ways to Divide a Long Corridor',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming', 'strings'],
  description: `Along a long corridor, there is a line of seats and decorative plants. You are given a 0-indexed string \`corridor\` of length \`n\` consisting of letters \`'S'\` and \`'P'\` where each \`'S'\` represents a seat and each \`'P'\` represents a plant.

One room divider has **already** been installed to the left of index \`0\`, and another to the right of index \`n - 1\`. Additional room dividers can be installed. For each section between dividers, there must be **exactly 2 seats**.

Return the number of ways to install dividers such that each section has exactly 2 seats. Since the answer may be very large, return it **modulo** \`10^9 + 7\`. If there is no way, return \`0\`.`,
  constraints: [
    'n == corridor.length',
    '1 <= n <= 10^5',
    "corridor[i] is either 'S' or 'P'",
  ],
  examples: [
    {
      input: 'corridor = "SSPPSPS"',
      output: '3',
      explanation: 'Seats at positions 0,1,4,6. Pairs (0,1) and (4,6). Between them: 2 plants → 3 valid cut positions.',
    },
    {
      input: 'corridor = "PPSPSP"',
      output: '1',
      explanation: 'Seats at positions 2 and 4. One section with 2 seats — no additional dividers needed, exactly 1 way.',
    },
    {
      input: 'corridor = "S"',
      output: '0',
      explanation: 'Only 1 seat; impossible to make sections each with exactly 2 seats.',
    },
  ],
  hints: [
    'Level 1: Find all seat positions. If total seats is 0 or odd, return 0.',
    'Level 2: Group seats into consecutive pairs: (s1,s2), (s3,s4), .... Between the 2nd seat of pair i and the 1st seat of pair i+1, count the gap distance (s_{2i+1} - s_{2i}).',
    'Level 3: Each gap of distance d contributes d valid cut positions. Multiply all gap distances modulo 10^9+7 to get the answer.',
  ],
  functionName: 'numberOfWays',
  params: ['corridor'],
  starterCode: {
    javascript: `function numberOfWays(corridor) {

}`,
    typescript: `function numberOfWays(corridor: string): number {

}`,
    python: `def numberOfWays(corridor: str) -> int:
    pass`,
  },
  visibleTests: [
    { args: ['SSPPSPS'], expected: 3 },
    { args: ['PPSPSP'], expected: 1 },
    { args: ['S'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['SS'], expected: 1 },
    { args: ['PP'], expected: 0 },
    { args: ['SSSS'], expected: 1 },
    { args: ['SSPSPS'], expected: 2 },
    { args: ['SSPPSS'], expected: 3 },
    { args: ['SSSSSS'], expected: 1 },
    { args: ['SPSPSP'], expected: 0 },
    { args: ['SSPSS'], expected: 2 },
  ],
};
