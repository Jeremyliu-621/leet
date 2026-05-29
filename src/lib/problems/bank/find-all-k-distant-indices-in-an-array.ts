import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-k-distant-indices-in-an-array',
  title: 'Find All K-Distant Indices in an Array',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a **0-indexed** integer array \`nums\` and two integers \`key\` and \`k\`. A **k-distant index** is an index \`i\` of \`nums\` for which there exists at least one index \`j\` such that:

- \`|i - j| <= k\`, and
- \`nums[j] == key\`.

Return *a list of all k-distant indices sorted in **increasing order***.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 1000',
    'key is an integer in the range [1, 1000]',
    '1 <= k <= nums.length',
  ],
  examples: [
    {
      input: 'nums = [3,4,9,1,3,9,3,8,4], key = 9, k = 1',
      output: '[1,2,3,4,5,6]',
      explanation: 'Positions of 9: indices 2 and 5. Index 1: |1-2|=1≤1 ✓. Index 2: |2-2|=0 ✓. Index 3: |3-2|=1 ✓. Index 4: |4-5|=1 ✓. Index 5: |5-5|=0 ✓. Index 6: |6-5|=1 ✓.',
    },
    {
      input: 'nums = [2,2,2,2,2], key = 2, k = 2',
      output: '[0,1,2,3,4]',
      explanation: 'All indices are k-distant from one of the key positions.',
    },
  ],
  hints: [
    'Collect all indices where nums[j] == key.',
    'For each index i, check if any key-position j satisfies |i - j| <= k.',
    'Alternatively, for each key index j, all indices in [j-k, j+k] are valid — merge these ranges.',
    'Use two pointers: maintain the next valid key index, advance i and skip covered ranges.',
  ],
  functionName: 'findKDistantIndices',
  params: ['nums', 'key', 'k'],
  starterCode: {
    javascript: `function findKDistantIndices(nums, key, k) {

}`,
    typescript: `function findKDistantIndices(nums: number[], key: number, k: number): number[] {

}`,
    python: `def findKDistantIndices(nums: list[int], key: int, k: int) -> list[int]:
    pass`,
  },
  visibleTests: [
    { args: [[3, 4, 9, 1, 3, 9, 3, 8, 4], 9, 1], expected: [1, 2, 3, 4, 5, 6] },
    { args: [[2, 2, 2, 2, 2], 2, 2], expected: [0, 1, 2, 3, 4] },
  ],
  hiddenTests: [
    { args: [[1], 1, 1], expected: [0] },
    { args: [[5, 1, 5], 5, 1], expected: [0, 1, 2] },
    { args: [[1, 2, 3], 4, 1], expected: [] },
    { args: [[1, 2, 3, 4, 5], 3, 2], expected: [0, 1, 2, 3, 4] },
    { args: [[1, 2, 3, 4, 5], 1, 1], expected: [0, 1] },
    { args: [[1, 2, 3, 4, 5], 5, 1], expected: [3, 4] },
    { args: [[4, 1, 2, 4, 3], 4, 2], expected: [0, 1, 2, 3, 4] },
    { args: [[1, 3, 1, 3, 1], 3, 1], expected: [0, 1, 2, 3, 4] },
  ],
};
