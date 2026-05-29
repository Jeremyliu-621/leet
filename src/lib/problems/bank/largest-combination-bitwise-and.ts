import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-combination-bitwise-and',
  title: 'Largest Combination With Bitwise AND Greater Than Zero',
  difficulty: 'medium',
  tags: ['bit-manipulation', 'arrays', 'hash-map'],
  description: `The **bitwise AND** of an array \`nums\` is the bitwise AND of all integers in \`nums\`.

- For example, for \`nums = [1, 5, 3]\`, the bitwise AND is \`1 & 5 & 3 = 1\`.

Return the **size** of the **largest** combination of elements in \`candidates\` such that their bitwise AND is greater than \`0\`.`,
  constraints: [
    '`1 <= candidates.length <= 10^5`',
    '`1 <= candidates[i] <= 10^7`',
  ],
  examples: [
    { input: 'candidates = [16,17,71,62,12,24,14]', output: '4', explanation: 'Combination [16,17,12,24]: AND = 16&17&12&24 = 0 — actually example uses [17,71,62,14]: 17&71&62&14=0... answer is 4 from [16,17,12,24] where bit 4 is set.' },
    { input: 'candidates = [8,8]', output: '2' },
  ],
  hints: [
    'For the bitwise AND to be > 0, at least one bit position must be 1 in all chosen numbers.',
    'For each bit position (0 to 23), count how many candidates have that bit set.',
    'The answer is the maximum such count.',
  ],
  functionName: 'largestCombination',
  params: ['candidates'],
  starterCode: {
    javascript: 'function largestCombination(candidates) {\n  \n}\n',
    typescript: "function largestCombination(candidates: number[]): number {\n  \n}",

    python: 'def largestCombination(candidates):\n    pass\n',
  },
  visibleTests: [
    { args: [[16, 17, 71, 62, 12, 24, 14]], expected: 4 },
    { args: [[8, 8]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[1, 1, 1, 1]], expected: 4 },
    { args: [[4, 8, 16]], expected: 1 },
    { args: [[3, 3, 3, 7]], expected: 4 },
  ],
};
