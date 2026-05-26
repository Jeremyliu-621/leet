import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-k-closest-elements',
  title: 'Find K Closest Elements',
  difficulty: 'medium',
  tags: ['binary-search', 'two-pointers'],
  description: `Given a **sorted** integer array \`arr\`, two integers \`k\` and \`x\`, return the \`k\` closest integers to \`x\` in the array. The result should also be sorted in ascending order.

An integer \`a\` is closer to \`x\` than integer \`b\` if:
- \`|a - x| < |b - x|\`, or
- \`|a - x| == |b - x|\` and \`a < b\` (ties go to the smaller value).`,
  constraints: [
    '`1 <= k <= arr.length`',
    '`1 <= arr.length <= 10^4`',
    '`arr` is sorted in ascending order.',
    '`-10^4 <= arr[i], x <= 10^4`',
  ],
  examples: [
    {
      input: 'arr = [1,2,3,4,5], k = 4, x = 3',
      output: '[1,2,3,4]',
      explanation: 'The 4 closest elements to 3 are 1, 2, 3, 4.',
    },
    {
      input: 'arr = [1,2,3,4,5], k = 4, x = -1',
      output: '[1,2,3,4]',
      explanation: 'The 4 leftmost elements are closest to -1.',
    },
  ],
  hints: [
    'Binary search for the left boundary of the k-element window. Search in [0, arr.length - k].',
    'At index mid, compare `x - arr[mid]` vs `arr[mid + k] - x`. If the left distance is greater, move the window right (lo = mid + 1), otherwise move left (hi = mid).',
    `\`\`\`js
let lo = 0, hi = arr.length - k;
while (lo < hi) {
  const mid = (lo+hi)>>1;
  if (x - arr[mid] > arr[mid+k] - x) lo = mid+1;
  else hi = mid;
}
return arr.slice(lo, lo+k);\`\`\``
  ],
  functionName: 'findClosestElements',
  params: ['arr', 'k', 'x'],
  starterCode: {
    javascript: `function findClosestElements(arr, k, x) {

}`,
    python: `def findClosestElements(arr, k, x):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 4, 3], expected: [1, 2, 3, 4] },
    { args: [[1, 2, 3, 4, 5], 4, -1], expected: [1, 2, 3, 4] },
    { args: [[1, 2, 3, 4, 5], 4, 10], expected: [2, 3, 4, 5] },
  ],
  hiddenTests: [
    { args: [[1, 3, 5, 7, 9], 3, 6], expected: [3, 5, 7] },
    { args: [[1, 2, 3, 4, 5], 1, 3], expected: [3] },
    { args: [[0, 1, 1, 1, 2, 3, 6, 7, 8, 9], 9, 4], expected: [0, 1, 1, 1, 2, 3, 6, 7, 8] },
    { args: [[1, 2, 3, 4, 5], 4, 3], expected: [1, 2, 3, 4] },
  ],
};
