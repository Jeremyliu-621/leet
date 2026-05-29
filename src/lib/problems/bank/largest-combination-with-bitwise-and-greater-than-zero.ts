import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-combination-with-bitwise-and-greater-than-zero',
  title: 'Largest Combination With Bitwise AND Greater Than Zero',
  difficulty: 'medium',
  tags: ['arrays', 'bit-manipulation'],
  description: `The **bitwise AND** of an array \`nums\` is the bitwise AND of all integers in \`nums\`.

- For example, for \`nums = [1, 5, 3]\`, the bitwise AND is \`1 & 5 & 3 = 1\`.

Return the **size of the largest combination** of elements of \`candidates\` with a bitwise AND **greater than** \`0\`.`,
  constraints: [
    '1 <= candidates.length <= 10^5',
    '1 <= candidates[i] <= 10^7',
  ],
  examples: [
    {
      input: 'candidates = [16,17,71,62,12,24,14]',
      output: '4',
      explanation: 'Combination [16,17,62,24] has AND = 16 & 17 & 62 & 24 = 16 > 0. Size = 4.',
    },
    {
      input: 'candidates = [8,8]',
      output: '2',
      explanation: 'Both elements share bit 3, so their AND = 8 > 0. Size = 2.',
    },
  ],
  hints: [
    'For the AND of a subset to be > 0, all elements must share at least one common bit.',
    'For each bit position (0 to 23), count how many candidates have that bit set.',
    'The answer is the maximum count across all bit positions.',
  ],
  functionName: 'largestCombination',
  params: ['candidates'],
  starterCode: {
    javascript: 'function largestCombination(candidates) {\n  \n}',
    typescript: 'function largestCombination(candidates: number[]): number {\n  \n}',
    python: 'def largestCombination(candidates):\n    ',
  },
  visibleTests: [
    { args: [[16, 17, 71, 62, 12, 24, 14]], expected: 4 },
    { args: [[8, 8]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[16, 17, 71, 62, 12, 24, 14]], expected: 4 },
    { args: [[8, 8]], expected: 2 },
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 4, 8, 16]], expected: 1 },
    { args: [[3, 3, 3]], expected: 3 },
    { args: [[7, 7, 7, 7]], expected: 4 },
    { args: [[1, 1, 1, 2, 2, 4]], expected: 3 },
    { args: [[6, 3, 6, 5, 6]], expected: 4 },
  ],
};
