import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-mountain-array',
  title: 'Valid Mountain Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array of integers \`arr\`, return \`true\` if and only if it is a valid mountain array.

An array is a valid mountain array if:
- \`arr.length >= 3\`
- There exists some index \`i\` (\`0 < i < arr.length - 1\`) such that:
  - \`arr[0] < arr[1] < ... < arr[i]\`
  - \`arr[i] > arr[i + 1] > ... > arr[arr.length - 1]\``,
  constraints: [
    '1 <= arr.length <= 10^4',
    '0 <= arr[i] <= 10^4',
  ],
  examples: [
    { input: 'arr = [2,1]', output: 'false' },
    { input: 'arr = [3,5,5]', output: 'false' },
    { input: 'arr = [0,3,2,1]', output: 'true' },
  ],
  hints: [
    'Walk up from the left until you stop climbing, then walk down. If you started at index 0 or ended at the last index, it is not a valid mountain.',
  ],
  functionName: 'validMountainArray',
  params: ['arr'],
  starterCode: {
    javascript: 'function validMountainArray(arr) {\n  \n}\n',
    python: 'def validMountainArray(arr):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 1]], expected: false },
    { args: [[3, 5, 5]], expected: false },
    { args: [[0, 3, 2, 1]], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: false },
    { args: [[3, 2, 1]], expected: false },
    { args: [[1, 3, 2]], expected: true },
    { args: [[0, 1, 2, 1, 2]], expected: false },
    { args: [[1, 2, 3, 4, 5, 4, 3, 2, 1]], expected: true },
  ],
};
