import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-absolute-difference',
  title: 'Minimum Absolute Difference',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array of **distinct** integers \`arr\`, find all pairs of elements with the minimum absolute difference of any two elements.

Return a list of pairs in ascending order (with respect to pairs), each pair \`[a, b]\` follows:
- \`a, b\` are from \`arr\`
- \`a < b\`
- \`b - a\` equals the minimum absolute difference of any two elements in \`arr\``,
  constraints: [
    '2 <= arr.length <= 10^5',
    '-10^6 <= arr[i] <= 10^6',
  ],
  examples: [
    {
      input: 'arr = [4,2,1,3]',
      output: '[[1,2],[2,3],[3,4]]',
    },
    {
      input: 'arr = [1,3,6,10,15]',
      output: '[[1,3]]',
    },
    {
      input: 'arr = [3,8,-10,23,19,-4,-14,27]',
      output: '[[-14,-10],[19,23],[23,27]]',
    },
  ],
  hints: [
    'Sort the array. The minimum absolute difference must come from adjacent elements after sorting.',
    'Find the minimum difference among all adjacent pairs.',
    'Collect all adjacent pairs with that minimum difference.',
  ],
  functionName: 'minimumAbsDifference',
  params: ['arr'],
  starterCode: {
    javascript: `function minimumAbsDifference(arr) {
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  for (let i = 1; i < arr.length; i++) minDiff = Math.min(minDiff, arr[i] - arr[i-1]);
  const result = [];
  for (let i = 1; i < arr.length; i++) if (arr[i] - arr[i-1] === minDiff) result.push([arr[i-1], arr[i]]);
  return result;
}`,
    typescript: `function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  for (let i = 1; i < arr.length; i++) minDiff = Math.min(minDiff, arr[i]! - arr[i-1]!);
  const result: number[][] = [];
  for (let i = 1; i < arr.length; i++) if (arr[i]! - arr[i-1]! === minDiff) result.push([arr[i-1]!, arr[i]!]);
  return result;
}`,
    python: `def minimumAbsDifference(arr):
    if hasattr(arr, 'to_py'): arr = list(arr.to_py())
    arr.sort()
    min_diff = min(arr[i+1] - arr[i] for i in range(len(arr) - 1))
    return [[arr[i], arr[i+1]] for i in range(len(arr) - 1) if arr[i+1] - arr[i] == min_diff]`,
  },
  visibleTests: [
    { args: [[4, 2, 1, 3]], expected: [[1, 2], [2, 3], [3, 4]] },
    { args: [[1, 3, 6, 10, 15]], expected: [[1, 3]] },
    { args: [[3, 8, -10, 23, 19, -4, -14, 27]], expected: [[-14, -10], [19, 23], [23, 27]] },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: [[1, 2]] },
    { args: [[1, 3, 5, 7]], expected: [[1, 3], [3, 5], [5, 7]] },
    { args: [[40, 11, 26, 27]], expected: [[26, 27]] },
    { args: [[-5, 0, 5]], expected: [[-5, 0], [0, 5]] },
  ],
};
