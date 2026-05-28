import type { Problem } from '../types';

export const problem: Problem = {
  id: 'most-frequent-even-element',
  title: 'Most Frequent Even Element',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\`, return the most frequent even element.

If there is a tie, return the **smallest** one. If there is no such element, return \`-1\`.`,
  constraints: [
    '`1 <= nums.length <= 2000`',
    '`0 <= nums[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'nums = [0,1,2,2,4,4,1]',
      output: '2',
      explanation: 'Even elements are 0, 2, 2, 4, 4. Both 2 and 4 appear twice. Return 2 (smaller).',
    },
    {
      input: 'nums = [4,4,4,9,2,4]',
      output: '4',
      explanation: '4 appears 3 times.',
    },
    {
      input: 'nums = [29,47,21,41,13,37,25,7]',
      output: '-1',
      explanation: 'There are no even elements.',
    },
  ],
  hints: [
    'Count the frequency of each even number using a hash map.',
    'Track the maximum frequency and the smallest element with that frequency.',
    `\`\`\`js
function mostFrequentEven(nums) {
  const freq = {};
  for (const n of nums) if(n%2===0) freq[n]=(freq[n]||0)+1;
  let best = -1, maxF = 0;
  for (const [k,v] of Object.entries(freq)) {
    const n = Number(k);
    if (v>maxF || (v===maxF && n<best)) { maxF=v; best=n; }
  }
  return best;
}\`\`\``,
  ],
  functionName: 'mostFrequentEven',
  params: ['nums'],
  starterCode: {
    javascript: 'function mostFrequentEven(nums) {\n  \n}\n',
    typescript: "function mostFrequentEven(nums: number[]): number {\n  \n}",

    python: 'def mostFrequentEven(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[0, 1, 2, 2, 4, 4, 1]], expected: 2 },
    { args: [[4, 4, 4, 9, 2, 4]], expected: 4 },
    { args: [[29, 47, 21, 41, 13, 37, 25, 7]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[1, 3, 5]], expected: -1 },
    { args: [[2, 4, 2, 4, 6]], expected: 2 },
    { args: [[6, 6, 4, 4]], expected: 4 },
  ],
};
