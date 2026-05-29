import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-xor-with-element-from-array',
  title: 'Maximum XOR With an Element From Array',
  difficulty: 'hard',
  tags: ['trie', 'arrays', 'binary-search'],
  description: `You are given an array \`nums\` consisting of non-negative integers. You are also given a \`queries\` array, where \`queries[i] = [xi, mi]\`.

The answer to the \`i\`-th query is the **maximum** bitwise XOR of \`xi\` with any element of \`nums\` that does **not exceed** \`mi\`. In other words, the answer is \`max(nums[j] XOR xi)\` for all \`j\` such that \`nums[j] <= mi\`. If all elements in \`nums\` are greater than \`mi\`, then the answer is \`-1\`.

Return an integer array \`answer\` where \`answer.length == queries.length\` and \`answer[i]\` is the answer to the \`i\`-th query.`,
  constraints: [
    '`1 <= nums.length, queries.length <= 10^5`',
    '`queries[i].length == 2`',
    '`0 <= nums[j], xi, mi <= 3 * 10^4`',
  ],
  examples: [
    {
      input: 'nums = [0,1,2,3,4], queries = [[3,1],[1,3],[5,6]]',
      output: '[3,3,7]',
      explanation: '1) xi=3, mi=1: nums ≤ 1 are {0,1}; max XOR: 3^0=3, 3^1=2 → 3. 2) xi=1, mi=3: nums ≤ 3 are {0,1,2,3}; max XOR: 1^2=3 → 3. 3) xi=5, mi=6: all nums ≤ 6; max XOR: 5^2=7 → 7.',
    },
    {
      input: 'nums = [5,2,4,6,6,3], queries = [[12,4],[8,1],[6,3]]',
      output: '[15,-1,5]',
      explanation: '1) xi=12, mi=4: nums ≤ 4 → {2,3,4}; 12^3=15. 2) xi=8, mi=1: no nums ≤ 1 → -1. 3) xi=6, mi=3: nums ≤ 3 → {2,3}; 6^3=5.',
    },
  ],
  hints: [
    'Sort nums. Sort queries by mi. Process queries in order of increasing mi, inserting elements into a trie as they become available.',
    'Use an offline approach: attach original query index, sort by mi ascending, then walk through sorted queries inserting qualifying nums into a trie.',
    'Each trie node represents a bit (from MSB to LSB). To maximize XOR with xi, greedily go to the child that differs from the corresponding bit of xi.',
  ],
  functionName: 'maximizeXor',
  params: ['nums', 'queries'],
  starterCode: {
    javascript: `function maximizeXor(nums, queries) {

}`,
    typescript: 'function maximizeXor(nums: number[], queries: number[][]): number[] {\n\n}',
    python: `def maximizeXor(nums, queries):
    pass`,
  },
  visibleTests: [
    { args: [[0, 1, 2, 3, 4], [[3, 1], [1, 3], [5, 6]]], expected: [3, 3, 7] },
    { args: [[5, 2, 4, 6, 6, 3], [[12, 4], [8, 1], [6, 3]]], expected: [15, -1, 5] },
  ],
  hiddenTests: [
    { args: [[0], [[0, 0]]], expected: [0] },
    { args: [[1, 2, 3], [[0, 0]]], expected: [-1] },
    { args: [[1, 2, 3], [[4, 3]]], expected: [7] },
    { args: [[0, 1, 2, 3], [[1, 0], [1, 1], [1, 2], [1, 3]]], expected: [1, 1, 3, 3] },
    { args: [[3, 10, 5, 25, 2, 8], [[9, 8], [7, 25], [1, 10]]], expected: [12, 30, 11] },
  ],
};
