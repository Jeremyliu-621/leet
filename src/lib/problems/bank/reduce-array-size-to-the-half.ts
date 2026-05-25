import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reduce-array-size-to-the-half',
  title: 'Reduce Array Size to The Half',
  difficulty: 'medium',
  tags: ['hash-map', 'arrays'],
  description: `You are given an integer array \`arr\`. You can choose a set of integers and remove all the occurrences of these integers in the array. Return the minimum size of the set so that at least half of the integers of the array are removed.`,
  constraints: [
    '`2 <= arr.length <= 10^5`',
    '`arr.length is even`',
    '`1 <= arr[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'arr = [3,3,3,3,5,5,5,2,2,7]',
      output: '2',
      explanation: 'Choosing {3,5} removes 4+3=7 elements, leaving 3. Since 3 <= 10/2=5, this satisfies the condition. You cannot do it with just 1 element.',
    },
    {
      input: 'arr = [7,7,7,7,7,7]',
      output: '1',
      explanation: 'Choosing {7} removes all 6 elements.',
    },
  ],
  hints: [
    'Count the frequency of each value. Sort frequencies in descending order.',
    'Greedily pick the most frequent elements first, accumulating removed count until you\'ve removed at least n/2 elements.',
    'The greedy choice is optimal: always removing the highest-frequency element minimizes the set size.',
  ],
  functionName: 'minSetSize',
  params: ['arr'],
  starterCode: {
    javascript: `function minSetSize(arr) {

}`,
    python: `def minSetSize(arr):
    pass`,
  },
  visibleTests: [
    { args: [[3, 3, 3, 3, 5, 5, 5, 2, 2, 7]], expected: 2 },
    { args: [[7, 7, 7, 7, 7, 7]], expected: 1 },
    { args: [[1, 9]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 3 },
    { args: [[2, 2, 1, 1, 3]], expected: 2 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]], expected: 5 },
  ],
};
