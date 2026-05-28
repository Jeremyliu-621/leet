import type { Problem } from '../types';

export const problem: Problem = {
  id: 'three-sum-with-multiplicity',
  title: '3Sum With Multiplicity',
  difficulty: 'medium',
  tags: ['two-pointers', 'arrays'],
  description: `Given an integer array \`arr\` and an integer \`target\`, return the **number of tuples** \`i, j, k\` such that \`i < j < k\` and \`arr[i] + arr[j] + arr[k] == target\`.

Since the answer can be very large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '3 <= arr.length <= 3000',
    '0 <= arr[i] <= 100',
    '0 <= target <= 300',
  ],
  examples: [
    {
      input: 'arr = [1,1,2,2,3,3,4,4,5,5], target = 8',
      output: '20',
      explanation: 'Enumerating by value: (1,2,5) = 2*2*2 = 8 tuples; (1,3,4) = 2*2*2 = 8 tuples; (2,2,4) = C(2,2)*2 = 2 tuples; (2,3,3) = 2*C(2,2) = 2 tuples. Total = 20.',
    },
    {
      input: 'arr = [1,1,2,2,2,2], target = 5',
      output: '12',
      explanation: '(1,2,2): C(2,1)*C(4,2) = 2*6 = 12.',
    },
    {
      input: 'arr = [2,2,2,2], target = 6',
      output: '4',
      explanation: 'C(4,3) = 4 ways to pick three 2s from four.',
    },
  ],
  hints: [
    'Sort the array. Fix the first element with index `i`, then use two pointers `j = i+1` and `k = arr.length-1` on the remaining subarray.',
    'When `arr[j] + arr[k]` equals the needed sum, count duplicate values at both ends. If `arr[j] === arr[k]`, all elements from j to k are equal — the count is C(k-j+1, 2). Otherwise, count how many consecutive equal elements are at j and k, multiply, then advance both pointers.',
    'When `arr[j] + arr[k] < target`, advance j. When it is greater, retreat k.',
  ],
  functionName: 'threeSumMulti',
  params: ['arr', 'target'],
  starterCode: {
    javascript: `function threeSumMulti(arr, target) {
  const MOD = 1000000007;
  arr.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1, k = arr.length - 1;
    while (j < k) {
      const s = arr[i] + arr[j] + arr[k];
      if (s === target) {
        // Count duplicates at j and k
      } else if (s < target) j++;
      else k--;
    }
  }
  return count;
}`,
    typescript: "function threeSumMulti(arr: number[], target: number): number {\n  const MOD = 1000000007;\n  arr.sort((a, b) => a - b);\n  let count = 0;\n  for (let i = 0; i < arr.length - 2; i++) {\n    let j = i + 1, k = arr.length - 1;\n    while (j < k) {\n      const s = arr[i] + arr[j] + arr[k];\n      if (s === target) {\n        // Count duplicates at j and k\n      } else if (s < target) j++;\n      else k--;\n    }\n  }\n  return count;\n}",

    python: `def threeSumMulti(arr, target):
    MOD = 10**9 + 7
    arr.sort()
    count = 0
    for i in range(len(arr) - 2):
        j, k = i + 1, len(arr) - 1
        while j < k:
            s = arr[i] + arr[j] + arr[k]
            if s == target:
                pass  # count duplicates at j and k
            elif s < target:
                j += 1
            else:
                k -= 1
    return count`,
  },
  visibleTests: [
    { args: [[1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8], expected: 20 },
    { args: [[1, 1, 2, 2, 2, 2], 5], expected: 12 },
    { args: [[2, 2, 2, 2], 6], expected: 4 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0], 0], expected: 1 },
    { args: [[1, 2, 3], 6], expected: 1 },
    { args: [[1, 1, 1], 3], expected: 1 },
    { args: [[1, 0, 0, 0], 1], expected: 3 },
    { args: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 17], expected: 8 },
  ],
};
