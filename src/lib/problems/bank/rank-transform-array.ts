import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rank-transform-array',
  title: 'Rank Transform of an Array',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an array of integers \`arr\`, replace each element with its **rank**.

The rank represents how large the element is. The rank has the following rules:
- Rank is an integer starting from 1.
- The larger the element, the larger the rank.
- If two elements are equal, their rank must be the same.
- Rank should be as small as possible.`,
  constraints: [
    '0 <= arr.length <= 10^5',
    '-10^9 <= arr[i] <= 10^9',
  ],
  examples: [
    { input: 'arr = [40,10,20,30]', output: '[4,1,2,3]' },
    { input: 'arr = [100,100,100]', output: '[1,1,1]', explanation: 'Same elements get same rank.' },
    { input: 'arr = [37,12,28,9,100,56,80,5,12]', output: '[5,3,4,2,8,6,7,1,3]' },
  ],
  hints: [
    'Level 1: Sort the unique elements and assign ranks 1, 2, 3, ... Then map each original element to its rank.',
    'Level 2: Create a sorted unique copy, build a rank map (value → rank), then map the original array.',
    'Level 3: const sorted=[...new Set(arr)].sort((a,b)=>a-b);const rank=new Map(sorted.map((v,i)=>[v,i+1]));return arr.map(x=>rank.get(x));',
  ],
  functionName: 'arrayRankTransform',
  params: ['arr'],
  starterCode: {
    javascript: 'function arrayRankTransform(arr) {\n  // your code here\n}\n',
    typescript: "function arrayRankTransform(arr: number[]): number[] {\n  // your code here\n}",

    python: 'def arrayRankTransform(arr):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[40, 10, 20, 30]], expected: [4, 1, 2, 3] },
    { args: [[100, 100, 100]], expected: [1, 1, 1] },
    { args: [[37, 12, 28, 9, 100, 56, 80, 5, 12]], expected: [5, 3, 4, 2, 8, 6, 7, 1, 3] },
  ],
  hiddenTests: [
    { args: [[]], expected: [] },
    { args: [[1]], expected: [1] },
    { args: [[-5, 0, 5]], expected: [1, 2, 3] },
    { args: [[2, 1, 2, 1, 3]], expected: [2, 1, 2, 1, 3] },
  ],
};
