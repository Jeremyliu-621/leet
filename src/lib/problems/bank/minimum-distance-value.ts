import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-distance-value',
  title: 'Find the Distance Value Between Two Arrays',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers', 'binary-search'],
  description: `Given two integer arrays \`arr1\` and \`arr2\`, and the integer \`d\`, return the **distance value** between the two arrays.

The distance value is defined as the number of elements \`arr1[i]\` such that there is **no** element \`arr2[j]\` where \`|arr1[i] - arr2[j]| <= d\`.`,
  constraints: [
    '`1 <= arr1.length, arr2.length <= 500`',
    '`-10^3 <= arr1[i], arr2[j] <= 10^3`',
    '`0 <= d <= 100`',
  ],
  examples: [
    {
      input: 'arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2',
      output: '2',
      explanation: 'For arr1[0]=4: |4-10|=6, |4-9|=5, |4-1|=3, |4-8|=4. All > 2, so 4 is counted. For arr1[1]=5: |5-8|=3 > 2, |5-9|=4, |5-10|=5, |5-1|=4. All > 2, counted. For arr1[2]=8: |8-8|=0 <= 2, not counted. Total = 2.',
    },
    {
      input: 'arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3',
      output: '2',
    },
  ],
  hints: [
    'For each element in arr1, check if there is any element in arr2 within distance d.',
    'Sort arr2 and use binary search to find if any element is within [arr1[i]-d, arr1[i]+d].',
    `\`\`\`js
function findTheDistanceValue(arr1, arr2, d) {
  arr2.sort((a,b)=>a-b);
  function noClose(v) {
    let lo=0,hi=arr2.length-1;
    while(lo<=hi){const mid=(lo+hi)>>1;const diff=Math.abs(arr2[mid]-v);if(diff<=d)return false;if(arr2[mid]<v)lo=mid+1;else hi=mid-1;}
    return true;
  }
  return arr1.filter(noClose).length;
}\`\`\``,
  ],
  functionName: 'findTheDistanceValue',
  params: ['arr1', 'arr2', 'd'],
  starterCode: {
    javascript: 'function findTheDistanceValue(arr1, arr2, d) {\n  \n}\n',
    typescript: "function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {\n  \n}",

    python: 'def findTheDistanceValue(arr1, arr2, d):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 5, 8], [10, 9, 1, 8], 2], expected: 2 },
    { args: [[1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3], expected: 2 },
    { args: [[2, 1, 100, 3], [-5, -2, 10, -3, 7], 6], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1], [1], 0], expected: 0 },
    { args: [[1], [1], 1], expected: 0 },
    { args: [[5], [1], 3], expected: 1 },
    { args: [[5], [1], 4], expected: 0 },
  ],
};
