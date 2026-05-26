import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-component-size-by-common-factor',
  title: 'Largest Component Size by Common Factor',
  difficulty: 'hard',
  tags: ['union-find', 'math', 'arrays'],
  description: `You are given an integer array \`nums\` of unique positive integers. Consider the following graph:
- There are \`nums.length\` nodes, labeled \`nums[0]\` to \`nums[nums.length - 1]\`.
- There is an edge between \`nums[i]\` and \`nums[j]\` if and only if \`nums[i]\` and \`nums[j]\` share a common factor greater than \`1\`.

Return the **size of the largest connected component** in the graph.`,
  constraints: [
    '1 <= nums.length <= 2 * 10^4',
    '1 <= nums[i] <= 10^5',
    'All values in nums are unique.',
  ],
  examples: [
    {
      input: 'nums = [4,6,15,35]',
      output: '4',
      explanation:
        '4-6 (share 2), 6-15 (share 3), 15-35 (share 5). All four numbers are connected.',
    },
    {
      input: 'nums = [20,50,9,63]',
      output: '2',
      explanation: '20-50 share factor 10. 9-63 share factor 9. Two components of size 2.',
    },
    {
      input: 'nums = [2,3,6,7,4,12,21,39]',
      output: '8',
      explanation: 'All numbers are connected through shared factors.',
    },
  ],
  hints: [
    'Instead of checking every pair (O(n²)), union each number directly with its prime factors. Two numbers in the same component if they share any prime factor.',
    'For each number n, factorize it and union n with each of its prime factors. This runs in O(n√max) time. At the end, count component sizes among the original numbers.',
    '```js\nfunction largestComponentSize(nums) {\n  const max = Math.max(...nums);\n  const uf = Array.from({length: max+1}, (_,i) => i);\n  const find = x => uf[x] === x ? x : (uf[x] = find(uf[x]));\n  for (const n of nums)\n    for (let f = 2; f*f <= n; f++)\n      if (n%f===0) { uf[find(n)] = find(f); uf[find(n)] = find(n/f); }\n  const cnt = new Map(); let ans = 0;\n  for (const n of nums) { const r = find(n); cnt.set(r,(cnt.get(r)||0)+1); ans = Math.max(ans,cnt.get(r)); }\n  return ans;\n}\n```',
  ],
  functionName: 'largestComponentSize',
  params: ['nums'],
  starterCode: {
    javascript: 'function largestComponentSize(nums) {\n  \n}\n',
    python: 'def largestComponentSize(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 6, 15, 35]], expected: 4 },
    { args: [[20, 50, 9, 63]], expected: 2 },
    { args: [[2, 3, 6, 7, 4, 12, 21, 39]], expected: 8 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[2, 3, 5, 7]], expected: 1 },
    { args: [[2, 4, 8, 16]], expected: 4 },
    { args: [[6, 10, 15]], expected: 3 },
    { args: [[1, 2, 3, 4, 6]], expected: 4 },
  ],
};
