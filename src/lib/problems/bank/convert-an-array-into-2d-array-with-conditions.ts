import type { Problem } from '../types';

export const problem: Problem = {
  id: 'convert-an-array-into-2d-array-with-conditions',
  title: 'Convert an Array Into a 2D Array With Conditions',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`nums\`. You need to create a 2D array from \`nums\` satisfying the following conditions:

- The 2D array should contain **only** the elements of the array \`nums\`.
- Each row in the 2D array contains **distinct** integers.
- The number of rows in the 2D array should be **minimal**.

Return the resulting array. If there are multiple answers, return any of them.

**Note** that the 2D array can have a different number of elements on each row.`,
  constraints: [
    '1 <= nums.length <= 200',
    '1 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1, 3, 4, 1, 2, 3, 1]',
      output: '[[1, 3, 4, 2], [1, 3], [1]]',
      explanation: 'We have three 1s, two 3s, and one each of 4 and 2. The first row uses each value once, the second row places the second occurrence of 1 and 3, and the third row holds the third 1.',
    },
    {
      input: 'nums = [1, 2, 3, 4]',
      output: '[[1, 2, 3, 4]]',
      explanation: 'All elements are distinct, so they fit in one row.',
    },
  ],
  hints: [
    'Track the frequency of each number. Each occurrence number k must go into row k (0-indexed).',
    'Iterate through nums and place each element into the first row that does not yet contain it.',
    '```js\nfunction findMatrix(nums) {\n  const freq = new Map();\n  const result = [];\n  for (const n of nums) {\n    const cnt = freq.get(n) ?? 0;\n    if (cnt >= result.length) result.push([]);\n    result[cnt].push(n);\n    freq.set(n, cnt + 1);\n  }\n  return result;\n}\n```',
  ],
  functionName: 'findMatrix',
  params: ['nums'],
  starterCode: {
    javascript: `function findMatrix(nums) {
  const freq = new Map();
  const result = [];
  for (const n of nums) {
    const cnt = freq.get(n) ?? 0;
    if (cnt >= result.length) result.push([]);
    result[cnt].push(n);
    freq.set(n, cnt + 1);
  }
  return result;
}`,
    typescript: `function findMatrix(nums: number[]): number[][] {
  const freq = new Map<number, number>();
  const result: number[][] = [];
  for (const n of nums) {
    const cnt = freq.get(n) ?? 0;
    if (cnt >= result.length) result.push([]);
    result[cnt]!.push(n);
    freq.set(n, cnt + 1);
  }
  return result;
}`,
    python: `def findMatrix(nums):
    from collections import defaultdict
    freq = defaultdict(int)
    result = []
    for n in nums:
        cnt = freq[n]
        if cnt >= len(result):
            result.append([])
        result[cnt].append(n)
        freq[n] += 1
    return result`,
  },
  visibleTests: [
    { args: [[1, 3, 4, 1, 2, 3, 1]], expected: [[1, 3, 4, 2], [1, 3], [1]] },
    { args: [[1, 2, 3, 4]], expected: [[1, 2, 3, 4]] },
    { args: [[1, 1, 1]], expected: [[1], [1], [1]] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [[1]] },
    { args: [[2, 1, 2]], expected: [[2, 1], [2]] },
    { args: [[1, 2, 1, 3, 2, 1]], expected: [[1, 2, 3], [1, 2], [1]] },
    { args: [[5, 5, 5, 5]], expected: [[5], [5], [5], [5]] },
    { args: [[1, 2, 3, 1, 2, 3]], expected: [[1, 2, 3], [1, 2, 3]] },
    { args: [[3, 1, 4, 1, 5, 9, 2, 6]], expected: [[3, 1, 4, 5, 9, 2, 6], [1]] },
  ],
};
