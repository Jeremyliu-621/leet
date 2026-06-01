import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-distance-value-between-two-arrays',
  title: 'Find the Distance Value Between Two Arrays',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given two integer arrays \`arr1\` and \`arr2\`, and an integer \`d\`, return the **distance value** between the two arrays.

The **distance value** is the count of elements \`arr1[i]\` such that there is **no** element \`arr2[j]\` where \`|arr1[i] - arr2[j]| <= d\`.`,
  constraints: [
    '1 <= arr1.length, arr2.length <= 500',
    '-1000 <= arr1[i], arr2[j] <= 1000',
    '0 <= d <= 100',
  ],
  examples: [
    {
      input: 'arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2',
      output: '2',
      explanation: 'For arr1[0]=4: |4-10|=6>2, |4-9|=5>2, |4-1|=3>2, |4-8|=4>2. Count this. For arr1[1]=5: |5-8|=3>2, |5-1|=4>2, |5-9|=4>2, |5-10|=5>2. Count this. For arr1[2]=8: |8-8|=0≤2. Skip. Distance = 2.',
    },
    {
      input: 'arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3',
      output: '2',
      explanation: 'Elements 2 and 3 have no arr2 element within distance 3.',
    },
    {
      input: 'arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6',
      output: '1',
      explanation: 'Only 100 has all distances > 6.',
    },
  ],
  hints: [
    'For each element in arr1, check every element in arr2 — if any |arr1[i]-arr2[j]| ≤ d, skip arr1[i].',
    'Count arr1[i] only if ALL elements in arr2 satisfy |arr1[i]-arr2[j]| > d.',
    'A nested loop O(n*m) is sufficient given the small constraints.',
  ],
  functionName: 'findTheDistanceValue',
  params: ['arr1', 'arr2', 'd'],
  starterCode: {
    javascript: `function findTheDistanceValue(arr1, arr2, d) {

}`,
    typescript: `function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {

}`,
    python: `def findTheDistanceValue(arr1, arr2, d):
    pass`,
  },
  visibleTests: [
    { args: [[4, 5, 8], [10, 9, 1, 8], 2], expected: 2 },
    { args: [[1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3], expected: 2 },
    { args: [[2, 1, 100, 3], [-5, -2, 10, -3, 7], 6], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1], [1], 1], expected: 0 },
    { args: [[1], [3], 1], expected: 1 },
    { args: [[0], [2], 1], expected: 1 },
    { args: [[1, 2, 3], [1, 2, 3], 0], expected: 0 },
    { args: [[10], [1, 2, 3, 4, 5], 4], expected: 1 },
  ],
};
