import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-integers-by-number-of-1-bits',
  title: 'Sort Integers by The Number of 1 Bits',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`arr\`. Sort the integers in the array in ascending order by the number of \`1\`s in their binary representation, breaking ties by their **decimal value**.

Return the sorted array.`,
  constraints: ['1 <= arr.length <= 500', '0 <= arr[i] <= 10^4'],
  examples: [
    {
      input: 'arr = [0,1,2,3,4,5,6,7,8]',
      output: '[0,1,2,4,8,3,5,6,7]',
      explanation:
        '[0] has 0 ones. [1,2,4,8] have 1 one each (sorted by value). [3,5,6] have 2 ones each. [7] has 3 ones.',
    },
    {
      input: 'arr = [1024,512,256]',
      output: '[256,512,1024]',
      explanation: 'All have exactly 1 one bit, so sorted by decimal value.',
    },
  ],
  hints: [
    'Sort with a custom comparator: first by popcount (number of set bits), then by numeric value to break ties.',
    'Use bit tricks to count set bits: repeatedly extract the lowest bit with `n & 1` and shift right, or use `n.toString(2).split("0").join("").length`.',
  ],
  functionName: 'sortByBits',
  params: ['arr'],
  starterCode: {
    javascript: 'function sortByBits(arr) {\n  \n}\n',
    python: 'def sortByBits(arr):\n    pass\n',
  },
  visibleTests: [
    { args: [[0, 1, 2, 3, 4, 5, 6, 7, 8]], expected: [0, 1, 2, 4, 8, 3, 5, 6, 7] },
    { args: [[1024, 512, 256]], expected: [256, 512, 1024] },
    { args: [[1, 2, 3, 4, 5]], expected: [1, 2, 4, 3, 5] },
  ],
  hiddenTests: [
    { args: [[10000, 10000]], expected: [10000, 10000] },
    { args: [[7, 2, 19, 3, 5, 23, 17, 11, 13]], expected: [2, 3, 5, 17, 7, 11, 13, 19, 23] },
    { args: [[1, 3, 2]], expected: [1, 2, 3] },
    { args: [[0]], expected: [0] },
  ],
};
