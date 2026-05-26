import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-sum-of-pair-with-equal-sum-of-digits',
  title: 'Max Sum of a Pair With Equal Sum of Digits',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** array \`nums\` consisting of **positive** integers. You can choose two indices \`i\` and \`j\`, such that \`i != j\`, and the sum of digits of the number \`nums[i]\` is equal to that of \`nums[j]\`.

Return *the **maximum** value of* \`nums[i] + nums[j]\` *that you can obtain over all possible indices* \`i\` *and* \`j\` *that satisfy the conditions*, or \`-1\` if no such pair exists.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^9`',
  ],
  examples: [
    {
      input: 'nums = [18,43,36,13,7]',
      output: '54',
      explanation: '18 has digit sum 9, 36 has digit sum 9. 18 + 36 = 54.',
    },
    {
      input: 'nums = [10,12,19,14]',
      output: '-1',
      explanation: 'No two numbers share the same digit sum.',
    },
  ],
  hints: [
    'Group numbers by their digit sum. For each group, the maximum pair sum is the sum of the two largest numbers.',
    'Only keep the top 2 numbers per digit sum group to save memory.',
    `\`\`\`js
function maximumSum(nums) {
  const digitSum = n => String(n).split("").reduce((a,c)=>a+Number(c),0);
  const groups = {};
  let best = -1;
  for (const n of nums) {
    const k = digitSum(n);
    if (k in groups) { best = Math.max(best, groups[k]+n); groups[k] = Math.max(groups[k],n); }
    else groups[k] = n;
  }
  return best;
}\`\`\``,
  ],
  functionName: 'maximumSum',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumSum(nums) {

}`,
    python: `def maximumSum(nums):
    pass`,
  },
  visibleTests: [
    { args: [[18, 43, 36, 13, 7]], expected: 54 },
    { args: [[10, 12, 19, 14]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: -1 },
    { args: [[1, 10]], expected: 11 },
    { args: [[9, 18, 27, 36]], expected: 63 },
    { args: [[229, 398, 269, 317, 420, 464, 491, 218, 439, 153]], expected: 955 },
  ],
};
