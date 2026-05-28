import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-in-mountain-array',
  title: 'Find in Mountain Array',
  difficulty: 'hard',
  tags: ['binary-search', 'arrays'],
  description: `You may recall that an array \`arr\` is a **mountain array** if and only if:

- \`arr.length >= 3\`
- There exists some index \`i\` (0-indexed) with \`0 < i < arr.length - 1\` such that \`arr[0] < arr[1] < ... < arr[i-1] < arr[i]\` and \`arr[i] > arr[i+1] > ... > arr[arr.length - 1]\`.

Given a mountain array \`mountainArr\` and integer \`target\`, return the **smallest index** such that \`mountainArr[index] == target\`. If such an index does not exist, return \`-1\`.`,
  constraints: [
    '3 <= mountainArr.length <= 10^4',
    '0 <= target <= 10^9',
    '0 <= mountainArr[i] <= 10^9',
  ],
  examples: [
    { input: 'mountainArr = [1,2,3,4,5,3,1], target = 3', output: '2' },
    { input: 'mountainArr = [0,1,2,4,2,1], target = 3', output: '-1' },
  ],
  hints: [
    'Step 1: Binary search for the peak index (where mountainArr[mid] > mountainArr[mid+1]).',
    'Step 2: Binary search the ascending half [0, peak] for target. If found, return that index.',
    'Step 3: Binary search the descending half [peak, n-1] for target. If found, return that index. Otherwise return -1.',
  ],
  functionName: 'findInMountainArray',
  params: ['mountainArr', 'target'],
  starterCode: {
    javascript: 'function findInMountainArray(mountainArr, target) {\n\n}\n',
    python: 'def findInMountainArray(mountainArr, target):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 3, 1], 3], expected: 2 },
    { args: [[0, 1, 2, 4, 2, 1], 3], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 5, 2], 1], expected: 0 },
    { args: [[1, 5, 2], 2], expected: 2 },
    { args: [[1, 5, 2], 5], expected: 1 },
    { args: [[3, 5, 3, 2, 0], 3], expected: 0 },
  ],
};
