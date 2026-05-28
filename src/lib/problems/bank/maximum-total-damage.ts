import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-total-damage',
  title: 'Maximum Total Damage With Spell Casting',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'binary-search'],
  description: `A magician has various spells. You are given an array \`power\` where each \`power[i]\` denotes the damage of the \`i\`th spell.

Multiple spells can have the same damage value. Choosing a spell with damage value \`x\` **blocks** any spell with damage \`x - 2\`, \`x - 1\`, \`x + 1\`, or \`x + 2\` from being selected.

Return the **maximum total damage** that a magician can deal.`,
  constraints: [
    '1 <= power.length <= 10^5',
    '1 <= power[i] <= 10^9',
  ],
  examples: [
    {
      input: 'power = [1,1,3,4]',
      output: '6',
      explanation: 'Select spells with damage 1 (total 2) and 4 (total 4). 1 and 4 differ by more than 2, so both are valid. Total = 6.',
    },
    {
      input: 'power = [7,1,6,6]',
      output: '13',
      explanation: 'Select spells with damage 1 (total 1) and 6 (total 12). 1 and 6 differ by more than 2. Total = 13.',
    },
  ],
  hints: [
    'Group spells by their damage value and compute the total damage per unique value.',
    'Sort unique damage values and apply a DP similar to "delete and earn" — if you pick value v, you cannot pick v-1, v-2, v+1, or v+2.',
    'For each sorted unique value, decide: skip it, or take all spells of that value (and skip adjacent values within distance 2).',
  ],
  functionName: 'maximumTotalDamage',
  params: ['power'],
  starterCode: {
    javascript: 'function maximumTotalDamage(power) {\n\n}',
    typescript: "function maximumTotalDamage(power: number[]): number {\n\n}",

    python: 'def maximumTotalDamage(power):\n    pass',
  },
  visibleTests: [
    { args: [[1, 1, 3, 4]], expected: 6 },
    { args: [[7, 1, 6, 6]], expected: 13 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 2 },
    { args: [[1, 1, 1]], expected: 3 },
    { args: [[1, 2, 3, 4, 5]], expected: 7 },
    { args: [[10, 10, 10]], expected: 30 },
    { args: [[3, 1, 3, 6]], expected: 12 },
    { args: [[5, 5, 5, 5]], expected: 20 },
  ],
};
