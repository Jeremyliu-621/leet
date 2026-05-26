import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-array-is-good',
  title: 'Check if Array Is Good',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\`. We call this array **good** if it is a permutation of an array \`base[n]\` = \`[1, 2, ..., n - 1, n, n]\` for some positive integer \`n\`.

Return \`true\` if the given array is good, otherwise return \`false\`.

A **permutation** of integers represents a sequence containing each element exactly once.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 200',
  ],
  examples: [
    {
      input: 'nums = [2,1,3]',
      output: 'false',
      explanation: '[2,1,3] has 3 distinct values. No n satisfies the condition.',
    },
    {
      input: 'nums = [1,2,2]',
      output: 'true',
      explanation: '[1,2,2] is a permutation of base[2] = [1,2,2].',
    },
    {
      input: 'nums = [3,3,2,1]',
      output: 'true',
      explanation: '[3,3,2,1] is a permutation of base[3] = [1,2,3,3].',
    },
  ],
  hints: [
    'Sort the array. A good array sorted looks like [1,2,3,...,n-1,n,n].',
    'Alternatively: check that n = max(nums), n appears twice, and 1..n-1 each appear once.',
    `\`\`\`js
function isGood(nums) {
  nums.sort((a,b) => a-b);
  const n = nums.length - 1; // expected max
  if (nums[n] !== nums[n-1]) return false; // last two must be equal (both == n)
  for (let i = 0; i < n-1; i++) if (nums[i] !== i+1) return false;
  return true;
}\`\`\``,
  ],
  functionName: 'isGood',
  params: ['nums'],
  starterCode: {
    javascript: `function isGood(nums) {

}`,
    python: `def isGood(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 1, 3]], expected: false },
    { args: [[1, 2, 2]], expected: true },
    { args: [[3, 3, 2, 1]], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: true },
    { args: [[2, 2]], expected: false },
    { args: [[1, 2, 3, 3]], expected: true },
    { args: [[1, 1, 1]], expected: false },
  ],
};
