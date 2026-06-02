import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-lucky-integer-in-an-array',
  title: 'Find Lucky Integer in an Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an array of integers \`arr\`, a **lucky integer** is an integer that has a frequency in the array equal to its value.

Return *the largest lucky integer in the array*. If there is no lucky integer, return \`-1\`.`,
  constraints: [
    '1 <= arr.length <= 500',
    '1 <= arr[i] <= 500',
  ],
  examples: [
    {
      input: 'arr = [2,2,3,4]',
      output: '2',
      explanation: 'The only lucky number is 2 because frequency(2) == 2.',
    },
    {
      input: 'arr = [1,2,2,3,3,3]',
      output: '3',
      explanation: 'Both 1 and 3 are lucky: frequency(1)==1, frequency(3)==3. Return the largest.',
    },
    {
      input: 'arr = [2,2,2,3,3]',
      output: '-1',
      explanation: 'No lucky integer exists.',
    },
  ],
  hints: [
    'Level 1: Count the frequency of each number using a hash map. Then check for each number whether its frequency equals its value.',
    'Level 2: Iterate over the frequency map entries and find the maximum key where key == value (frequency).',
    'Level 3: O(n) time and space. If no such key exists, return -1.',
  ],
  functionName: 'findLucky',
  params: ['arr'],
  starterCode: {
    javascript: `function findLucky(arr) {
  const freq = {};
  for (const n of arr) freq[n] = (freq[n] ?? 0) + 1;
  let max = -1;
  for (const [k, v] of Object.entries(freq)) if (+k === v) max = Math.max(max, +k);
  return max;
}`,
    typescript: `function findLucky(arr: number[]): number {
  const freq: Record<number, number> = {};
  for (const n of arr) freq[n] = (freq[n] ?? 0) + 1;
  let max = -1;
  for (const [k, v] of Object.entries(freq)) if (+k === v) max = Math.max(max, +k);
  return max;
}`,
    python: `def findLucky(arr):
    from collections import Counter
    freq = Counter(arr)
    return max((k for k, v in freq.items() if k == v), default=-1)`,
  },
  visibleTests: [
    { args: [[2, 2, 3, 4]], expected: 2 },
    { args: [[1, 2, 2, 3, 3, 3]], expected: 3 },
    { args: [[2, 2, 2, 3, 3]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[7, 7, 7, 7, 7, 7, 7]], expected: 7 },
    { args: [[2, 2]], expected: 2 },
    { args: [[1, 2]], expected: 1 },
    { args: [[3, 3]], expected: -1 },
    { args: [[1, 1, 2, 2, 3, 3, 3]], expected: 3 },
    { args: [[5, 5, 5, 5, 5]], expected: 5 },
  ],
};
