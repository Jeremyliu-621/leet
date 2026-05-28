import type { Problem } from '../types';

export const problem: Problem = {
  id: 'partition-array-into-three-parts-with-equal-sum',
  title: 'Partition Array Into Three Parts With Equal Sum',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array of integers \`arr\`, return \`true\` if we can partition the array into three **non-empty** parts with equal sums.

Formally, we can partition the array if we can find indices \`i + 1 < j\` with:
- \`arr[0] + arr[1] + ... + arr[i] == arr[i+1] + ... + arr[j-1] == arr[j] + ... + arr[arr.length - 1]\``,
  constraints: [
    '3 <= arr.length <= 5 * 10^4',
    '-10^4 <= arr[i] <= 10^4',
  ],
  examples: [
    {
      input: 'arr = [0,2,1,-6,6,-7,9,1,2,0,1]',
      output: 'true',
      explanation: '0+2+1=3, -6+6+-7+9+1=3, 2+0+1=3.',
    },
    {
      input: 'arr = [0,2,1,-6,6,7,9,-1,2,0,1]',
      output: 'false',
    },
  ],
  hints: [
    'The total sum must be divisible by 3.',
    'Scan left-to-right, counting how many times prefix sum equals target (total/3).',
    'If you hit the target 3 or more times, return true (the last element must end at the full total).',
  ],
  functionName: 'canThreePartsEqualSum',
  params: ['arr'],
  starterCode: {
    javascript: 'function canThreePartsEqualSum(arr) {\n\n}\n',
    python: 'def canThreePartsEqualSum(arr):\n    pass\n',
  },
  visibleTests: [
    { args: [[0,2,1,-6,6,-7,9,1,2,0,1]], expected: true },
    { args: [[0,2,1,-6,6,7,9,-1,2,0,1]], expected: false },
  ],
  hiddenTests: [
    { args: [[3,3,6,5,-2,2,5,1,-9,4]], expected: true },
    { args: [[1,-1,1,-1]], expected: false },
    { args: [[0,0,0]], expected: true },
    { args: [[1,2,3,0,3]], expected: true },
  ],
};
