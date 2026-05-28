import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-beautiful-pairs',
  title: 'Number of Beautiful Pairs',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\`. A pair of indices \`i\`, \`j\` where \`0 <= i < j <= nums.length - 1\` is called **beautiful** if the first digit of \`nums[i]\` and the last digit of \`nums[j]\` are **coprime**.

Return the total number of beautiful pairs in \`nums\`.

Two integers \`x\` and \`y\` are **coprime** if there is no integer greater than 1 that divides both. Equivalently, \`gcd(x, y) == 1\`.`,
  constraints: [
    '2 <= nums.length <= 100',
    '1 <= nums[i] <= 9999',
    'nums[i] % 10 != 0',
  ],
  examples: [
    {
      input: 'nums = [2,5,1,4]',
      output: '5',
      explanation: 'Pairs: (0,1): gcd(2,5)=1 ✓. (0,2): gcd(2,1)=1 ✓. (0,3): gcd(2,4)=2 ✗. (1,2): gcd(5,1)=1 ✓. (1,3): gcd(5,4)=1 ✓. (2,3): gcd(1,4)=1 ✓. Total = 5.',
    },
    {
      input: 'nums = [11,21,12]',
      output: '2',
      explanation: '(0,1): gcd(1,1)=1 ✓. (0,2): gcd(1,2)=1 ✓. (1,2): gcd(2,2)=2 ✗. Total = 2.',
    },
  ],
  hints: [
    'For each pair (i,j) with i<j, compute firstDigit(nums[i]) and lastDigit(nums[j]).',
    'firstDigit(n) = parseInt(String(n)[0]). lastDigit(n) = n % 10.',
    'Check gcd(firstDigit, lastDigit) === 1. Count all such pairs.',
  ],
  functionName: 'countBeautifulPairs',
  params: ['nums'],
  starterCode: {
    javascript: `function countBeautifulPairs(nums) {

}`,
    python: `def countBeautifulPairs(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 5, 1, 4]], expected: 5 },
    { args: [[11, 21, 12]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 1 },
    { args: [[2, 4]], expected: 0 },
    { args: [[3, 7, 9]], expected: 2 },
    { args: [[1, 3, 5, 7]], expected: 6 },
  ],
};
