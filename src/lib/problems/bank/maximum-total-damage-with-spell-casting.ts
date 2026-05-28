import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-total-damage-with-spell-casting',
  title: 'Maximum Total Damage With Spell Casting',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming', 'hash-map'],
  description: `A magician has various spells.

You are given an array \`power\` where each element represents the damage of a spell. Multiple spells can have the same power.

The magician decides to cast a set of spells **in one second** such that:
- The spells are **not** conflicting, meaning if you decide to cast a spell with damage \`x\`, you **cannot** cast any spell with damage \`x - 2\`, \`x - 1\`, \`x + 1\`, or \`x + 2\`.

Each spell can be cast **at most once**.

Return the **maximum** possible total damage that a magician can deal.`,
  constraints: [
    '1 <= power.length <= 10^5',
    '1 <= power[i] <= 10^9',
  ],
  examples: [
    {
      input: 'power = [1,1,3,4]',
      output: '6',
      explanation: 'Cast the spells 1, 1, and 4. Spell 3 conflicts with 4 (|3-4|≤2), and 1 conflicts with 3 (|1-3|=2). Total = 1+1+4 = 6.',
    },
    {
      input: 'power = [7,1,6,6]',
      output: '13',
      explanation: 'Cast spells 7 and 6, 6. Total = 7 + 6 + 6 = 13. (|7-6|=1 — wait, 7 conflicts with 6). Cast 1 and 6, 6: 1+6+6=13. (|1-6|=5, no conflict).',
    },
  ],
  hints: [
    'Group spells by their damage value; sum the damage contribution of each distinct value.',
    'Sort the distinct values. This becomes similar to House Robber but skipping conflicting values (±1 or ±2).',
    'DP: for each value v, decide whether to include it or skip it, advancing past all values within 2.',
  ],
  functionName: 'maximumTotalDamage',
  params: ['power'],
  starterCode: {
    javascript: `function maximumTotalDamage(power) {\n\n}`,
    python: `def maximumTotalDamage(power) -> int:\n    pass`,
    typescript: `function maximumTotalDamage(power: number[]): number {\n\n}`,
  },
  visibleTests: [
    { args: [[1, 1, 3, 4]], expected: 6 },
    { args: [[7, 1, 6, 6]], expected: 13 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 2 },
    { args: [[1, 3]], expected: 3 },
    { args: [[1, 2, 3, 4, 5]], expected: 7 },
    { args: [[10, 10, 10]], expected: 30 },
    { args: [[1, 1, 1, 4, 4]], expected: 11 },
  ],
};
