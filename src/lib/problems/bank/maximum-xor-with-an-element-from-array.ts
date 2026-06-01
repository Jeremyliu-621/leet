import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-xor-with-an-element-from-array',
  title: 'Maximum XOR With an Element From Array',
  difficulty: 'hard',
  tags: ['arrays', 'trie', 'binary-search'],
  description: `You are given an array \`nums\` consisting of non-negative integers. You are also given a \`queries\` array, where \`queries[i] = [xi, mi]\`.

The answer to the \`i\`-th query is the **maximum bitwise XOR** value of \`xi\` and any element of \`nums\` that does not exceed \`mi\`. In other words, the answer is \`max(nums[j] XOR xi)\` for all \`j\` such that \`nums[j] <= mi\`. If all elements in \`nums\` are larger than \`mi\`, then the answer to this query is \`-1\`.

Return an integer array \`answer\` where \`answer[i]\` is the answer to the \`i\`-th query.`,
  constraints: [
    '1 <= nums.length, queries.length <= 10^5',
    'queries[i].length == 2',
    '0 <= nums[j], xi, mi <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [0,1,2,3,4], queries = [[3,1],[1,3],[5,6]]',
      output: '[3,3,7]',
      explanation: 'Query [3,1]: nums ≤ 1 are {0,1}. 3 XOR 1=2, 3 XOR 0=3. Max=3. Query [1,3]: nums ≤ 3 are {0,1,2,3}. 1 XOR 2=3. Max=3. Query [5,6]: all nums ≤ 6. 5 XOR 2=7. Max=7.',
    },
    {
      input: 'nums = [5,2,4,6,6,3], queries = [[12,4],[8,1],[6,3]]',
      output: '[15,-1,5]',
      explanation: 'Query [12,4]: nums ≤ 4 are {2,3,4}. 12 XOR 3=15. Query [8,1]: no nums ≤ 1. Return -1. Query [6,3]: nums ≤ 3 are {2,3}. 6 XOR 3=5.',
    },
  ],
  hints: [
    'Sort nums and sort queries by mi. Process queries in order of increasing mi.',
    'Maintain a binary trie of nums inserted so far (all nums[j] <= mi).',
    'For each query, traverse the trie greedily: at each bit, try to go to the opposite bit of xi to maximize XOR.',
  ],
  functionName: 'maximizeXor',
  params: ['nums', 'queries'],
  starterCode: {
    javascript: 'function maximizeXor(nums, queries) {\n  \n}\n',
    typescript: 'function maximizeXor(nums: number[], queries: number[][]): number[] {\n  \n}',
    python: 'def maximizeXor(nums, queries):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[0, 1, 2, 3, 4], [[3, 1], [1, 3], [5, 6]]],
      expected: [3, 3, 7],
    },
    {
      args: [[5, 2, 4, 6, 6, 3], [[12, 4], [8, 1], [6, 3]]],
      expected: [15, -1, 5],
    },
  ],
  hiddenTests: [
    { args: [[0], [[0, 0]]], expected: [0] },
    { args: [[1, 2], [[1, 0], [1, 1]]], expected: [-1, 0] },
    { args: [[3, 7, 15], [[3, 6], [10, 15]]], expected: [0, 13] },
  ],
};
