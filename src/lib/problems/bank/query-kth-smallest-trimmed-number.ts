import type { Problem } from '../types';

export const problem: Problem = {
  id: 'query-kth-smallest-trimmed-number',
  title: 'Query Kth Smallest Trimmed Number',
  difficulty: 'medium',
  tags: ['arrays', 'strings', 'binary-search'],
  description: `You are given a **0-indexed** array of strings \`nums\`, where each string is of **equal length** and consists of only digits.

You are also given a **0-indexed** 2D integer array \`queries\` where \`queries[i] = [ki, trimi]\`. For each \`queries[i]\`:

1. **Trim** each number in \`nums\` to its rightmost \`trimi\` digits.
2. Determine the **index** of the \`ki\`th smallest trimmed number in \`nums\`. If two trimmed numbers are equal, the number with the **lower** index is considered to be smaller.
3. Reset each number in \`nums\` to its original length.

Return an array \`answer\` of the same length as \`queries\`, where \`answer[i]\` is the answer to the \`i\`th query.

**Note:** To trim to the rightmost \`x\` digits means to keep removing the leftmost digit, until only \`x\` digits remain.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i].length <= 100',
    'nums[i] consists of only digits',
    'All nums[i].length are equal',
    '1 <= queries.length <= 100',
    'queries[i].length == 2',
    '1 <= ki <= nums.length',
    '1 <= trimi <= nums[i].length',
  ],
  examples: [
    {
      input: 'nums = ["24","37","96","04"], queries = [[2,1],[2,2]]',
      output: '[3,0]',
      explanation:
        'q[0]: trim to 1 → ["4","7","6","4"]; sorted: (4,0),(4,3),(6,2),(7,1) → 2nd is idx 3. q[1]: trim to 2 → ["24","37","96","04"]; sorted: (04,3),(24,0),(37,1),(96,2) → 2nd is idx 0.',
    },
    {
      input: 'nums = ["5","3","1"], queries = [[1,1],[3,1]]',
      output: '[2,0]',
      explanation:
        'trim to 1 → ["5","3","1"]; sorted: (1,2),(3,1),(5,0) → 1st is idx 2, 3rd is idx 0.',
    },
  ],
  hints: [
    'Level 1: For each query, create (trimmed_string, original_index) pairs, sort them, return the k-th index. O(q·n·log n) total.',
    'Level 2: Trim by slicing: trimmed = nums[i].slice(nums[i].length - trim). Sort lexicographically (which equals numeric for equal-length zero-padded strings).',
    'Level 3: Sort comparator: (a, idxA) vs (b, idxB) → a < b ? -1 : a > b ? 1 : idxA - idxB. Return indexed[k-1][1].',
  ],
  functionName: 'smallestTrimmedNumbers',
  params: ['nums', 'queries'],
  starterCode: {
    javascript: `function smallestTrimmedNumbers(nums, queries) {

}`,
    typescript: `function smallestTrimmedNumbers(nums: string[], queries: number[][]): number[] {

}`,
    python: `def smallestTrimmedNumbers(nums, queries):
    pass`,
  },
  visibleTests: [
    { args: [['24', '37', '96', '04'], [[2, 1], [2, 2]]], expected: [3, 0] },
    { args: [['5', '3', '1'], [[1, 1], [3, 1]]], expected: [2, 0] },
  ],
  hiddenTests: [
    { args: [['100', '010', '001'], [[1, 3]]], expected: [2] },
    { args: [['99', '11', '99'], [[1, 2], [2, 2]]], expected: [1, 0] },
    { args: [['9', '3', '1', '7'], [[2, 1]]], expected: [1] },
    { args: [['11', '11'], [[1, 2], [2, 2]]], expected: [0, 1] },
  ],
};
