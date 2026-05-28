import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-nice-pairs-in-an-array',
  title: 'Count Nice Pairs in an Array',
  difficulty: 'medium',
  tags: ['arrays', 'math', 'hash-map'],
  description: `You are given an array \`nums\` that consists of non-negative integers. Let us define \`rev(x)\` as the reverse of the non-negative integer \`x\` (e.g., \`rev(123) = 321\`).

A pair of indices \`(i, j)\` is **nice** if it satisfies all of the following conditions:
- \`0 <= i < j < nums.length\`
- \`nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])\`

Return the number of nice pairs of indices. Since that number can be too large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [42,11,1,97]',
      output: '2',
      explanation: 'Nice pairs: (0,3) since 42+79==97+24=121, and (1,2) since 11+1==1+11=12.',
    },
    {
      input: 'nums = [13,10,35,24,76]',
      output: '4',
      explanation: 'diff values: [-18,9,-18,-18,9]. Groups: C(3,2)+C(2,2) = 3+1 = 4.',
    },
  ],
  hints: [
    'The condition simplifies to nums[i]-rev(nums[i]) == nums[j]-rev(nums[j]).',
    'Group elements by their diff value, then count pairs in each group: C(n,2)=n*(n-1)/2.',
    `\`\`\`js
const rev = n => Number(String(n).split('').reverse().join(''));
const freq = {};
const MOD = 1e9+7;
for (const n of nums) {
  const diff = n - rev(n);
  freq[diff] = (freq[diff]||0)+1;
}
let ans = 0;
for (const cnt of Object.values(freq)) ans = (ans + cnt*(cnt-1)/2) % MOD;
return ans;\`\`\``
  ],
  functionName: 'countNicePairs',
  params: ['nums'],
  starterCode: {
    javascript: `function countNicePairs(nums) {

}`,
    typescript: "function countNicePairs(nums: number[]): number {\n\n}",

    python: `def countNicePairs(nums):
    pass`,
  },
  visibleTests: [
    { args: [[42, 11, 1, 97]], expected: 2 },
    { args: [[13, 10, 35, 24, 76]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 3 },
    { args: [[1, 1, 1, 1]], expected: 6 },
    { args: [[1, 10, 100]], expected: 0 },
    { args: [[1, 10]], expected: 0 },
  ],
};
