import type { Problem } from '../types';

export const problem: Problem = {
  id: 'peak-index-in-mountain-array',
  title: 'Peak Index in Mountain Array',
  difficulty: 'easy',
  tags: ['binary-search'],
  description: `You are given an integer **mountain** array \`arr\` of length \`n\` where the values increase to a peak element and then decrease.

Return the index of the peak element.

Your solution must run in \`O(log n)\` time complexity.

**Approach:** Binary search. If \`arr[mid] < arr[mid+1]\`, the peak is to the right, so \`l = mid + 1\`. Otherwise the peak is at \`mid\` or to the left, so \`r = mid\`.`,
  constraints: [
    '3 <= arr.length <= 10^5',
    '0 <= arr[i] <= 10^6',
    'arr is guaranteed to be a mountain array.',
  ],
  examples: [
    {
      input: 'arr = [0,1,0]',
      output: '1',
    },
    {
      input: 'arr = [0,2,1,0]',
      output: '1',
    },
    {
      input: 'arr = [0,10,5,2]',
      output: '1',
    },
  ],
  hints: [
    'Binary search: if arr[mid] < arr[mid+1], the peak lies to the right.',
    '```js\nfunction peakIndexInMountainArray(arr) {\n  let l = 0, r = arr.length - 1;\n  while (l < r) {\n    const mid = (l + r) >> 1;\n    if (arr[mid] < arr[mid + 1]) l = mid + 1;\n    else r = mid;\n  }\n  return l;\n}\n```',
    `\`\`\`js
function peakIndexInMountainArray(arr) {
  let lo=1,hi=arr.length-2;
  while(lo<hi){const mid=(lo+hi)>>1;arr[mid]<arr[mid+1]?lo=mid+1:hi=mid;}
  return lo;
}\`\`\``,
  ],
  functionName: 'peakIndexInMountainArray',
  params: ['arr'],
  starterCode: {
    javascript: `function peakIndexInMountainArray(arr) {
  // return the index of the peak element in O(log n) time

}`,
    typescript: "function peakIndexInMountainArray(arr: number[]): number {\n  // return the index of the peak element in O(log n) time\n\n}",

    python: `def peakIndexInMountainArray(arr: list) -> int:
    # return the index of the peak element in O(log n) time
    pass
`,
  },
  visibleTests: [
    { args: [[0, 1, 0]], expected: 1 },
    { args: [[0, 2, 1, 0]], expected: 1 },
    { args: [[0, 10, 5, 2]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[3, 5, 3, 2, 0]], expected: 1 },
    { args: [[0, 1, 2, 3, 4, 5, 6, 5, 4]], expected: 6 },
    { args: [[1, 2, 3, 4, 5, 4, 3, 2, 1]], expected: 4 },
    { args: [[1, 3, 2]], expected: 1 },
    { args: [[0, 5, 0]], expected: 1 },
    { args: [[1, 3, 5, 4, 2]], expected: 2 },
    { args: [[0, 2, 1]], expected: 1 },
  ],
};
