import type { Problem } from '../types';

export const problem: Problem = {
  id: 'xor-queries-of-subarray',
  title: 'XOR Queries of a Subarray',
  difficulty: 'medium',
  tags: ['bit-manipulation', 'arrays'],
  description: `You are given an array \`arr\` of positive integers. You are also given the array \`queries\` where \`queries[i] = [lefti, righti]\`.

For each query \`i\` compute the **XOR** of elements \`arr[lefti] XOR arr[lefti + 1] XOR ... XOR arr[righti]\`.

Return an array containing the result for the given \`queries\`.`,
  constraints: [
    '1 <= arr.length, queries.length <= 3 * 10^4',
    '1 <= arr[i] <= 10^9',
    '0 <= queries[i][0] <= queries[i][1] < arr.length',
  ],
  examples: [
    {
      input: 'arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]',
      output: '[2,7,14,8]',
      explanation: '1 XOR 3 = 2, 3 XOR 4 = 7, 1 XOR 3 XOR 4 XOR 8 = 14, 8 = 8.',
    },
    {
      input: 'arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]',
      output: '[8,0,4,4]',
    },
  ],
  hints: [
    'Build a prefix XOR array: prefix[i] = arr[0] XOR ... XOR arr[i-1].',
    'XOR from l to r = prefix[r+1] XOR prefix[l].',
    `\`\`\`js
function xorQueries(arr, queries) {
  const prefix=[0];
  for(const v of arr) prefix.push(prefix[prefix.length-1]^v);
  return queries.map(([l,r])=>prefix[r+1]^prefix[l]);
}\`\`\``,
  ],
  functionName: 'xorQueries',
  params: ['arr', 'queries'],
  starterCode: {
    javascript: 'function xorQueries(arr, queries) {\n\n}\n',
    typescript: "function xorQueries(arr: number[], queries: number[][]): number[] {\n\n}",

    python: 'def xorQueries(arr, queries):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 4, 8], [[0, 1], [1, 2], [0, 3], [3, 3]]], expected: [2, 7, 14, 8] },
    { args: [[4, 8, 2, 10], [[2, 3], [1, 3], [0, 0], [0, 3]]], expected: [8, 0, 4, 4] },
  ],
  hiddenTests: [
    { args: [[1], [[0, 0]]], expected: [1] },
    { args: [[1, 2, 3], [[0, 2], [0, 1], [1, 2]]], expected: [0, 3, 1] },
    { args: [[5, 7, 3], [[0, 1], [1, 2], [0, 2]]], expected: [2, 4, 1] },
    { args: [[1, 1, 1, 1], [[0, 3], [0, 1], [1, 3]]], expected: [0, 0, 1] },
  ],
};
