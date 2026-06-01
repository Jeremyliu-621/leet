import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-array-arithmetic-progression',
  title: 'Can Make Arithmetic Progression From Sequence',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `A sequence of numbers is called an **arithmetic progression** if the difference between any two consecutive elements is the same.

Given an array of numbers \`arr\`, return \`true\` if the array can be rearranged to form an arithmetic progression. Otherwise, return \`false\`.`,
  constraints: [
    '`2 <= arr.length <= 1000`',
    '`-10^6 <= arr[i] <= 10^6`',
  ],
  examples: [
    {
      input: 'arr = [3,5,1]',
      output: 'true',
      explanation: 'We can rearrange the array as [1,3,5] or [5,3,1] with a common difference of 2.',
    },
    {
      input: 'arr = [1,2,4]',
      output: 'false',
      explanation: 'There is no way to rearrange these elements to form an arithmetic progression.',
    },
  ],
  hints: [
    'Sort the array first.',
    'After sorting, check that all consecutive differences are equal.',
    `\`\`\`js
function canMakeArithmeticProgression(arr) {
  arr.sort((a,b) => a-b);
  const d = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++)
    if (arr[i] - arr[i-1] !== d) return false;
  return true;
}\`\`\``,
  ],
  functionName: 'canMakeArithmeticProgression',
  params: ['arr'],
  starterCode: {
    javascript: `function canMakeArithmeticProgression(arr) {
  arr.sort((a, b) => a - b);
  const d = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) if (arr[i] - arr[i - 1] !== d) return false;
  return true;
}`,
    typescript: `function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a, b) => a - b);
  const d = arr[1]! - arr[0]!;
  for (let i = 2; i < arr.length; i++) if (arr[i]! - arr[i - 1]! !== d) return false;
  return true;
}`,
    python: `def canMakeArithmeticProgression(arr):
    arr.sort()
    d = arr[1] - arr[0]
    return all(arr[i] - arr[i-1] == d for i in range(2, len(arr)))`,
  },
  visibleTests: [
    { args: [[3, 5, 1]], expected: true },
    { args: [[1, 2, 4]], expected: false },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: true },
    { args: [[1, 3, 5, 7]], expected: true },
    { args: [[7, 1, 5, 3]], expected: true },
    { args: [[1, 1]], expected: true },
    { args: [[1, 2, 4, 8]], expected: false },
  ],
};
