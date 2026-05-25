import type { Problem } from '../types';

export const problem: Problem = {
  id: 'move-pieces-to-obtain-a-string',
  title: 'Move Pieces to Obtain a String',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `You are given two strings \`start\` and \`target\`, each of length \`n\`, composed of \`'L'\`, \`'R'\`, and \`'_'\` characters.

The rules:
- \`'L'\` can move **left** past any adjacent \`'_'\` (i.e., swap \`L_\` → \`_L\`).
- \`'R'\` can move **right** past any adjacent \`'_'\` (i.e., swap \`_R\` → \`R_\`).
- \`'L'\` and \`'R'\` pieces **cannot** pass through each other.

Return \`true\` if \`start\` can be transformed into \`target\`, or \`false\` otherwise.`,
  constraints: [
    'n === start.length === target.length',
    '1 <= n <= 10^5',
    'start and target consist of the characters \'L\', \'R\', and \'_\'.',
  ],
  examples: [
    {
      input: 'start = "_L__R__R_", target = "L______RR"',
      output: 'true',
      explanation: 'The L at index 1 moves left to index 0. Each R moves right to fill the trailing positions.',
    },
    {
      input: 'start = "R_L_", target = "__LR"',
      output: 'false',
      explanation: 'The relative order of L and R pieces differs between start and target, which is impossible to achieve.',
    },
    {
      input: 'start = "_R", target = "R_"',
      output: 'false',
      explanation: 'R can only move right, but reaching "R_" from "_R" would require R to move left.',
    },
  ],
  hints: [
    'First check that the sequences of L and R characters (ignoring \'_\') are identical in both strings. If they differ, no transformation is possible.',
    'Use two pointers i and j, skipping \'_\' in each string. For every aligned non-blank character pair, verify the movement constraint: an \'L\' piece can only have moved left (so its start position must be ≥ its target position), and an \'R\' piece can only have moved right (start position ≤ target position).',
    'If `start[i] === \'L\'` and `i < j` (L would need to move right), return false. If `start[i] === \'R\'` and `i > j` (R would need to move left), return false.',
  ],
  functionName: 'canChange',
  params: ['start', 'target'],
  starterCode: {
    javascript: `function canChange(start, target) {

}`,
    python: `def canChange(start, target):
    pass`,
  },
  visibleTests: [
    { args: ['_L__R__R_', 'L______RR'], expected: true },
    { args: ['R_L_', '__LR'], expected: false },
    { args: ['_R', 'R_'], expected: false },
  ],
  hiddenTests: [
    { args: ['_L_', 'L__'], expected: true },
    { args: ['L_L', '_LL'], expected: false },
    { args: ['_', '_'], expected: true },
    { args: ['R__R__R_', 'R__R__R_'], expected: true },
    { args: ['__L__', '__L__'], expected: true },
    { args: ['L_R', 'LR_'], expected: false },
    { args: ['R_L', 'R_L'], expected: true },
    { args: ['_RL_', '_RL_'], expected: true },
    { args: ['RL', 'LR'], expected: false },
  ],
};
