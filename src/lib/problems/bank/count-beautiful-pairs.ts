import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-beautiful-pairs',
  title: 'Count Beautiful Pairs',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** integer array \`nums\`. A pair of indices \`i\`, \`j\` where \`0 <= i < j <= nums.length - 1\` is called **beautiful** if the first digit of \`nums[i]\` and the last digit of \`nums[j]\` are **coprime**.

Return the total number of beautiful pairs in \`nums\`.

Two integers are **coprime** if their greatest common divisor is \`1\`.`,
  constraints: [
    '2 <= nums.length <= 100',
    '1 <= nums[i] <= 9999',
    'nums[i] % 10 != 0',
  ],
  examples: [
    {
      input: 'nums = [2,5,1,4]',
      output: '5',
      explanation: 'Beautiful pairs: (0,1)=gcd(2,5)=1, (0,2)=gcd(2,1)=1, (0,3)=gcd(2,4)=2 no, (1,2)=gcd(5,1)=1, (1,3)=gcd(5,4)=1, (2,3)=gcd(1,4)=1. Count=5.',
    },
    {
      input: 'nums = [11,21,12]',
      output: '2',
      explanation: 'Pairs: (0,1): first(11)=1, last(21)=1, gcd(1,1)=1 ✓. (0,2): first(11)=1, last(12)=2, gcd(1,2)=1 ✓. (1,2): first(21)=2, last(12)=2, gcd(2,2)=2 ✗. Count=2.',
    },
  ],
  hints: [
    'Extract the first digit of nums[i] by converting to string or repeatedly dividing by 10.',
    'Extract the last digit of nums[j] using nums[j] % 10.',
    'Check if their GCD is 1 using the Euclidean algorithm.',
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
    { args: [[1, 2]], expected: 1 },
    { args: [[1, 1, 1]], expected: 3 },
    { args: [[3, 9, 7]], expected: 2 },
  ],
};
