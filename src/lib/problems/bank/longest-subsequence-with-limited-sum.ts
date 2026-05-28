import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-subsequence-with-limited-sum',
  title: 'Longest Subsequence With Limited Sum',
  difficulty: 'easy',
  tags: ['arrays', 'binary-search'],
  description: `You are given an integer array \`nums\` of length \`n\`, and an integer array \`queries\` of length \`m\`.

Return an array \`answer\` of length \`m\` where \`answer[i]\` is the **maximum** size of a subsequence that you can take from \`nums\` such that the **sum** of its elements is less than or equal to \`queries[i]\`.

A **subsequence** is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.`,
  constraints: [
    'n == nums.length',
    'm == queries.length',
    '1 <= n, m <= 1000',
    '1 <= nums[i], queries[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [4,5,2,1], queries = [3,10,21]',
      output: '[2,3,4]',
      explanation: 'Sort nums=[1,2,4,5]. For query 3: take [1,2]=3≤3, size 2. For 10: [1,2,4]=7≤10, size 3. For 21: all 4 elements sum=12≤21.',
    },
    {
      input: 'nums = [2,3,4,5], queries = [1]',
      output: '[0]',
      explanation: 'Sum of even the smallest element (2) > 1.',
    },
  ],
  hints: [
    'Sort nums to greedily take smallest elements first.',
    'Build prefix sums. For each query, binary-search for the largest prefix ≤ query.',
    `\`\`\`js
function answerQueries(nums, queries) {
  nums.sort((a,b)=>a-b);
  const prefix = [0];
  for (const n of nums) prefix.push(prefix[prefix.length-1]+n);
  return queries.map(q => {
    let lo=0,hi=prefix.length-1;
    while(lo<hi){const mid=(lo+hi+1)>>1;prefix[mid]<=q?lo=mid:hi=mid-1;}
    return lo;
  });
}\`\`\``,
  ],
  functionName: 'answerQueries',
  params: ['nums', 'queries'],
  starterCode: {
    javascript: 'function answerQueries(nums, queries) {\n\n}\n',
    typescript: "function answerQueries(nums: number[], queries: number[]): number[] {\n\n}",

    python: 'def answerQueries(nums, queries):\n    pass\n',
  },
  visibleTests: [
    { args: [[4,5,2,1], [3,10,21]], expected: [2,3,4] },
    { args: [[2,3,4,5], [1]], expected: [0] },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: [1] },
    { args: [[1,2,3], [6]], expected: [3] },
    { args: [[3,3,3], [5]], expected: [1] },
    { args: [[1,1,1,1], [3]], expected: [3] },
  ],
};
