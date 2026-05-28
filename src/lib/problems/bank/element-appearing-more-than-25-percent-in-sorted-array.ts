import type { Problem } from '../types';

export const problem: Problem = {
  id: 'element-appearing-more-than-25-percent-in-sorted-array',
  title: 'Element Appearing More Than 25% In Sorted Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`arr\` sorted in **non-decreasing** order, there is exactly one integer in the array that occurs **more than 25%** of the time, return that integer.`,
  constraints: [
    '`1 <= arr.length <= 10^4`',
    '`0 <= arr[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'arr = [1,2,2,6,6,6,6,7,10]',
      output: '6',
      explanation: '6 appears 4 times out of 9 elements (> 25%).',
    },
    {
      input: 'arr = [1,1]',
      output: '1',
      explanation: '1 appears 2 times out of 2 elements (100% > 25%).',
    },
    {
      input: 'arr = [1]',
      output: '1',
      explanation: 'Only element, trivially appears > 25%.',
    },
  ],
  hints: [
    'The candidate element must appear at one of the quarter-points of the array (indices n/4, n/2, 3n/4).',
    'For each candidate, count its occurrences (or use binary search on the sorted array) and check if the count exceeds n/4.',
    'A simple linear scan tracking run lengths also works in O(n).',
    `\`\`\`js
function findSpecialInteger(arr) {
  const n = arr.length;
  const quarter = Math.floor(n / 4);
  for (const cand of [arr[quarter], arr[2 * quarter], arr[3 * quarter]]) {
    let count = 0;
    for (const x of arr) if (x === cand) count++;
    if (count > quarter) return cand;
  }
  return arr[0];
}\`\`\``,
  ],
  functionName: 'findSpecialInteger',
  params: ['arr'],
  starterCode: {
    javascript: `function findSpecialInteger(arr) {

}`,
    typescript: 'function findSpecialInteger(arr: number[]): number {\n\n}',
    python: `def findSpecialInteger(arr):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 2, 6, 6, 6, 6, 7, 10]], expected: 6 },
    { args: [[1, 1]], expected: 1 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 3, 3, 3, 7, 8, 9]], expected: 3 },
    { args: [[0, 0, 0, 0, 1]], expected: 0 },
    { args: [[5, 5, 5, 5, 5, 7, 8, 9, 10]], expected: 5 },
    { args: [[1, 2, 2, 2, 2, 3]], expected: 2 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7]], expected: 7 },
  ],
};
