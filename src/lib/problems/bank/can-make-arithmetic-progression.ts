import type { Problem } from '../types';

export const problem: Problem = {
  id: 'can-make-arithmetic-progression',
  title: 'Can Make Arithmetic Progression From Sequence',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `A sequence of numbers is called an **arithmetic progression** if the difference between any two consecutive elements is the same.

Given an array of numbers \`arr\`, return \`true\` if the array can be rearranged to form an arithmetic progression. Otherwise, return \`false\`.`,
  constraints: [
    '2 <= arr.length <= 1000',
    '-10^6 <= arr[i] <= 10^6',
  ],
  examples: [
    { input: 'arr = [3,5,1]', output: 'true', explanation: 'Sorted: [1,3,5], difference = 2.' },
    { input: 'arr = [1,2,4]', output: 'false', explanation: 'No rearrangement forms an AP.' },
  ],
  hints: [
    'Level 1: Sort the array, then check if all consecutive differences are equal.',
    'Level 2: Sort, compute the first difference, then verify all other differences match.',
    'Level 3: arr.sort((a,b)=>a-b);const d=arr[1]-arr[0];return arr.every((_,i)=>i<2||arr[i]-arr[i-1]===d);',
  ],
  functionName: 'canMakeArithmeticProgression',
  params: ['arr'],
  starterCode: {
    javascript: `function canMakeArithmeticProgression(arr) {
  arr.sort((a, b) => a - b);
  const d = arr[1] - arr[0];
  return arr.every((_, i) => i < 2 || arr[i] - arr[i-1] === d);
}`,
    typescript: `function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a, b) => a - b);
  const d = arr[1]! - arr[0]!;
  return arr.every((_, i) => i < 2 || arr[i]! - arr[i-1]! === d);
}`,
    python: `def canMakeArithmeticProgression(arr):
    arr = list(arr.to_py()) if hasattr(arr, 'to_py') else list(arr)
    arr.sort()
    d = arr[1] - arr[0]
    return all(arr[i] - arr[i-1] == d for i in range(2, len(arr)))`,
  },
  visibleTests: [
    { args: [[3, 5, 1]], expected: true },
    { args: [[1, 2, 4]], expected: false },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: true },
    { args: [[5, 5, 5]], expected: true },
    { args: [[1, 3, 5, 7, 9]], expected: true },
    { args: [[1, 5, 3, 2, 4]], expected: true },
    { args: [[1, 2, 3, 5]], expected: false },
  ],
};
