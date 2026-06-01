import type { Problem } from '../types';

export const problem: Problem = {
  id: 'brightest-position-on-street',
  title: 'Brightest Position on Street',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `A street is modeled as an infinite number line. You are given a 2D integer array \`lights\` where \`lights[i] = [position_i, range_i]\` indicates a streetlight at \`position_i\` that illuminates every point in \`[position_i - range_i, position_i + range_i]\`.

Return the **brightest** position on the street (the position covered by the most lights). If there are multiple, return the **smallest** one.`,
  constraints: [
    '1 <= lights.length <= 50',
    '-10^8 <= position_i <= 10^8',
    '0 <= range_i <= 10^8',
  ],
  examples: [
    {
      input: 'lights = [[-3,2],[1,2],[3,3]]',
      output: '-1',
      explanation: 'Light 0 covers [-5,-1], light 1 covers [-1,3], light 2 covers [0,6]. Position -1 is covered by lights 0 and 1 (brightness 2), the maximum.',
    },
    {
      input: 'lights = [[1,0],[2,0]]',
      output: '1',
      explanation: 'Each position is covered by at most 1 light. Position 1 (brightness 1) ties with position 2. Return smallest: 1.',
    },
  ],
  hints: [
    'Use a sweep-line approach: create +1 events at (position - range) and -1 events at (position + range + 1).',
    'Sort all events by position. Process events at the same position together.',
    'Track the running count after processing each position\'s events; record the first position where count is maximized.',
  ],
  functionName: 'brightestPosition',
  params: ['lights'],
  starterCode: {
    javascript: 'function brightestPosition(lights) {\n  \n}\n',
    typescript: 'function brightestPosition(lights: number[][]): number {\n  \n}',
    python: 'def brightestPosition(lights):\n    pass\n',
  },
  visibleTests: [
    { args: [[[-3, 2], [1, 2], [3, 3]]], expected: -1 },
    { args: [[[1, 0], [2, 0]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[0, 0]]], expected: 0 },
    { args: [[[0, 1], [0, 1]]], expected: -1 },
    { args: [[[5, 3], [7, 2]]], expected: 5 },
    { args: [[[0, 10]]], expected: -10 },
  ],
};
