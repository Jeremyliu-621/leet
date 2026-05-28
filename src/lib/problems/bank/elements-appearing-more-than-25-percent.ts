import type { Problem } from '../types';

export const problem: Problem = {
  id: 'elements-appearing-more-than-25-percent',
  title: 'Element Appearing More Than 25% In Sorted Array',
  difficulty: 'easy',
  tags: ['arrays', 'binary-search'],
  description: `Given an integer array \`arr\` sorted in **non-decreasing** order, there is exactly one integer that appears more than **25%** of the time.

Return that integer.`,
  constraints: [
    '1 <= arr.length <= 10^4',
    '0 <= arr[i] <= 10^5',
    'arr is sorted in non-decreasing order.',
    'There is only one integer that appears more than 25% of the time.',
  ],
  examples: [
    {
      input: 'arr = [1,2,2,6,6,6,6,7,10]',
      output: '6',
      explanation: '6 appears 4 times out of 9 elements = 44.4% > 25%.',
    },
    {
      input: 'arr = [1,1]',
      output: '1',
    },
  ],
  hints: [
    'Since arr is sorted, every element that appears > 25% must span at least n/4 consecutive positions.',
    'Check candidates at indices n/4, n/2, 3n/4. Use binary search to count occurrences, or just check if arr[i] == arr[i + n/4].',
    `\`\`\`js
function findSpecialValue(arr) {
  const threshold = arr.length / 4;
  for (const v of arr) {
    // binary search leftmost and rightmost
    const lo = arr.indexOf(v);
    const hi = arr.lastIndexOf(v);
    if (hi - lo + 1 > threshold) return v;
  }
}\`\`\``,
  ],
  starterCode: {
    javascript: `function findSpecialInteger(arr) {
  // arr: sorted number array
  // Return the element appearing > 25% of the time
}`,
    typescript: "function findSpecialInteger(arr: number[]): number {\n  // arr: sorted number array\n  // Return the element appearing > 25% of the time\n}",

    python: `def findSpecialInteger(arr: list[int]) -> int:
    # Your code here
    pass`,
  },
  functionName: 'findSpecialInteger',
  params: ['arr'],
  visibleTests: [
    { args: [[1, 2, 2, 6, 6, 6, 6, 7, 10]], expected: 6 },
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 1, 2, 2, 3, 3, 3, 3]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 1, 1, 1, 2, 3, 4]], expected: 1 },
    { args: [[1, 2, 3, 4, 4, 4, 4, 4]], expected: 4 },
    { args: [[0, 0, 0, 1, 2, 3]], expected: 0 },
    { args: [[10, 10, 10, 10, 20, 20, 20]], expected: 10 },
  ],
};
