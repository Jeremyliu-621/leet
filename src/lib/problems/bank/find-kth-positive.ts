import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-kth-positive',
  title: 'Kth Missing Positive Number',
  difficulty: 'easy',
  tags: ['arrays', 'binary-search'],
  description: `Given an array \`arr\` of positive integers sorted in a **strictly increasing order**, and an integer \`k\`.

Return the \`k\`th **positive** integer that is **missing** from this array.`,
  constraints: [
    '1 <= arr.length <= 1000',
    '1 <= arr[i] <= 1000',
    '1 <= k <= 1000',
    'arr[i] < arr[j] for 1 <= i < j <= arr.length',
  ],
  examples: [
    { input: 'arr = [2,3,4,7,11], k = 5', output: '9', explanation: 'Missing numbers: 1,5,6,8,9,10,... The 5th is 9.' },
    { input: 'arr = [1,2,3,4], k = 2', output: '6', explanation: 'Missing numbers: 5,6,7,... The 2nd is 6.' },
  ],
  hints: [
    'Iterate through positive integers 1, 2, 3, ... and count those not in arr. Return when you reach the kth missing.',
    'Binary search: at index i, the number of missing integers is arr[i] - (i+1). Find the last index where count < k.',
    `\`\`\`js
function findKthPositive(arr, k) {
  const set = new Set(arr);
  let count = 0;
  for (let n = 1; ; n++) {
    if (!set.has(n)) { count++; if (count === k) return n; }
  }
}
// Binary search: lo=0,hi=arr.length; missing(mid)=arr[mid]-(mid+1); find first mid where missing>=k\`\`\``,
  ],
  functionName: 'findKthPositive',
  params: ['arr', 'k'],
  starterCode: {
    javascript: 'function findKthPositive(arr, k) {\n  \n}\n',
    python: 'def findKthPositive(arr, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[2,3,4,7,11], 5], expected: 9 },
    { args: [[1,2,3,4], 2], expected: 6 },
    { args: [[2], 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 2 },
    { args: [[1,2,3], 5], expected: 8 },
    { args: [[5,6,7,8,9], 2], expected: 2 },
    { args: [[1,3,5,7,9], 3], expected: 6 },
    { args: [[1,2,3,4,5,6,7,8,9,10], 1], expected: 11 },
  ],
};
