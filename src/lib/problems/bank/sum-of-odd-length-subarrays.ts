import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-odd-length-subarrays',
  title: 'Sum of All Odd Length Subarrays',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array of positive integers \`arr\`, return the **sum of all possible odd-length subarrays** of \`arr\`.

A subarray is a contiguous subsequence of the array.`,
  constraints: [
    '`1 <= arr.length <= 100`',
    '`1 <= arr[i] <= 1000`',
  ],
  examples: [
    {
      input: 'arr = [1,4,2,5,3]',
      output: '58',
      explanation: 'Length-1: 1+4+2+5+3=15. Length-3: 7+11+10=28. Length-5: 15. Total=58.',
    },
    {
      input: 'arr = [1,2]',
      output: '3',
      explanation: 'Only length-1 subarrays: 1+2=3.',
    },
    {
      input: 'arr = [10,11,12]',
      output: '66',
      explanation: 'Length-1: 33. Length-3: 33. Total=66.',
    },
  ],
  hints: [
    'Iterate over all subarray lengths that are odd (1, 3, 5, ...). For each length, iterate over all starting positions and sum the elements.',
    'For a smarter O(n) approach: each element arr[i] is counted in multiple subarrays. Count how many odd-length subarrays include position i.',
    `\`\`\`js
function sumOddLengthSubarrays(arr) {
  let sum=0;
  const n=arr.length;
  for(let i=0;i<n;i++){
    // count how many subarrays include arr[i] with odd length
    const left=i+1,right=n-i;
    sum+=arr[i]*Math.ceil(left/2)*Math.ceil(right/2);
    sum+=arr[i]*Math.floor(left/2)*Math.floor(right/2);
  }
  return sum;
}\`\`\``,
  ],
  functionName: 'sumOddLengthSubarrays',
  params: ['arr'],
  starterCode: {
    javascript: `function sumOddLengthSubarrays(arr) {

}`,
    python: `def sumOddLengthSubarrays(arr):
    pass`,
  },
  visibleTests: [
    { args: [[1, 4, 2, 5, 3]], expected: 58 },
    { args: [[1, 2]], expected: 3 },
    { args: [[10, 11, 12]], expected: 66 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 12 },
    { args: [[5, 5, 5, 5, 5]], expected: 95 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 98 },
  ],
};
