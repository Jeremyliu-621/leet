import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-peaks',
  title: 'Find the Peaks',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **0-indexed** array \`mountain\`. Your task is to find all the **peaks** in the \`mountain\` array.

Return an array that consists of indices of **peaks** in the given array in **any order**.

**Notes:**
- A **peak** is defined as an element that is **strictly greater** than its neighboring elements.
- The first and last elements of the array are **not** a peak.`,
  constraints: [
    '3 <= mountain.length <= 100',
    '1 <= mountain[i] <= 100',
  ],
  examples: [
    {
      input: 'mountain = [2,4,4]',
      output: '[]',
      explanation: 'mountain[1] = 4 is not strictly greater than mountain[2] = 4.',
    },
    {
      input: 'mountain = [1,4,3,8,5]',
      output: '[1,3]',
      explanation: 'mountain[1]=4 > 1 and 3 (peak); mountain[3]=8 > 3 and 5 (peak).',
    },
  ],
  hints: [
    'Iterate through indices 1 to n-2.',
    'Check if mountain[i] > mountain[i-1] AND mountain[i] > mountain[i+1].',
    `\`\`\`js
function findPeaks(mountain) {
  const peaks = [];
  for (let i = 1; i < mountain.length-1; i++)
    if (mountain[i] > mountain[i-1] && mountain[i] > mountain[i+1]) peaks.push(i);
  return peaks;
}\`\`\``,
  ],
  functionName: 'findPeaks',
  params: ['mountain'],
  starterCode: {
    javascript: `function findPeaks(mountain) {

}`,
    python: `def findPeaks(mountain):
    pass`,
  },
  visibleTests: [
    { args: [[2, 4, 4]], expected: [] },
    { args: [[1, 4, 3, 8, 5]], expected: [1, 3] },
  ],
  hiddenTests: [
    { args: [[1, 2, 1]], expected: [1] },
    { args: [[1, 1, 1]], expected: [] },
    { args: [[5, 6, 5, 6, 5]], expected: [1, 3] },
    { args: [[1, 2, 3]], expected: [] },
  ],
};
