import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-n-and-double-exist',
  title: 'Check If N and Its Double Exist',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an array \`arr\` of integers, check if there exist two indices \`i\` and \`j\` such that:

- \`i != j\`
- \`0 <= i, j < arr.length\`
- \`arr[i] == 2 * arr[j]\``,
  constraints: [
    '`2 <= arr.length <= 500`',
    '`-10^3 <= arr[i] <= 10^3`',
  ],
  examples: [
    {
      input: 'arr = [10,2,5,3]',
      output: 'true',
      explanation: '10 == 2 * 5.',
    },
    {
      input: 'arr = [3,1,7,11]',
      output: 'false',
    },
  ],
  hints: [
    'Use a set. For each element x, check if x*2 or x/2 (when x is even) is already in the set, then add x.',
    'Handle `0` carefully: `0 * 2 = 0`, so you\'d need at least two `0`s. For non-zero `x`, check if `x * 2` is already in the set before inserting.',
    `\`\`\`js
const seen = new Set();
for (const x of arr) {
  if (seen.has(x * 2) || (x % 2 === 0 && seen.has(x / 2))) return true;
  seen.add(x);
}
return false;\`\`\``
  ],
  functionName: 'checkIfExist',
  params: ['arr'],
  starterCode: {
    javascript: `function checkIfExist(arr) {

}`,
    python: `def checkIfExist(arr):
    pass`,
  },
  visibleTests: [
    { args: [[10, 2, 5, 3]], expected: true },
    { args: [[3, 1, 7, 11]], expected: false },
  ],
  hiddenTests: [
    { args: [[7, 1, 14, 11]], expected: true },
    { args: [[0, 0]], expected: true },
    { args: [[0, 1]], expected: false },
    { args: [[-2, 0, 10, -19, 4, 6, -8]], expected: false },
    { args: [[1, 2, 4, 8]], expected: true },
    { args: [[1, 3, 5, 7]], expected: false },
  ],
};
