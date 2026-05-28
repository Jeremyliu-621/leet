import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-lucky-integer',
  title: 'Find Lucky Integer in an Array',
  difficulty: 'easy',
  tags: ['hash-map'],
  description: `Given an array of integers \`arr\`, a **lucky integer** is an integer that has a frequency in the array equal to its value.

Return the **largest** lucky integer in the array. If there is no lucky integer, return \`-1\`.`,
  constraints: [
    '1 <= arr.length <= 500',
    '1 <= arr[i] <= 500',
  ],
  examples: [
    { input: 'arr = [2,2,3,4]', output: '2', explanation: '2 appears 2 times, 3 appears 1 time, 4 appears 1 time. Lucky integer is 2.' },
    { input: 'arr = [1,2,2,3,3,3]', output: '3', explanation: '1 appears 1 time (lucky), 2 appears 2 times (lucky), 3 appears 3 times (lucky). Largest is 3.' },
    { input: 'arr = [2,2,2,3,3]', output: '-1', explanation: '2 appears 3 times (not lucky), 3 appears 2 times (not lucky).' },
  ],
  hints: [
    'Count frequency with a hash map. Then find the maximum value where freq[val] === val.',
    "Build a frequency Map by iterating arr. Then iterate the map entries and collect keys where key===value. Return the max, or -1 if none.",
    'const f=new Map<number,number>();for(const n of arr)f.set(n,(f.get(n)??0)+1);return Math.max(-1,...[...f].filter(([k,v])=>k===v).map(([k])=>k));',
  ],
  functionName: 'findLucky',
  params: ['arr'],
  starterCode: {
    javascript: 'function findLucky(arr) {\n  \n}\n',
    typescript: "function findLucky(arr: number[]): number {\n  \n}",

    python: 'def findLucky(arr):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 2, 3, 4]], expected: 2 },
    { args: [[1, 2, 2, 3, 3, 3]], expected: 3 },
    { args: [[2, 2, 2, 3, 3]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[2]], expected: -1 },
    { args: [[5, 5, 5, 5, 5]], expected: 5 },
    { args: [[1, 1, 2, 3, 4]], expected: -1 },
    { args: [[1, 2, 3, 4, 5]], expected: 1 },
  ],
};
