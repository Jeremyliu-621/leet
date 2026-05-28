import type { Problem } from '../types';

export const problem: Problem = {
  id: 'single-number-ii',
  title: 'Single Number II',
  difficulty: 'medium',
  tags: ['math', 'arrays'],
  description: `Given an integer array \`nums\` where every element appears **exactly three times** except for one element which appears **exactly once**, find and return the single element.

You must implement a solution with linear runtime complexity and use only constant extra space.`,
  constraints: [
    '`1 <= nums.length <= 3 * 10^4`',
    '`-2^31 <= nums[i] <= 2^31 - 1`',
    'Every element except one appears exactly 3 times',
  ],
  examples: [
    { input: 'nums = [2,2,3,2]', output: '3' },
    { input: 'nums = [0,1,0,1,0,1,99]', output: '99' },
  ],
  hints: [
    'Track two bit masks `ones` and `twos`. For each number: `ones = (ones ^ n) & ~twos`, then `twos = (twos ^ n) & ~ones`.',
    '`ones` holds bits that have appeared once mod 3; `twos` holds bits that have appeared twice mod 3. After processing all numbers, `ones` is the answer.',
    `\`\`\`js
function singleNumber(nums) {
  let ones=0,twos=0;
  for(const n of nums){
    ones=(ones^n)&~twos;
    twos=(twos^n)&~ones;
  }
  return ones;
}
// Or: count bits mod 3 — each bit of the single number has count%3===1\`\`\``,
  ],
  functionName: 'singleNumber',
  params: ['nums'],
  starterCode: {
    javascript: `function singleNumber(nums) {

}`,
    typescript: "function singleNumber(nums: number[]): number {\n\n}",

    python: `def singleNumber(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 2, 3, 2]], expected: 3 },
    { args: [[0, 1, 0, 1, 0, 1, 99]], expected: 99 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[3, 3, 3, 7]], expected: 7 },
    { args: [[-2, -2, 1, -2]], expected: 1 },
    { args: [[2147483647, 2147483647, 2147483647, 42]], expected: 42 },
  ],
};
